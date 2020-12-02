$(document).ready(function () {
	'use strict';

	var currentTheme = localStorage.getItem('theme');
	var toggleSwitch = document.querySelector('#theme-btn');

	if (currentTheme) {
		document.documentElement.setAttribute('data-theme', currentTheme);

		if (currentTheme === 'dark') {
			toggleSwitch.checked = true;
		}
	} else {
		localStorage.setItem('theme', 'light');
		currentTheme = localStorage.getItem('theme');
		document.documentElement.setAttribute('data-theme', currentTheme);
	}
	function switchTheme(e) {
		if (e.target.checked) {
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	}
	if (toggleSwitch) {
		toggleSwitch.addEventListener('change', switchTheme, false);
	}

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