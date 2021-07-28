$('.food-posts, .people-posts').hide();

$(".item").click(function() {
  $(".item").removeClass('sub-active');
  const menuCurrent = $(this).attr('id');
  $("#" + menuCurrent).addClass('sub-active');
  showMenu(menuCurrent);
});

function showMenu(className) {
  $(".place-posts, .food-posts, .people-posts").hide();
  $("." + className).show();
}
