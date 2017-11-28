$(".burger-menu").on("click", function(){
  var animation = $(this).data("menu-animation");
  console.log(animation);
  if (!animation) {
    console.log('coucou');
    animation = 'transition-basic2';
  }
  $(this).stop().toggleClass(animation);
});