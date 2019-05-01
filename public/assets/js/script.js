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

$('form').on('submit', function(e){
	e.preventDefault();
	$this = $(this);
    $.ajax({
       type: 'POST',
       url: $this.attr('action'),
       data: $this.serialize(),
       success : function(data){
		$('form').hide();
		$('.contact-form').load('/thanks.html .form-response');
       }
    });
});