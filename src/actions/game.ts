import { cache, Action, ParamsFrom, task } from "actionhero";
import { WhiteBeard, World } from "../WB/WB";
import { LivingEntity, EKingdom } from "../WB/entities/living/living";
import hasBrain, { IHaveBrain } from "../WB/modifiers/behaviour/behaviour";
import { canAttack, ICanAttack } from "../WB/modifiers/canAttack/canAttack";
import { DefaultTAttackConfig } from "../WB/modifiers/canAttack/defaults";
import { canMove, ICanMove } from "../WB/modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "../WB/modifiers/canMove/defaults";
import { applyModifiers } from "../WB/modifiers/utils";
import { withStats, IWithStats } from "../WB/modifiers/withStats/withStats";
import { Aves, EOrderAves } from "../WB/entities/living/animalia/chordata/aves/aves";


export class GameCreate extends Action {
  name = "getGame";
  description = "getOrCreate a game";
  outputExample = {};
  authenticated = false;
  inputs = {
    id: { type: "object", required: false },
  };
  response = {
    success: { type: "boolean" },
    id: { type: "string" },
    world: { type: "object" },
  };

  private async fetch<T>(id: string) {
    if (id) {
        try{
          return (await cache.load(id)).value as T;
        } catch (error) {
          console.warn('error fetching by id',id);
      }
      return null;
    }
  }

  async run({ params }: { params: ParamsFrom<GameCreate> } ) {
    // fetch by id
    const WB = new WhiteBeard();
    const universe = WB.big().bang();

    let worldJson = await this.fetch<string>(params.id);
    let world = !!worldJson 
        ? World.fromJSON(worldJson)
        : WB.spark()
            .withId(params.id)
            .withinUniverse(universe)
            .ignite();    
    cache.save(world.uuid, world.toJSON());
    return { success: true, id: world.uuid , world};
  }
}

export class CreateAnimal extends Action {
  name = "createAnimal";
  description = "create an animal";
  outputExample = {};
  authenticated = false;
  inputs = {
    worldId: { type: "string", required: true },
  };
  response = {
    success: { type: "boolean" },
    id: { type: "string" }
  };

  async run({ params }: { params: ParamsFrom<CreateAnimal> } ) {
    
    const modifiers = [
        canAttack(DefaultTAttackConfig.defaultKillerAnimal),
        canMove(DefaultTMoveConfig.defaultAnphibiousAnimal),
        withStats(() => ({ strength:16, agility: 1, intelligence: 1})),
        hasBrain({},)
    ];

    type TNewCreature = LivingEntity & ICanMove & ICanAttack & IWithStats & IHaveBrain;
    const baseNewCreature = new LivingEntity({ kingdom: EKingdom.Fungi });
    baseNewCreature.id = 'misteriousLivingBeing-'+ baseNewCreature.id;
    const aMisteriousLivingBeing: TNewCreature = applyModifiers(baseNewCreature, modifiers) as TNewCreature;

    const world = World.fromJSON((await cache.load(params.worldId)).value) as World;

    
    world.addEntity(aMisteriousLivingBeing);
    world.addEntity(new Aves({ order: EOrderAves.Passeriformes }));
    cache.save(world.uuid, world.toJSON());
    console.log( world);
    // await task.enqueue("StartHourglass", { world: world }, "default");
    return { success: true, id: world.uuid , world};
  }
}

export class StartWorld extends Action {
  name = "startWorld";
  description = "turn the hourglass on";
  outputExample = {};
  authenticated = false;
  inputs = {
    worldId: { type: "string", required: true },
  };
  response = {
    success: { type: "boolean" },
    id: { type: "string" }
  };

  async run({ params }: { params: ParamsFrom<StartWorld> } ) {
    const world = World.fromJSON((await cache.load(params.worldId)).value) as World;
    await task.enqueue("StartHourglass", { world: world }, "default");
    return { success: true, id: world.uuid , world};
  }
}