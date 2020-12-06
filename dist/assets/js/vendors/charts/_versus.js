'use strict';

var myChart = echarts.init(document.getElementById('versus'));
var height = document.getElementById('versus').offsetHeight;
var width = document.getElementById('versus').offsetWidth;

var radiusMax = width >= height ? height : width;

if (localStorage.getItem('player1') === null) {
	localStorage.setItem('player1', 'flamengo');
}
if (localStorage.getItem('player2') === null) {
	localStorage.setItem('player2', 'corinthians');
}

if (localStorage.getItem('pvBg') === null) {
	localStorage.setItem('pvBg', './assets/img/bg.png');
}
if (localStorage.getItem('jsonUrl') === null) {
	localStorage.setItem('jsonUrl', 'campeonato-brasileiro');
}
var SaveIcon = './assets/img/screenshot.svg';
GetVersus(localStorage.getItem('jsonUrl'), localStorage.getItem('player1'), localStorage.getItem('player2'), localStorage.getItem('pvBg'));
myChart.showLoading();
function GetVersus(url, pl1, pl2, bg) {
	$.get('./assets/data/' + url + '.json', function (data) {
		var p1Data = [];
		var p2Data = [];
		var dataNames = [];
		dataNames.push(data.dataNames);
		//console.log(dataNames)
		$.each(data.players, function (i, v) {
			if (v.identy == pl1) {
				p1Data.push(v);
			}
		});
		$.each(data.players, function (i, v) {
			if (v.identy == pl2) {
				p2Data.push(v);
			}
		});

		var player1Names = '';
		var player2Names = '';
		var colorItems = '';
		var bgItems = '';

		for (var i = 0; i < data.players.length; i++) {
			if (data.players[i].identy != pl2) {
				player1Names += '<div class="item" data-value="' + data.players[i].identy + '"><i class="icon circle" style="color:#2B81EE"></i>' + data.players[i].name + '</div>';
			}
		}
		$('.pl1 .menu').html(player1Names);

		for (var i = 0; i < data.players.length; i++) {
			if (data.players[i].identy != pl1) {
				player2Names += '<div class="item" data-value="' + data.players[i].identy + '"><i class="icon circle" style="color:#69C8A1"></i>' + data.players[i].name + '</div>';
			}
		}
		$('.pl2 .menu').html(player2Names);

		for (var i = 0; i < data.colors.length; i++) {
			colorItems += '<div class="item" data-value="' + data.colors[i].value + '"><i class="icon circle" style="color:' + data.colors[i].value + '"></i>' + data.colors[i].name + '</div>';
		}

		$('.color .menu').html(colorItems);

		for (var i = 0; i < data.bg.length; i++) {
			bgItems += '<div class="item" data-value="' + data.bg[i].value + '"><i class="icon circle" style="color:' + data.bg[i].value + '"></i>' + data.bg[i].name + '</div>';
		}

		$('.bg .menu').html(bgItems);

		var option = {
			baseOption: {
				textStyle: {
					fontFamily: 'Exo_2Bold, sans-serif'
				},
				color: ['#2B81EE', '#69C8A1'],
				tooltip: {
					show: false
				},
				toolbox: {
					itemSize: 40,
					tooltip: {
						show: true,
						backgroundColor: '#fff',
						textStyle: {
							fontSize: 12,
							color: '#000'
						},
						extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // user-defined CSS styles
					},
					feature: {
						saveAsImage: {
							name: p1Data[0].name + '-x-' + p2Data[0].name + '-Ao-Vivo-Online',
							show: true,
							pixelRatio: 1,
							icon: 'image://' + SaveIcon + ''
						}
					},
					bottom: 0,
					right: 20,
					zlevel: 999,
					z: 999
				},
				graphic: {
					elements: [{
						type: 'image',
						style: {
							image: p1Data[0].image,
							width: 180,
							height: 180
						},
						left: '5%',
						top: 'center',
						zlevel: 1
					}, {
						type: 'image',
						style: {
							image: p2Data[0].image,
							width: 180,
							height: 180
						},
						right: '4.3%',
						top: 'center',
						zlevel: 1
					}, {
						type: 'image',
						id: 'logo',
						right: 0,
						top: 0,
						z: -10,
						bounding: 'raw',
						origin: [0, 0],
						style: {
							image: bg,
							width: width,
							height: 360
						}
					}]
				}
			}
		};
		myChart.setOption(option);
		myChart.hideLoading();
	});
}

$('.pl1').dropdown({
	onChange: function onChange(value) {
		localStorage.setItem('player1', value);
		GetVersus(localStorage.getItem('jsonUrl'), value, localStorage.getItem('player2'), localStorage.getItem('pvBg'));
	}
}).dropdown('set selected', localStorage.getItem('player1'));

$('.pl2').dropdown({
	onChange: function onChange(value) {
		localStorage.setItem('player2', value);
		GetVersus(localStorage.getItem('jsonUrl'), localStorage.getItem('player1'), value, localStorage.getItem('pvBg'));
	}
}).dropdown('set selected', localStorage.getItem('player2'));
$('.select-category').dropdown({
	onChange: function onChange(value) {
		localStorage.setItem('jsonUrl', value);
		GetVersus(value, localStorage.getItem('player1'), value, localStorage.getItem('pvBg'));
	}
}).dropdown('set selected', localStorage.getItem('player2'));
function encodeImgtoBase64(element) {

	var img = element.files[0];

	var reader = new FileReader();

	reader.onloadend = function () {

		$("#convertImg").attr("href", reader.result);

		$("#convertImg").text(reader.result);

		$("#displayImg").attr("src", reader.result);
		localStorage.setItem('pvBg', reader.result);
		GetVersus(localStorage.getItem('jsonUrl'), localStorage.getItem('player1'), localStorage.getItem('player2'), reader.result);
		//console.log(reader.result)
	};
	reader.readAsDataURL(img);
}