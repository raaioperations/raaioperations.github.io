import json, math, os
from pathlib import Path

import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial

OUT=Path(os.environ.get("ASSET_OUT","assets/3d/windcut-shelf/v1")).resolve()
OUT.mkdir(parents=True,exist_ok=True)

def mat(name,rgba,rough=.9):
    return PBRMaterial(name=name,baseColorFactor=list(rgba),roughnessFactor=float(rough),metallicFactor=0.0)

M={
    "stone_dark":mat("MAT_STONE_DARK",[88,92,88,255],.98),
    "stone_warm":mat("MAT_STONE_WARM",[132,126,112,255],.97),
    "earth_warm":mat("MAT_EARTH_WARM",[112,96,70,255],.99),
    "earth_damp":mat("MAT_EARTH_DAMP",[79,93,72,255],.99),
    "bark_dark":mat("MAT_BARK_DARK",[71,48,34,255],.97)
}

def setmat(mesh,m):
    mesh.visual=trimesh.visual.texture.TextureVisuals(material=m)
    return mesh

def add(scene,mesh,name):
    scene.add_geometry(mesh,node_name=name,geom_name=name)

def rock(scale,seed,material,translation=(0,0,0),points=26):
    rng=np.random.default_rng(seed)
    p=rng.normal(size=(points,3))
    p/=np.linalg.norm(p,axis=1)[:,None]
    p*=((.64+.44*rng.random(points))[:,None]*np.array(scale)[None,:])
    m=trimesh.Trimesh(vertices=p).convex_hull
    m.apply_translation(translation)
    setmat(m,material)
    return m

def frustum(p0,p1,r0,r1,sections=7,material=None):
    p0=np.asarray(p0,float);p1=np.asarray(p1,float)
    axis=p1-p0;L=np.linalg.norm(axis)
    if L<=1e-8: raise ValueError("zero-length frustum")
    w=axis/L
    a=np.array([0.,1.,0.])
    if abs(np.dot(a,w))>.92:a=np.array([1.,0.,0.])
    u=np.cross(w,a);u/=np.linalg.norm(u)
    v=np.cross(w,u);v/=np.linalg.norm(v)
    verts=[]
    for center,r in ((p0,r0),(p1,r1)):
        for i in range(sections):
            th=2*math.pi*i/sections
            verts.append(center+r*(math.cos(th)*u+math.sin(th)*v))
    verts.extend([p0,p1]);c0=2*sections;c1=c0+1
    faces=[]
    for i in range(sections):
        j=(i+1)%sections
        faces += [[i,j,sections+i],[j,sections+j,sections+i],[c0,j,i],[c1,sections+i,sections+j]]
    mesh=trimesh.Trimesh(vertices=np.asarray(verts),faces=np.asarray(faces),process=False)
    if material:setmat(mesh,material)
    return mesh

def escarpment():
    s=trimesh.Scene()
    # Long stepped shelf edge. Earth cap sits over darker exposed stone.
    xs=np.linspace(-9.0,9.0,11)
    z_front=np.array([0.2,-.2,.1,-.35,.15,-.18,.28,-.08,.22,-.25,.05])
    top=np.array([2.4,2.8,3.2,3.0,3.7,3.4,4.0,3.6,3.1,2.7,2.5])
    verts=[]
    for x,z,y in zip(xs,z_front,top):
        verts += [[x,-.45,z-1.5],[x,y,z],[x,y,z+2.7],[x,-.32,z+3.15]]
    faces=[]
    for i in range(len(xs)-1):
        q=i*4;n=(i+1)*4
        # exposed front face
        faces += [[q,n,n+1],[q,n+1,q+1]]
        # cap
        faces += [[q+1,n+1,n+2],[q+1,n+2,q+2]]
        # buried back transition
        faces += [[q+2,n+2,n+3],[q+2,n+3,q+3]]
    f_front=[];f_cap=[];f_back=[]
    for k in range(0,len(faces),6):
        f_front += faces[k:k+2]
        f_cap += faces[k+2:k+4]
        f_back += faces[k+4:k+6]
    arr=np.asarray(verts,float)
    for name,ff,material in [
        ("stone_face",f_front,M["stone_dark"]),
        ("earth_cap",f_cap,M["earth_damp"]),
        ("rear_transition",f_back,M["earth_warm"])
    ]:
        m=trimesh.Trimesh(vertices=arr.copy(),faces=np.asarray(ff,int),process=False)
        setmat(m,material);add(s,m,name)
    return s

