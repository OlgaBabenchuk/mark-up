$(document).ready(function() {

  /*   toggle sidebar menu   */

  $(".mob-trigger").on("click", function() {
    $("body").toggleClass('menu-open');
    $(this).toggleClass('mob-trigger-close');
  });

  /*  settings for select block item  */

  $(".profiles__item").on("click", function() {    
    $(this).toggleClass('profiles__item--selected');
  });

  /*  adding "..." to the long text */
  
  $(".text p").each(function(){
  var review_full = $(this).html();
    var review = review_full;
    if( review.length > 150 )
    {
      review = review.substring(0, 150);
      $(this).html( review + ' ...' );
    }
  });
});
