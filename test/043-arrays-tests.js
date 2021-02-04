"use strict";

var assert = require("assert");
var tasks = require("../task/043-arrays-tasks");
it.optional = require("../extensions/it-optional");

describe("043-arrays-tasks", function() {
    it.optional("task1", function() {
        [
            {
                arr: [1, 2, 3, 4, 5],
                n: 3,
                expected: true,
            },
            {
                arr: [1, 2, 3, 4, 5],
                n: -1,
                expected: false,
            },
        ].forEach((data) => {
            var actual = tasks.task1(data.arr, data.n);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task2", function() {
        [
            {
                arr1: [1, 2, 3, 4, 5],
                arr2: [1, 2, 3, 4, 5],
                expected: true,
            },
            {
                arr1: [1, 2, 3, 4, 5],
                arr2: [6, 7, 8, 9, 0],
                expected: false,
            },
            {
                arr1: [1, 2, 3, 4, 5],
                arr2: [1],
                expected: true,
            },
        ].forEach((data) => {
            var actual = tasks.task2(data.arr1, data.arr2);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task3", function() {
        [
            {
                arr1: [1, 2, 3, 4, 5, 6, 7],
                arr2: [1, 2, 3, 4, 5],
                expected: true,
            },
            {
                arr1: [2, 3, 4, 5],
                arr2: [1, 2, 3, 4, 5],
                expected: false,
            },
            {
                arr1: [1, 2, 3, 4, 5],
                arr2: [1],
                expected: true,
            },
        ].forEach((data) => {
            var actual = tasks.task3(data.arr1, data.arr2);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task4", function() {
        [
            {
                arr: [1, 2, 3, 4, 5],
                expected: [5, 4, 3, 2, 1],
            },
            {
                arr: ["a", "b", "c"],
                expected: ["c", "b", "a"],
            },
            {
                arr: [],
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task4(data.arr);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task5", function() {
        [
            {
                arr: [1, 2, 3, 4, 5, 6],
                expected: [2, 1, 4, 3, 6, 5],
            },
            {
                arr: ["a", "b", "c", "d", "e", "f"],
                expected: ["b", "a", "d", "c", "f", "e"],
            },
            {
                arr: ["a", "b"],
                expected: ["b", "a"],
            },
            {
                arr: [],
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task5(data.arr);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task6", function() {
        [
            {
                arr: [1, 2, 3, 4, 5, 6],
                n: [4, 5, 6],
                expected: [1, 2, 3],
            },
            {
                arr: [1, 2, 3, 4, 5],
                n: [6, 7],
                expected: [1, 2, 3, 4, 5],
            },
            {
                arr: [1, 2],
                n: [],
                expected: [1, 2],
            },
            {
                arr: [],
                n: [1, 2],
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task6(data.arr, data.n);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task7", function() {
        [
            {
                arr: [1, 2, 2, 3, 2, 5],
                n: 2,
                expected: [1, 3, 5],
            },
            {
                arr: [1, 2, 3, 4, 5, 1],
                n: 1,
                expected: [2, 3, 4, 5],
            },
            {
                arr: [1, 2],
                n: 3,
                expected: [1, 2],
            },
            {
                arr: [],
                n: 2,
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task7(data.arr, data.n);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task11", function() {
        [
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "asd",
                expected: [1],
            },
            {
                arr: ["qwe", "qwe", "asd", "zxc", "asd"],
                n: "asd",
                expected: [2],
            },
            {
                arr: ["qwe", "asd", "zxc"],
                n: "rty",
                expected: [-1],
            },
            {
                arr: [],
                n: "qwe",
                expected: [-1],
            },
        ].forEach((data) => {
            var actual = tasks.task11(data.arr, data.n);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task12", function() {
        [
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "asd",
                expected: [3],
            },
            {
                arr: ["qwe", "qwe", "asd", "zxc", "asd"],
                n: "qwe",
                expected: [1],
            },
            {
                arr: ["qwe", "asd", "zxc"],
                n: "rty",
                expected: [-1],
            },
            {
                arr: [],
                n: "qwe",
                expected: [-1],
            },
        ].forEach((data) => {
            var actual = tasks.task12(data.arr, data.n);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task13", function() {
        [
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "asd",
                expected: false,
            },
            {
                arr: ["qwe", "qwe", "asd", "zxc", "asd"],
                n: "qwe",
                expected: false,
            },
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "rty",
                expected: false,
            },
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "zxc",
                expected: true,
            },
            {
                arr: [],
                n: "qwe",
                expected: false,
            },
        ].forEach((data) => {
            var actual = tasks.task13(data.arr, data.n);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task14", function() {
        [
            {
                arr: ["zzz", "xxx", "zzz", "zzz"],
                n: "zzz",
                expected: 2,
            },
            {
                arr: ["qwe", "asd", "zxc", "qwe", "asd"],
                n: "qwe",
                expected: 3,
            },
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "rty",
                expected: -1,
            },
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "zxc",
                expected: -1,
            },
            {
                arr: [],
                n: "qwe",
                expected: -1,
            },
        ].forEach((data) => {
            var actual = tasks.task14(data.arr, data.n);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task15", function() {
        [
            {
                arr: ["zzz", "xxx", "zzz", "zzz"],
                n: "zzz",
                k: 3,
                expected: 3,
            },
            {
                arr: ["qwe", "asd", "zxc", "qwe", "asd"],
                n: "qwe",
                k: 1,
                expected: 0,
            },
            {
                arr: ["qwe", "asd", "zxc", "asd"],
                n: "rty",
                k: 1,
                expected: -1,
            },
            {
                arr: ["zxc", "qwe", "asd", "zxc", "asd"],
                n: 3,
                expected: -1,
            },
        ].forEach((data) => {
            var actual = tasks.task15(data.arr, data.n, data.k);
            assert.equal(data.expected, actual);
        });
    });

    it.optional("task16", function() {
        [
            {
                arr: ["qwe", "asd", "zxc", "qwe", "asd"],
                start: 1,
                end: 4,
                expected: ["asd", "zxc", "qwe"],
            },
            {
                arr: ["qwe", "asd", "zxc", "qwe", "asd"],
                start: 1,
                end: 6,
                expected: ["asd", "zxc", "qwe", "asd"],
            },
            {
                arr: ["qwe", "asd", "zxc", "qwe", "asd"],
                start: 3,
                end: 3,
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task16(data.arr, data.start, data.end);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task17", function() {
        [
            {
                arr: ["asd", "qwe", "asd", "qwe", "zxc", "qwe", "asd"],
                n: "qwe",
                expected: ["qwe", "asd", "qwe", "zxc", "qwe"],
            },
            {
                arr: ["asd", "zxc", "qwe", "asd"],
                n: "qwe",
                expected: ["qwe"],
            },
            {
                arr: ["asd", "qwe", "asd", "qwe", "asd"],
                n: "zxc",
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task17(data.arr, data.n);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task18", function() {
        [
            {
                arr: [0, 1, 2, 2, 3, 4, 2, 5],
                expected: [0, 1, 2, 3, 4, 5],
            },
            {
                arr: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
                expected: [0, 1, 2, 3, 4, 5],
            },
            {
                arr: [0, 1, 2, 3, 4, 5],
                expected: [0, 1, 2, 3, 4, 5],
            },
        ].forEach((data) => {
            var actual = tasks.task18(data.arr);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task19", function() {
        [
            {
                arr: ["qwe", "asd", 1, 2, 3, 4, 5, "qwe", "asd"],
                expected: [1, 2, 3, 4, 5],
            },
            {
                arr: [0, "qwe", 1, "asd", 2, 3, "asd"],
                expected: [0, "qwe", 1, "asd", 2, 3],
            },
            {
                arr: [NaN, "qwe", 1, "asd", 2, 3, "asd"],
                expected: [1, "asd", 2, 3],
            },
            {
                arr: ["asd", "zxc", "qwe", "asd"],
                expected: [],
            },
        ].forEach((data) => {
            var actual = tasks.task19(data.arr);
            assert.deepEqual(data.expected, actual);
        });
    });

    it.optional("task20", function() {
        [
            {
                arr1: ["a", "b", "c", "d"],
                arr2: [3, 2, 2, 1, 0],
                expected: [
                    "d",
                    "c",
                    "d",
                    "c",
                    "d",
                    "b",
                    "c",
                    "d",
                    "a",
                    "b",
                    "c",
                    "d",
                ],
            },
            {
                arr1: ["a", "b", "c", "d"],
                arr2: [1, 2, 3, 4, 5],
                expected: ["b", "c", "d", "c", "d", "d"],
            },
        ].forEach((data) => {
            var actual = tasks.task20(data.arr1, data.arr2);
            assert.deepEqual(data.expected, actual);
        });
    });
});
