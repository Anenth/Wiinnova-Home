'use strict';
$(document).ready(function(){

	$(function() {

		var height = $(window).innerHeight();
		var body = $('body');
		$('.main > section').css('min-height',height);
		$(window).scroll(function() {
			var page = body.scrollTop()/height | 0;
			body.attr('class','viewingPage'+ page);
		});
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				|| location.hostname == this.hostname) {

				var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
		var map;
		function initialize() {
			var myLatLng = new google.maps.LatLng(11.264949, 75.794967);
			var mapOptions = {
				zoom: 13,
				center: myLatLng,
				disableDefaultUI: true,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: false,
				scaleControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

			var marker = new google.maps.Marker({
				position: myLatLng,
				map: map,
				title: 'Wiinnova Software Labs Pvt Ltd'
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);

	});


$('#ajax-contact-form').submit(function(e) {
	e.preventDefault();
	$('#note').html('<div> Please wait </div>');
	$('#ajax-contact-form').css('opacity',.4);
	Parse.initialize('6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw', 'cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe');
	var Message = Parse.Object.extend('WiinnovaContact');
	var message = new Message();
	message.save({
		name: $('#inputName').val(),
		email: $('#inputEmail').val(),
		subject: $('#inputSubject').val(),
		message: $('#inputMessage').val(),
	},{
		success: function(object) {
			$('#note').html('<div>Your message has been sent. Thank you!</div>');
			$('#ajax-contact-form').hide();
		},error: function() {
			$('#note').html('<div class="notification_error">Sorry, there is some technical issue with the server <br> Please Try again later</div>');
		}
	});
});
});