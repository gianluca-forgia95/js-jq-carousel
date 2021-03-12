$( function () {
  //Variabili utili
  var clickNext = $('.next');
  var clickPrev = $('.prev');
  var imgAct = $('img.active');

  clickNext.click(
    function () {
    //Ptima tolgo la classe
    imgAct.removeClass('active');
    //Poi con next() la aggiungo per mostrare la successiva
    imgAct.next().addClass('active');
    }
  );


 clickPrev.click(
   function () {

   }
 );


}
);
