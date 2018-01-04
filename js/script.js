
var min = 1;
var max = 3;
var scoreOrdinateur = Math.floor(Math.random()* (max - min + 1))+ min;
console.log(scoreOrdinateur);
window.onload = function(){
   document.getElementById("1").addEventListener("click",function(){ alert("t'as clické sur le 1!");
    });
  }
