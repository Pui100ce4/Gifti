
var min = 1;
var max = 3;
var scoreOrdi = Math.floor(Math.random()* (max - min + 1))+ min;
console.log(scoreOrdi);
function clickUtilisateur(block){
  clickUtil=block.getAttribute('id');
  if (clickUtil == scoreOrdi) {
    console.log("match nul !!");

  }else if(clickUtil==1 && scoreOrdi==3) {
    console.log("c'est gagné, c'est gagné !!");
    document.getElementById("choixOrdi").document.write("<img src='../img/ciseaux.png'");
  }else if(clickUtil==2 && scoreOrdi==1) {
    console.log("c'est gagné, c'est gagné !!");
    document.getElementById("choixOrdi").document.write("<img src='../img/pierre.png'");
  }else if(clickUtil==3 && scoreOrdi==2) {
    console.log("c'est gagné, c'est gagné !!");
    document.getElementById("choixOrdi").document.write("<img src='../img/feuille.png'");
  }
}
