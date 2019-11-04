// from data.js
var tableData = data;

var tbody = d3.select("tbody");




function buildTable(table, filterdate) {
    if(filterdate=='null'){
        
    table.forEach((sightings)=> {
        var row=tbody.append("tr");
        Object.entries(sightings).forEach(([key, value])=> {
            var cell=tbody.append("td");
            cell.text(value);
            console.log(filterdate)
        })
    } )

    } else{
        tbody.html("");
        console.log(filterdate);
        table.forEach((sightings)=> {
        if (sightings.datetime === filterdate){
            console.log("hi");        
            var row=tbody.append("tr");
            Object.entries(sightings).forEach(([key, value])=> {
            var cell=tbody.append("td");
            cell.text(value);
        });
    }})
        
}};





buildTable(tableData, 'null');


const button = d3.select("#filter-btn");
const inputValue = d3.select('#datetime');

button.on("click", function(){
    d3.event.preventDefault();
    var filterDate=inputValue.property("value")
        
        buildTable(tableData, filterDate);
        
   
    
})
  

