var fruits = ['apple', 'banana', 'cherry', 'grape', 'mango'];

function findFruitsStartWith(char) {
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i].indexOf(char) === 0) {
      return fruits[i];
    }
  }
}

function findFruitsEndWith(char) {
  return fruits.length;
}

console.log(findFruitsStartWith('c'));
console.log(findFruitsEndWith('e'));

