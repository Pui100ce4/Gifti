$('.plateau').hide();
//$('.codeReduc').hide();
var chrono = $('#chrono');
var compteur =  5;

function decompte(){
    if(compteur >= 0){
       chrono.text("Vous pourrez jouer dans : " + compteur);
        compteur-- ;
      setTimeout(decompte,1000);
}
  if(compteur==0) {
     clearTimeout();
     $('.plateau').show();
   }
 }
var choix = [];

function ChoixJoueur(objImg){
      choix = objImg;
      $(".choix").attr({ src:choix, alt: "test"});
      if (stopJeux== true){
        return;
      }
}

var tabImg = [$('#pierre').attr('src'),$('#feuille').attr('src'),$('#ciseaux').attr('src')];

function ChoixOrdinateur() {
    rangAlea = tirage();
    var alea = tabImg[rangAlea];
    $('.choixOrdi').attr({src:alea});
}

function tirage() {
   carteAleatoire = Math.floor(Math.random()*tabImg.length);
  return carteAleatoire;
}

var pointsJ = 0;
var pointsO = 0;

var stopJeux=false;


function comparer(indiceChoix,indiceOrdi) {
  if ((indiceChoix==1) && (rangAlea==0)) {
    $('.res').text("Pierre et pierre, égalité !");
  }

  if ((indiceChoix==2) && (rangAlea==1)) {
    $('.res').text("Feuille et feuille, égalité !");
  }

  if ((indiceChoix==3) && (rangAlea==2)) {
    $('.res').text("Ciseau et ciseau, égalité !");
  }

  if ((indiceChoix==1) && (rangAlea==1)) {
    $('.res').text("Vainqueur : Ordinateur.");
    pointsO++;
  }

  if ((indiceChoix==2) && (rangAlea==2)) {
    $('.res').text("Vainqueur : Ordinateur.");
    pointsO++;
  }
  if ((indiceChoix==3) && (rangAlea==0)) {
    $('.res').text("Vainqueur : Ordinateur.");
    pointsO++;
  }
  if ((indiceChoix==1) && (rangAlea==2)) {
    $('.res').text("Vainqueur : Vous !");
    pointsJ++;
  }
  if ((indiceChoix==2) && (rangAlea==0)) {
    $('.res').text("Vainqueur : Vous!");
    pointsJ++;
  }
  if ((indiceChoix==3) && (rangAlea==1)) {
    $('.res').text("Vainqueur : Vous!");
    pointsJ++;
  }
  if (pointsJ==3){
    $('.res').text("vainqueur : vous gagner votre bon de reduc!");
    $('.codeReduc').css('display','block');
  }
  if (pointsO==3){
    $('.res').text("vainqueur : l'ordi gagne retentez votre chance");
    $('.reset').css('display','block');
  }

  $('.pointJoueur').text("Le joueur possède " + pointsJ + " point.");
  $('.pointOrdi').text("L'ordinateur possède " + pointsO + " point.");
}
function codeAlea(){
  var min = 0;
  var max =35;
  var chaineCarac = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  nb1= Math.floor(Math.random()* (max - min + 1))+ min;
  nb2= Math.floor(Math.random()* (max - min + 1))+ min;
  nb3= Math.floor(Math.random()* (max - min + 1))+ min;
  nb4= Math.floor(Math.random()* (max - min + 1))+ min;
  nb5= Math.floor(Math.random()* (max - min + 1))+ min;
  nb6= Math.floor(Math.random()* (max - min + 1))+ min;
  nb7= Math.floor(Math.random()* (max - min + 1))+ min;
  nb8= Math.floor(Math.random()* (max - min + 1))+ min;
  nb9= Math.floor(Math.random()* (max - min + 1))+ min;
  nb10= Math.floor(Math.random()* (max - min + 1))+ min;
  nb11= Math.floor(Math.random()* (max - min + 1))+ min;
  nb12= Math.floor(Math.random()* (max - min + 1))+ min;
    alert(chaineCarac[nb1]+chaineCarac[nb2]+chaineCarac[nb3]+chaineCarac[nb4]+" - "+chaineCarac[nb5]+chaineCarac[nb6]+chaineCarac[nb7]+chaineCarac[nb8]+" - "+chaineCarac[nb9]+chaineCarac[nb10]+chaineCarac[nb11]+chaineCarac[nb12]+" - 2018");
}
