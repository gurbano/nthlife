import { Task, cache } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";
import { Worker } from "node-resque";
import { WhiteBeard,World } from "../WB/WB";
const ESSerializer = require('esserializer');

export class StartHourglass extends Task {
  constructor() {
    super();
    this.name = "StartHourglass";
    this.description = "an actionhero task";
    this.frequency = 5000;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {
      world: { required: false },
    }; 
  }
  private async fetch<T>(id: string) {
    if (id) {
      try{
        return (await cache.load(id)).value as T;
      } catch (error) {
        console.log('error fetching by id',id);
    }
    return null;
  }
  }
  async run(data: TaskInputs, worker: Worker) {
    const worldJson = await this.fetch<World>(data.world.uuid);  
    
    // const world: World = ESSerializer.deserialize(worldJson, [World]);
    const world: World = World.fromJSON(worldJson);
    const WB = new WhiteBeard();

    if (!world.time()) {
      const hourglass = WB.time().onEarth(world).goesBy();
      hourglass.onSand(() => {
        console.log('onSand (callback) ');
      });
    }
    

    
    hourglass.flip();
    setTimeout(() => { hourglass.flop(); }, 1500);
    return { success: true};
  }
  
}

export class StopHourglass extends Task {
  constructor() {
    super();
    this.name = "StopHourglass";
    this.description = "an actionhero task";
    this.frequency = 5000;
    this.queue = "default";
    this.middleware = [];
    this.inputs = {
      world: { required: false },
    }; 
  }
  private async fetch<T>(id: string) {
    if (id) {
      try{
        return (await cache.load(id)).value as T;
      } catch (error) {
        console.log('error fetching by id',id);
    }
    return null;
  }
  }
  async run(data: TaskInputs, worker: Worker) {
    const worldJson = await this.fetch<World>(data.world.uuid);  
    
    // const world: World = ESSerializer.deserialize(worldJson, [World]);
    const world: World = World.fromJSON(worldJson);
    const WB = new WhiteBeard();

    const hourglass = WB.time().onEarth(world).goesBy();

    hourglass.onSand(() => {
        console.log('onSand (callback) ');
    });
    hourglass.flip();
    setTimeout(() => { hourglass.flop(); }, 1500);
    return { success: true};
  }
  
}