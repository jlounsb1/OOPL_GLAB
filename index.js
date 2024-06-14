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
        this.companion=this.companion;
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


