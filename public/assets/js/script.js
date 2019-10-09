$(document).ready(function() {
	$('.intro').css({
		'width'  : $(window).width(),
		'height' : $(window).height()
	});
	$('.form-response').hide();
});

$('nav ul li a, .intro a').on('click',function (e) {
	var div = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(div).offset().top,
        duration: 'slow',
        method: 'swing'
    });
    e.preventDefault();
});

$('form').on('submit', function(e){
	resetErrors();
	$this = $(this);
	var data = inputProcess();

	$.ajax({
		type: 'POST',
		url: $this.attr('action'),
		data: data,
		dataType: 'json',
		success : function(response){
			var k = Object.keys(response)[0];
			if ( k == 'content') {
                $this.fadeOut(250, function() {
                	$this.after('<div class="form-response"><p>' + 	response[k] + "</p></div>");
                });
            } else {
            	$.each(response, function(i, v) {
                	var msg = '<label class="error" for="'+i+'">'+v+'</label>';
                	$('input[name="' + i + '"], textarea[name="' + i + '"]').addClass('inputError').after(msg);
            	});
            }
		}
	});
	e.preventDefault();
});

function inputProcess(){
	var data = {};
	$('input, textarea').each(function(i,v){
		data[v.name] = v.value;
	});
	return data;
}

function resetErrors(){
	$('input, textarea').removeClass('inputError');
	$('label.error').remove();
}