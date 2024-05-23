import { TMoveConfig } from "./canMove";

const HIGH_MOVE = {
    max_speed: 10,
    max_acceleration: 1,
    efficiency: 1
}
const MEDIUM_MOVE = {
    max_speed: 5,
    max_acceleration: 1,
    efficiency: 0.5
}
const LOW_MOVE = {
    max_speed: 2,
    max_acceleration: 0.2,
    efficiency: 0.2
}
const ZERO_MOVE = {
    max_speed: 0,
    max_acceleration: 0,
    efficiency: 0
}
const defaultLandAnimal: TMoveConfig = {
    land: HIGH_MOVE,
    sea: LOW_MOVE,
    air: ZERO_MOVE
};
const defaultSeaAnimal: TMoveConfig = {
    land: ZERO_MOVE,
    sea: HIGH_MOVE,
    air: ZERO_MOVE
};
const defaultAirAnimal: TMoveConfig = {
    land: LOW_MOVE,
    sea: ZERO_MOVE,
    air: HIGH_MOVE
};
const defaultAnphibiousAnimal: TMoveConfig = {
    land: MEDIUM_MOVE,
    sea: MEDIUM_MOVE,
    air: ZERO_MOVE
};
export const DefaultTMoveConfig = {
    defaultLandAnimal,
    defaultSeaAnimal,
    defaultAirAnimal,
    defaultAnphibiousAnimal
};
