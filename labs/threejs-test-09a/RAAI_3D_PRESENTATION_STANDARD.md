# RAAI 3D Presentation Standard — Stylized Physical Realism v1.0

**Roadmap:** Test09 — Presentation Foundation  
**Milestone:** 09A — RAAI 3D Presentation Standard / Art Direction Contract  
**Status:** ACCEPTANCE CANDIDATE  
**Runtime target:** Engine-portable; current implementation target is Three.js/browser  
**Reference intent:** Formalize the visual, motion, camera, material, atmosphere, interaction, and presentation principles previously extracted from the standing 3D benchmark.

---

## 1. Purpose

The Runtime Proof Standard answers:

> Does the system actually work?

The RAAI 3D Presentation Standard answers:

> Does the working system look and feel like a finished game?

These are separate gates.

A technically correct system is not presentation-complete merely because it renders, streams, animates, or responds to input.

The production sequence is:

```text
Structural Proof
→ Runtime Proof
→ Interaction Proof
→ Presentation Proof
→ Human Acceptance
```

No presentation milestone may silently weaken an already-frozen runtime, interaction, readability, or performance contract.

---

## 2. Core Visual Philosophy

### Stylized Physical Realism

The target is not photorealism.

The target is a stylized world whose:

- materials;
- light;
- atmosphere;
- scale;
- motion;
- physical response;
- camera;
- animation;
- environmental composition

behave coherently enough to feel physically substantial.

Characters, silhouettes, proportions, color design, effects, architecture, and environmental forms may remain intentionally stylized.

The guiding production equation is:

```text
Art direction
+ materials
+ lighting
+ animation
+ environmental composition
+ camera
+ motion
+ interaction quality
= perceived finished-game quality
```

The renderer or engine is an implementation constraint, not the doctrine.

---

## 3. Two Mandatory Communication Rules

### Frame rule

Every important frame should communicate, simultaneously where appropriate:

```text
place
+ physical substance
+ atmosphere
+ scale
+ motion
+ character
+ gameplay purpose
```

### Action rule

Every important gameplay action should communicate:

```text
intent
→ motion
→ contact
→ consequence
```

A collision or state change without readable intent, motion, contact feedback, and consequence is mechanically functional but presentation-incomplete.

---

## 4. Character Standard

Characters should prioritize:

- unmistakable silhouettes;
- readable proportions;
- clear pose language;
- stylized facial and body design;
- physically coherent surface response;
- animation quality over unnecessary polygon escalation.

Do not pursue photoreal character fidelity as the default target.

Once models are adequate, production effort should favor:

- animation transitions;
- locomotion;
- secondary motion;
- procedural IK;
- reaction animation;
- equipment motion;
- combat posing;
- anticipation and follow-through.

Geometry becomes convincing through motion.

---

## 5. Material Standard

Major material families must not share one generic visual response.

The reusable material library should cover, as relevant:

- rock;
- soil;
- grass;
- wood;
- masonry;
- cloth;
- metal;
- skin;
- foliage;
- water;
- glass.

Each important material family should establish its own combination of:

- base-color variation;
- roughness behavior;
- normal/surface structure;
- scale-appropriate detail;
- environmental response;
- wetness response where applicable.

The visual objective is not merely texture variety.

The objective is that:

- fabric reads as woven;
- rock reads as mineral;
- foliage reads as organic;
- wood reads as porous;
- metal behaves like metal;
- water behaves like a physical medium.

---

## 6. Lighting and Atmosphere Standard

Lighting is a shared environmental system, not a collection of independent scene tricks.

Canonical relationship:

```text
time
→ sun position
→ intensity
→ color temperature
→ atmosphere
→ shadows
→ reflections
→ exposure
→ world response
```

For example, sunset should not be produced by independently making the sky orange.

The environmental state should produce sunset.

Atmospheric perspective must reinforce scale through progressive distance separation, including appropriate loss of:

- contrast;
- saturation/color intensity;
- fine detail.

Lighting must remain designed for gameplay readability.

---

## 7. World Construction Standard

World construction proceeds in three layers.

### MACRO

Establish first:

- terrain silhouette;
- skyline;
- horizon;
- major elevation;
- mountains/cliffs;
- large water forms;
- major landmarks;
- primary architecture masses.

### MESO

Then establish:

- roads and paths;
- building groups;
- vegetation zones;
- gameplay spaces;
- rock formations;
- water edges;
- settlement structure;
- traversal composition.

