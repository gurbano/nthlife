import { Entity, IEntity, TEntityType, EEntityType } from "../entity";

export enum EKingdom {
    Animalia = "Animalia",
    Plantae = "Plantae",
    Fungi = "Fungi",
}
export interface ILivingEntity extends IEntity {
    kingdom: EKingdom
}


export class LivingEntity extends Entity implements ILivingEntity {
    kingdom: EKingdom;

    constructor({kingdom=EKingdom.Animalia}: {kingdom: EKingdom}) {
        super({type: EEntityType.LIVING, metadata:{}});
        this.kingdom = kingdom;
    }
    public tick(): void {
        super.tick();
        console.log('asLivingEntity (%s)', this.id);
    }
}