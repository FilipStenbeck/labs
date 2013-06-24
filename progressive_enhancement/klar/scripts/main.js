$(document).ready(function () {
	"use strict";
	$('a').on('click', function (event) {
		var url;
		url = this.href;
		//url = event.target.href;
		event.preventDefault();
		$.get(url,function (aforism) {
			$('.container').append('<br> <cite>' + aforism + '<br> - Nietzsche </cite><br>');
		});
	});
});