Se crea la clase Pokemon:

```
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
```
Se crea la clase Charizard:
En esta clse de hereda de la clase pokemon
```
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
```