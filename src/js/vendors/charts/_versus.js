'use strict';
var myChart = echarts.init(document.getElementById('versus'));
var height = document.getElementById('versus').offsetHeight;
var width = document.getElementById('versus').offsetWidth;

var bgPatternSrc =
	'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczpuczE9Imh0dHA6Ly9zb3ppLmJhaWVyb3VnZS5mciIgaWQ9InN2ZzIiIHZpZXdCb3g9IjAgMCAxMDAwIDc1MCIgdmVyc2lvbj0iMS4wIiBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkxIHIxMzcyNSI+CiAgPGRlZnMgaWQ9ImRlZnMyNyI+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50Mzc3OSIgeTI9IjM3NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgyPSIxZTMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLjc1IDAgMCAxLjMzMzMgLTc1MCAwKSIgeTE9IjM3NSI+CiAgICAgIDxzdG9wIGlkPSJzdG9wMzc3NSIgc3R5bGU9InN0b3AtY29sb3I6IzAwOWMwMCIgb2Zmc2V0PSIwIi8+CiAgICAgIDxzdG9wIGlkPSJzdG9wMzc3NyIgc3R5bGU9InN0b3AtY29sb3I6IzM4ZmYzOCIgb2Zmc2V0PSIxIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCBpZD0icmVjdDEzMTciIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzc5KSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwKSIgaGVpZ2h0PSIxZTMiIHdpZHRoPSI3NTAiIHk9IjAiIHg9Ii03NTAiLz4KICA8ZyBpZD0ibGF5ZXIxIiBzdHlsZT0iZmlsbC1vcGFjaXR5Oi41Ij4KICAgIDxwYXRoIGlkPSJwYXRoMzEyOCIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MSIgZD0ibTE1OS42NSAyNTMuNDVhMS40Njc3IDEuMzA0NiAwIDEgMSAtMi45MzU0IDAgMS40Njc3IDEuMzA0NiAwIDEgMSAyLjkzNTQgMHoiIHRyYW5zZm9ybT0ibWF0cml4KDIuNzI1NCAwIDAgMy4wNjYgLTI4NS4zNSAtNDAyLjA4KSIvPgogICAgPHBhdGggaWQ9InBhdGgyMTk2IiBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjMuMDA1MjtmaWxsOm5vbmUiIGQ9Im02Ni4xMTkgNTIyLjQ0aDEyMS4xN3YtMjkxLjU1aC0xMjAuNDUiLz4KICAgIDxwYXRoIGlkPSJwYXRoMjE5OCIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozLjAwNTI7ZmlsbDpub25lIiBkPSJtNjcuMDYgMzA3LjU0aDQyLjIwN2wtMS4zNjg4IDEzNC4xNC00Mi40MzItMC4wMDAwMiIvPgogICAgPHBhdGggaWQ9InBhdGgyMjAwIiBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjMuMDA1MjtmaWxsOm5vbmUiIGQ9Im02NC44MzUgMzQ4LjYxaC0yMS45djUzLjM4MmwyMS45LTAuMDAwMDIiLz4KICAgIDxwYXRoIGlkPSJwYXRoMjIwNiIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozLjAwNTI7ZmlsbDpub25lIiBkPSJtMTg3LjA2IDQyNy4zNGMzOC4zMjUtMjIuMjQyIDM2Ljc5My04Mi4zNTEtMC4xNjMzNy0xMDQuMjUiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzExNyIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozLjAwNTI7ZmlsbDpub25lIiBkPSJtNjYuODkyIDU4Ljc5MnM4LjA5MzgtMS45MzA2IDEwLjA5OS0xMC4zOTYiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzEyMCIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozLjAwNTI7ZmlsbDpub25lIiBkPSJtNzYuMzUgNzAyLjk0cy0xLjkzMDYtOC4wOTM4LTEwLjM5Ni0xMC4wOTkiLz4KICAgIDxwYXRoIGlkPSJwYXRoMzEyMiIgc3R5bGU9InN0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDozLjAwNTI7ZmlsbDpub25lIiBkPSJtOTM4LjAxIDY5Mi4wNXMtOC4wOTM4IDEuOTMwNi0xMC4wOTkgMTAuMzk2Ii8+CiAgICA8cGF0aCBpZD0icGF0aDIxOTQiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6My4wMDUyO2ZpbGw6bm9uZSIgZD0ibTY2LjU3OSA3MDIuNDN2LTY1NC4yN2w4NzAuNTQgMS4zNjg4IDEuMzY4OCA2NTIuOWgtODcxLjl6Ii8+CiAgICA8cGF0aCBpZD0icGF0aDIyMTIiIHN0eWxlPSJzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuNjA1NDtmaWxsOm5vbmUiIGQ9Im0zNzAuOTcgMjU0LjM5YTM0Ljg0MyAzNS41MjYgMCAxIDEgLTY5LjY4NiAwIDM0Ljg0MyAzNS41MjYgMCAxIDEgNjkuNjg2IDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgxLjkwODEgMCAwIDEuODcxNCAtMTQxLjM3IC0xMDEuMDcpIi8+CiAgICA8cGF0aCBpZD0icGF0aDMwOTEiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6My4wMDUyO2ZpbGw6bm9uZSIgZD0ibTkzOC4wMyA1MjIuNi0xMTguODgtMC4xNjMzNnYtMjkxLjU1aDExOC4zMyIvPgogICAgPHBhdGggaWQ9InBhdGgzMDkzIiBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjMuMDA1MjtmaWxsOm5vbmUiIGQ9Im05MzguMjMgMzA3LjU0aC00MS4wNjNsMS4zNjg4IDEzNC4xNCAzOS40OTEtMC4wMDAwMiIvPgogICAgPHBhdGggaWQ9InBhdGgzMDk1IiBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjMuMDA1MjtmaWxsOm5vbmUiIGQ9Im05MzcuNjQgMzQ4LjYxaDIzLjg2MXY1My4zODJsLTIzLjM3MS0wLjAwMDAyIi8+CiAgICA8cGF0aCBpZD0icGF0aDMwOTciIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6My4wMDUyO2ZpbGw6bm9uZSIgZD0ibTgxOC44OCA0MjcuMzRjLTM4LjMyNS0yMi4yNDItMzYuNzkzLTgxLjUzNCAwLjE2MzM1LTEwMy40MyIvPgogICAgPHBhdGggaWQ9InBhdGgzMTA3IiBzdHlsZT0ic3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjMuMDA1MjtmaWxsOm5vbmUiIGQ9Im01MDAgNDguMTYzdjY1Mi45Ii8+CiAgICA8cGF0aCBpZD0icGF0aDMxMjQiIHN0eWxlPSJzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6My4wMDUyO2ZpbGw6bm9uZSIgZD0ibTkyNS44IDUwLjAzczEuOTMwNiA4LjA5MzggMTAuMzk2IDEwLjA5OSIvPgogICAgPHBhdGggaWQ9InBhdGgzMTI2IiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiBkPSJtNTE0LjkyIDI1My41N2ExLjA2IDEuMzQ1NCAwIDEgMSAtMi4xMiAwIDEuMDYgMS4zNDU0IDAgMSAxIDIuMTIgMHoiIHRyYW5zZm9ybT0ibWF0cml4KDMuNzczNiAwIDAgMi45NzMxIC0xMDc3LjkgLTM3OC45KSIvPgogICAgPHBhdGggaWQ9InBhdGgzMTMwIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiBkPSJtMzM3LjUgMjUzLjAzYTEuMzY2NCAxLjM2NjQgMCAxIDEgLTIuNzMyOCAwIDEuMzY2NCAxLjM2NjQgMCAxIDEgMi43MzI4IDB6IiB0cmFuc2Zvcm09Im1hdHJpeCgyLjkyNzQgMCAwIDIuOTI3NCAtNDg0IC0zNjUuNzIpIi8+CiAgPC9nPgogIDxtZXRhZGF0YT4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yaz4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICAgICAgPGNjOmxpY2Vuc2UgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9wdWJsaWNkb21haW4vIi8+CiAgICAgICAgPGRjOnB1Ymxpc2hlcj4KICAgICAgICAgIDxjYzpBZ2VudCByZGY6YWJvdXQ9Imh0dHA6Ly9vcGVuY2xpcGFydC5vcmcvIj4KICAgICAgICAgICAgPGRjOnRpdGxlPk9wZW5jbGlwYXJ0PC9kYzp0aXRsZT4KICAgICAgICAgIDwvY2M6QWdlbnQ+CiAgICAgICAgPC9kYzpwdWJsaXNoZXI+CiAgICAgICAgPGRjOnRpdGxlPkZvb3RiYWxsIHBpdGNoPC9kYzp0aXRsZT4KICAgICAgICA8ZGM6ZGF0ZT4yMDEyLTA1LTA3VDAxOjQ4OjM3PC9kYzpkYXRlPgogICAgICAgIDxkYzpkZXNjcmlwdGlvbj5BIHNpbXBsZSBmb290YmFsbCAoc29jY2VyKSBwaXRjaC48L2RjOmRlc2NyaXB0aW9uPgogICAgICAgIDxkYzpzb3VyY2U+aHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvZGV0YWlsLzE2OTg5OS9mb290YmFsbC1waXRjaC1ieS10YWdhd2E8L2RjOnNvdXJjZT4KICAgICAgICA8ZGM6Y3JlYXRvcj4KICAgICAgICAgIDxjYzpBZ2VudD4KICAgICAgICAgICAgPGRjOnRpdGxlPnRhZ2F3YTwvZGM6dGl0bGU+CiAgICAgICAgICA8L2NjOkFnZW50PgogICAgICAgIDwvZGM6Y3JlYXRvcj4KICAgICAgICA8ZGM6c3ViamVjdD4KICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICA8cmRmOmxpPmZpZWxkPC9yZGY6bGk+CiAgICAgICAgICAgIDxyZGY6bGk+Zm9vdGJhbGw8L3JkZjpsaT4KICAgICAgICAgICAgPHJkZjpsaT5waXRjaDwvcmRmOmxpPgogICAgICAgICAgICA8cmRmOmxpPnNvY2NlcjwvcmRmOmxpPgogICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgIDwvZGM6c3ViamVjdD4KICAgICAgPC9jYzpXb3JrPgogICAgICA8Y2M6TGljZW5zZSByZGY6YWJvdXQ9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iPgogICAgICAgIDxjYzpwZXJtaXRzIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjUmVwcm9kdWN0aW9uIi8+CiAgICAgICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNEaXN0cmlidXRpb24iLz4KICAgICAgICA8Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rlcml2YXRpdmVXb3JrcyIvPgogICAgICA8L2NjOkxpY2Vuc2U+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KPC9zdmc+Cg==';

