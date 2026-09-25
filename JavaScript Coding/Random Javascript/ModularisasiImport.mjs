import { name, favoriteFood } from './ModularisasiHarmonis.mjs';

console.log(name);
console.log(favoriteFood);

import {} from './';

import unique from './utils.mjs';

unique();

/**
 * TODO:
 * 1. Impor fungsi unique dari utils.mjs secara default
 * 2. Impor fungsi splitString dari utils.mjs secara named
 *
 * Catatan.
 * Jangan ubah kode apa pun yang sudah tersedia sebelumnya
 */

export function splitString(str) {   //Importnya harus pakai function
  return str.split('');
}

export default function unique(arr) {
  return Array.from(new Set(arr));
}

const string = 'saippuakivikauppias';
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);



class Animal {
  constructor(name, age, isMamal){
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  }
}

class Rabbit extends Animal{
  constructor(name, age){
    super(name, age, true);
  }
  eat(){
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal{
constructor(name, age){
  super(name, age, false);
}

fly(){
  return `${this.name} sedang terbang!`;
}
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log(myRabbit.eat());
console.log(myEagle.fly());



class Animal {
  constructor(name, age, isMamal){
    this.name = name;
    this.age = age;
    this.isMamal = isMamal;
  }
}

class Rabbit extends Animal{
  eat(){
    return `${this.name} sedang makan!`;
  }
}

class Eagle{
  constructor(name, age, isMamal){
    this.name =name;
  }
fly(){
 return `${this.name} sedang terbang!`;
}
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log(myRabbit.eat());
console.log(myEagle.fly());

console.log(myRabbit instanceof Animal);
console.log(myEagle instanceof Animal);