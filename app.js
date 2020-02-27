console.log('hit')


const weatherForm = document.createElement('form')
weatherForm.class = 'weather-form'
weatherForm.innerHTML= `
Submit City for 5-day Weather Forecast <br> 
<input type='text' name='city' placeholder= 'City Name'> 
`
document.querySelector('.weather').appendChild(weatherForm)

weatherForm.addEventListener('submit', () => {
    event.preventDefault()
    console.log(event)
    const formData = new FormData(weatherForm)
    const city = formData.get('city')
    console.log(city)

fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=034655c18b43d676c2ac0f170b031d32`)
.then(response => response.json()) 
.then(weather => {
   const weatherArray = weather.list 

   let weatherElementNumber = 0;

   weatherArray.forEach(weatherElement => {
    console.log(weatherElement) 
    if (weatherElement.dt_txt.includes('12:00')) {
        ++weatherElementNumber;
        weatherElementNumber;
    
        console.log(weatherElementNumber)
        console.log(new Date(weatherElement.dt).toLocaleString()) 
        
        let h1 = document.createElement('h1')
        const s = weatherElement.dt_txt
        const withoutTime = s.slice(0,-8);
        h1.id = "weather_date"
        h1.textContent = withoutTime
        document.querySelector(`#box${weatherElementNumber}`).appendChild(h1)    
    
        weatherElement.weather.forEach(weather => 
        weatherContent = weather.description)
        console.log(weatherContent)
        
        let p1 = document.createElement('p1')
        p1.id = "weather-info"
        p1.textContent = weatherContent
        document.querySelector(`#box${weatherElementNumber}`).appendChild(p1) 

        let p2 = document.createElement('p2')
        p2.id = "weather-temp"
        const temp = weatherElement.main.temp 
        const finalTemp = Math.trunc((temp - 272) * 1.8 + 32)
        p2.textContent = finalTemp
        document.querySelector(`#box${weatherElementNumber}`).appendChild(p2)
        
        }else {
            return 'false';
        }
    })
})
   

//    function appendWeather(weatherElement) {
//         let h1 = document.createElement('h1')
//         h1.textContent = weatherElement.dt_tx 
//         document.querySelector('#box1').appendChild(h1)    
    
//         let p1 = document.createElement('p1')
//         p1.textContent = weatherElement.weather.forEach(weather => 
//             weatherContent = weather.description)
//         console.log(weatherContent)
//         document.querySelector(`#box${weatherElementNumber}`).appendChild(p1) 

        // let p2 = document.createElement('p')
        // p2.textContent = weatherListDayTwo 
        // document.querySelector(`#box${weatherElementNumber}`).appendChild(p2)

        // let p3 = document.createElement('p')
        // p3.textContent = weatherListDayThree
        // document.querySelector(`#box${weatherElementNumber}`).appendChild(p3)

        // let p4 = document.createElement('p')
        // p4.textContent = weatherListDayFour
        // document.querySelector(`#box${weatherElementNumber}`).appendChild(p4)

        // let p5 = document.createElement('p')
        // p5.textContent = weatherListDayFive
        // document.querySelector(`#box${weatherElementNumber}`).appendChild(p5)
//    }

})



