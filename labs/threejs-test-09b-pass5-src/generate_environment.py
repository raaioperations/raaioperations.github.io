import json, math, os
from pathlib import Path

import numpy as np
import trimesh
from trimesh.visual.material import PBRMaterial

OUT=Path(os.environ.get("ASSET_OUT","assets/3d/sunlit-basin/v3")).resolve()
OUT.mkdir(parents=True,exist_ok=True)

def mat(name,rgba,rough=.9):
    return PBRMaterial(name=name,baseColorFactor=list(rgba),roughnessFactor=float(rough),metallicFactor=0.0)

M={
    "earth_warm":mat("MAT_EARTH_WARM",[118,104,75,255],.99),
    "earth_damp":mat("MAT_EARTH_DAMP",[84,92,73,255],.99),
    "ruin":mat("MAT_RUIN_STONE",[116,118,108,255],.99),
    "bark":mat("MAT_BARK_DARK",[82,51,34,255],.95),
    "foliage":mat("MAT_FOLIAGE_MID",[62,114,59,255],.90),
    "wetland":mat("MAT_WETLAND_REED",[106,137,73,255],.93)
}

def setmat(mesh,m):
    mesh.visual=trimesh.visual.texture.TextureVisuals(material=m)
    return mesh

def add(scene,mesh,name):
    scene.add_geometry(mesh,node_name=name,geom_name=name)

def frustum(p0,p1,r0,r1,sections=8,material=None):
    p0=np.asarray(p0,float);p1=np.asarray(p1,float)
    axis=p1-p0;L=np.linalg.norm(axis)
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

def blob(center,scale,material,subdiv=1):
    m=trimesh.creation.icosphere(subdivisions=subdiv,radius=1.0)
    m.apply_scale(scale);m.apply_translation(center);setmat(m,material);return m

def irregular_strip(length,width,height,seed,side_material,top_material,segments=12,side_bias=0.0):
    rng=np.random.default_rng(seed)
    xs=np.linspace(-length/2,length/2,segments+1)
    verts=[]
    rown=segments+1

    # Refined erosion profile:
    # - narrow / lower ends dissolve into terrain instead of terminating as walls;
    # - centerline and shoulder widths wander subtly;
    # - buried skirts remain safely below the systemic ground;
    # - crown stays positively separated for terrain-conformance QA.
    skirt_y=-.38
    for row in range(4):
        for i,x in enumerate(xs):
            t=i/segments
            arch=max(0.0,math.sin(math.pi*t))
            taper=.18+.82*(arch**.72)
            center=.10*math.sin(t*math.pi*2.0+seed*.013)+(rng.random()-.5)*.08
            half=(width*.5)*(.36+.64*taper)
            shoulder=half*(.40+.07*math.sin(t*math.pi*3.0+row*.55))
            jitter=(rng.random()-.5)*.10
            crown=height*(.50+.50*taper)*(.90+.10*math.sin(t*math.pi*2.6+seed*.021))

            if row==0:
                z=center-half-.16+jitter*.35; y=skirt_y
            elif row==1:
                z=center-shoulder+jitter
                y=crown*(.92+.05*math.sin(t*math.pi*2.1))
            elif row==2:
                z=center+shoulder+jitter
                y=crown*(.82+.06*math.cos(t*math.pi*2.4))
            else:
                z=center+half+.16+jitter*.35; y=skirt_y

            if row in (1,2):
                y += side_bias*(z/max(width,.001))
                y=max(.14,y)
            verts.append([x,y,z])

    verts_np=np.asarray(verts,float)
    assert float(verts_np[:rown,1].max()) <= -.34
    assert float(verts_np[3*rown:4*rown,1].max()) <= -.34
    assert float(verts_np[rown:3*rown,1].min()) >= .11

    band_faces=[[],[],[]]
    for row in range(3):
        for i in range(segments):
            a=row*rown+i;b=a+1;c=(row+1)*rown+i;d=c+1
            band_faces[row] += [[a,c,b],[b,c,d]]

    parts=[]
    for band,faces in enumerate(band_faces):
        mesh=trimesh.Trimesh(
            vertices=verts_np.copy(),
            faces=np.asarray(faces,int),
            process=False
        )
        up=mesh.face_normals[:,1]
        assert float(up.min()) > .45, ("strip winding",band,float(up.min()))
        material=top_material if band==1 else side_material
        setmat(mesh,material)
        parts.append((("crown" if band==1 else f"cut_{band}"),mesh))
    return parts

def add_strip_parts(scene,parts,prefix,translation=None):
    for name,mesh in parts:
        if translation is not None:
            mesh.apply_translation(translation)
        add(scene,mesh,f"{prefix}_{name}")

