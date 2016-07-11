import {merge, equals, is} from "ramda"

const isObject = is(Object)

export function mergeIntoEntity(entityA, entityB, entityKey) {
  var key;

  for (key in entityB) {
    if (!entityB.hasOwnProperty(key)) {
      continue;
    }

    if (!entityA.hasOwnProperty(key) || equals(entityA[key], entityB[key])) {
      entityA[key] = entityB[key];
      continue;
    }

    if (isObject(entityA[key]) && isObject(entityB[key])) {
      merge(entityA[key], entityB[key])
      continue;
    }

    console.warn('Unequal data!');
  }
}

