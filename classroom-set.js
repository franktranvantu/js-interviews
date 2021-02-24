'use strict';

let classroom = new Set();

const frankA = {
  name: 'Frank',
  age: 29
},
henry = {
  name: 'Henry',
  age: 34
};

classroom.add(frankA);
classroom.add(henry);
classroom.add(frankA);

console.log(`classroom size: ${classroom.size}`);

// What is the output?