def bank_a():
    s=trimesh.Scene()
    add_strip_parts(
        s,
        irregular_strip(10.5,4.4,.72,510,M["earth_warm"],M["earth_damp"],14,.05),
        "bank"
    )
    return s

def bank_b():
    s=trimesh.Scene()
    add_strip_parts(
        s,
        irregular_strip(9.0,3.8,.56,511,M["earth_warm"],M["earth_damp"],12,-.035),
        "bank"
    )
    return s

def path_cut():
    s=trimesh.Scene()
    # Paired low, broad berms read as eroded shoulders rather than retaining walls.
    left=irregular_strip(7.6,1.55,.26,520,M["earth_warm"],M["earth_damp"],12,.012)
    right=irregular_strip(7.6,1.50,.23,521,M["earth_warm"],M["earth_damp"],12,-.008)
    add_strip_parts(s,left,"left_berm",[0,0,-2.05])
    add_strip_parts(s,right,"right_berm",[0,0,2.05])
    return s

def shoreline_shelf():
    s=trimesh.Scene()
    # Three radial rows: buried wet edge -> raised authored shelf -> buried
    # terrain-side skirt. This keeps the visible shelf physically separated
    # from the systemic ground while both transitions disappear into it.
    seg=24
    r_water=6.2
    r_crown=7.45
    r_land=8.7
    # Half-ring asset: two placements at yaw 0 / PI cover the shoreline without overlap.
    seam=.02
    a0=-math.pi/2+seam;a1=math.pi/2-seam
    verts=[]
    rows=((r_water,-.28),(r_crown,.22),(r_land,-.30))
    for row_index,(r,y) in enumerate(rows):
        for i in range(seg+1):
            a=a0+(a1-a0)*(i/seg)
            jitter=.10*math.sin(i*1.71+row_index*.37)
            rr=r+jitter
            crown_detail=.05*math.sin(i*.7) if row_index==1 else 0
            verts.append([math.cos(a)*rr,y+crown_detail,math.sin(a)*rr])
    faces=[]
    row=seg+1
    for band in range(2):
        for i in range(seg):
            a=band*row+i;b=a+1;c=(band+1)*row+i;d=c+1
            faces += [[a,b,c],[b,d,c]]
    mesh=trimesh.Trimesh(vertices=np.asarray(verts,float),faces=np.asarray(faces,int),process=False)
    # Both authored shelf bands must remain upward-facing; neither side may
    # be repaired with DoubleSide or a shader workaround.
    assert float(mesh.face_normals[:,1].min()) > .80, ("shore winding",float(mesh.face_normals[:,1].min()))
    verts_np=np.asarray(mesh.vertices)
    assert float(verts_np[:row,1].max()) <= -.25
    assert float(verts_np[2*row:3*row,1].max()) <= -.25
    setmat(mesh,M["earth_damp"]);add(s,mesh,"shore")
    return s

def ruin_v2():
    s=trimesh.Scene()
    # asymmetrical weathered ruin: two battered piers + partial arch + fallen lintel
    add(s,frustum((-2.3,0,0),(-2.15,4.8,.1),.72,.52,9,M["ruin"]),"pier_l")
    add(s,frustum((2.35,0,.1),(2.15,4.1,0),.78,.55,9,M["ruin"]),"pier_r")
    add(s,frustum((-2.0,3.8,.05),(-.8,5.15,.0),.48,.34,7,M["ruin"]),"arch_l")
    add(s,frustum((2.0,3.55,.02),(.78,4.65,.0),.48,.32,7,M["ruin"]),"arch_r")
    add(s,frustum((-.95,5.0,0),(.15,5.35,0),.34,.26,7,M["ruin"]),"arch_key")
    fallen=trimesh.creation.box(extents=[2.9,.52,.75])
    fallen.apply_transform(trimesh.transformations.rotation_matrix(.18,[0,0,1]))
    fallen.apply_translation([2.9,.33,1.25]);setmat(fallen,M["ruin"]);add(s,fallen,"fallen_lintel")
    # small foot stones
    for i,(x,z,sc) in enumerate([(-3.0,.8,.6),(-2.6,-.9,.48),(2.8,-.7,.55),(3.3,.6,.42)]):
        stone=trimesh.creation.icosphere(subdivisions=0,radius=.7)
        stone.apply_scale([1.2*sc,.65*sc,.95*sc]);stone.apply_translation([x,.32*sc,z]);setmat(stone,M["ruin"])
        add(s,stone,f"rubble_{i}")
    return s

