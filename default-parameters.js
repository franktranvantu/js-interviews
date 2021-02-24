'use strict';

function greet(name = 'Frank', timeOfDay = 'Day') {
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet( 'Afternoon');

// What is the output?