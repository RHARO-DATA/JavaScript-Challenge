// from data.js
var tableData = data;

// YOUR CODE HERE!


var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach(sighting => {
	console.log(sighting);
	
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {

    	var cell = row.append("td");
    	cell.text(value);
  });
});
    
// Button

var button = d3.select("button");
button.on("click", function() {
	console.log("click")
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	if (inputValue != "") {
		var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
	}
	tbody.html("")
	filteredData.forEach(sighting => {
		var row = tbody.append("tr");
		Object.entries(sighting).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
});
