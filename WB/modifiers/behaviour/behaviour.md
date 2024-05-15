# Behaviour

Behaviour is dectaded by a list of ACT (actions) set according to needs, objectives, strategies and tactics

Each item in the list can be an Objective, 

## withBrain
## withNeeds

## withFreeWill
 combines withBrain, withNeeds and 0+ for the following

- withTasks
    can plan basic tasks
- withTactics
    can envise tactics 
- withStrategy
    can envise a strategy
- withObjectives
    can set objectives according to needs  




# Pyramid of needs and decision

## examples
    ```
    !NEED: a need
    <RES>: a resource
    $OBJ: an Objective, a tactic, a task
    @REQ: a requirement

    ```


    ### Needs: 
        - !FOOD - strategies:
            - eat: convert <FOOD> into !FOOD. Requires @<FOOD>
                objective: [$CONSUME <FOOD>]
            - find food: 
                objective: [$FIND <FOOD>, $CONSUME <FOOD>]
    
    ### ACT: 
        - $FIND <FOOD> 
            - forage: convert <PLANT> into <FOOD> 
                objective: [$FIND <PLANT>, $CONVERT <PLANT>] 
            - scavenge: convert <BODY> into <FOOD>
                objective: [$FIND <BODY>, $CONVERT <BODY>]
            - hunt: convert <PREY> into <FOOD>
                objective: [$FIND <PREY>, $HUNT <PREY>]
            - buy: convert <MONEY> into <FOOD>, requires a @SHOP
                objective: [[$FIND @SHOP, $FIND <MONEY>], $CONVERT <MONEY> ]
        - $HUNT <PREY> 
            - hunt (base)
                objective: [$KILL <PREY>]
            - night hunt
                objective: [$WAITFOR @NIGHT, $FIND <PREY>, $KILL <PREY>] 
            - pack hunt - requires @PACK
                objective: [$FIND <PREY>, $PACK_HUNT <PREY>, $KILL <PREY>] 
            - lure
                objective: [$LURE <PREY>, $KILL <PREY>] 
        - $KILL <PREY>: 
                objective: [$COMBAT <PREY>]
        - $COMBAT <?>: 
            - base:
                objective: [($ATTACK <PREY>, $DEFEND <PREY>, $FLEE)]
            - full on attack 
                objective: [(...base, $STANCE(Attack))]
            - pack attack:
                objective: [(...base, $PACK_ATTACK(Attack))]
        - $PACK_HUNT <PREY>: grants bonus/malus 
        - $CONSUME <FOOD> => new state: { !FOOD-- !WATER+  HP+}
        

    
## Steps
    - select top NEED
    - set 


    ### Reassess needs (bounced)
        if top need has changed, reset tasks
    ### complete current task. if present, return
    ### choose a new task
        - 

## Needs 
    first analyse the current top need
    
    ```
    food, safety, sleep, 
    mating, relax, fun, health 
    social status, friends, love, revenge 
    money
    ```
## Objective
    an objective that is set according to the priority of the needs

    ```
    (need: food) find food
    (need: safety) defend
    (need: money) find a job, 
    ```
## Strategies
    (obj: find food) forager, hunter, scavenger
    (obj: defend) attack, run, feign death
## Tactic
    (strat: forager) herbivore
    (strat: hunter) hide, hunting pack,
    (strat: attack) attack from behind, distract
    (strat: run) distract, run
## Task
    move
    turn
    attack
    roam
    hide
    

