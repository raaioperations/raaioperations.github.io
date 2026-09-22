import os, math, json, random
from pathlib import Path

import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial

OUT=Path(os.environ.get("ASSET_OUT","assets/3d/sunlit-basin/v1")).resolve()
OUT.mkdir(parents=True,exist_ok=True)
random.seed(92026)
np.random.seed(92026)

def mat(name,rgba,rough=.8,metal=0.0):
    return PBRMaterial(name=name,baseColorFactor=list(rgba),roughnessFactor=float(rough),metallicFactor=float(metal))

M={
 "bark_dark":mat("MAT_BARK_DARK",[93,55,36,255],.92),
 "bark_warm":mat("MAT_BARK_WARM",[125,73,44,255],.88),
 "fol_dark":mat("MAT_FOLIAGE_DARK",[48,103,48,255],.84),
 "fol_mid":mat("MAT_FOLIAGE_MID",[75,137,58,255],.82),
 "fol_light":mat("MAT_FOLIAGE_LIGHT",[112,160,72,255],.80),
 "stone_warm":mat("MAT_STONE_WARM",[145,143,130,255],.94),
 "stone_dark":mat("MAT_STONE_DARK",[95,99,94,255],.96),
 "grass":mat("MAT_GRASS_MEADOW",[102,153,69,255],.86),
 "grass_dark":mat("MAT_GRASS_DARK",[68,122,54,255],.88),
 "flower_gold":mat("MAT_FLOWER_GOLD",[232,184,66,255],.68),
 "flower_rose":mat("MAT_FLOWER_ROSE",[214,128,133,255],.68),
 "flower_blue":mat("MAT_FLOWER_BLUE",[126,157,215,255],.68)
}

def setmat(mesh,material):
    mesh.visual=trimesh.visual.texture.TextureVisuals(material=material)
    return mesh

def add(scene,mesh,name):
    scene.add_geometry(mesh,node_name=name,geom_name=name)

def frustum(p0,p1,r0,r1,sections=8,material=None):
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
        faces.extend([[i,j,sections+i],[j,sections+j,sections+i],[c0,j,i],[c1,sections+i,sections+j]])
    mesh=trimesh.Trimesh(vertices=np.array(verts),faces=np.array(faces),process=False)
    if material:setmat(mesh,material)
    return mesh

def blob(center,scale,material,subdiv=1):
    m=trimesh.creation.icosphere(subdivisions=subdiv,radius=1.0)
    m.apply_scale(scale);m.apply_translation(center);setmat(m,material);return m

def rock(scale,seed,material,translation=(0,0,0),points=22):
    rng=np.random.default_rng(seed)
    p=rng.normal(size=(points,3));p/=np.linalg.norm(p,axis=1)[:,None]
    p*=((.65+.45*rng.random(points))[:,None]*np.array(scale)[None,:])
    m=trimesh.Trimesh(vertices=p).convex_hull
    m.apply_translation(translation);setmat(m,material);return m

def tree_a():
    s=trimesh.Scene()
    add(s,frustum((0,0,0),(0,6.4,0),.48,.27,9,M["bark_dark"]),"trunk")
    for i,b in enumerate([
        ((0,4.4,0),(1.45,5.5,.3),.22,.10),
        ((0,4.9,0),(-1.2,5.9,-.55),.18,.08),
        ((0,5.15,0),(.45,6.1,-1.2),.16,.07)
    ]):add(s,frustum(*b,sections=7,material=M["bark_dark"]),f"branch_{i}")
    for i,(c,sc,k) in enumerate([
        ((0,7.2,0),(2.5,1.8,2.15),"fol_mid"),
        ((1.25,6.7,.35),(1.75,1.45,1.65),"fol_light"),
        ((-1.2,6.8,-.5),(1.7,1.35,1.55),"fol_dark"),
        ((.35,7.1,-1.15),(1.45,1.25,1.45),"fol_mid")
    ]):add(s,blob(c,sc,M[k],1),f"canopy_{i}")
    return s

def tree_b():
    s=trimesh.Scene()
    add(s,frustum((0,0,0),(.15,4.5,0),.56,.30,9,M["bark_warm"]),"trunk")
    for i,(c,sc,k) in enumerate([
        ((0,5.4,0),(3.0,1.55,2.65),"fol_light"),
        ((-1.65,5.1,.3),(1.8,1.25,1.65),"fol_mid"),
        ((1.55,5.15,-.25),(1.9,1.28,1.7),"fol_mid"),
        ((.35,5.7,1.4),(1.65,1.05,1.55),"fol_dark")
    ]):add(s,blob(c,sc,M[k],1),f"canopy_{i}")
    return s

