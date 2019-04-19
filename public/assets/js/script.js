$(document).ready(function() {
	$('.intro').css({
		'width'  : $(window).width(),
		'height' : $(window).height()
	});
});

$('nav ul li a, .intro a').on('click',function (e) {
	var div = $(this).attr('href');
	console.log(div);
    $('html,body').animate({
        scrollTop: $(div).offset().top,
        duration: 'slow',
        method: 'swing'
    });
    e.preventDefault();
});

$('button').on('click', function(){
	$('form').hide();
	$('.contact-form').load('/thanks.html');
});