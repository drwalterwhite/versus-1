$(document).ready(function () {
	'use strict';

	$(".ui.accordion").accordion();

	function chartResize() {
		var allCharts = $('.chartli');
		for (var i = 0; i < allCharts.length; i++) {
			var $item = $(allCharts[i]);
			echarts.getInstanceById($item.attr('_echarts_instance_')).resize();
		}
	}
	$(document).ready(function () {
		setTimeout(chartResize, 300);
	});
	$(window).on('load', function () {
		setTimeout(chartResize, 300);
		setTimeout(function () {
			$('#loaderInner').fadeOut('fast');
		}, 500);
	});

	window.onresize = function () {
		setTimeout(chartResize, 300);
	};

	$(function () {
		var $sidebar = $(".side-menu");
		$(".toggle-sidebar").on("click", function () {
			setTimeout(chartResize, 300);
			if ($sidebar.hasClass("collapse")) {
				localStorage.setItem("collapse", "false");
				$sidebar.removeClass("collapse");
			} else {
				localStorage.setItem("collapse", "true");
				$sidebar.addClass("collapse");
			}
		});
	});

	$(".nav-menu .ui.dropdown").dropdown({
		on: 'hover'
	});

	$('.special.cards .image').dimmer({
		on: 'hover'
	});
});