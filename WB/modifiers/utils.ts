import { Entity } from "../entities/entity";

export const applyModifiers = (base: Entity, modifiers: any[]) => {
    return modifiers.reduce((acc, modifier) => modifier(acc), base);
};