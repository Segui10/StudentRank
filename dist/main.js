(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

'use strict';

var _person = require('./person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newimp = 0;
var students = [new _person2.default("Paco", "Vañó", 5), new _person2.default("Lucia", "Botella", 10), new _person2.default("German", "Ojeda", 3), new _person2.default("Salva", "Peris", 1), new _person2.default("Oscar", "Carrion", 40)];

function getRanking(students) {
  var cont = -1;
  students.sort(function (a, b) {
    return b.points - a.points;
  });

  var studentsEl = document.getElementById("llistat");
  while (studentsEl.firstChild) {
    studentsEl.removeChild(studentsEl.firstChild);
    newimp = 0;
  }
  students.forEach(function (studentItem) {
    console.log(studentItem);
    cont = cont + 1;
    var liEl = document.createElement("tr");
    var t = document.createTextNode(studentItem.surname + ", " + studentItem.name + ", " + studentItem.points + " "); // Create a text node
    liEl.appendChild(t);

    var addPointsEl = document.createElement("button");
    var tb = document.createTextNode("+10");
    addPointsEl.appendChild(tb);

    studentsEl.appendChild(liEl).setAttribute("id", "tr" + cont);
    liEl.appendChild(addPointsEl);

    addPointsEl.addEventListener("click", function () {

      studentItem.addPoints(10);
      sumPoint(students);
    });
  });
}

function newMark(students) {
  var test = document.getElementById("newmark");
  var NewMark = document.createElement("button");
  var tb = document.createTextNode("New Mark");
  NewMark.appendChild(tb);
  test.appendChild(NewMark);

  test.addEventListener("click", function () {
    Task(students);
    newimp++;
  });
}

window.onload = function () {
  newMark(students);
  getRanking(students);
  sumTask(students);
};

function Task(students) {
  var cont = 0;
  students.forEach(function () {
    var idtr = document.getElementById("tr" + cont);
    var td = document.createElement("td");
    td.setAttribute("id", cont + "td" + newimp);
    idtr.appendChild(td);

    var idtd = document.getElementById(cont + "td" + newimp);
    var inp = document.createElement("INPUT");
    inp.setAttribute("type", "number");
    inp.setAttribute("value", "0");
    inp.setAttribute("id", cont + "imp" + newimp);
    idtd.appendChild(inp);
    cont++;
  });
}

function sumTask(students) {
  var test = document.getElementById("sum");
  var sumt = document.createElement("button");
  var tb = document.createTextNode("Add points");
  sumt.appendChild(tb);
  test.appendChild(sumt);
  test.addEventListener("click", function () {
    sumPoint(students);
  });
}

function sumPoint(students) {
  var cont = 0;
  var arrP = {};
  students.forEach(function (studentItem) {
    for (var i = 0; i < newimp; i++) {
      var points = document.getElementById(cont + "imp" + i).value;
      studentItem.addPoints(eval(points));
    }
    cont++;
  });
  setTimeout(function () {
    getRanking(students);
  }, 1000);
}

},{"./person.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Person prototype. We store personal information and points that reflect daily classroom job
 *
 * @constructor
 * @param {string} name - Person name
 * @param {string} surname - Person surname
 * @param {number} points - Person points 
 * @tutorial pointing-criteria
 */

var Person = function () {
  function Person(name, surname, points) {
    _classCallCheck(this, Person);

    this.name = name;
    this.surname = surname;
    this.points = points;
    //anefds  
  }

  _createClass(Person, [{
    key: "addPoints",
    value: function addPoints(points) {
      this.points = eval(this.points + points);
    }
  }]);

  return Person;
}();

exports.default = Person;

},{}]},{},[1]);
