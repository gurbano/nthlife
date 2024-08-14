import { ILivingEntity, LivingEntity, EKingdom } from "../../../living";
import { canMove } from "../../../../../modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "../../../../../modifiers/canMove/defaults";
import { Chordata, EClassChordata, IChordata } from "../chordata";


export enum EOrderAves {
    Passeriformes = "Passeriformes",
    Columbiformes = "Columbiformes",
    Psittaciformes = "Psittaciformes",
    Falconiformes = "Falconiformes",
    Strigiformes = "Strigiformes",
    Cuculiformes = "Cuculiformes",
    Piciformes = "Piciformes",
    Coraciiformes = "Coraciiformes",
    Apodiformes = "Apodiformes",
    Gruiformes = "Gruiformes",
    Charadriiformes = "Charadriiformes"
}
export interface IAves extends IChordata {
    order: EOrderAves;
}

export class Aves extends Chordata implements IAves {
    order: EOrderAves;

    constructor({order}: {order: EOrderAves}) {
        super({classe: EClassChordata.Aves});
        this.order =  order;
        return canMove(DefaultTMoveConfig.defaultAirAnimal)(this);
    }
}