### MICRO

Only after macro and meso read correctly:

- stones;
- flowers;
- debris;
- wear;
- ground cover;
- cracks;
- small props;
- surface breakup;
- particles.

Microdetail may not substitute for weak large-scale composition.

---

## 8. Depth and Scale Standard

Important vistas should contain multiple depth layers where appropriate:

```text
foreground
→ gameplay plane
→ midground
→ distant landscape
→ horizon/sky
```

Scale should emerge from agreement between:

- characters;
- trees;
- structures;
- cliffs;
- terrain silhouettes;
- haze;
- landmarks;
- water;
- sky.

Large worlds are not defined only by playable square kilometers.

Properly designed horizons, negative space, landmark placement, and atmospheric depth can make a smaller playable area feel substantially larger.

Do not fill every open space.

Negative space is an intentional scale and composition tool.

---

## 9. Vegetation Standard

A convincing vegetated biome is not:

```text
trees + ground + character
```

It is an interacting system of:

```text
terrain
+ canopy
+ understory
+ ground cover
+ landmarks
+ habitation where appropriate
+ atmospheric volume
+ wind
+ particles
+ selective light
+ sound
+ color palette
+ traversal composition
+ environmental storytelling
```

Vegetation should vary by:

- height;
- density;
- species/form;
- spatial grouping;
- motion.

Random scattering alone does not constitute environmental design.

---

## 10. Settlement and Procedural Construction Standard

Repetition should occur in the **construction grammar**, not in visibly repeated finished results.

A procedural settlement should operate through coherent families such as:

```text
foundation
→ structural frame
→ wall material
→ roof family
→ façade variation
→ occupancy props
→ vegetation
→ wear
→ signs of use
```

NPC placement and environmental activity should cluster around meaningful spaces rather than appear uniformly random.

Settlement density must retain navigational structure.

---

## 11. Water and Surface Interaction Standard

Water must communicate physical substance through the relevant combination of:

- reflection;
- motion;
- edge behavior;
- depth/color response;
- disturbance;
- interaction with characters or objects.

Where gameplay supports it, surfaces should respond to traversal through effects such as:

- footsteps;
- dust;
- grass displacement;
- shallow-water disturbance;
- splash/ripples;
- wetness;
- foliage contact;
- material-specific response.

The world should not behave like nonreactive scenery.

---

## 12. Environmental Motion Standard

A finished scene should not appear frozen when the player stands still.

Presentation quality includes **ambient simulation density**: multiple independently evolving systems contributing motion without requiring direct player input.

Relevant systems may include:

- grass;
- branches;
- leaves;
- water;
- particles;
- fog/cloud motion;
- insects/fauna;
- NPC idles;
- secondary character motion;
- clothing/equipment motion;
- weather.

A still image may look good. The moving scene should look materially better.

---

## 13. Camera Standard

Camera quality is an independent acceptance gate.

Evaluate:

- character screen occupancy;
- camera height;
- field of view;
- environmental visibility;
- grounded versus detached feeling;
- acceleration;
- damping;
- anticipation;
- follow behavior;
- camera collision;
- terrain response;
- vista framing;
- future combat/lock-on behavior.

The player must remain readable while the environment retains enough of the frame to communicate adventure, place, and scale.

The camera should not feel like a mechanically attached transform.

---

## 14. Locomotion and Animation Standard

Movement must communicate weight while preserving responsive controls.

Evaluate:

- starts;
- stops;
- turns;
- acceleration;
- deceleration;
- stride;
- body lean;
- slope response;
- head/shoulder movement;
- limb amplitude;
- equipment motion;
- secondary motion;
- idle transitions;
- IK/contact;
- reaction animation.

Different parts of the body should not move as one rigid unit.

Animation should make geometry feel alive.

---

## 15. Combat Presentation Standard

Combat readability takes priority over decorative effects.

Enemy state should be readable primarily through:

- posture;
- stance;
- silhouette;
- anticipation;
- attack commitment;
- recovery.

Target communication should avoid oversized interface elements where world-space communication is sufficient.

A strong hit response should combine, as appropriate:

```text
anticipation
→ attack motion
→ collision
→ hitstop
→ contact VFX
→ sound transient
→ target reaction
→ attacker follow-through
→ camera response
→ recovery
```

The exact channel count may vary, but contact must feel like an event rather than only a numerical state change.

