//this initializes the functions, cities (from activity 3), loadData (activity 4), and debugAjax (activity 4), called when the script is loaded
function initialize(){
	cities();
	loadData();
	debugAjax();
};

//define function to create a table with cities and their populations
function cities(){
	//define two arrays, aka columns of the table, for the cities and populations in a table that can be edited (not using const to define it)
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//create a table element
	var table = document.createElement("table");

	//create a header row element and add it by apending it to the table
	var headerRow = document.createElement("tr");
	table.appendChild(headerRow);

	//create the "City" and "Population" column headers
	headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	
	//using a loop to add a new row for each city in the table
    cityPop.forEach(function(cityObject){
		//assign longer html strings to a variable
		var rowHtml = "<tr><td>" + cityObject.city + "</td><td>" + cityObject.population + "</td></tr>";
		//add the row's html string to the table
		table.insertAdjacentHTML('beforeend',rowHtml);
	})
	
	//append the table element to the div, to be used in the index.html
	document.querySelector("#mydiv").appendChild(table);

    addColumns(cityPop);
    addEvents();

};

//define function to add a new column to the citypop table created from the above function
function addColumns(cityPop){
    
	//select all column rows & define as variable "rows"
	var rows = document.querySelectorAll("tr")
	//use a loop to add a new column to each row
	document.querySelectorAll("tr").forEach(function(row,i){
		//for first row in the table, add the column header
		if (i == 0){
    		//create new header element and add it to the table for new column
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
    		var citySize; //this is the new column & is defined via these parameters for city size using the population column of the already created array

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
    		} else {
    			citySize = 'Large';
    		};

			//add new table cell with the city size to each row/city with an HTML string
    		row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');
    	};
	})
};

//define function to add mouseover events to table, aka something will happen when you mouse over the table
function addEvents(){
	//this is the code to make the table text a random color when you mouse over the text

	//select the table element
	table = document.querySelector("table");

	//add mouseover event of random text color
	document.querySelector("table").addEventListener("mouseover", function(){
		var color = "rgb(";
		//loop to generate random color using the Math library
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);
			color += random;

			if (i<2){
				color += ",";
			} else {
				color += ")";
			};
		}
		//style table with the random style/color
		table.style.color = color;
	}); 

	//define the function that shows an alert when clikcing the table
	function clickme(){
		alert('Hey, you clicked me!');
	};

	//to add an event listener for the click, so its listening for what needs to happen for the clickme function
	table.addEventListener("click", clickme)
};

//to call the initialize function when the document has loaded, which then runs all of the other functions
document.addEventListener('DOMContentLoaded',initialize)

//define function to load the magacities.geojson file
function loadData(){
	//defining variable to hold the geojson data
	var cities;

	fetch("data/MegaCities.geojson")
		//use basic fetch to retrieve data
		.then(function(response){
			return response.json();
		}) //converting the geojson data to a usable format
		.then(function(response) {
			cities = response;
			console.log(cities); //to check the data
		})
}

function debugCallback(myData){
	//define callback function
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend',"GeoJSON data: " + JSON.stringify(myData));
};

function debugAjax(){
	fetch("data/MegaCities.geojson") //use basic fetch to retrieve data
		.then(function(response){
			return response.json();
		})
		.then(debugCallback) //using the callback
};