def tree_c():
    s=trimesh.Scene()
    p0=(0,0,0);p1=(.25,2.2,0);p2=(.75,4.4,.2);p3=(1.45,6,.4)
    add(s,frustum(p0,p1,.48,.40,8,M["bark_dark"]),"trunk_0")
    add(s,frustum(p1,p2,.40,.30,8,M["bark_dark"]),"trunk_1")
    add(s,frustum(p2,p3,.30,.20,8,M["bark_dark"]),"trunk_2")
    add(s,frustum((.72,4.1,.18),(-.5,5,-.45),.19,.08,7,M["bark_dark"]),"branch_0")
    for i,(c,sc,k) in enumerate([
        ((1.65,6.8,.45),(2.0,1.55,1.65),"fol_dark"),
        ((.45,6.3,-.35),(1.6,1.25,1.5),"fol_mid"),
        ((2.6,6.55,.7),(1.35,1.08,1.3),"fol_light")
    ]):add(s,blob(c,sc,M[k],1),f"canopy_{i}")
    return s

def rock_asset(kind):
    s=trimesh.Scene()
    if kind=="a":add(s,rock((1.45,.85,1.05),101,M["stone_warm"],(0,.65,0),22),"rock")
    elif kind=="b":add(s,rock((1.8,.45,1.25),202,M["stone_dark"],(0,.35,0),24),"rock")
    else:
        add(s,rock((2.25,1.75,1.65),303,M["stone_warm"],(0,1.25,0),30),"boulder")
        add(s,rock((.35,.85,.30),304,M["stone_dark"],(.55,1.35,.95),14),"cleft")
    return s

def shrub_a():
    s=trimesh.Scene()
    for i,(c,sc,k) in enumerate([
        ((0,.65,0),(1.25,.85,1.10),"fol_mid"),
        ((.75,.6,.25),(.9,.7,.8),"fol_light"),
        ((-.7,.55,-.2),(.82,.65,.78),"fol_dark")
    ]):add(s,blob(c,sc,M[k],0),f"leaf_{i}")
    return s

def shrub_b():
    s=trimesh.Scene()
    for i,b in enumerate([
        ((0,0,0),(-.75,.75,0),.08,.035),
        ((0,0,0),(.8,.7,.15),.08,.035),
        ((0,0,0),(.1,.9,-.7),.08,.035)
    ]):add(s,frustum(*b,sections=5,material=M["bark_warm"]),f"stem_{i}")
    for i,(c,sc,k) in enumerate([
        ((-.85,.9,0),(1.0,.6,.8),"fol_dark"),
        ((.9,.85,.2),(1.05,.62,.85),"fol_mid"),
        ((.1,1.05,-.75),(.92,.58,.78),"fol_light")
    ]):add(s,blob(c,sc,M[k],0),f"leaf_{i}")
    return s

def grass():
    s=trimesh.Scene();verts=[];faces=[]
    for i in range(14):
        a=2*math.pi*i/14+(i%3)*.13
        r=.12+.18*((i*7)%11)/10;x,z=math.cos(a)*r,math.sin(a)*r
        h=.55+.65*((i*5)%13)/12;w=.035+.025*((i*3)%7)/6
        tip=np.array([x*1.7,h,z*1.7]);base=np.array([x,0,z]);side=np.array([-math.sin(a)*w,0,math.cos(a)*w])
        q=len(verts);verts.extend([(base-side).tolist(),(base+side).tolist(),(tip-side*.35).tolist(),(tip+side*.35).tolist()])
        faces.extend([[q,q+1,q+2],[q+1,q+3,q+2]])
    m=trimesh.Trimesh(vertices=np.array(verts),faces=np.array(faces),process=False);setmat(m,M["grass"]);add(s,m,"grass");return s

def flowers():
    s=trimesh.Scene()
    positions=[(-.45,0,-.2),(.25,0,.35),(.55,0,-.35),(-.1,0,.55),(0,0,-.55),(-.6,0,.4)]
    colors=["flower_gold","flower_rose","flower_blue"]
    for i,(x,_,z) in enumerate(positions):
        h=.45+.12*(i%3)
        add(s,frustum((x,0,z),(x,h,z),.025,.018,5,M["grass_dark"]),f"stem_{i}")
        b=trimesh.creation.icosphere(subdivisions=0,radius=.11);b.apply_scale([1.25,.55,1.25]);b.apply_translation([x,h+.04,z]);setmat(b,M[colors[i%3]]);add(s,b,f"bloom_{i}")
    return s

