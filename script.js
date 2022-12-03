let weather = {
    "apiKey":"53b704c499b345261968a17b64aa3baf",
    fetchWeather : function(city){
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ this.apiKey
    )
    .then(response=>response.json())
    .then(data => {
        this.displayWeather(data);
    })
    },
    displayWeather: function (data){
     const {name } = data;
     const { icon,description } = data.weather[0];
     const { temp, humidity} = data.main;
     const { speed } = data.wind;
     document.querySelector("#city").innerText = "Weather in "+name;
     document.querySelector('#icon').src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
     document.querySelector('#degree').innerText = (temp- 273.15).toFixed(2) +"°C";
     document.querySelector('#cloud').innerText = description;
     document.querySelector('#humidity').innerText = humidity +"%";
     document.querySelector('#wind').innerText = speed +"km/h";

    },
    search: function (){
        this.fetchWeather(document.querySelector("#searchText").value);
    }
};
document.querySelector(".Search button").addEventListener("click",function(){
 weather.search();
});
weather.fetchWeather("Beirut");
document.querySelector("#searchText").addEventListener("keyup",function(event){
  if(event.key == "Enter"){
    weather.search();
  }
});
