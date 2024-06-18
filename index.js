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
    static MAX_HEALTH(){
        this.health =100
    }
}

// const robin = new Character("Robin");
// robin.inventory = ['sword', 'potion', 'artifact'];
// robin.companion = new Character("Leo");
// robin.companion.type= "Cat";
// robin.companion.companion = new Character('Frank');
// robin.companion.companion.type='Flea';
// robin.companion.companion.inventory = ['small hat', 'sunglasses'];

// console.log(robin);
// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

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
    duel(Adventurer) {
        // let superRoll = this.super.roll();
        // let AdventurerRoll = Adventurer.super.roll();
        while(Adventurer.health &&this.health >50){
            let superRoll = this.roll();
            let AdventurerRoll =Adventurer.roll();
            if(superRoll>AdventurerRoll){
                Adventurer.health-=1;
            } else this.health-=1;
        }
        if(Adventurer.health>this.health){
            
            console.log(`${Adventurer.name} won the duel.`) 
            return Adventurer.health
        } else{
            console.log(Adventurer.health, this.health)
            console.log(`${this.name} won the duel.`) 
            return this.health
        }
    }
    static ROLES(role){
        role=['Fighter', 'Healer', 'Wizard'];
        if(role != 'Fighter'||'Healer'||'Wizard'){console.log(`please choose one of the three classes: Fighter, Healer, Wizard`)}
    }
}

class companion extends Character {
    constructor(name) {
        super(name)
        this.inventory.push('map', 'backpack', 'compass')
    }
    lost(){
        console.log(`${this.name} hands you the map and the compass so you can find your way.`)
    }
}

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

  const fighters = new AdventurerFactory("Fighter");
  const greg =fighters.generate("Greg");

  const wizards = new AdventurerFactory("Wizard");
  const karen = wizards.generate("Karen");

  console.log(healers)
  console.log(healers.adventurers[0].inventory)

  console.log(fighters)
  console.log(fighters.adventurers[0].inventory)

  console.log(wizards)
  console.log(wizards.adventurers[0].inventory)

//when i run either the roll method, or the duel method I am getting an error saying they are not functions...
// console.log(robin)
// console.log(healers.adventurers[0])
healers.adventurers[0].duel(wizards.adventurers[0])
