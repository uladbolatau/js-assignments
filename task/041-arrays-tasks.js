"use strict";

// Задача 1
// Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// Вывести результат в консоль.

function task1(arr1, arr2) {
  return arr1.concat(arr2);
}

// Задача 2
// Дан массив ['a', 'b', 'c']. Добавить ему в конец элементы 1, 2, 3.
// Вывести массив в консоль.

function task2(arr, ...nums) {
  return arr.concat(Array.of(...nums));
}

// Задача 3
// Дан массив [1, 2, 3]. Создать второй массив,
// где элементы идут в обратном порядке [3, 2, 1].

function task3(arr) {
  return arr.reverse();
}

// Задача 4
// Дан массив [1, 2, 3]. Добавить ему в начало элементы 4, 5, 6.

function task4(arr, ...nums) {
  return Array.of(...nums).concat(arr);
}

// Задача 5
// Дан массив ['js', 'css', 'jq']. Удалить из массива первый элемент
// и вывести его в консоль.

function task5(arr) {
  return arr.shift();
}

// Задача 6
// Дан массив ['js', 'css', 'jq']. Удалить последний элемент
// и вывести его в консоль.

function task6(arr) {
  return arr.pop();
}

// Задача 7
// Дан массив [1, 2, 3, 4, 5]. Скопировать во второй массив первый и два последних элемента
// [1, 4, 5].

function task7(arr) {
  var indexes = [0, arr.length - 2, arr.length - 1];

  return arr.filter(function(element, index) {
    return indexes.includes(index);
  });
}

// Задача 8
// Даны массивы [1, 2, 3, 4, 5], ['a', 'b', 'c']
// Создайте третий массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function task8(arr1, arr2, index) {
  return arr1.slice(0, index).concat(arr2, arr1.slice(index - arr1.length));
}

// Задание 9
// Объявить два числовых массива по 10 элементов.
// Создать третий массив, который будет состоять из попарной суммы элементов первых двух массивов

function task9(arr1, arr2) {
  return arr1.map(function(element, index) {
    return element + arr2[index];
  });
}

// Задание 10
// Объявить массив слов из 5 слов.
// Создать второй массив, в который записать длину каждого слова.
// Подсчитать и вывести сумму элементов массива.

function task10(arr) {
  var sumArr = arr.map(function(element) {
      return element.length;
    }),
    sum = sumArr.reduce(function(sum, element) {
      return sum + element;
    }, 0);

  return `Array with words length: ${sumArr} and total sum is ${sum}`;
}

// Задание 11
// Объявить массив из 10 чисел.
// Создать новый массив, в который записать суммы двух сседних элементов из первого массива.

function task11(arr) {
  return arr.filter(function(element, index) {
    return index % 2 === 0 ? element + arr[index] : false;
  });
}

// Задание 12
// Объявить два массива строк по 5 элементов.
// Создать третий массив в который попеременно добавлять элемент из первого массива,
// затем из второго и снова из первого и т.д.

function task12(arr1, arr2) {
  return arr1
    .map(function(element, index) {
      return [element, arr2[index]];
    })
    .flat();
}

// Задание 13
// Объявить два массива чисел по 5 элементов.
// Создать третий масив, в который добавлять попеременно элемент из первого массива,
// последний элемент из второго массива, второй элемент из первого массива,
// предпоследний элемент из второго массива и т.д.

function task13(arr1, arr2) {
  return arr2.reverse().map(function(element, index) {
    return arr1[index];
  });
}

// Задание 14.
// Объявить массив из 10 чисел. Пользователь вводит число К от 2 до 5.
// Создать второй массив, в который записать сумму каждых К последовательных элементов.
// Например,
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const k = 4;
// const b = [1+2+3+4, 2+3+4+5, 3+4+5+6, 4+5+6+7, 5+6+7+8, 6+7+8+9, 7+8+9+10]

function task14(arr, k) {
  return arr
    .map(function(element, index, arr) {
      if (index + k <= arr.length) {
        return arr.slice(index, index + k).reduce(function(sum, value) {
          return sum + value;
        }, 0);
      }
    })
    .slice(0, -k + 1);
}

console.log(`Task 1\n  ${task1(["a", "b", "c"], [1, 2, 3])}`);
console.log(`Task 2\n  ${task2(["a", "b", "c"], 1, 2, 3)}`);
console.log(`Task 3\n  ${task3([1, 2, 3])}`);
console.log(`Task 4\n  ${task4([1, 2, 3], 4, 5, 6)}`);
console.log(`Task 5\n  ${task5(["js", "css", "jq"])}`);
console.log(`Task 6\n  ${task6(["js", "css", "jq"])}`);
console.log(`Task 7\n  ${task7([1, 2, 3, 4, 5])}`);
console.log(`Task 8\n  ${task8([1, 2, 3, 4, 5], ["a", "b", "c"], 3)}`);
console.log(
  `Task 9\n  ${task9(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  )}`
);
console.log(
  `Task 10\n  ${task10([
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
  ])}`
);
console.log(`Task 11\n  ${task11([11, 21, 31, 41, 51, 61, 71, 81, 91, 101])}`);
console.log(`Task 12\n  ${task12([1, 3, 5, 7, 9], [2, 4, 6, 8, 10])}`);
console.log(`Task 13\n  ${task13([1, 2, 3, 4, 5], [10, 9, 8, 7, 6])}`);
console.log(`Task 14\n  ${task14([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4)}`);
