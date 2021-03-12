var $inputBlue = $('.nav i');

$inputBlue.click(
  function () {
    var img = $('.images img');
    var circle = $inputBlue;
    var indexOfImg = circle.index($(this));
    $('.nav').children().removeClass('active');
    $(this).addClass('active');
    img.removeClass('active');
    img.eq(indexOfImg).addClass('active');
  }
);
