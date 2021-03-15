var $inputBlue = $('.nav i');
//al click dei bullett assegno la rispettiva immagine
$inputBlue.click(
  function () {
    //Variabili utili
    var img = $('.images img');
    var circle = $inputBlue;
    //Associo l'indice dei tasti a quello delle immagini
    var indexOfImg = circle.index($(this));
    //Rimuovo la classe active ai children di nav
    $('.nav').children().removeClass('active');
    //Aggiungo la classe active con this
    $(this).addClass('active');
    //rimuovo la classe dalle immagini
    img.removeClass('active');
    //La aggiungo a tutte con eq
    img.eq(indexOfImg).addClass('active');
  }
);

//keydown
$(document).keydown(
  function(e) {
  if (e.wich == 37) {
  prevImg();
  prevCircle();  
  }
  }
);
