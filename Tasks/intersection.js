// Finde an intersection of two dictionaries
'use strict';

const dictIntersection = (object1, object2) => {
  const resultObject = {};
  for (const key of Object.keys(object1)) {
    if (object2[key]) {
      resultObject[key] = object1[key];
    }
  }
  return resultObject;
}

const result = dictIntersection({ a: 'uno', b: 'due' }, { a: 'uno', c: 'tre' });
console.log(result);
