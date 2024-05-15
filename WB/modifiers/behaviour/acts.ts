export enum ENeed {
    FOOD = "FOOD",
    WATER = "WATER"
}

export enum ERequirement {
    IS_NIGHT = "IS_NIGHT",
    IS_DAY = "IS_DAY",
    A_WHILE = "A_WHILE",
}
export enum EResource {
    ANYTHING = "ANYTHING",
    GENERIC_POI = "GENERIC_POI",
    GENERIC_RESOURCE = "GENERIC_RESOURCE",
    GENERIC_CREATURE = "GENERIC_CREATURE",
    FOOD = "FOOD",
    PLANT = "PLANT",
    PREY = "PREY",
    BODY = "BODY",
}
export enum EAct {
    CONSUME = "CONSUME",
    FIND = "FIND",
    CONVERT = "CONVERT",
    HUNT = "HUNT",
    KILL = "KILL",
    WAITFOR = "WAITFOR",
    PACK_HUNT = "PACK_HUNT",
    PACK_ATTACK = "PACK_ATTACK",
    MELEE_COMBAT = "MELEE_COMBAT",
    RANGED_COMBAT = "RANGED_COMBAT",
    ATTACK = "ATTACK",
    DEFEND = "DEFEND",
    FLEE = "FLEE",
    STANCE = "STANCE",
    SEARCH = "SEARCH",
    ROAM_AROUND = "ROAM_AROUND",
}

export type Amount<T> = {
    amount: number;
    unit: T;
}
export type callback = ({}) => void;
export type TAction = { 
    act: EAct, 
    what?: EResource | ERequirement
}  


const EatFood = {
    name: "Eat food",
    for: ENeed.FOOD,
    requires: [{ amount: 1, unit: EResource.FOOD }],
    acts: [
        { act: EAct.CONSUME, what: EResource.FOOD}
    ]
}

const FindFood =  {
    name: "Find food",
    for: ENeed.FOOD,
    requires: [],
    acts: [
        { act: EAct.FIND, what: EResource.FOOD},
        { act: EAct.CONSUME, what: EResource.FOOD}
    ]
};


const Forage = {
    name: "Forage",
    for: EResource.FOOD,
    requires: [],
    acts: [
        { act: EAct.FIND, what: EResource.PLANT},
        { act: EAct.CONVERT, what: EResource.PLANT}
    ]
};
const Scavenge = {
    name: "Scavenge",
    for: EResource.FOOD,
    requires: [],
    acts: [
        { act: EAct.FIND, what: EResource.BODY},
        { act: EAct.CONVERT, what: EResource.BODY}
    ]
};
const Hunt = {
    name: "Hunt",
    for: EResource.FOOD,
    requires: [],
    acts: [
        { act: EAct.HUNT, what: EResource.PREY},
        { act: EAct.CONSUME, what: EResource.BODY}
    ]
};

const FindSomething = {
    name: "Find something",
    for: EResource.GENERIC_RESOURCE,
    requires: [],
    acts: [
        { act: EAct.SEARCH, what: EResource.GENERIC_RESOURCE},
    ]
};
const FindSomewhere = {
    name: "Find somewhere",
    for: EResource.GENERIC_POI,
    requires: [],
    acts: [
        { act: EAct.SEARCH, what: EResource.GENERIC_POI},
    ]
};
const FindSomeone = {
    name: "Find someone",
    for: EResource.GENERIC_CREATURE,
    requires: [],
    acts: [
        { act: EAct.SEARCH, what: EResource.GENERIC_CREATURE},
    ]
};

const BaseHunt = {
    name: "Base Hunt",
    for: EResource.FOOD,
    requires: [],
    acts: [
        { act: EAct.FIND, what: EResource.PREY},
        { act: EAct.KILL, what: EResource.PREY}
    ]
}

const NightHunt = {
    name: "Night Hunt",
    for: EResource.FOOD,
    requires: [],
    acts: [
        [
            { act: EAct.WAITFOR, what: ERequirement.IS_NIGHT},
            { act: EAct.FIND, what: EResource.PREY}
        ],
        { act: EAct.KILL, what: EResource.PREY}
    ]
}


const Search = {
    name: "Search",
    for: EResource.ANYTHING,
    requires: [],
    acts: [
        [
            { act: EAct.ROAM_AROUND},
            { act: EAct.WAITFOR, what: ERequirement.A_WHILE},
        ],
    ],
};

const MeleeCombat = {
    name: "Melee Fight",
    for: EResource.ANYTHING,
    requires: [],
    acts: [
        { act: EAct.MELEE_COMBAT, what: EResource.ANYTHING}
    ]
}
const RangedCombat = {
    name: "Ranged Fight",
    for: EResource.ANYTHING,
    requires: [],
    acts: [
        { act: EAct.RANGED_COMBAT, what: EResource.ANYTHING}
    ]
}


const Consume = {
    name: "Consume",
    for: ENeed.FOOD,
    requires: [{ amount: 1, unit: EResource.FOOD }],
    acts: [],
    onCompletion: () => {
        console.log("Consumed");
    }
};
const ConvertToFood = {
    name: "Convert resource to food",
    for: ENeed.FOOD,
    requires: [{ amount: 1, unit: EResource.GENERIC_RESOURCE }],
    acts: [],
    onCompletion: () => {
        console.log("Converted resource to food");
    }
};

const Objectives = {
    EatFood,
    FindFood
}
const Strategies = {
    Forage,
    Hunt,
    Scavenge,
    FindSomeone,
    FindSomething,
    FindSomewhere
}
const Tactics = {
    Search,
    BaseHunt,
    NightHunt,
    MeleeCombat,
    RangedCombat
}
const Actions = {
    Consume,
    ConvertToFood
}

export const Acts = {
    obj: Objectives,
    strat: Strategies,
    tact: Tactics,
    act: Actions,
}