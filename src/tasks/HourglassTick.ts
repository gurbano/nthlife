import { Task, cache } from "actionhero";
import { TaskInputs } from "actionhero/dist/classes/task";
import { Worker } from "node-resque";
import { WhiteBeard,World } from "../WB/WB";

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
    const world = await this.fetch<World>(data.world.uuid);  
    

    const WB = new WhiteBeard();

    const hourglass = WB.time().onEarth(world).goesBy();
    console.error("-------------------------------------------------------------------------I am a task", data, hourglass);

    hourglass.onSand(() => {
        console.log('onSand (callback) ', world);
        // aMisteriousLivingBeing.move();
        // aMisteriousLivingBeing.think();
    });
    // hourglass.flip();
    setTimeout(() => { hourglass.flip(); }, 500);
    return { success: true};
  }
  
}
