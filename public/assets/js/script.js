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
		dataType: 'json',
		type: 'POST',
		url: $this.attr('action'),
		data: data,
		success : function(response){
			console.log('success response')
			console.log("Response is: "+response);
			if (!response) {
				console.log('Yes! This worked.');
                $this.hide();
				$('.form-response').show();
            } else {
            	$.each(response, function(i, v) {
	        		console.log(i + " => " + v); // view in console for error messages
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