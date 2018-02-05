"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.list = [];
    }
    //let i:number=0;
    //let namestr:String;
    myClass.prototype.addTask = function (task) {
        var counter = 0;
        this.list.push(task);
        console.log(task + " was added to the array");
        var i = 0;
        for (i = 0; i < this.list.length; i++) {
            counter++;
        }
        console.log(counter);
    };
    myClass.prototype.listAllTask = function () {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (search) {
        var index = this.list.indexOf(search);
        if (index > -1) {
            this.list.splice(index, 1);
        }
        return this.list.length;
    };
    return myClass;
}());
var hype = new myClass();
hype.addTask("oscar");
hype.addTask("mike");
hype.listAllTask();
