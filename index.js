// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"]
//     }

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion :{
//             name: "Frank",
//             type: "Flea",
//             inventory:["hat","sunglasses"]
//         }
//     },
//     roll (mod=0) {
//         const result = Math.floor(Math.random()*20) +1+mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
//  }
// for(let i=0; i<adventurer.inventory.length;i++) {
//     console.log(adventurer.inventory[i])
// }

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

class Character {
    constructor(name) {
        this.name=name;
        this.health =100;
        this.inventory =[];
        
    }
    roll (mod=0) {
        const result = Math.floor(Math.random()*20) +1+mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ['sword', 'potion', 'artifact'];
robin.companion = new Character("Leo");
robin.companion.type= "Cat";
robin.companion.companion = new Character('Frank');
robin.companion.companion.type='Flea';
robin.companion.companion.inventory = ['small hat', 'sunglasses'];

console.log(robin);
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

class Adventurer extends Character {
    constructor(name, role){
        super(name);
        this.role=role;
        this.mana =100;
        this.healthPotion =4;
        this.inventory.push('bedroll', '50 gold coins');
    }
    scout(){
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
    drinkPotion(){
        if(this.health<25) {
            if(this.healthPotion>0){
                this.healthPotion =this.healthPotion-1;
                this.health=100;
            }
        }
        console.log(`${this.name} now has ${this.health}`);
    }
}
