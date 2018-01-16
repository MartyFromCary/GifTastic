"use strict";

const topics = [
    'Blade Runner',
    'Felix the Cat',
    'Winston Churchill',
    'Mickey Mouse'
];

var divButtons
var addTopic;
var divImages;

function loadImages(name) {
    $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?limit=10&api_key=dc6zaTOxFJmzC&q=" +
                name.replace(/\s/g, '+'),
            method: 'GET'
        })
        .done(function(response) {
            divImages.empty();
            response.data.forEach(function(x) {
                divImages
                .append(
                    $("<div>")
                    .append(
                    	$("<h3>")
                    		.text("Rating: " + x.rating)
                    		)
                    .append(
                    		$("<img>")
                    			.attr("src", x.images.original_still.url)
                    			.attr("alt", x.images.original.url)
                    			)
                	)
            });
            $("img").click(function() {
                var src = $(this).attr("src");
                var alt = $(this).attr("alt");

                $(this).attr("src", alt).attr("alt", src);
            });
        });
}

$(function() {
    divButtons = $("#divButtons");
    addTopic = $("#addTopic")
    divImages = $("#divImages");

    topics.forEach(function(text) {
        divButtons.append($("<button>").text(text));
    });

    addTopic.click(function(event) {
        event.preventDefault();
        var text = $("#topic-input").val().replace(/^\s+|\s+$/g, '').replace(/\s\s+/g, ' ');

        if (text == "") {
            return;
        }

        divButtons.append($("<button>").text(text));

        $("button").click(function() {
            loadImages($(this).text());
        });
    });

    $("button").click(function() {
        loadImages($(this).text());
    });

});