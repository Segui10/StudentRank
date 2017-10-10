
'use strict';
import Person from './person.js';
var newimp = 0;
var students = [
  new Person("Paco", "Vañó", 5),
  new Person("Lucia", "Botella", 10),
  new Person("German", "Ojeda", 3),
  new Person("Salva", "Peris", 1),
  new Person("Oscar", "Carrion", 40),
];

function getRanking(students) {
  var cont = -1;
  students.sort(function(a, b) {
    return (b.points - a.points)
  });

  var studentsEl = document.getElementById("llistat");
  while (studentsEl.firstChild) {
    studentsEl.removeChild(studentsEl.firstChild);
    newimp=0;
  }
  students.forEach(function(studentItem) {
    console.log(studentItem);
    cont=cont+1;
    var liEl = document.createElement("tr");
    var t = document.createTextNode(studentItem.surname + ", " + studentItem.name + ", " + studentItem.points + " "); // Create a text node
    liEl.appendChild(t);

    var addPointsEl = document.createElement("button");
    var tb = document.createTextNode("+10");
    addPointsEl.appendChild(tb);
    
    
    studentsEl.appendChild(liEl).setAttribute("id","tr"+cont);
    liEl.appendChild(addPointsEl);

    addPointsEl.addEventListener("click", function() {
     
      studentItem.addPoints(10);
      sumPoint(students);
    });

  });

}

function newMark(students){
  var test = document.getElementById("newmark");
  var NewMark = document.createElement("button");
  var tb = document.createTextNode("New Mark");
  NewMark.appendChild(tb);
  test.appendChild(NewMark);

  test.addEventListener("click", function() {
   Task(students);
   newimp++;
  });
}

window.onload = function() {
  newMark(students);
  getRanking(students);
  sumTask(students);
}

function Task(students){
  var cont = 0;
  students.forEach(function() {
    var idtr = document.getElementById("tr"+cont);
    var td = document.createElement("td"); 
    td.setAttribute("id", cont+"td"+newimp)
    idtr.appendChild(td);

    var idtd = document.getElementById(cont+"td"+newimp);
    var inp = document.createElement("INPUT");
    inp.setAttribute("type", "number");
    inp.setAttribute("value", "0");
    inp.setAttribute("id", cont+"imp"+newimp)
    idtd.appendChild(inp);
    cont++;
  });
}

function sumTask(students){
  var test = document.getElementById("sum");
  var sumt = document.createElement("button");
  var tb = document.createTextNode("Add points");
  sumt.appendChild(tb);
  test.appendChild(sumt);
  test.addEventListener("click", function() {
    sumPoint(students);
   });
}

function sumPoint(students){
  var cont = 0;
  var arrP={};
  students.forEach(function(studentItem) {
    for(var i=0;i<newimp;i++){
      var points = document.getElementById(cont+"imp"+i).value;
      studentItem.addPoints(eval(points));
    }  
    cont++;
  });
  setTimeout(function(){getRanking(students)},1000);
}