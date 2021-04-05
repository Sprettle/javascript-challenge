// from data.js
var tableData = data;

// Selct body for table location
var tbody = d3.select("tbody");

// Select table
var table = d3.select("table");

// Set table class
table.attr("class", "table-striped");

// Loop through UFO data
tableData.forEach((item) => {

    var row = tbody.append("tr");

    row.append("td").text(item.datetime);
    row.append("td").text(item.city);
    row.append("td").text(item.state);
    row.append("td").text(item.country);
    row.append("td").text(item.shape);
    row.append("td").text(item.durationMinutes);
    row.append("td").text(item.comments);
});

// Select Button
var button = d3.select("filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
 
  var filteredData = tableData.filter(item => item.datetime === inputValue);

    // clear the existing output
    // tbody.html("");

    filteredData.forEach((item) => {

        var tr = tbody.append("tr");
    
        tr.append("td").text(item.datetime);
        tr.append("td").text(item.city);
        tr.append("td").text(item.state);
        tr.append("td").text(item.country);
        tr.append("td").text(item.shape);
        tr.append("td").text(item.durationMinutes);
        tr.append("td").text(item.comments);
    }); 
}