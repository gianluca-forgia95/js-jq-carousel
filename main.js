$( function () {
//Funzioni utili
function nextImg() {
  var imgAct = $('.images img.active');
  imgAct.removeClass('active');
  if ( imgAct.hasClass('last') == true ) {
    $('.images img.first').addClass('active');
  } else {
    imgAct.next().addClass('active');
  }
}

function prevImg() {
  var imgAct = $('.images img.active');
  imgAct.removeClass('active');
  if ( imgAct.hasClass('first') == true ) {
    $('.images img.last').addClass('active');
  } else {
    imgAct.prev().addClass('active');
  }
}

//variabili
 var $next =  $('.next');
 var $prev = $('.prev');

//Click sul next
 $next.click(
   function () {
    nextImg();
   }
);

//Click sul prev
 $prev.click(
   function () {
     prevImg();
   }
);




}
);
