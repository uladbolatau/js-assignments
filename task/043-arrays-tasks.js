// Задача 1
// Дан массив элементов [1, 2, 3, 4, 5]
// Проверить, содержит ли массив элемент, который вводит пользователь.
// Если содержит, то вывести "Да", иначе "Нет"

function task1(arr, n) {
  return arr.includes(n);
}

// Задача 2
// Создать два любых массива. Проверить содержит ли второй массив хотя бы один элемент из первого массива.

function task2(arr1, arr2) {
  return arr2.some(function(element) {
    return arr1.includes(element);
  });
}

// Задача 3
// Создать два любых массива. Проверить содержит ли второй массив все элементы из первого массива.

function task3(arr1, arr2) {
  return arr2.every(function(element) {
    return arr1.includes(element);
  });
}

// Задача 4
// Создать массив. Изменить порядок элементов в массиве на обратный и вывести массив.

function task4(arr) {
  return arr.reverse();
}

// Задача 5
// Создать массив из четного количества элементов. Поменять местами элементы в каждой паре элементов.
// Например, [1, 2, 3, 4, 5, 6] => [2, 1, 4, 3, 6, 5]

function task5(arr) {
  return arr.map(function(element, index) {
    return index % 2 === 0 ? arr[index + 1] : arr[index - 1];
  });
}

// Задача 6
// Создать массив. Удадить из него элемент, который вводит пользователь.

function task6(arr, n) {
  return arr.filter(function(element) {
    return !n.includes(element);
  });
}

// Задача 7
// Создать массив с дублями. Удалить из него все элементы, которые такие же как вводт пользователь.
// Например, [1, 2, 2, 3, 2, 5] и число 2 => [1, 3, 5]

function task7(arr, n) {
  return arr.filter(function(element) {
    return element !== n;
  });
}

// Задача 8
// Создать массив, который содержит числа и строки. Скопировать числа во второй массив. Из первого массива
// числа удалить.

// Go to 042-array-tests.js task8

// Задача 9
// Создать массив строк. Строки, которые начинаются на букву 's' скопировать во второй массив.
// Строки, которые заканчиваются на 'y' или 'e' удалить из массива.

// Go to 042-array-tests.js task9

// Задание 10
// Создать массив чисел. Удалить из него числа, которые больше 100.

// Go to 042-array-tests.js task10

// Задача 11
// Создать массив слов. Найти первый индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

function task11(arr, n) {
  return [arr.indexOf(n)];
}

// Задача 12
// Создать массив слов. Найти последний индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

function task12(arr, n) {
  return [arr.lastIndexOf(n)];
}

// Задача 13
// Создать массив слов. Найти первый и последний индекс слова в массиве, которое вводит пользователь.
// Записать эти индексы во второй массив. Если эти индексы совпадают, вывести нет дублей,
// иначе вывести есть дубли

function task13(arr, n) {
  var nArr = [arr.indexOf(n)];

  nArr.push(arr.lastIndexOf(n));

  return nArr[0] === nArr[1] && nArr[0] !== -1;
}

// Задание 14
// Создать массив слов. Пользователь вводит слово. Найти индекс второго вхождения слова в массив.
// Например, a = ['zzz', 'xxx', 'zzz', 'zzz'], s = 'zzz', результат 2

function task14(arr, n) {
  var counter = 0;
  return arr.findIndex(function(element) {
    if (n === element) {
      counter++;

      return counter === 2;
    }

    return false;
  });
}

// Задание 15
// Создать массив слов. Пользователь вводит слово. Найти индекс к-того вхождения слова в массив.

function task15(arr, n, k) {
  var counter = 0;

  return arr.findIndex(function(element) {
    if (n === element) {
      counter++;

      return counter === k;
    }

    return false;
  });
}

// Задание 16
// Создать массив слов. Пользователь вводит два числа. Скопировать во второй массив часть массива
// начиная с индекса = первое число и заканчивая инексом = второе число.

function task16(arr, start, end) {
  return arr.slice(start, end);
}

