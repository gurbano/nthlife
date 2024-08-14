import { v4 as uuidv4 } from 'uuid';

export enum EEntityType {
    // IMPORTANT
    LIVING = 'Living', // and dead
    /** LIVING THINGS 
     * includes 
    */

    BUILDING = 'Building', // a house
    STATIC = 'Static', // a wall, a waterfall

    MOVABLE = 'Movable', // a rock, a tree branch
    PROP = 'Prop', // a slingshot 

    EMPTY = 'Empty', // debug
    VOID = 'Void', // never ending story    

}
export type TEntityType = {
    // Add your entity types here
    type: EEntityType;
    metadata: any;
}
export interface IEntity {
    tick(): void;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: TEntityType;
    toJSON(): any;
}


export class Entity implements IEntity {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: TEntityType;
    
    constructor(type: TEntityType) {
        this.id = uuidv4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.type = type;
    }
    public tick(): void {}
    public toJSON() {
        return {
            id: this.id,
            createdAt: this.createdAt.toISOString(),
            updatedAt: this.updatedAt.toISOString(),
            type: this.type,
        };
    }

    public static fromJSON(json: any): Entity {
        const entity = new Entity(json.type);
        entity.id = json.id;
        entity.createdAt = new Date(json.createdAt);
        entity.updatedAt = new Date(json.updatedAt);
        return entity;
    }
}

interface IEntityConstructor {
    new(type: TEntityType): IEntity;
    fromJSON(json: any): IEntity;
}
export const EntityClass: IEntityConstructor = Entity;

function generateRandomUid(): string {
    return uuidv4();
}