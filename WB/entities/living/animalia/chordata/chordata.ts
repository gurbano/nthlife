import { ILivingEntity, LivingEntity, EKingdom } from "../../living";
import { Animalia, EPhylum, IAnimalia } from "../animalia";


export enum EClassChordata {
    Mammalia = "Mammalia",
    Aves = "Aves",
    Reprtilia = "Reptilia",
    Amphibia =  "Amphibia",
}

export interface IChordata extends IAnimalia {
    class: EClassChordata;
}

export class Chordata extends Animalia implements IChordata {
    class: EClassChordata;
    
    constructor({clazz}: {clazz: EClassChordata}) {
        super({phylum: EPhylum.Chordata});
        this.class = clazz;
    }
}