"use strict";
var list = [];
var i, y = 0;
var namestr;
function addTask(task) {
    var counter = 0;
    list.push(task);
    console.log(task + " was added to the array");
    for (i = 0; i < list.length; i++) {
        counter++;
    }
    console.log(counter);
}
function listAllTask() {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        console.log(item);
    }
}
function deleteTask(search) {
    var index = list.indexOf(search);
    if (index > -1) {
        list.splice(index, 1);
    }
    return list.length;
}
addTask("hello");
addTask("mike");
addTask("hammer");
listAllTask();
var show = deleteTask("mike");
console.log(show);
listAllTask();
