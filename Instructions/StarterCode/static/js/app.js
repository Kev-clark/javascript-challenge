// from data.js
var tableData = data;

function handleSubmit() {
    d3.event.preventDefault();
    const enterdate = d3.select("form-control").node()
    console.log(enterdate);

    // clear the input value
        d3.select("form-control").node().value = "";
}


// data.forEach(function(datetime) {
//     console.log(datetime);
//      });

// data.forEach(function(weatherReport) {
// console.log(weatherReport);
// let tbody = d3.select("tbody");
// var row = tbody.append("tr");

//     for (key in weatherReport){
//        console.log(key, weatherReport[key]); 
//         // Append a cell to the row for each value in the weather report object
//        const cell = tbody.append("td");
//      }
// });