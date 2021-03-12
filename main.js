$( function () {
//Click su next
var $next =  $('.next');
var $prev = $('.prev');
 $next.click(
  function() {
    var imgAct = $('.images img.active');
    imgAct.removeClass('active');
    if ( imgAct.hasClass('last') == true ) {
      $('.images img.first').addClass('active');
    } else {
      imgAct.next().addClass('active');
    }
  }
 );

 $prev.click(
   function () {
     
   }
 );



}
);
