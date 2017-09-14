window.onload = function() {

  var menu = document.getElementsByClassName('mob-trigger')[0];
  var body = document.getElementsByTagName('BODY')[0];
  var item = document.getElementsByClassName('profiles__item');
  var pagraph = document.getElementsByClassName('text');

  /*   toggle sidebar menu   */
  function toggleMenu(){
    body.classList.toggle('menu-open');
    this.classList.toggle('mob-trigger-close');
  }

  menu.addEventListener("click", toggleMenu);

  /*  settings for select block item  */
  function setItem(){
    this.classList.toggle('profiles__item--selected');
  }

  [].forEach.call(item, function(e) {
    e.addEventListener("click", setItem);
  });

  /*  adding "..." to the long text */
  [].forEach.call(pagraph, function(e) {
    var review_full = e.innerHTML;
    var review = review_full;
    if( review.length > 150 )
    {
      review = review.substring(0, 150);
      e.innerHTML = review + ' ...';
    }
  });
}