---

## 16. Color and Biome Identity

Every major biome or region should have a recognizable color language before detailed content production.

The color script should govern, as appropriate:

- dominant hue families;
- accent colors;
- saturation;
- contrast;
- atmospheric tint;
- vegetation palette;
- terrain/material balance;
- time-of-day interaction.

Color identity should support navigation and region recognition, not merely decoration.

---

## 17. Audio Presentation Principle

Soundscape carries the same production importance as visual presentation.

Environmental audio, movement, material response, interaction transients, and music should support the same sense of:

- place;
- physical substance;
- scale;
- motion;
- consequence.

Audio implementation is not required for every visual proof, but presentation-complete gameplay cannot treat audio as an afterthought.

---

## 18. Modernization Principle

When evolving an existing mechanic:

> Preserve the reason the mechanic existed, not necessarily its old implementation.

If a mechanic exists to make:

- navigation understandable;
- combat strategic;
- exploration rewarding;
- state readable;

that purpose should survive even if input, camera, movement, timing, interface, or implementation changes.

---

## 19. Presentation Development Process

Every 3D project should follow this sequence before broad content production.

### 1. Art-direction target

Define:

- reference imagery;
- material rules;
- environmental density rules;
- character proportions;
- color language;
- lighting philosophy.

### 2. Vertical Beauty Slice

Create one small environment at near-final presentation quality early.

This becomes the production reference for later content.

### 3. Macro / meso / micro construction

Do not jump directly to prop scatter and microdetail.

### 4. Environmental motion budget

Finished areas should contain independently moving systems appropriate to the scene.

### 5. Reusable material library

Do not repeatedly solve rock, soil, wood, cloth, metal, foliage, water, and related materials asset-by-asset.

### 6. Lighting as simulation

Drive sun, weather, atmosphere, exposure, reflection, and shadow state from shared environmental variables.

### 7. Animation milestone

Locomotion, transitions, idles, reactions, secondary motion, IK, and combat posing require their own acceptance.

### 8. Camera-quality gate

Camera composition and behavior require explicit approval.

### 9. Readability preservation

VFX, materials, atmosphere, and particles may not destroy:

- enemy readability;
- navigation;
- player visibility;
- control clarity.

---

## 20. Engine Portability

This doctrine is engine-independent.

### Godot

The philosophy may use:

- PBR materials;
- volumetric fog;
- procedural shaders;
- GPU particles;
- skeletal animation;
- IK;
- dynamic lighting;
- post-processing;
- terrain systems;
- LOD;
- custom simulation.

### Three.js / browser

Use the same visual doctrine while respecting browser constraints through:

- controlled asset density;
- bounded shader cost;
- bounded environmental simulation;
- streaming;
- LOD/culling;
- measured mobile performance.

The browser envelope may reduce quantity.

It should not reduce coherence.

---

## 21. Originality Boundary

Do not copy:

- copyrighted characters;
- distinctive environments;
- UI;
- enemies;
- story;
- assets;
- distinctive trade dress.

Reference material is used to extract production reasoning and design principles.

The objective is original work with stronger:

- physical interaction;
- destructibility;
- systemic environments;
- world-state causality;
- simulation density;
- procedural generation;
- power/world-response systems.

---

## 22. Presentation Proof Gate

A feature or scene does not pass Presentation Proof merely because it is visually attractive.

It must preserve the already-frozen runtime and interaction behavior while demonstrating the relevant combination of:

### Place
The player can understand where they are.

### Physical substance
Materials and surfaces behave coherently.

### Atmosphere
Lighting, haze, weather, and exposure agree.

### Scale
Depth layers, landmarks, silhouettes, and spacing support believable size.

### Motion
The scene remains alive without player input.

### Character readability
The player, NPCs, enemies, and poses remain visually legible.

### Gameplay purpose
Composition and effects support navigation, interaction, or combat.

### Performance
Presentation remains inside the applicable runtime budget.

---

## 23. Test09 Governance

09A freezes the presentation doctrine.

Subsequent Test09 work may improve visual quality, but may not silently redefine the doctrine.

The next milestone after 09A acceptance is:

**09B — Vertical Beauty Slice**

09B should create one deliberately authored, near-final-quality playable area using this standard while inheriting the frozen Test08 production/runtime architecture.

No broad content expansion is authorized before the beauty slice establishes the production target.
