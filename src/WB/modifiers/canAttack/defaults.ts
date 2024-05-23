import { TAttackConfig } from "./canAttack";

const LOW_ATTACK = {
    base_damage: 0,
    base_speed: 0,
    efficiency: 0
}
const MEDIUM_ATTACK = {
    base_damage: 5,
    base_speed: 1,
    efficiency: 0.5
}
const HIGH_ATTACK = {
    base_damage: 10,
    base_speed: 1,
    efficiency: 1
}

const defaultLandAnimal: TAttackConfig = {
    land: HIGH_ATTACK,
    sea: MEDIUM_ATTACK,
    air: LOW_ATTACK
};
const defaultSeaAnimal: TAttackConfig = {
    land: LOW_ATTACK,
    sea: HIGH_ATTACK,
    air: LOW_ATTACK
};
const defaultAirAnimal: TAttackConfig = {
    land: MEDIUM_ATTACK,
    sea: LOW_ATTACK,
    air: HIGH_ATTACK
};
const defaultAnphibiousAnimal: TAttackConfig = {
    land: MEDIUM_ATTACK,
    sea: MEDIUM_ATTACK,
    air: LOW_ATTACK
};
const defaultKillerAnimal: TAttackConfig = {
    land: HIGH_ATTACK,
    sea: HIGH_ATTACK,
    air: HIGH_ATTACK
};
export const DefaultTAttackConfig = {
    defaultLandAnimal,
    defaultSeaAnimal,
    defaultAirAnimal,
    defaultKillerAnimal,
    defaultAnphibiousAnimal
};
