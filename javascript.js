"use strict";



//$(function() {
$(document).ready(function() {
	var topics=[
	'Blade Runner',
	'Felix the Cat',
	'Winston Churchill',
	'Mickey Mouse'];
	var ImagesArr=[];

	const Buttons=$("#Buttons");
	const addTopic=$("#addTopic")
	const Images=$("#Images");

	console.log(topics.join('|'));
	
	topics.forEach(function(x,i){
		Buttons.append($("<button>").attr("value",i).text(x));
	});

	$("button").click(function(){
		ImagesArr=[];
		var Text=$(this).text();
		//console.log(Text);
		var	queryURL = "https://api.giphy.com/v1/gifs/search?q="+
			Text.replace(/\s/g,'+')+
			"&limit=10&api_key=dc6zaTOxFJmzC";
			$.ajax({url: queryURL,method: 'GET'})
			.done(function(response) {
   				response.data.forEach(function(x){
   					console.log(x.rating);
					console.log(x.images.original_still.url);
					console.log(x.images.original.url);
				});
   			});
	});

	addTopic.click(function(){
		var newTopic=$("#topic-input").val().replace(/^\s+|\s+$/g,'');

		if( newTopic=="") {
			return;
		}
		console.log(Buttons.html());

		Buttons.append($("<button>").attr("value",topics.length).text(newTopic));
		console.log(Buttons.html());

		topics.push(newTopic);

		alert(      topics.join('|'));
		$("button").click(function(){
			var Text=$(this).text();
			console.log(Text);
		});
	});
	
});