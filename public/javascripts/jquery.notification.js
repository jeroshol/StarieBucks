/*
 * jQuery Notification
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 *
 */
(function($) {

	$.notification = function(message, settings) {
		
		if( message === '' || message === undefined || message === null ) return;
		
		// Merge settings with defaults
		settings = $.extend(true, {
			className: 'jquery-notification',
			duration: 2000,
			freezeOnHover: false,
			hideSpeed: 250,
			position: 'center',
			showSpeed: 250,
			zIndex: 99999
		}, settings);
		
		// Skip the animation if a notification is already showing
		if( $('#jquery-notification').length > 0 ) settings.showSpeed = 0;
		
		// Clear old notifications
		$('#jquery-notification').remove();
		
		// Variables
		var width, height, top, left,
			windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			timeout,
			notification = $('<div id="jquery-notification" />');
		
		function hide() {
			clearTimeout(timeout);
			notification.fadeOut(settings.hideSpeed, function() {
				$(this).remove();
			});
		}
		
		// Create it
		notification.appendTo($('BODY')).addClass(settings.className).html(message).css({
			position: 'fixed',
			display: 'none',
			zIndex: settings.zIndex
		}).mouseover(function () {
			if (settings.freezeOnHover) clearTimeout(timeout);
			$(this).addClass(settings.className + '-hover');
		}).mouseout(function () {
			$(this).removeClass(settings.className + '-hover');
			if (settings.freezeOnHover) {
				timeout = setTimeout(hide, settings.duration);
			}
		}).click(hide).wrapInner('<div id="jquery-notification-message" />');

		// Position it
		width = notification.outerWidth();
		height = notification.outerHeight();

		switch( settings.position ) {
			case 'top':
				top = 0;
				left = windowWidth / 2 - width / 2;
				break;
			case 'top-left':
				top = 0;
				left = 0;
				break;
			case 'top-right':
				top = 0;
				left = windowWidth - width;
				break;
			case 'bottom':
				top = windowHeight - height;
				left = windowWidth / 2 - width / 2;
				break;
			case 'bottom-left':
				top = windowHeight - height;
				left = 0;
				break;
			case 'bottom-right':
				top = windowHeight - height;
				left = windowWidth - width;
				break;
			case 'left':
				top = windowHeight / 2 - height / 2;
				left = 0;
				break;
			case 'right':
				top = windowHeight / 2 - height / 2;
				left = windowWidth - width;
				break;
			default:
			case 'center':
				top = windowHeight / 2 - height / 2;
				left = windowWidth / 2 - width / 2;
				break;
			}
		
		// Show it
		notification.css({
			top: top,
			left: left
		}).fadeIn(settings.showSpeed, function() {
			// Hide it
			timeout = setTimeout(hide, settings.duration);
		});
		
	};

})(jQuery);