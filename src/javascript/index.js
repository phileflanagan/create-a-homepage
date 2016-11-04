$(function() {

//Animations based on scroll position
$(window).scroll(() => {
  let scrollDist = $(this).scrollTop();
  let animationCueDist = $(window).height() / 1.33; // one-third in window

  if(scrollDist > $('#team-row').offset().top - animationCueDist) {
    $('#team-row figure').each(i => {
      setTimeout(() => {
        $('#team-row figure').eq(i).addClass('is-showing');
      }, 200 * i); //Offset each animation by 200milliseconds
    });
  }
});

});
