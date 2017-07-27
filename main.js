$(document).ready(function(){
	$(".dropdown-button").dropdown();

	$('.slider').slider();

});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

