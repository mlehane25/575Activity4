function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
};

function debugAjax(){
	
	var myData;
	
	fetch(newFunction())
		.then(function(response){
			debugCallback(response);
		})

	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: </br>' + JSON.stringify(myData))

	function newFunction() {
		return "data\MegaCities.geojson";
	}
};

document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(myData))
