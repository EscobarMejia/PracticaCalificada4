// Se crea la Clase Pokémon
class Pokemon {
    constructor(HP, ataque, defensa) {
        this.HP = HP;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimiento = "";
        this.nivel = 1;
        this.tipo = "";
    }

    flight() {
        throw new Error("No se especifica ningún movimiento.");
    }

    canFly() {
        if (!this.tipo) {
            throw new Error("No se especificó ningún tipo.");
        }
        return this.tipo.includes("flying");
    }
}

// Clase Charizard que hereda de Pokemon
class Charizard extends Pokemon {
    constructor(HP, ataque, defensa, movimiento) {
        super(HP, ataque, defensa);
        this.movimiento = movimiento;
        this.tipo = "flying";
    }

    fight() {
        if (this.movimiento) {
            console.log(`Utilizando el movimiento: ${this.movimiento}`);
            return this.ataque;
        } else {
            throw new Error("No se especifica ningún movimiento.");
        }
    }
}

// Ejemplo de uso
try {
    const charizard = new Charizard(78, 84, 78, "Lanza llamas");
    console.log(charizard.canFly()); // Debería devolver true, ya que el tipo incluye "flying"
    console.log(charizard.fight()); // Debería imprimir que se está utilizando el movimiento y devolver el ataque
} catch (error) {
    console.error(error.message);
}
