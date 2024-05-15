import { ILivingEntity, LivingEntity, EKingdom } from "../../../living";
import { Chordata, EClassChordata, IChordata } from "../chordata";


export enum EOrderMammalia {
    Primates = "Primates",
    Carnivora = "Carnivora",
    Rodentia = "Rodentia",
    Artiodactyla = "Artiodactyla",
    Cetacea = "Cetacea",
    Chiroptera = "Chiroptera",
    Perissodactyla = "Perissodactyla",
    Proboscidea = "Proboscidea",
    Lagomorpha = "Lagomorpha",
    Sirenia = "Sirenia"
}
export interface IMammalia extends IChordata {
    order: EOrderMammalia;
}

export class Mammalia extends Chordata implements IMammalia {
    order: EOrderMammalia;

    constructor({order}: {order: EOrderMammalia}) {
        super({clazz: EClassChordata.Mammalia});
        this.order =  order;
    }
}