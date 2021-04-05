// from data.js
var tableData = data;

// Selct body for table location
var tbody = d3.select("tbody");

// Select table
var table = d3.select("table");

// Set table class
table.attr("class", "table-striped");

// Table data
tableData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        // Append the value into each 'td' cell
        cell.text(value);
    });
});

// Select Button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click",runEnter);

// Complete the event handler function 
function runEnter(){

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
 
  var filteredData = tableData.filter((item) => item.datetime === inputValue);

    // clear the existing output
    tbody.html("");

    // Show filtered data
    filteredData.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            // Append the value into each 'td' cell
            cell.text(value);
        });
    });
};