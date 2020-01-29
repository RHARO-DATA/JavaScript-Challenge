var tableData = data;

var tbody = d3.select("tbody");


tableData.forEach(sighting => {
	console.log(sighting);
	
    var row = tbody.append('tr');
    Object.entries(sighting).forEach(([key, value]) => {

    	var cell = row.append("td");
    	cell.text(value);
  });
});


// Select the button
var button = d3.select("#filter-btn");
    button.on("click", function()  {
    
    var dateTimeFilter = d3.select("#datetime");
    var cityFilter = d3.select("#city");
    var stateFilter = d3.select("#state");
    var countryFilter = d3.select("#country");
    var shapeFilter = d3.select("#shape");
    
    
    tbody.selectAll('tr').remove()  
    var dateTime = dateTimeFilter.property("value");
    var city = cityFilter.property("value");
    var state = stateFilter.property("value");
    var country = countryFilter.property("value");
    var shape = shapeFilter.property("value");  


    data.forEach(sighting => {
        
        if (sighting.datetime === dateTime) {
           
            var row = tbody.append('tr');

                Object.entries(sighting).forEach(([key, value]) => {

                var cell = row.append("td");

 
                cell.text(value);
            });
        }
        // city
        if (sighting.city === city) {            
            var row = tbody.append('tr');
           
                Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
           
                cell.text(value);
            });
        }
       //State
       if (sighting.state === state) {
            
            var row = tbody.append('tr');
            
                Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
            
                cell.text(value);
            });
        }       
        //Country
        if (sighting.country === country) {            
            var row = tbody.append('tr');
            
                Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
 
                cell.text(value);
            });
        }       
        //Shape
        if (sighting.shape === shape) {          
            var row = tbody.append('tr');

                Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");

                cell.text(value);
            });
        }
    });
 
});