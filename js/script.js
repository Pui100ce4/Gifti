var min = 1;
var max = 3;
var scoreOrdi = Math.floor(Math.random()* (max - min + 1))+ min;
console.log(scoreOrdi);
/*function clickUtilisateur(block){
  clickUtil=block.getAttribute('id');
  clickOrdi=document.getElementById("choixOrdi");

  // console.log(clickOrdi)
  if (clickUtil == scoreOrdi) {
    console.log("match nul !!");

  }else if(clickUtil==1 && scoreOrdi==3) {
    console.log("c'est gagné, c'est gagné !!");
    clickOrdi.document.write('<div><img src="../img/pierre.png" style="height: 20%;width: 20%;"><img src="../img/ciseaux.png"style="height: 20%;width: 20%;"></div>');
  }else if(clickUtil==2 && scoreOrdi==1) {
    console.log("c'est gagné, c'est gagné !!");
    clickOrdi.document.write('<div><img src="../img/feuille.png" style="height: 20%;width: 20%;"><img src="../img/pierre.png"style="height: 20%;width: 20%;"></div>');
  }else if(clickUtil==3 && scoreOrdi==2) {
    console.log("c'est gagné, c'est gagné !!");
    clickOrdi.document.write('<div><img src="../img/ciseaux.png" style="height: 20%;width: 20%;"><img src="../img/feuille.png"style="height: 20%;width: 20%;"></div>');
  }else if(clickUtil==1 && scoreOrdi==2) {
    console.log("c'est perdu, c'est perdu !!");
    // document.getElementById("choixOrdi").document.write("<img src='../img/feuille.png'");
  }else if(clickUtil==2 && scoreOrdi==3) {
    console.log("c'est perdu, c'est perdu !!");
    // document.getElementById("choixOrdi").document.write("<img src='../img/feuille.png'");
  }else if(clickUtil==3 && scoreOrdi==1) {
    console.log("c'est perdu, c'est perdu !!");
    // document.getElementById("choixOrdi").document.write("<img src='../img/feuille.png'");
  }
}*/
var vous;
var ordi;
function VotreChoix(v){
vous=v;document.votreChoix.src='choix'+v+'.png';
Choixordi();
}

function choixOrdi(){
ordi=Math.round(Math.random()*2)+1;
document.choixOrdi.src='choix'+ordi+'.png';
Pipaci();
}

function Pipaci(){
if((vous==1) && (ordi==3) || (vous==2) && (ordi==1) || (vous==3) && (ordi==2))
{alert('BRAVO!!!!');document.votreChoix.src="choix.gif";document.choixOrdi.src="choix.gif";}
else{Ordipipaci();}
}

function Ordipipaci(){
if((ordi==1) && (vous==3) || (ordi==2) && (vous==1) || (ordi==3) && (vous==2))
{alert('PERDU!!!!');document.votreChoix.src="choix.gif";document.choixOrdi.src="choix.gif";}
else{alert('AOUCH!\nA REFAIRE!');document.votreChoix.src="choix.gif";document.choixOrdi.src="choix.gif";}
}
