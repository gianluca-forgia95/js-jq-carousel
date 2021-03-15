$( function () {
//Funzioni utili

//Next/Prev img functions
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



//Next/Prev circle functions
function nextCircle() {
 var circleAct = $('.nav i.active');
 circleAct.removeClass('active');
  if ( circleAct.hasClass('last') == true) {
    $('.nav i.first').addClass('active');
   } else {
    circleAct.next().addClass('active');
   }
}

function prevCircle() {
  var circleAct = $('.nav i.active');
  circleAct.removeClass('active');
  if ( circleAct.hasClass('first') == true) {
   $('.nav i.last').addClass('active');
  } else {
    circleAct.prev().addClass('active');
  }
}


//variabili utili
 var $next =  $('.next');
 var $prev = $('.prev');



//Click sul next
 $next.click(
   function () {
    nextImg();
    nextCircle();

   }
  
);

//Click sul prev
 $prev.click(
   function () {
     prevImg();
     prevCircle();
   }
);
//keydown





}
);