var radiusMax = width >= height ? height : width;

var bgPatternImg = new Image();
bgPatternImg.src = bgPatternSrc;

if (localStorage.getItem('player1') === null) {
	localStorage.setItem('player1', 'sane');
}
if (localStorage.getItem('player2') === null) {
	localStorage.setItem('player2', 'kane');
}
if (localStorage.getItem('pvColor') === null) {
	localStorage.setItem('pvColor', '#3BB273');
}
if (localStorage.getItem('pvBg') === null) {
	localStorage.setItem('pvBg', '#3BB273');
}

var SaveIcon = './assets/img/template-images/screenshot.svg';
GetVersus(
	localStorage.getItem('player1'),
	localStorage.getItem('player2'),
	localStorage.getItem('pvColor'),
	localStorage.getItem('pvBg')
);
myChart.showLoading();
function GetVersus(pl1, pl2, clr, bg) {
	$.get('./assets/data/versus.json', function(data) {
		var p1Data = [];
		var p2Data = [];
		var dataNames = [];
		dataNames.push(data.dataNames);
		//console.log(dataNames)
		$.each(data.players, function(i, v) {
			if (v.identy == pl1) {
				p1Data.push(v);
			}
		});
		$.each(data.players, function(i, v) {
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
				player1Names +=
					'<div class="item" data-value="' +
					data.players[i].identy +
					'"><i class="icon circle" style="color:#2B81EE"></i>' +
					data.players[i].name +
					'</div>';
			}
		}
		$('.pl1 .menu').html(player1Names);

		for (var i = 0; i < data.players.length; i++) {
			if (data.players[i].identy != pl1) {
				player2Names +=
					'<div class="item" data-value="' +
					data.players[i].identy +
					'"><i class="icon circle" style="color:#69C8A1"></i>' +
					data.players[i].name +
					'</div>';
			}
		}
		$('.pl2 .menu').html(player2Names);

		for (var i = 0; i < data.colors.length; i++) {
			colorItems +=
				'<div class="item" data-value="' +
				data.colors[i].value +
				'"><i class="icon circle" style="color:' +
				data.colors[i].value +
				'"></i>' +
				data.colors[i].name +
				'</div>';
		}

		$('.color .menu').html(colorItems);

		for (var i = 0; i < data.bg.length; i++) {
			bgItems +=
				'<div class="item" data-value="' +
				data.bg[i].value +
				'"><i class="icon circle" style="color:' +
				data.bg[i].value +
				'"></i>' +
				data.bg[i].name +
				'</div>';
		}

		$('.bg .menu').html(bgItems);

		var option = {
			baseOption: {
				textStyle: {
					fontFamily: 'Exo_2Bold, sans-serif'
				},
				color: ['#2B81EE', '#69C8A1'],
				title: [
					{
						text: p1Data[0].name,
						textStyle: {
							fontSize: 30,
							color: clr,
							fontWeight: 'bold'
						},
						left: '5%',
						top: '10'
					},
					{
						text: p2Data[0].name,
						textStyle: {
							fontSize: 30,
							color: clr,
							fontWeight: 'bold'
						},
						right: '5%',
						top: '10'
					},
					{
						text: 'X',
						top: '20%',
						left: 'center',
						textStyle: {
							fontFamily: 'QuanticoBold, sans-serif',
							fontWeight: 700,
							fontSize: 200,
							color: clr
						}
					}
				],
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
							name: p1Data[0].name + '-vs-' + p2Data[0].name,
							show: true,
							pixelRatio: 1,
							backgroundColor: bgPatternImg,
							title: 'Save As Image',
							icon: 'image://' + SaveIcon + ''
						}
					},
					bottom: 0,
					right: 20,
					zlevel: 9
				},
				graphic: {
					elements: [
						{
							type: 'image',
							style: {
								image: p1Data[0].image,
								width: 200,
								height: 200
							},
							left: '5%',
							top: 'center',
							zlevel: 1
						},
						{
							type: 'image',
							style: {
								image: p2Data[0].image,
								width: 200,
								height: 200
							},
							right: '5%',
							top: 'center',
							zlevel: 1
						},
						{
							type: 'image',
							id: 'logo',
							right: 0,
							top: 0,
							z: -10,
							bounding: 'raw',
							origin: [0, 0],
							style: {
								image: './assets/img/football-pitch.svg',
								width: width,
								height: 360
							}
						}
					]
				}
			}
		};
		myChart.setOption(option);
		myChart.hideLoading();
	});
}

