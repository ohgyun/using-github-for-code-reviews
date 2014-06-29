var fruits = ['apple', 'banana', 'cherry', 'grape', 'mango'];

function findFruitsStartWith(char) {
  for (i = 0; i < fruits.length; i++) {
    if (fruits[i].indexOf(char) === 0) {
      return fruits[i];
    }
  }
}

function findFruitsEndWith(char) {
  var len = fruits.length,
    i = 0,
    regex = new RegExp(char + '$');

  for (; i < len; i++) {
    if (regex.test(fruits[i])) {
      return fruits[i];
    }
  }
}

console.log(findFruitsStartWith('c'));
console.log(findFruitsEndWith('e'));

