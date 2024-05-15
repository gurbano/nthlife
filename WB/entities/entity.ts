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
    id: string;
    createdAt: Date;
    updatedAt: Date;
    type: TEntityType
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
}

function generateRandomUid(): string {
    return uuidv4();
}