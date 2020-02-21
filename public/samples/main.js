var dataSource = {
			"title": "The Space Above",
    		"introPitch": "An educational one-page application that allows users to view information about the stars and planets above any specified location. With this app, users have the opportunity to explore &ldquo;the space above&rdquo; them.",
    		"content": [{
    			"info":"Working  with other developers we were tasked up to come up with an idea for a simple front-end based web application. We came up with idea for &ldquo;The Space Above&rdquo;. This was based on the concept of letting the user know where they were in relation to the stars at any given point and could be pulled up from anywhere on the web."
    		},{
    			"info": "I consumed the Astropical API and created the code that populated the coordinates based on your location, and then created a table of stars to be able to look up and see what you were you were looking and helped both in implementing the D3 star maps and integrating with Wikipedia API."
    		}],
    		"links":[{
    			"url": "https://github.com/chriskelsey/the-space-above",
    			"urlName": "GitHub Location",
    		},{
    			"url": "https://chriskelsey.github.io/the-space-above/",
    			"urlName": "Live Site"
    		}],
    		"builtWith":[{
    			"Framework":["Bootstrap"],
    			"APIs":["Wikipedia","Google Geocode", "Astropical"],
    			"Libraries": ["D3.js", "jQuery"]
    		}]
		}

const queryString = window.location.search;

title = dataSource.title.toLowerCase().replace(/\s/g,'-'));

const template = $('#detailedDescription').html();
const compile = Handlebars.compile(template);
const result = compile(dataSource);
$('#detail').html(result);
