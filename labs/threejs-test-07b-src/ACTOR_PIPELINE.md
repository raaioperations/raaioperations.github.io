# 07B — Production Actor Pipeline

Status: AUTHORIZED / BUILD CANDIDATE

## Single new production variable

Can a production actor be created from a stable definition, own the promoted 07A living-world state, bind to a real GLB asset through a cache, clone safely into independent instances, run independent animation mixers, and keep render binding separate from simulation identity?

## Required split

### Engine-independent actor state

- ProductionActorDefinitionRegistry
- ProductionActorRecord
- ProductionActorPipeline
- one LivingWorldKernel per actor
- stable actor ID
- transform
- animation intent
- actor snapshot/restore
- single visual-binding claim

### Three.js presentation adapter

- cached GLB load
- SkeletonUtils clone
- unique scene root per actor
- independent AnimationMixer per actor
- logical animation intent → clip resolution
- transform synchronization
- explicit bind/unbind lifecycle

## 07B proof

The visual proof uses two production actors created from one actor definition and one cached Soldier.glb asset.

Required result:

- 1 definition
- 1 asset load inside the actor pipeline
- 2 actor records
- 2 unique visual roots
- 2 independent mixers
- 2 resolved animation states
- 2 LivingWorldKernel instances
- 0 duplicate bindings
- inherited 06J real-device regression remains PASS

## Not 07B

Do not add:

- new AI behavior
- new combat
- broad region streaming
- save-game persistence
- multiplayer
- new asset roster
- production world chunking

Those are later milestones. 07C owns the streamed production region.