def rock_spine():
    s=trimesh.Scene()
    pieces=[
        ((2.4,4.5,2.0),701,(-3.8,3.0,.2),M["stone_dark"]),
        ((2.0,6.2,1.8),702,(-.6,4.2,-.15),M["stone_warm"]),
        ((1.8,5.1,1.7),703,(2.1,3.5,.45),M["stone_dark"]),
        ((1.4,3.8,1.5),704,(4.2,2.6,-.1),M["stone_warm"])
    ]
    for i,(scale,seed,tr,matl) in enumerate(pieces):
        add(s,rock(scale,seed,matl,tr,28),f"spine_{i}")
    return s

def ruin_fragment():
    s=trimesh.Scene()
    # Broken, wind-exposed vertical fragment; intentionally not another gate.
    add(s,frustum((-1.6,0,0),(-1.45,7.6,.15),.72,.46,8,M["stone_warm"]),"pier_main")
    add(s,frustum((1.3,0,.2),(1.0,4.4,.0),.66,.42,8,M["stone_dark"]),"pier_broken")
    add(s,frustum((-1.3,6.5,.1),(.3,7.5,.05),.40,.24,7,M["stone_warm"]),"beam_upper")
    slab=trimesh.creation.box(extents=[2.6,.46,.82])
    slab.apply_transform(trimesh.transformations.rotation_matrix(-.22,[0,0,1]))
    slab.apply_translation([2.3,.55,1.0]);setmat(slab,M["stone_dark"]);add(s,slab,"fallen_slab")
    for i,(tr,sc) in enumerate([
        ((-2.1,.35,.8),(.9,.45,.7)),
        ((1.8,.28,-.7),(.7,.35,.6)),
        ((2.8,.24,.2),(.65,.30,.55))
    ]):
        add(s,rock(sc,720+i,M["stone_warm"],tr,18),f"rubble_{i}")
    return s

def deadwood():
    s=trimesh.Scene()
    add(s,frustum((0,0,0),(.45,3.0,.0),.44,.30,8,M["bark_dark"]),"trunk_0")
    add(s,frustum((.45,3.0,0),(1.35,6.4,-.15),.30,.16,7,M["bark_dark"]),"trunk_1")
    branches=[
        ((.9,4.5,-.1),(3.7,5.4,-.9),.16,.055),
        ((1.0,5.2,-.1),(-1.1,6.2,.45),.14,.05),
        ((1.25,5.8,-.1),(3.0,7.2,.35),.12,.045),
        ((.55,3.7,0),(-1.4,4.7,-.35),.13,.045)
    ]
    for i,b in enumerate(branches):
        add(s,frustum(*b,sections=6,material=M["bark_dark"]),f"branch_{i}")
    return s

ASSETS={
    "shelf_escarpment_a.glb":escarpment(),
    "windcut_rock_spine_a.glb":rock_spine(),
    "ruin_windcut_fragment_a.glb":ruin_fragment(),
    "deadwood_windswept_a.glb":deadwood()
}
BUDGETS={
    "shelf_escarpment_a.glb":180,
    "windcut_rock_spine_a.glb":220,
    "ruin_windcut_fragment_a.glb":260,
    "deadwood_windswept_a.glb":220
}

manifest={
    "version":"1.0.0",
    "milestone":"10A — Windcut Shelf Identity Kit",
    "format":"glTF 2.0 binary (.glb)",
    "coordinate_system":"Y-up / meters / ground-contact local origin",
    "assets":{}
}

for name,scene in ASSETS.items():
    path=OUT/name
    path.write_bytes(scene.export(file_type="glb"))
    loaded=trimesh.load(path,force="scene")
    tri=sum(len(g.faces) for g in loaded.geometry.values())
    dims=(loaded.bounds[1]-loaded.bounds[0]).tolist()
    mats=sorted(set(getattr(g.visual.material,"name","") for g in loaded.geometry.values()))
    assert 0 < tri <= BUDGETS[name], (name,tri,BUDGETS[name])
    manifest["assets"][name]={
        "triangles":int(tri),
        "budget":BUDGETS[name],
        "bounds_m":[round(float(x),3) for x in dims],
        "materials":mats,
        "bytes":path.stat().st_size
    }

(OUT/"asset_manifest.generated.json").write_text(json.dumps(manifest,indent=2)+"\n")
print(json.dumps(manifest,indent=2))
