/*API --> Application Programming Interface(Hadgalsan data)
API -g fetch() ashiglaj duudna
promise --> fetch hiihed ter utgiig damjuulahiig amlah amlalt
status : 200 approved
status : 404 300 500 error
json() -->zambraagui datag hunii nudend hylbar hragduulah file

fetch('file:///C:/Users/anand/OneDrive/Desktop/tc-201/lab%2012/book.html').then(
    response => console.log(response)
)*/
const input = document.getElementsByTagName('input')[0]
const search =document.getElementById('search')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const wind = document.querySelector('.wind')
const zurg = document.getElementsByTagName('img')[0]
let zurgnd = ["clouds.png", "clear.png", "rain.png", "snow.png", "thunderstorm.png"]
let img = document.querySelector('.img')
let bugd = document.querySelector('.border')
search.addEventListener('click',()=>{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`
        ).then(
        response => response.json()
        ).then(
                data => {
                    img.style.height = "90px";
                    img.style.padding = "10px";
                    bugd.style.height = "250px";
                    if(data.weather[0].main == "Clouds"){
                        zurg.src = zurgnd[0];
                    }
                    else if(data.weather[0].main == "Clear"){
                        zurg.src = zurgnd[1];
                    }
                    else if(data.weather[0].main == "Rain"){
                        zurg.src = zurgnd[2];
                    }
                    else if(data.weather[0].main == "Snow"){
                        zurg.src = zurgnd[3];
                    }
                    else if(data.weather[0].main == "Thunderstorm"){
                        zurg.src = zurgnd[4];
                    }
                    console.log(data)
                    temp.innerText = data.main.temp + "°C";
                    desc.innerText = "weather: "+ data.weather[0].main;
                    wind.innerText = "wind: "+data.wind.speed + "km/h";
                }
        )
    }
)