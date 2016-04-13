

$(function() {

	getData();


	function getData() {
		Plotly.d3.csv("../antibiotics_data.csv", function(data) { 
			plotVisualOne(data) 
			plotVisualTwo(data);
			plotVisualThree(data);
		});
	}

	function plotVisualOne(allRows) {
		console.log(allRows);
		var x = [];
		var y1 = [];
		var y2 = [];
		for (var i = 0; i < allRows.length; i++) {
			x.push(allRows[i]["Bacteria "]);
			y1.push(allRows[i]["Streptomycin "]);
			y2.push(allRows[i].Neomycin);
		}
		var trace1 = {
			x: x,
			y: y1,
			name: 'Streptomycin',
			type: 'bar'
		};
		var trace2 = {
			x: x, 
			y: y2,
			name: 'Neomycin',
			type: 'bar'
		};
		var data = [trace1, trace2];
		var layout = {
			barmode: 'group',
			title: "Streptomycin & Neomycin vs. Bacteria",
			xaxis: {
				title: "Bacteria Strain",
				titlefont: {
					size: 20
				},
				tickfont: {
					size: 8
				}
			},
			yaxis: {
				title: "Minimum Inhibitory Concentration"
			}
		};
		Plotly.newPlot('visualOne', data, layout, {staticPlot: true});
	}

	function plotVisualTwo(allRows) {
		var x = [];
		var y = [];
		for (var i = 0; i < allRows.length; i++) {
			x.push(allRows[i]["Bacteria "]);
			y.push(allRows[i]["Streptomycin "]);
		}
		var trace1 = {
			x: x,
			y: y,
			type: 'scatter',
			mode: 'markers',
			marker: {
				color: 'rgb(142, 124, 195)',
				size: 10
			}
		}
		var data = [trace1];
		var layout = {
			barmode: 'group',
			title: "Streptomycin vs. Bacteria",
			xaxis: {
				title: "Bacteria Strain",
				titlefont: {
					size: 20
				},
				tickfont: {
					size: 8
				}
			},
			yaxis: {
				title: "Minimum Inhibitory Concentration"
			}
		};
		Plotly.newPlot('visualTwo', data, layout, {staticPlot: true});
	}

	function plotVisualThree(allRows) {
		var x = ["Positive", "Negative"];
		var pos = 0;
		var neg = 0;
		var posLabel = "";
		var negLabel = "";
		for (var i = 0; i < allRows.length; i++) {
			if (allRows[i]["Gram Staining "] === "negative") {
				neg++;
				negLabel += allRows[i]["Bacteria "] + ", ";
			} else {
				pos++;
				posLabel += allRows[i]["Bacteria "] + ", ";
			}
		}
		var trace1 = {
			x: x,
			y: [pos, neg],
			type: 'bar',
			text: [posLabel, negLabel],
			marker: {
				color: 'rgb(2, 132, 130)',
				opacity: 0.5,
				line: {
					color: 'black',
					width: 1.5
				}
			}
		};

		var data = [trace1];

		var layout = {
			title: 'Gram Staining',
			yaxis: {
				title: "# of Antibiotics"
			}
		}

		Plotly.newPlot('visualThree', data, layout, {staticPlot: true});
	}

	// plot data x3 


});