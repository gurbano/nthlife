class WhiteBeard {
    public spark(): WorldBuilder {
        return new WorldBuilder();
    }
    public big(): UniverseBuilder {
        return new UniverseBuilder();
    }
    public time(): HourglassBuilder {
        return new HourglassBuilder();
    }
    public forge(): ForgeBuilder {
        return new ForgeBuilder();
    }

}
class Universe {
    private uuid: string = Math.random().toString();
    private rules: any[];
    private mods: any[];

    constructor({ rules, mods }: { rules?: any[], mods?: any[] } = {}) {
        this.rules = rules || [];
        this.mods = mods || [];
    }
}
class Terrain {
    private uuid: string = Math.random().toString();
    private size: [number, number, number];
    constructor({ size }: { size: [number, number, number] }) {
        this.size = size;
    }
    public rasa({ size }: { size: [number, number, number] }): Terrain {
        this.size = size;
        return this;
    }
}
class World {
    private uuid: string = Math.random().toString();
    private universe: Universe;
    private terrain: Terrain;
    constructor({ universe }: { universe: Universe }) {
        this.universe = universe;
        this.terrain = new Terrain({ size: [0, 0, 0] });
    }
    public tabula(): Terrain {
        return this.terrain;
    }
}
class Forge {
    private uuid: string = Math.random().toString();
    private world: World;
    constructor({ world }: { world: World }) {
        this.world = world;
    }
}
class Hourglass {  
    private uuid: string = Math.random().toString();
    private world: World;
    private callback?: Function;
    private isRunning: boolean = false;

    constructor({ world }: { world: World }) {
        this.world = world;
    }

    public flip(): void { // start
        console.log('flip');
        this.isRunning = true;
        this.tick();
    }
    public flop(): void { // stop
        console.log('flop');
        this.isRunning = false;
    }
    public onSand(callback: Function): void {
        this.callback = callback;
    }

    private tick(): void {
        if (!this.isRunning) return;
        this.callback && this.callback();
        setTimeout(this.tick.bind(this), 60);
    }

}

class UniverseBuilder { 
    private rules: any[];
    private mods: any[];

    constructor() {
        this.rules = [];
        this.mods = [];
    }
    
    public bang(): Universe {
        return new Universe({ rules: this.rules, mods: this.mods });
    }
    public withRules(rules: any[]): UniverseBuilder {
        this.rules = rules;
        return this;
    }
    public withMods(mods: any[]): UniverseBuilder {
        this.mods = mods;
        return this;
    }
}
class WorldBuilder {
    private universe: Universe;
    
    constructor() {
        this.universe = new Universe();
    }

    public ignite(): World {
        return new World({ 
            universe: this.universe,
        });
    }
    public withinUniverse(universe?: Universe): WorldBuilder {
        this.universe = universe || this.universe || new Universe();
        return this;
    }
}
class HourglassBuilder {
    private world: World;
    
    constructor() {
        this.world = new World({ universe: new Universe() });
    }
    public goesBy(): Hourglass {
        return new Hourglass({ world: this.world });
    }
    public onEarth(world?: World): HourglassBuilder {
        this.world = world || this.world || new World({ universe: new Universe() });
        return this;
    }
}
class ForgeBuilder {
    private world: World;
    private size: [number, number, number];
    
    constructor() {
        this.world = new World({ universe: new Universe() });
        this.size = [0, 0, 0];
    }
    public theWorld(world: World): ForgeBuilder {
        this.world = world;
        return this;
    }
    public ofSize(x: number, y: number, z: number): ForgeBuilder {
        this.size = [x, y, z];
        return this;
    }
    public ready(): Forge {
        this.world.tabula().rasa({ size: this.size });
        return new Forge({ world: this.world });
    }
}

export { WhiteBeard };