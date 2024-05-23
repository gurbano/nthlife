# Modifiers

## Ability
    - canMove
    - canAttack
    - withStats

## State
    - withHealthState 
        health, stamina, max_health, fatigue etc etc
    - withWorldState
        position, direction, speed, accelleration

## Behaviour

    - withNeeds
        has needs. needs guide the free will choices
    - withBrain
        has brain

    - withFreeWill (combine Brain & Needs)
        will be ticked by the simul
    - withTasks, withTactics, withStrategy, withObjectives

    - noWill (only Needs)
        no brain but will be ticked by the simul


