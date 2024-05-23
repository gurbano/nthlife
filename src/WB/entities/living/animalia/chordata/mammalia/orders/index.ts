import { canMove } from "../../../../../../modifiers/canMove/canMove";
import { DefaultTMoveConfig } from "../../../../../../modifiers/canMove/defaults";
import { EOrderMammalia, Mammalia } from "../mammalia";

export class Primates extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Primates });
    }
}

export class Carnivora extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Carnivora });
    }
}

export class Rodentia extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Rodentia });
    }
}

export class Artiodactyla extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Artiodactyla });
    }
}

export class Cetacea extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Cetacea });
        return canMove(DefaultTMoveConfig.defaultSeaAnimal)(this);
    }
}

export class Chiroptera extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Chiroptera });
    }
}

export class Perissodactyla extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Perissodactyla });
    }
}

export class Proboscidea extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Proboscidea });
    }
}

export class Lagomorpha extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Lagomorpha });
    }
}

export class Sirenia extends Mammalia {
    constructor() {
        super({ order: EOrderMammalia.Sirenia });
    }
}
