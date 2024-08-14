import { Entity } from "../../entities/entity";

enum EConditions {
    POISONED, SICK, HURT
}
type TCondition = {
    key: EConditions;
    metadata: any;
}
export type TLifeConfig = {
    stamina: number;
    hp: number;
    conditions: Array<TCondition>
}

export interface ICanLive  {
    live: () => void;
    lifeConfig?: TLifeConfig;
}

export const canLive = (config: TLifeConfig) => <T extends Entity>(entity: T): T & ICanLive => {
    const newEntity = entity as T & ICanLive;
    newEntity.lifeConfig = config;
    newEntity.live = ()=> {
        console.log(`${entity.id} lives`, newEntity.lifeConfig);
    }
    return newEntity;
}

