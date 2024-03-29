import { Entity, IEntity, TEntityType, EEntityType } from "../entity";

export interface ILivingEntity extends IEntity {
    type: TEntityType
}

export class LivingEntity extends Entity implements ILivingEntity {
    type: TEntityType;

    constructor() {
        super({type: EEntityType.LIVING, metadata:{}});
    }
}