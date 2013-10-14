'use strict';
$(document).ready(function(){

	$(function() {

		var height = $(window).innerHeight();
		$('.main > section').css('min-height',height);
		$('body').scrollspy({ target: '#nav' ,offset: '50px'})
		$('[data-spif (true) {} else{};y="scroll"]').each(function () {
		  var $spy = $(this).scrollspy('refresh');
		  console.log($spy);
		})
/*		$(window).scroll(function() {

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
	});*/
	});
	
	$('#ajax-contact-form').submit(function(e) {
		e.preventDefault();

		Parse.initialize('6qhUFEXtzdSTLwzG9VMeCU5oFaTWtgelh61unUiw', 'cTi3fECgna7cBjeYdyNIA6qnjehp1O8Ldrs8c5pe');
		var Message = Parse.Object.extend('Messages_From_Showcase');
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