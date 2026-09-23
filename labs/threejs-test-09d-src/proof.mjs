import {ASSET_FILES_09D,APPROVED_MATERIALS_09D,PROTOTYPE_NAMES_09D,PLACEMENTS_09D,INTEGRATION_BUDGET_09D} from './asset-integration-spec.js';

const assert=(c,m)=>{if(!c)throw new Error('09D proof failed: '+m);};

export function runAssetIntegrationProof(manifest,verification){
  assert(verification?.status==='PASS','09C verification must pass');
  assert(verification?.asset_count_passed===13,'all 13 09C assets must pass');
  assert(ASSET_FILES_09D.length===13,'integration must reference all 13 GLBs');
  assert(new Set(ASSET_FILES_09D).size===13,'asset filenames unique');
  assert(PROTOTYPE_NAMES_09D.length===8,'eight prototype drawable families replaced');

  const manifestNames=Object.keys(manifest.assets||{});
  for(const name of ASSET_FILES_09D){
    assert(manifestNames.includes(name),'manifest missing '+name);
    assert(verification.assets?.[name]?.status==='PASS','verification missing/pass failure '+name);
  }

  const usedAssets=new Set(PLACEMENTS_09D.map(p=>p.asset));
  for(const name of ASSET_FILES_09D)assert(usedAssets.has(name),'asset not integrated: '+name);

  assert(PLACEMENTS_09D.length<=INTEGRATION_BUDGET_09D.maxPlacementCount,'placement count budget');

  let triangles=0;
  const materials=new Set();
  for(const p of PLACEMENTS_09D){
    const meta=manifest.assets[p.asset];
    assert(meta,'placement asset missing manifest: '+p.asset);
    triangles+=meta.triangles;
    for(const m of meta.materials){
      assert(APPROVED_MATERIALS_09D.includes(m),'unapproved material '+m);
      materials.add(m);
    }
    assert(Number.isFinite(p.x)&&Number.isFinite(p.z)&&Number.isFinite(p.scale)&&Number.isFinite(p.yaw),'finite placement transform');
    assert(p.scale>0,'positive placement scale');
  }

  assert(triangles<=INTEGRATION_BUDGET_09D.maxAddedTriangles,'integrated triangle budget');
  assert(INTEGRATION_BUDGET_09D.maxMaterialBatches===8,'09D optimized runtime batch ceiling');
  assert(materials.size<=12,'source material families remain within approved source family count');

  return {
    assets_required:ASSET_FILES_09D.length,
    assets_integrated:usedAssets.size,
    prototype_families_replaced:PROTOTYPE_NAMES_09D.length,
    placements:PLACEMENTS_09D.length,
    source_material_families:materials.size,
    runtime_material_batch_ceiling:INTEGRATION_BUDGET_09D.maxMaterialBatches,
    integrated_asset_triangles:triangles,
    max_integrated_asset_triangles:INTEGRATION_BUDGET_09D.maxAddedTriangles,
    absolute_draw_call_ceiling:INTEGRATION_BUDGET_09D.absoluteDrawCallsMax,
    absolute_triangle_ceiling:INTEGRATION_BUDGET_09D.absoluteTrianglesMax,
    broad_content_expansion:false,
    presentation_acceptance:false,
    human_runtime_review_required:true
  };
}