def tree_forked():
    s=trimesh.Scene()
    add(s,frustum((0,0,0),(0,3.3,0),.52,.34,9,M["bark"]),"trunk")
    add(s,frustum((0,3.0,0),(-1.15,6.0,-.25),.30,.15,8,M["bark"]),"fork_l")
    add(s,frustum((0,3.05,0),(1.35,6.3,.35),.30,.14,8,M["bark"]),"fork_r")
    add(s,frustum((-.75,5.0,-.15),(-2.0,6.1,-.65),.14,.07,7,M["bark"]),"branch_l")
    add(s,frustum((.85,5.1,.18),(2.15,5.8,.75),.14,.07,7,M["bark"]),"branch_r")
    for i,(c,sc) in enumerate([
        ((-1.5,6.4,-.45),(1.7,1.25,1.45)),
        ((1.55,6.65,.45),(1.85,1.35,1.55)),
        ((.05,7.05,.0),(1.35,1.05,1.25))
    ]): add(s,blob(c,sc,M["foliage"],1),f"canopy_{i}")
    return s

def tree_windswept():
    s=trimesh.Scene()
    add(s,frustum((0,0,0),(.65,3.4,.0),.48,.33,9,M["bark"]),"trunk_a")
    add(s,frustum((.65,3.4,0),(1.85,5.5,.1),.33,.18,8,M["bark"]),"trunk_b")
    add(s,frustum((1.25,4.5,.05),(3.4,5.45,-.35),.18,.075,7,M["bark"]),"branch_long")
    add(s,frustum((1.45,4.9,.06),(2.7,6.05,.55),.15,.07,7,M["bark"]),"branch_high")
    for i,(c,sc) in enumerate([
        ((2.7,6.0,-.2),(2.1,1.25,1.55)),
        ((4.0,5.7,-.35),(1.55,1.05,1.25)),
        ((2.7,6.55,.65),(1.35,.95,1.15))
    ]): add(s,blob(c,sc,M["foliage"],1),f"canopy_{i}")
    return s

def wetland_cluster():
    s=trimesh.Scene()
    verts=[];faces=[]
    for i in range(18):
        a=i*2.399963229728653
        r=.2+.85*((i*7)%17)/16
        x=math.cos(a)*r;z=math.sin(a)*r
        h=.75+.85*((i*5)%13)/12
        w=.035+.025*((i*3)%7)/6
        bend=.12*math.sin(i*.9)
        q=len(verts)
        verts += [[x-w,0,z],[x+w,0,z],[x-w*.55,h,z+bend],[x+w*.55,h,z+bend]]
        faces += [[q,q+1,q+2],[q+1,q+3,q+2]]
    mesh=trimesh.Trimesh(vertices=np.asarray(verts,float),faces=np.asarray(faces,int),process=False)
    setmat(mesh,M["wetland"]);add(s,mesh,"reeds")
    return s

ASSETS={
    "terrain_bank_a.glb":bank_a(),
    "terrain_bank_b.glb":bank_b(),
    "path_cut_berms.glb":path_cut(),
    "shoreline_shelf.glb":shoreline_shelf(),
    "ruin_sunlit_gate_v2.glb":ruin_v2(),
    "tree_d_forked.glb":tree_forked(),
    "tree_e_windswept.glb":tree_windswept(),
    "wetland_cluster.glb":wetland_cluster()
}

BUDGETS={
    "terrain_bank_a.glb":220,
    "terrain_bank_b.glb":200,
    "path_cut_berms.glb":420,
    "shoreline_shelf.glb":120,
    "ruin_sunlit_gate_v2.glb":650,
    "tree_d_forked.glb":520,
    "tree_e_windswept.glb":520,
    "wetland_cluster.glb":90
}

manifest={
    "version":"3.1.0",
    "milestone":"09B Presentation Pass 5 — Environment Art Production / Geometry Repair",
    "format":"glTF 2.0 binary (.glb)",
    "geometry_qa":{
        "strip_faces_upward":True,
        "strip_outer_skirts_buried":True,
        "shore_faces_upward":True,
        "shore_edges_buried":True,
        "shore_half_arc_nonoverlap":True,
        "strip_tapered_ends":True,
        "strip_irregular_shoulders":True,
        "strip_crown_cut_material_separation":True,
        "no_double_side_geometry_fix":True
    },
    "assets":{}
}

for name,scene in ASSETS.items():
    path=OUT/name
    path.write_bytes(scene.export(file_type="glb"))
    loaded=trimesh.load(path,force="scene")
    tri=sum(len(g.faces) for g in loaded.geometry.values())
    bounds=loaded.bounds
    dims=(bounds[1]-bounds[0]).tolist()
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
