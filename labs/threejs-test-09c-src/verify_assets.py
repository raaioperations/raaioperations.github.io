import argparse, hashlib, json, struct
from pathlib import Path
import trimesh

parser=argparse.ArgumentParser()
parser.add_argument("--assets",default="assets/3d/sunlit-basin/v1")
parser.add_argument("--report",default="labs/threejs-test-09c/verification-report.json")
args=parser.parse_args()

root=Path(args.assets)
manifest_path=root/"asset_manifest.generated.json"
manifest=json.loads(manifest_path.read_text())

EXPECTED={
 "tree_a_tall_broad.glb":600,
 "tree_b_short_wide.glb":600,
 "tree_c_leaning_asym.glb":600,
 "rock_a_medium_angular.glb":100,
 "rock_b_flat_shore.glb":100,
 "rock_c_hero_boulder.glb":100,
 "shrub_a_round.glb":180,
 "shrub_b_spreading.glb":180,
 "grass_tuft_a.glb":64,
 "flower_patch_a.glb":320,
 "gate_sunlit_basin.glb":320,
 "ridge_a_layered.glb":140,
 "ridge_b_spur.glb":140
}
APPROVED={
 "MAT_BARK_DARK","MAT_BARK_WARM",
 "MAT_FOLIAGE_DARK","MAT_FOLIAGE_MID","MAT_FOLIAGE_LIGHT",
 "MAT_STONE_WARM","MAT_STONE_DARK",
 "MAT_GRASS_MEADOW","MAT_GRASS_DARK",
 "MAT_FLOWER_GOLD","MAT_FLOWER_ROSE","MAT_FLOWER_BLUE"
}

def glb_json(path):
    data=path.read_bytes()
    if len(data)<20: raise AssertionError(f"{path.name}: GLB too small")
    magic,version,total=struct.unpack_from("<III",data,0)
    assert magic==0x46546C67,f"{path.name}: invalid GLB magic"
    assert version==2,f"{path.name}: glTF version {version}, expected 2"
    assert total==len(data),f"{path.name}: header length mismatch"
    chunk_len,chunk_type=struct.unpack_from("<II",data,12)
    assert chunk_type==0x4E4F534A,f"{path.name}: first chunk not JSON"
    return json.loads(data[20:20+chunk_len].decode("utf-8").rstrip(" \t\r\n\x00"))

report_assets={}
failures=[]
for filename,budget in EXPECTED.items():
    path=root/filename
    try:
        assert path.exists(),f"{filename}: missing"
        doc=glb_json(path)
        for item in doc.get("buffers",[]):
            assert not item.get("uri"),f"{filename}: external buffer URI"
        for item in doc.get("images",[]):
            assert not item.get("uri"),f"{filename}: external image URI"

        scene=trimesh.load(path,force="scene")
        triangles=sum(len(g.faces) for g in scene.geometry.values())
        assert triangles>0,f"{filename}: zero triangles"
        assert triangles<=budget,f"{filename}: {triangles} triangles > {budget}"

        bounds=scene.bounds
        dims=(bounds[1]-bounds[0])
        assert all(float(v)>0 for v in dims),f"{filename}: invalid bounds"

        materials=sorted(set(getattr(g.visual.material,"name","") for g in scene.geometry.values()))
        unknown=[m for m in materials if m not in APPROVED]
        assert not unknown,f"{filename}: unapproved materials {unknown}"

        m=manifest["assets"].get(filename)
        assert m,f"{filename}: missing manifest entry"
        assert int(m["triangles"])==triangles,f"{filename}: manifest triangle mismatch"

        report_assets[filename]={
          "status":"PASS",
          "triangles":triangles,
          "budget":budget,
          "bytes":path.stat().st_size,
          "sha256":hashlib.sha256(path.read_bytes()).hexdigest(),
          "bounds_m":[round(float(v),3) for v in dims],
          "materials":materials,
          "external_dependencies":0
        }
    except Exception as exc:
        failures.append(str(exc))
        report_assets[filename]={"status":"FAIL","error":str(exc)}

report={
 "test":"09C",
 "milestone":"Sunlit Basin Production Asset Kit",
 "status":"PASS" if not failures else "FAIL",
 "asset_count":len(EXPECTED),
 "asset_count_passed":sum(1 for x in report_assets.values() if x["status"]=="PASS"),
 "format":"GLB / glTF 2.0",
 "original_asset_source":"deterministic in-repository geometry generation",
 "external_runtime_dependencies":0,
 "approved_material_families":sorted(APPROVED),
 "assets":report_assets,
 "failures":failures,
 "human_asset_review":"REQUIRED",
 "integration_back_into_09b":"REQUIRED",
 "frozen":False
}
out=Path(args.report)
out.parent.mkdir(parents=True,exist_ok=True)
out.write_text(json.dumps(report,indent=2)+"\n")
print(json.dumps(report,indent=2))
if failures: raise SystemExit(1)
