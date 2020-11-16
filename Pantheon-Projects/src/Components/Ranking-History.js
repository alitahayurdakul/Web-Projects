import React from 'react'
import CanvasJSReact from './canvas/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App(props) {

	const options = {
		animationEnabled: true,
		toolTip: {
			shared: true
		},

		data: [{
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			toolTipContent: "{label}",
			type: "spline",
			name: "Drive Climber",
			showInLegend: true,
			dataPoints: [
				{ y: 2, label: "2020-10-10" },
				{ y: 8, label: "2020-10-11" },
				{ y: 9, label: "2020-10-12" },
				{ y: 8, label: "2020-10-13" },
				{ y: 7, label: "2020-10-14" },
				{ y: 3, label: "2020-10-15" },
				{ y: 6, label: "2020-10-16" },
			]
		},
		{
			type: "spline",
			name: "Facebook Messenger",
			showInLegend: true,
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			dataPoints: [
				{ y: 4, label: "2020-10-10" },
				{ y: 6, label: "2020-10-11" },
				{ y: 2, label: "2020-10-12" },
				{ y: 3, label: "2020-10-13" },
				{ y: 6, label: "2020-10-14" },
				{ y: 5, label: "2020-10-15" },
				{ y: 4, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Bowmaster-Multiplayer Game",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 3, label: "2020-10-10" },
				{ y: 7, label: "2020-10-11" },
				{ y: 1, label: "2020-10-12" },
				{ y: 4, label: "2020-10-13" },
				{ y: 4, label: "2020-10-14" },
				{ y: 10, label: "2020-10-15" },
				{ y: 5, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Drive Climber",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 5, label: "2020-10-10" },
				{ y: 9, label: "2020-10-11" },
				{ y: 8, label: "2020-10-12" },
				{ y: 9, label: "2020-10-13" },
				{ y: 10, label: "2020-10-14" },
				{ y: 1, label: "2020-10-15" },
				{ y: 2, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Facebook Messenger",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 1, label: "2020-10-10" },
				{ y: 10, label: "2020-10-11" },
				{ y: 5, label: "2020-10-12" },
				{ y: 2, label: "2020-10-13" },
				{ y: 9, label: "2020-10-14" },
				{ y: 2, label: "2020-10-15" },
				{ y: 8, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Bowmaster-Multiplayer Game",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 7, label: "2020-10-10" },
				{ y: 4, label: "2020-10-11" },
				{ y: 4, label: "2020-10-12" },
				{ y: 5, label: "2020-10-13" },
				{ y: 8, label: "2020-10-14" },
				{ y: 7, label: "2020-10-15" },
				{ y: 10, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Drive Climber",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 6, label: "2020-10-10" },
				{ y: 2, label: "2020-10-11" },
				{ y: 3, label: "2020-10-12" },
				{ y: 6, label: "2020-10-13" },
				{ y: 1, label: "2020-10-14" },
				{ y: 4, label: "2020-10-15" },
				{ y: 9, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Facebook Messenger",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 9, label: "2020-10-10" },
				{ y: 3, label: "2020-10-11" },
				{ y: 10, label: "2020-10-12" },
				{ y: 1, label: "2020-10-13" },
				{ y: 2, label: "2020-10-14" },
				{ y: 9, label: "2020-10-15" },
				{ y: 7, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Bowmaster-Multiplayer Game",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 8, label: "2020-10-10" },
				{ y: 1, label: "2020-10-11" },
				{ y: 6, label: "2020-10-12" },
				{ y: 7, label: "2020-10-13" },
				{ y: 5, label: "2020-10-14" },
				{ y: 8, label: "2020-10-15" },
				{ y: 1, label: "2020-10-16" }
			]
		},
		{
			type: "spline",
			name: "Bowmaster-Multiplayer Game",
			click: function (e) {
				props.onChangedate(e.dataPoint.label)
			},
			showInLegend: true,
			dataPoints: [
				{ y: 10, label: "2020-10-10" },
				{ y: 5, label: "2020-10-11" },
				{ y: 7, label: "2020-10-12" },
				{ y: 10, label: "2020-10-13" },
				{ y: 3, label: "2020-10-14" },
				{ y: 6, label: "2020-10-15" },
				{ y: 3, label: "2020-10-16" }
			]
		},


		]
	}

	return (
		<div>
			<CanvasJSChart options={options} />
		</div>
	);
}


export default App;