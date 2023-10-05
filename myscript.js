const apiKey="b46558eba2e6dcdc74b2c1461c627466";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";
    const searchBox =document.querySelector(".search input");
    const searchBtn =document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");
    const weatherType=document.querySelector(".type");
    async function checkWeather(city){
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity1").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind1").innerHTML=data.wind.speed + " kmph";
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
            document.querySelector(".type").innerHTML="Clear";
            
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            document.querySelector(".type").innerHTML="Rainy";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
            document.querySelector(".type").innerHTML="Drizzle";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
            document.querySelector(".type").innerHTML="Mist";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
            document.querySelector(".type").innerHTML="Snow";
        }
        



    }
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })