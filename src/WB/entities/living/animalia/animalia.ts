import { TEntityType } from "../../entity";
import { EKingdom, ILivingEntity, LivingEntity } from "../living";
import { ICanMove, TMoveConfig, canMove } from "../../../modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "../../../modifiers/canMove/defaults";
import { ICanAttack, TAttackConfig } from "../../../modifiers/canAttack/canAttack";
import { ICanLive, TLifeConfig, canLive } from "../../../modifiers/canLive/canLive";
import { DefaultTLifeConfig } from "../../../modifiers/canLive/defaults";

export enum EPhylum {
    Chordata = "Chordata",
    ChordataSea = "ChordataSea",
    Arthropoda = "Arthropoda",
    Mollusca = "Mollusca",
    Annelida = "Annelida",
    Echinodermata = "Echinodermata",
}

export interface IAnimalia extends ILivingEntity, ICanMove, ICanAttack, ICanLive {
    phylum: EPhylum;
}

export class Animalia extends LivingEntity implements IAnimalia  {
    phylum: EPhylum;

    constructor({phylum}: {phylum: EPhylum}) {
        super({kingdom: EKingdom.Animalia});
        this.phylum = phylum;
        return canLive(DefaultTLifeConfig.defaultAnimal)(canMove(DefaultTMoveConfig.defaultLandAnimal)(this));
    }
    attackConfig?: TAttackConfig;
    lifeConfig?: TLifeConfig;
    moveConfig?: TMoveConfig | undefined;

    move(): void {
        throw new Error("Method not implemented.");
    }
    attack(): void {
        throw new Error("Method not implemented.");
    }
    live(): void {

    }
    public tick(): void {
        super.tick();
        console.log('asAnimal (%s)', this.lifeConfig);
    }
}