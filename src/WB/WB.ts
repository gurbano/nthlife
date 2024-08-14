import { randomUUID } from "crypto";
import { Entity, EntityClass, IEntity } from "./entities/entity";
const ESSerializer = require('esserializer');
import { LivingEntity } from "./entities/living/living";
import { Aves } from "./entities/living/animalia/chordata/aves/aves";

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

    // Method to convert class instance to plain object
    public toJSON() {
        return {
            uuid: this.uuid,
            rules: this.rules,
            mods: this.mods
        };
    }

    // Static method to create a class instance from a plain object
    public static fromJSON(json: any): Universe {
        const universe = new Universe({ rules: json.rules, mods: json.mods });
        universe.uuid = json.uuid;
        return universe;
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

    // Method to convert class instance to plain object
    public toJSON() {
        return {
            uuid: this.uuid,
            size: this.size
        };
    }

    // Static method to create a class instance from a plain object
    public static fromJSON(json: any): Terrain {
        const terrain = new Terrain({ size: json.size });
        terrain.uuid = json.uuid;
        return terrain;
    }
}
class World {
    public uuid: string;
    universe: Universe;
    terrain: Terrain;
    hourglass: Hourglass;
    entities: Map<string, IEntity> = new Map();

    constructor({ universe, uuid }: { universe: Universe, uuid?: string }) {
        this.universe = universe;
        this.uuid = uuid || randomUUID();
        this.terrain = new Terrain({ size: [0, 0, 0] });
    }

    public tabula(): Terrain {
        return this.terrain;
    }

    public time(hourglass?: Hourglass): Hourglass {
        if(!!hourglass) {
            this.hourglass = hourglass;
        }
        return this.hourglass;
    }

    public addEntity(entity: IEntity) {
        this.entities.set(entity.id, entity);
    }

    // Method to convert class instance to plain object
    public toJSON() {
        return {
            uuid: this.uuid,
            universe: this.universe.toJSON(),
            terrain: this.terrain.toJSON(),
            entities: Array.from(this.entities.entries()).map(([key, value]) => [key,  ESSerializer.serialize(value)])
        };
    }

    // Static method to create a class instance from a plain object
    public static fromJSON(json: any): World {
        const universe = Universe.fromJSON(json.universe);
        const terrain = Terrain.fromJSON(json.terrain);
        const world = new World({ universe, uuid: json.uuid });
        world.terrain = terrain;
        if (json.entities.forEach) {
            json.entities.forEach(([key, value]: [string, any]) => {
                const entity = ESSerializer.deserialize(value, [LivingEntity, Aves]);
                world.entities.set(key, entity);
            });
        }
        return world;
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

        this.world.entities.forEach((entity) => {
            entity.tick();
        });
        
        setTimeout(this.tick.bind(this), 200);
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
    private world: World;
    
    private universe: Universe;
    private id: string;
    
    
    constructor() {
        this.universe = new Universe();
        this.id = randomUUID().toString();
    }

    public ignite(): World {
         this.world = new World({ 
            universe: this.universe,
            uuid: this.id
        });
        return this.world;
    }
    public withId(id: string): WorldBuilder {
        this.id = id;
        return this;
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
        const time = new Hourglass({ world: this.world });
        this.world.time(time)
        return time;
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

export { WhiteBeard, World };