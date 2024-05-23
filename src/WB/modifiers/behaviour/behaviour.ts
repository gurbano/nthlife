import { Entity } from "../../entities/entity";
import { ENeed, EResource, EAct, ERequirement, Amount,  callback, Acts } from "./acts";
export type TStrategy = {
    name: string;
    for: Array<ENeed | EResource | EAct> | ENeed | EResource | EAct;
    requires: Amount<EResource>[];
    acts: Array<TAction | TAction[]>;
    implementation?: callback
    onCompletion?: callback;
    onFail?: callback;
}
export type TAction = { 
    act: EAct, 
    what?: EResource | ERequirement
}  


class FullBrain {
    public objectives: Array<TStrategy> = new Array();
    public strategies: Array<TStrategy> = new Array();
    public tactics: Array<TStrategy> = new Array();
    public actions: Array<TStrategy> = new Array();

    constructor() {
        this.objectives.push(Acts.obj.EatFood);
        this.objectives.push(Acts.obj.FindFood);
                
        // strategies
        // find
        // food
        this.strategies.push( Acts.strat.Forage);
        this.strategies.push( Acts.strat.Hunt);
        this.strategies.push( Acts.strat.Scavenge);
        // generic
        this.strategies.push( Acts.strat.FindSomeone);
        this.strategies.push( Acts.strat.FindSomething);
        this.strategies.push( Acts.strat.FindSomewhere);

        // hunt
        this.tactics.push( Acts.tact.BaseHunt);
        this.tactics.push( Acts.tact.NightHunt);
        // this.tactics.push( Acts.tact.StealthHunt);

        this.tactics.push( Acts.tact.MeleeCombat);
        this.tactics.push( Acts.tact.RangedCombat);
        
        // actions
        this.actions.push(Acts.act.Consume);
        this.actions.push(Acts.act.ConvertToFood);

    }

}

class BrainController {
    public brain: FullBrain;
    constructor(brain: FullBrain) {
        this.brain = brain;
    }

    public resolveNeed(need: ENeed): void {
        const availableStrategies = this.brain.objectives
            .filter((strategy) => strategy.for === need);
        
        if (availableStrategies.length === 0) {
            console.log("No strategies available for need: ", need);
            return;
        }
        for (const strategy of availableStrategies) {
            // this.executeStrategy(strategy);
            console.log("Strategy found ", strategy);
        }
        
    }
}

export interface IHaveBrain  {
    think: () => void;
    brainConfig?: any;
}

export const hasBrain = (config: any) => <T extends Entity>(entity: T): T & IHaveBrain => {
    const brainController = new BrainController(new FullBrain());
    const needs: Array<ENeed> = [ENeed.FOOD, ENeed.WATER, ENeed.SHELTER, ENeed.MATE];
    const newEntity = entity as T & IHaveBrain;
    newEntity.brainConfig = config;
    newEntity.think = ()=> {
        console.log(`${entity.id} hasBrain`, newEntity.brainConfig);
        needs.length > 0 && brainController.resolveNeed(needs.pop()!);
    }
    return newEntity;
}
export default hasBrain;