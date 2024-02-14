function jsAjax(){
    //Step 3: use Fetch to retrieve data
    fetch('data/MegaCities.geojson')
        .then(function(response){
            return response.json();
        }) //Step 4 convert data to usable form
        .then(callback) //Step 5 Send retrieved data to a callback function
};

//define callback function
function callback(response){
    //tasks using the data go here
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',JSON.stringify(response()))
}

document.addEventListener('DOMContentLoaded',jsAjax)