// Задание 17
// Создать массив слов с дублями. Пользователь вводит слово. Скопировать во товрой массив
// часть массива, которая начинается с индекса - первое вхождение слова и по индекс - последнее
// вхождение слова.

function task17(arr, n) {
  return arr.slice(arr.indexOf(n), arr.lastIndexOf(n) + 1);
}

// Задание 18
// Создать массив с дублями. На его основе создать второй массив без дублей.

function task18(arr) {
  return arr.filter(function(element, index) {
    return arr.indexOf(element) === index;
  });
}

// Задание 19
// Создать массив с числами и словами. Скопироать во второй массив часть массива начиная с первого числа
// и заканчивая последним числом.

function task19(arr) {
  var start = -1,
    end = -1;

  arr.forEach(function(element, index) {
    if (typeof element === "number" && !isNaN(element)) {
      if (start !== -1) {
        end = index + 1;
      } else {
        start = index;
      }
    }
  });

  return arr.slice(start, end);
}

// Задание 20
// Создать массив из 10 слов. Создать массив из 5 чисел от 0 до 9. Создать третий пустой массив.
// Из первого массива скопировать в третий массив все слова, начиная с каждого индекса,
// который находится во втором массиве.
// Например
// a = ['a', 'b', 'c', 'd'], b = [3, 2, 2, 1, 0];
// c = ['d', 'c', 'd', 'c', 'd', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

function task20(arr1, arr2) {
  return arr2
    .map(function(element) {
      return arr1.slice(element);
    })
    .flat();
}

// Задача 21
// Создать массив слов. Найти первый индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

// Go to 043-array-tests.js task11

// Задача 22
// Создать массив слов. Найти последний индекс слова в массиве, которое вводит пользователь.
// Записать этот индекс во второй массив. Вывести второй массив в консоль.

// Go to 043-array-tests.js task12

// Задача 23
// Создать массив слов. Найти первый и последний индекс слова в массиве, которое вводит пользователь.
// Записать эти индексы во второй массив. Если эти индексы совпадают, вывести нет дублей,
// иначе вывести есть дубли

// Go to 043-array-tests.js task13

// Задание 24
// Создать массив слов. Пользователь вводит слово. Найти индекс второго вхождения слова в массив.
// Например, a = ['zzz', 'xxx', 'zzz', 'zzz'], s = 'zzz', результат 2

// Go to 043-array-tests.js task14

// Задание 25
// Создать массив слов. Пользователь вводит слово. Найти индекс к-того вхождения слова в массив.

// Go to 043-array-tests.js task15

// Задание 26
// Создать массив слов. Пользователь вводит два числа. Скопировать во второй массив часть массива
// начиная с индекса = первое число и заканчивая инексом = второе число.

// Go to 043-array-tests.js task16

// Задание 27
// Создать массив слов с дублями. Пользователь вводит слово. Скопировать во товрой массив
// часть массива, которая начинается с индекса - первое вхождение слова и по индекс - последнее
// вхождение слова.

// Go to 043-array-tests.js task17

// Задание 28
// Создать массив с дублями. На его основе создать второй массив без дублей.

// Go to 043-array-tests.js task18

// Задание 29
// Создать массив с числами и словами. Скопироать во второй массив часть массива начиная с первого числа
// и заканчивая последним числом.

// Go to 043-array-tests.js task19

// Задание 10
// Создать массив из 10 слов. Создать массив из 5 чисел от 0 до 9. Создать третий пустой массив.
// Из первого массива скопировать в третий массив все слова, начиная с каждого индекса,
// который находится во втором массиве.
// Например
// a = ['a', 'b', 'c', 'd'], b = [3, 2, 2, 1, 0];
// c = ['d', 'c', 'd', 'c', 'd', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

// Go to 043-array-tests.js task20

module.exports = {
  task1: task1,
  task2: task2,
  task3: task3,
  task4: task4,
  task5: task5,
  task6: task6,
  task7: task7,
  task11: task11,
  task12: task12,
  task13: task13,
  task14: task14,
  task15: task15,
  task16: task16,
  task17: task17,
  task18: task18,
  task19: task19,
  task20: task20,
};
