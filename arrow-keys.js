'use strict';

const Person = function () {
  this.name = 'Bob';
  this.getKeys = function() {
    console.log(this.name);
  }
}

const Alena = new Person();
const getKeys = Alena.getKeys;
getKeys();

// What is the output?