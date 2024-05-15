import { Entity } from "../../entities/entity";

const enum EWithStats {
    STRENGTH = 'strength',
    DEXTERITY = 'dexterity',
    INTELLIGENCE = 'intelligence',
    WISDOM = 'wisdom',
    CHARISMA = 'charisma',
    CONSTITUTION = 'constitution',
}

type TStatsGenerator = (seed: number) => Partial<Record<EWithStats, number>>;
export interface IWithStats  {
    stats: () => Partial<Record<EWithStats, number>>;
    __stats?: Partial<Record<EWithStats, number>>;
}

export const withStats = (stats: Partial<Record<EWithStats, number> | TStatsGenerator>) => <T extends Entity>(entity: T): T & IWithStats => {
    const newEntity = entity as T & IWithStats;
    newEntity.__stats = typeof stats === 'function' ? stats(Math.random()) : stats;
    newEntity.stats = () => {
        console.log(`${entity.id} stats`, newEntity.__stats);
        return newEntity.__stats ?? {} as Record<EWithStats, number>;
    }
    return newEntity;
}
