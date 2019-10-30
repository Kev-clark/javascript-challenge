// from data.js
var tableData = data;

var tbody = d3.select("tbody");



function buildTable(table) {
    table.forEach((sightings)=> {
        var row=tbody.append("tr");
        Object.entries(sightings).forEach(([key, value])=> {
            var cell=tbody.append("td");
            cell.text(value);
        });

    });
}


var button = d3.select("#filter-btn");
buildTable(tableData);

button.on("click", function(){
    d3.event.preventDefault();
    filterTable("#datatime")
})
  


function filterTable(datetime){
  
    
    
    var inputDate = d3.select(datetime).property("value");
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");

    var checkTable =tableData.filter(tdata => tdata.datetime === inputValueDate || 
        tdata.city === inputValueCity || tdata.state === inputValueState ||
        tdata.country === inputValueCountry || tdata.shape === inputValueShape)

    tbody.html("");
    d3.select("span").html("");
    
    if(checkTable===undefined ||checkTable.length===0){
        d3.select("span").text("No sightings on the data entered, please retry").style("font-size", "20px");
    }
    else{
        buildTable(checkTable);
    }

    d3.select("#datetime").node().value = "";
    d3.select("#city").node().value = "";
    d3.select("#state").node().value = "";
    d3.select("#country").node().value = "";
    d3.select("#shape").node().value = "";

};



