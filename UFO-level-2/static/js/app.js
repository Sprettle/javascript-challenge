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
  
  // Select the input elements and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  //   console.log(inputValue);
  let filteredData = tableData.filter(
    (item) =>
      item.datetime === inputValueDate &&
      item.city === inputValueCity &&
      item.state === inputValueState &&
      item.country === inputValueCountry &&
      item.shape === inputValueShape
  );

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