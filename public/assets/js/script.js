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
    var sendForm = formValidate($this);
    console.log(sendForm);
});

function formValidate(form){
	$('input').each(function(){
		var returnVal = false;
 		var input = $(this);
 		var name = input.attr('name');
 		//Checks for numbers not being in Name, this is due to me receiving a lot of spam with random strings in the Name column
		var num = /([0-9])+/g;
		//Email regular expression - 90/10 rule to prevent anything else being added in.	
		var email= /^\S+@\S+\.\S+$/;
		if (name === 'name' && input.val().match(num)){
			alert('Please enter a proper name!');
		} else if(name === 'email' && !input.val().match(email)){
			alert('Please enter an email address');
		} else if($('textarea').val() === ''){
			alert('Please add a Message');
		} else {
			var returnVal = true;
		}
		/*else {
			$.ajax({
	       		type: 'POST',
			    url: form.attr('action'),
			    data: form.serialize(),
			    success : function(data){
					form.hide();
					$('.contact-form').load('/thanks.html .form-response');
			    }
	    	});
		}*/
	return returnVal;
	});
}