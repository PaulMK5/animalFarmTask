/*
Є ферма.
На фермі в нас є свійські тварини (корови, кози).
Є домашні тварини (кошки і собаки).
В кожної тварини є діти. В кожного з дітей може бути певна кількість дітей.
Реалізувати класи всіх тварин і додати тваринам рандомну кількість дітей.
Реалізувати функцію, яка підрахує кількість тварин на фермі.
створити масив
зробити Н кількість ітерацій
на кожній ітерації створювати нову тварину, їй теж створити кілька дітей і додавати її в масив
const ferma = [cats, dogs, cows]
*/

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Animal {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  /**
   *
   * @param {Animal} obj
   * @param {number} quantity
   * @param {boolean} nestedRnd
   */

  createChildren(quantity, nestedLvl) {
    for (let i = 0; i <= quantity; i++) {
      const Type = this.constructor;
      this.children.push(new Type(`${i + 1} child of a ${this.name}`));
      if (nestedLvl > 0) {
        this.children[i].createChildren(getRndInt(1, 3), --nestedLvl);
      }
    }
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cow extends Animal {
  constructor(name) {
    super(name);
  }
}

class Goat extends Animal {
  constructor(name) {
    super(name);
  }
}

function animalFactory(Type, num, nestedLvl) {
  const cowArray = [];
  for (let i = 1; i <= num; i++) {
    const newCow = new Type(`Parent ${Type.name} #${i}`);
    newCow.createChildren(getRndInt(1, 5), nestedLvl);
    cowArray.push(newCow);
  }
  return cowArray;
}

const farm = [
  ...animalFactory(Cow, 4, 2),
  ...animalFactory(Cat, 3, 2),
  ...animalFactory(Dog, 2, 2),
  ...animalFactory(Goat, 4, 2)
];

console.log(farm);

/*   Функція підрахунку кількості дітей */

function countChildren(animalArray, sum = 0) {
  for (let i = 0; i < animalArray.length; i++) {
    sum += animalArray[i].children.length;
    countChildren(animalArray[i].children);
  }
  return sum;
}

console.log(countChildren(farm));
