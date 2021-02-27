//Global Variables
const intro = document.getElementById('intro');
const navBar = document.querySelectorAll('nav ul a');
const introLink = document.querySelector('#intro a');
const formResponse = document.querySelector('.form-response');
let num = 1;

//Initialize DOM Styling functions
function init() {
  intro.style.width = document.body.offsetWidth + 'px';
  intro.style.height = window.innerHeight + 'px';
  if (formResponse) {
    formResponse.style.display = 'none';
  }
}

init();

function animateScroll(item) {
  const attr = item.getAttribute('href');
  const pageDiv = document.getElementById(attr.slice(1));
  const divLoc =
    pageDiv.getBoundingClientRect().top +
    window.pageYOffset -
    document.documentElement.clientTop;
  const scroll =
    window.scrollY < divLoc
      ? scrollDirection(divLoc, true)
      : scrollDirection(divLoc, false);
}

function scrollDirection(el, op) {
  const scrollInterval = setInterval(() => {
    if (op && Math.round(window.scrollY) < Math.floor(el)) {
      window.scrollBy(0, step(el, op));
    } else if (!op && Math.round(window.scrollY) > Math.round(el)) {
      window.scrollBy(0, step(el, op));
    } else {
      clearInterval(scrollInterval);
      num = 1;
    }
  }, 1);
}

function step(el, op) {
  if (!op) {
    if (window.pageYOffset > el / 2) {
      num++;
      return (1 + ((1 - num) * (1 - num)) / 1000) * -1;
    } else {
      num--;
      return (1 + ((1 - num) * (1 - num)) / 1000) * -1;
    }
  } else {
    if (window.pageYOffset < el / 2) {
      num++;
      return 1 + ((1 - num) * (1 - num)) / 1000;
    } else {
      num--;
      return 1 + ((1 - num) * (1 - num)) / 1000;
    }
  }
}

//Event listeners

//navbar scroll click
for (const link of navBar) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    animateScroll(link);
  });
}

//Chrome remembers the location of the browser window - this will disable
window.addEventListener('beforeunload', () => {
  console.log('Unload Triggered');
  window.scrollTo(0, 0);
});

//Resize background on window size change
window.addEventListener('resize', () => {
  intro.style.width = document.body.offsetWidth + 'px';
  intro.style.height = window.innerHeight + 'px';
});

/*$('nav ul li a, .intro a').on('click',function (e) {
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
}*/
