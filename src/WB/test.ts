import { WhiteBeard } from "./WB";
import { Animalia } from "./entities/living/animalia/animalia";
import { Aves, EOrderAves } from "./entities/living/animalia/chordata/aves/aves";
import { Mammalia } from "./entities/living/animalia/chordata/mammalia/mammalia";
import { Carnivora, Cetacea } from "./entities/living/animalia/chordata/mammalia/orders";
import { EKingdom, LivingEntity } from "./entities/living/living";
import { IHaveBrain, hasBrain } from "./modifiers/behaviour/behaviour";
import { ICanAttack, canAttack } from "./modifiers/canAttack/canAttack";
import { DefaultTAttackConfig } from "./modifiers/canAttack/defaults";
import { ICanMove, canMove } from "./modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "./modifiers/canMove/defaults";
import { applyModifiers } from "./modifiers/utils";
import { IWithStats, withStats } from "./modifiers/withStats/withStats";


export function testWB() {

// WORLD CREATION    
    const WB = new WhiteBeard();
    const universe = WB.big().bang();
    const world = WB.spark().withinUniverse(universe).ignite();
    const forge = WB.forge()
        .theWorld(world)
        .ofSize(10, 10, 10)
        .ready();
    // 
    // forge.prepare('rock').at(0, 0, 0).forge();
    

    // // hourglass.flip(); // start simulation
    // console.log('WB', JSON.stringify(WB));
    // console.log('Universe', JSON.stringify(universe));
    // console.log('World', JSON.stringify(world));
    // console.log('Hourglass', JSON.stringify(hourglass));

// ANIMALS

    const aCat: Carnivora = new Carnivora();
    aCat.id = 'cat';
    aCat.move();

//     const aWhale: Cetacea = new Cetacea();
//     aWhale.id = 'whale';
//     aWhale.move();

    const aBird: Aves = new Aves({ order: EOrderAves.Passeriformes });
    aBird.id = 'bird';
    aBird.move();

// // CUSTOM ANIMAL
    const modifiers = [
        canAttack(DefaultTAttackConfig.defaultKillerAnimal),
        canMove(DefaultTMoveConfig.defaultAnphibiousAnimal),
        withStats(() => ({ strength:16, agility: 1, intelligence: 1})),
        hasBrain({},)
    ];

    type TNewCreature = LivingEntity & ICanMove & ICanAttack & IWithStats & IHaveBrain;
    const baseNewCreature = new LivingEntity({ kingdom: EKingdom.Fungi });
    baseNewCreature.id = 'misteriousLivingBeing';
    const aMisteriousLivingBeing: TNewCreature = applyModifiers(baseNewCreature, modifiers) as TNewCreature;

//     aMisteriousLivingBeing.move();
//     aMisteriousLivingBeing.attack();
//     aMisteriousLivingBeing.stats();
    world.addEntity(aMisteriousLivingBeing);
    world.addEntity(aBird);
    
    const hourglass = WB.time().onEarth(world).goesBy();

    hourglass.onSand(() => {
        // console.log('World', JSON.stringify(world));
        // aMisteriousLivingBeing.move();
        // aMisteriousLivingBeing.think();
    });
    hourglass.flip();
    setTimeout(() => { hourglass.flop(); }, 500);
}


testWB();