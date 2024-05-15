import { Entity } from "../../entities/entity";

export type TMoveConfig = {
    land: {
        max_speed: number;
        max_acceleration: number;
        efficiency: number; // distance x stamina
    },
    sea: {
        max_speed: number;
        max_acceleration: number;
        efficiency: number; // 
    },
    air: {
        max_speed: number;
        max_acceleration: number;
        efficiency: number; // 
    }
}

export interface ICanMove  {
    move: () => void;
    moveConfig?: TMoveConfig;
}

export const canMove = (config: TMoveConfig) => <T extends Entity>(entity: T): T & ICanMove => {
    const newEntity = entity as T & ICanMove;
    newEntity.moveConfig = config;
    newEntity.move = ()=> {
        console.log(`${entity.id} moves`, newEntity.moveConfig);
    }
    return newEntity;
}

