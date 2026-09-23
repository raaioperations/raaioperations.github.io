import json, math, os
from pathlib import Path
import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial

OUT=Path(os.environ.get("ASSET_OUT","assets/3d/sunlit-basin/v2")).resolve()
OUT.mkdir(parents=True,exist_ok=True)

RIDGE_MAT=PBRMaterial(
    name="MAT_RIDGE_SLATE",
    baseColorFactor=[78,88,83,255],
    roughnessFactor=.98,
    metallicFactor=0.0
)

def ridge_mesh(profile, width=30.0, depth=5.5):
    n=len(profile)
    xs=np.linspace(-width/2,width/2,n)
    verts=[]
    # Front top, front base, back top, back base.
    for z in (0.0, depth):
        for x,y in zip(xs,profile):
            verts.append([x,float(y),z])
        for x in xs:
            verts.append([x,0.0,z])
    layer=2*n
    faces=[]
    # Front/back vertical faces.
    for side in (0,1):
        off=side*layer
        reverse=(side==1)
        for i in range(n-1):
            t0=off+i;t1=off+i+1;b0=off+n+i;b1=off+n+i+1
            if not reverse:
                faces.extend([[b0,t1,t0],[b0,b1,t1]])
            else:
                faces.extend([[b0,t0,t1],[b0,t1,b1]])
    # Top shelf between front/back profiles.
    for i in range(n-1):
        f0=i;f1=i+1;r0=layer+i;r1=layer+i+1
        faces.extend([[f0,f1,r0],[f1,r1,r0]])
    # Bottom.
    for i in range(n-1):
        f0=n+i;f1=n+i+1;r0=layer+n+i;r1=layer+n+i+1
        faces.extend([[f0,r0,f1],[f1,r0,r1]])
    # End caps.
    faces.extend([[0,layer,n],[n,layer,layer+n]])
    faces.extend([[n-1,2*n-1,layer+n-1],[2*n-1,2*layer-1,layer+n-1]])

    mesh=trimesh.Trimesh(vertices=np.asarray(verts,float),faces=np.asarray(faces,int),process=False)
    mesh.visual=trimesh.visual.texture.TextureVisuals(material=RIDGE_MAT)
    return mesh

profiles={
    "ridge_erosion_a.glb":[
        2.1,2.4,3.0,3.8,4.9,5.7,6.3,5.8,5.1,5.5,6.6,7.4,7.0,6.1,5.4,4.7,4.3,3.6,3.3,2.8,2.5,2.3,2.1,1.9,1.8
    ],
    "ridge_erosion_b.glb":[
        1.8,2.0,2.5,3.2,3.9,4.1,4.8,5.7,6.1,5.6,5.0,4.6,5.2,6.0,6.8,6.4,5.9,5.1,4.4,4.0,3.5,3.0,2.6,2.1,1.9
    ]
}

manifest={
    "version":"2.0.0",
    "milestone":"09B Presentation Pass 4 — Horizon Assetization",
    "format":"glTF 2.0 binary (.glb)",
    "material":"MAT_RIDGE_SLATE",
    "assets":{}
}

for name,profile in profiles.items():
    scene=trimesh.Scene()
    scene.add_geometry(ridge_mesh(profile),node_name=name.replace(".glb",""),geom_name="ridge")
    path=OUT/name
    path.write_bytes(scene.export(file_type="glb"))
    loaded=trimesh.load(path,force="scene")
    tri=sum(len(g.faces) for g in loaded.geometry.values())
    bounds=loaded.bounds
    dims=(bounds[1]-bounds[0]).tolist()
    mats=sorted(set(getattr(g.visual.material,"name","") for g in loaded.geometry.values()))
    assert 0 < tri <= 220, (name,tri)
    assert mats==["MAT_RIDGE_SLATE"], (name,mats)
    manifest["assets"][name]={
        "triangles":int(tri),
        "bounds_m":[round(float(x),3) for x in dims],
        "materials":mats,
        "bytes":path.stat().st_size
    }

(OUT/"asset_manifest.generated.json").write_text(json.dumps(manifest,indent=2)+"\n")
print(json.dumps(manifest,indent=2))
