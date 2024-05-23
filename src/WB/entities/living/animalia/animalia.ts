import { TEntityType } from "../../entity";
import { EKingdom, ILivingEntity, LivingEntity } from "../living";
import { ICanMove, TMoveConfig, canMove } from "../../../modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "../../../modifiers/canMove/defaults";
import { ICanAttack, TAttackConfig } from "../../../modifiers/canAttack/canAttack";

export enum EPhylum {
    Chordata = "Chordata",
    ChordataSea = "ChordataSea",
    Arthropoda = "Arthropoda",
    Mollusca = "Mollusca",
    Annelida = "Annelida",
    Echinodermata = "Echinodermata",
}

export interface IAnimalia extends ILivingEntity, ICanMove, ICanAttack {
    phylum: EPhylum;
}

export class Animalia extends LivingEntity implements IAnimalia  {
    phylum: EPhylum;

    constructor({phylum}: {phylum: EPhylum}) {
        super({kingdom: EKingdom.Animalia});
        this.phylum = phylum;
        return canMove(DefaultTMoveConfig.defaultLandAnimal)(this);
    }
    moveConfig?: TMoveConfig | undefined;

    move(): void {
        throw new Error("Method not implemented.");
    }
    attack(): void {
        throw new Error("Method not implemented.");
    }
}