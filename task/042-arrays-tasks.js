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
  arr.splice(arr.indexOf(n), 1);

  return arr;
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

function task8(arr) {
  var numArr = arr.filter(function(element, index) {
    return typeof element === "number" && !isNaN(element);
  });

  numArr.forEach(function(element) {
    arr.splice(arr.indexOf(element), 1);
  });

  return numArr;
}

// Задача 9
// Создать массив строк. Строки, которые начинаются на букву 's' скопировать во второй массив.
// Строки, которые заканчиваются на 'y' или 'e' удалить из массива.

function task9(arr) {
  var removedArr = arr.filter(function(element) {
    var length = element.length;

    return (
      element.charAt(length - 1) === "y" || element.charAt(length - 1) === "e"
    );
  });

  removedArr.forEach(function(element) {
    arr.splice(arr.indexOf(element), 1);
  });

  return arr.filter(function(element) {
    return element[0] === "s";
  });
}

// Задание 10
// Создать массив чисел. Удалить из него числа, которые больше 100.

function task10(arr) {
  var removedArr = arr.filter(function(element) {
    return element > 99;
  });

  removedArr.forEach(function(element) {
    arr.splice(arr.indexOf(element), 1);
  });

  return arr;
}

var task8Arr = [1, 2, 3, 4, 5, "a", "b", "c", NaN, undefined, false, {}],
  task9Arr = [
    "Will removed Loreme",
    "Will removed ipsumy",
    "sdolor",
    "sit",
    "amet",
    "Will removed sconsectetury",
    "adipiscing",
    "elit",
    "sed",
    "Will removed elite",
  ],
  task10Arr = [100, 2, 300, 400, 500, 6, 700, 8, 900, 10];

console.log(
  `Task 1\n  ${task1([1, 2, 3, 4, 5], 1)}\n  ${task1([1, 2, 3, 4, 5], 6)}`
);
console.log(
  `Task 2\n  ${task2(["a", "b", "c"], [1, 2, 3])}\n  ${task2(
    ["a", "b", "c"],
    [1, 2, 3, "a"]
  )}`
);
console.log(
  `Task 3\n  ${task3(["a", "b", "c", "d"], ["a", "b", "c"])}\n  ${task3(
    ["a", "b", "c"],
    ["a", "b", "c", "d"]
  )}`
);
console.log(`Task 4\n  ${task4([1, 2, 3, 4, 5, 6])}`);
console.log(`Task 5\n  ${task5([1, 2, 3, 4, 5, 6])}`);
console.log(`Task 6\n  ${task6([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`Task 7\n  ${task7([1, 2, 2, 3, 2, 5], 2)}`);
console.log(`Task 8\n  ${task8(task8Arr)}\n  ${task8Arr}`);
console.log(`Task 9\n  ${task9(task9Arr)}\n  ${task9Arr}`);
console.log(`Task 10\n  ${task10(task10Arr)}\n  ${task10Arr}`);
