
var min = 1;
var max = 3;
var scoreOrdinateur = Math.floor(Math.random()* (max - min + 1))+ min;
console.log(scoreOrdi);
function clickUtilisateur(block){
  clickUtil=block.getAttribute('id');
  if (clickUtil == scoreOrdi) {
    alert("bien ouej !!");
  }else{
    alert("dommage !");
  }
}
