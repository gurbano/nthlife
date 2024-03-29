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

    //
    const hourglass: Hourglass = WB.
        .time() // return HourglassCreator
            ...
        .goesby(); // return Hourglass

```
###  Planets
```
    // World

    const world: World = WB
        .spark() // return WorldCreator
            .withinUniverse() // setup, init
            .?withMould()
            .?withRules({...}) // phy
            .?withMods([...]) // mods      
            ...      
        .ignite(seed); // return world

```
### Mould world
```
    const mould: Mould = WB
        .mould(world)
            .withSize() // required
            .?withRules({...}) // phy
            .?withMods([...]) // mods    
            ...
        .bake(); // init
    
    // modify
    
    mould,addMountains({....})
    mould.addTrees({...})
    mould.addSee({...})
    mould.addBiomes({...})
    ....

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