
var min = 1;
var max = 3;
var scoreOrdinateur = Math.floor(Math.random()* (max - min + 1))+ min;
console.log(scoreOrdinateur);
document.getElementById("1").addEventListener("click",function(){ alert("t'as clické sur le 1!"); });
document.getElementById("2").addEventListener("click",function(){ alert("t'as clické sur le 2!"); });
document.getElementById("3").addEventListener("click",function(){ alert("t'as clické sur le 3!"); }); 
