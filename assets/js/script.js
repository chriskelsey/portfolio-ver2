$(document).ready(function() {
	$('.intro').css({
		'width'  : $(window).width(),
		'height' : $(window).height()
	});
});

$('nav ul li a').on('click',function (e) {
	var div = $(this).attr('href');
	console.log(div);
    $('html,body').animate({
        scrollTop: $(div).offset().top},
'slow',easeInOutCirc);
    e.preventDefault();
});