$('.pl1')
	.dropdown({
		onChange: function(value) {
			localStorage.setItem('player1', value);
			GetVersus(value, localStorage.getItem('player2'), localStorage.getItem('pvColor'), localStorage.getItem('pvBg'));
		}
	})
	.dropdown('set selected', localStorage.getItem('player1'));

$('.pl2')
	.dropdown({
		onChange: function(value) {
			localStorage.setItem('player2', value);
			GetVersus(localStorage.getItem('player1'), value, localStorage.getItem('pvColor'), localStorage.getItem('pvBg'));
		}
	})
	.dropdown('set selected', localStorage.getItem('player2'));

$('.ui.dropdown.color')
	.dropdown({
		onChange: function(value) {
			localStorage.setItem('pvColor', value);
			GetVersus(localStorage.getItem('player1'), localStorage.getItem('player2'), value, localStorage.getItem('pvBg'));
		}
	})
	.dropdown('set selected', localStorage.getItem('pvColor'));

$('.ui.dropdown.bg')
	.dropdown({
		onChange: function(value) {
			localStorage.setItem('pvBg', value);
			GetVersus(
				localStorage.getItem('player1'),
				localStorage.getItem('player2'),
				localStorage.getItem('pvColor'),
				value
			);
		}
	})
	.dropdown('set selected', localStorage.getItem('pvBg'));