def gate():
    s=trimesh.Scene()
    for side in (-1,1):
        x=side*2.35
        add(s,frustum((x,0,0),(x,5.4,0),.78,.58,8,M["stone_warm"]),f"pillar_{side}")
        add(s,rock((.95,.36,.82),410+(1 if side>0 else 0),M["stone_dark"],(x,5.45,0),16),f"cap_{side}")
    inner=2.1;outer=3.15;depth=.78;cy=5.25
    for i in range(7):
        a0=math.pi*i/7;a1=math.pi*(i+1)/7;v=[]
        for z in (-depth/2,depth/2):
            for r in (inner,outer):
                for a in (a0,a1):v.append([r*math.cos(a),cy+r*math.sin(a),z])
        def idx(zz,rr,aa):return zz*4+rr*2+aa
        f=[]
        for rr in (0,1):f += [[idx(0,rr,0),idx(0,rr,1),idx(1,rr,0)],[idx(0,rr,1),idx(1,rr,1),idx(1,rr,0)]]
        for aa in (0,1):f += [[idx(0,0,aa),idx(1,0,aa),idx(0,1,aa)],[idx(0,1,aa),idx(1,0,aa),idx(1,1,aa)]]
        for zz in (0,1):f += [[idx(zz,0,0),idx(zz,1,0),idx(zz,0,1)],[idx(zz,0,1),idx(zz,1,0),idx(zz,1,1)]]
        m=trimesh.Trimesh(vertices=np.array(v),faces=np.array(f),process=False);setmat(m,M["stone_warm" if i%2==0 else "stone_dark"]);m.apply_translation([0,(i%2)*.035,0]);add(s,m,f"arch_{i}")
    return s

def ridge(variant):
    s=trimesh.Scene();n=9 if variant==0 else 11
    xs=np.linspace(-12,12,n)
    h=(2.5+np.array([0,1.2,2.8,5.1,3.8,6.3,4.2,2.3,.7])) if variant==0 else (2+np.array([.5,1.6,3.1,2.3,4.8,6.8,5.5,3.4,4.2,2.1,.7]))
    verts=[]
    for z in (0,2.2):
        for x,y in zip(xs,h):verts.append([x,y,z])
        for x in xs:verts.append([x,0,z])
    faces=[];layer=2*n
    for k in range(2):
        off=k*layer
        for i in range(n-1):
            t0=off+i;t1=off+i+1;b0=off+n+i;b1=off+n+i+1
            faces += ([[b0,t1,t0],[b0,b1,t1]] if k==0 else [[b0,t0,t1],[b0,t1,b1]])
    for i in range(n-1):
        f0=i;f1=i+1;b0=layer+i;b1=layer+i+1;faces += [[f0,f1,b0],[f1,b1,b0]]
        fb0=n+i;fb1=n+i+1;bb0=layer+n+i;bb1=layer+n+i+1;faces += [[fb0,bb0,fb1],[fb1,bb0,bb1]]
    faces += [[0,layer,n],[n,layer,layer+n],[n-1,2*n-1,layer+n-1],[2*n-1,2*layer-1,layer+n-1]]
    m=trimesh.Trimesh(vertices=np.array(verts),faces=np.array(faces),process=False);setmat(m,M["stone_warm" if variant==0 else "stone_dark"]);add(s,m,"ridge");return s

ASSETS={
 "tree_a_tall_broad.glb":tree_a(),
 "tree_b_short_wide.glb":tree_b(),
 "tree_c_leaning_asym.glb":tree_c(),
 "rock_a_medium_angular.glb":rock_asset("a"),
 "rock_b_flat_shore.glb":rock_asset("b"),
 "rock_c_hero_boulder.glb":rock_asset("c"),
 "shrub_a_round.glb":shrub_a(),
 "shrub_b_spreading.glb":shrub_b(),
 "grass_tuft_a.glb":grass(),
 "flower_patch_a.glb":flowers(),
 "gate_sunlit_basin.glb":gate(),
 "ridge_a_layered.glb":ridge(0),
 "ridge_b_spur.glb":ridge(1)
}

def stats(path):
    s=trimesh.load(path,force="scene")
    tri=sum(len(g.faces) for g in s.geometry.values())
    bounds=s.bounds;size=(bounds[1]-bounds[0]).tolist()
    mats=sorted(set(getattr(g.visual.material,"name","") for g in s.geometry.values()))
    return {"triangles":int(tri),"bounds_m":[round(float(x),3) for x in size],"materials":mats,"bytes":path.stat().st_size}

manifest={"version":"1.0.0","milestone":"09C — Sunlit Basin Production Asset Kit","format":"glTF 2.0 binary (.glb)","coordinate_system":"Y-up / meters / ground-contact local origin","assets":{}}
for filename,scene in ASSETS.items():
    path=OUT/filename
    path.write_bytes(scene.export(file_type="glb"))
    manifest["assets"][filename]=stats(path)

(OUT/"asset_manifest.generated.json").write_text(json.dumps(manifest,indent=2)+"\n")
print(json.dumps(manifest,indent=2))
