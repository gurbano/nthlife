import { Entity } from "../../entities/entity";

export type TAttackConfig = {
    land: {
        base_damage: number;
        base_speed: number;
        efficiency: number; // distance x stamina
    },
    sea: {
        base_damage: number;
        base_speed: number;
        efficiency: number; // 
    },
    air: {
        base_damage: number;
        base_speed: number;
        efficiency: number; // 
    }
}

export interface ICanAttack  {
    attack: () => void;
    attackConfig?: TAttackConfig;
}

export const canAttack = (config: TAttackConfig) => <T extends Entity>(entity: T): T & ICanAttack => {
    const newEntity = entity as T & ICanAttack;
    newEntity.attackConfig = config;
    newEntity.attack = ()=> {
        console.log(`${entity.id} attacks`, newEntity.attackConfig);
    }
    return newEntity;
}

