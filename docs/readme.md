# pseudo code


## WB

white beard creator module

```
    const WB = WhiteBeard();
```

### 42 - create universe

```
    // Universe


    //
    const universe: Universe = WB.
        .big() // return UniverseCreator
            .?withRules({...}) // phy
            .?withMods([...]) // mods      
            ...
        .bang(seed); // return Universe
    WB.use(universe);

```
### Light (Time)

```
    // Hourglass
      // start, stop, reverse etc. etc
      // onSand

    //
    const hourglass: Hourglass = WB.
        .time() // return HourglassCreator
        .onEarth(world)
            ...
        .goesby(); // return Hourglass

```
###  Planets
```
    // World

    // getEntity({...});
    // getEntities({...});

    const world: World = WB
        .spark() // return WorldCreator
            .withinUniverse() // setup, init
            .?withMould()
            .?withRules({...}) // phy
            .?withMods([...]) // mods      
            ...      
        .ignite(seed); // return world

```
### Forge world
```
    const forge: Forge = WB
        .forge(world) // return MouldCreator
            .withSize() // required
            .?withRules({...}) // phy
            .?withMods([...]) // mods    
            ...
        .create(); // return Forge

    // modify    
    mould.addMountains({....})
    mould.addSee({...})
    mould.addBiomes({...})
    ....

    mould.addTrees({...})

```

### Creatures

```
    const aCat:<Cat> = WB
        .entity<Cat>(seed) // return EntityCreator
            .withinWorld(world) // setup, init
            .?withPosition({...}) // 
            .?withStats({}) // base, override
            ....
        .create(); // return Cat

```