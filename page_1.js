const searchParams = new URLSearchParams(document.location.search)
const loginName = searchParams.get('username')
console.log(loginName)

const webTitle = document.querySelector('#title')
webTitle.innerHTML = `
Welcome to Euphoria ${loginName}!<br> Lets reach your goals`


const weatherForm = document.createElement('form')
weatherForm.id = 'weather-form'
weatherForm.innerHTML= `
<h2 id='form-title'>Submit City for Weather Forecast<h2> <br> 
<input id='weather-form-input' type='text' name='city' placeholder= 'City Name'>
<input id='submit_button_weather' type="submit" name="Submit">`
document.querySelector('.weather-form').appendChild(weatherForm)

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
            
            let h1 = document.createElement('h1')
            const s = weatherElement.dt_txt
            const withoutTime = s.slice(0,-8);
            h1.id = "weather_date"
            h1.innerHTML = `Date: ${withoutTime}`
            document.querySelector(`#box${weatherElementNumber}`).appendChild(h1)    
        
            weatherElement.weather.forEach(weather => 
            weatherContent = weather.description)
            console.log(weatherContent)
            
            let p1 = document.createElement('p1')
            p1.id = "weather-info"
            p1.textContent = weatherContent.toUpperCase()
            document.querySelector(`#box${weatherElementNumber}`).appendChild(p1) 

            let p2 = document.createElement('p2')
            p2.id = "weather-temp"
            const temp = weatherElement.main.temp 
            const finalTemp = Math.trunc((temp - 272) * 1.8 + 32)
            p2.innerHTML = `Average Temperature: ${finalTemp}`
            document.querySelector(`#box${weatherElementNumber}`).appendChild(p2)
            
            }else {
                return 'false';
            }
        })
    })
  
})

const goalForm = document.querySelector('#goal-form')
goalForm.id = "goal-form"
goalForm.innerHTML = `
<h2 id='goal-form-title'>Submit your goal<h2> <br> 
<select id='form-input' name='goal' placeholder= 'Your goal'>
<option value='bulk'>Bulk</option>
<option value='cut'>Cut</option>
</select>
<input id='submit_button_goal' type="submit" name="Submit">
`

goalForm.addEventListener('submit', () => {
    console.log(event)
    
    event.preventDefault()

    const formData = new FormData(goalForm)
    const goalInput = formData.get('goal')
    workoutUrl = `http://localhost:3000/${goalInput}`

    fetch(workoutUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({goalInput})
    }).then(response => response.json())
    // .then(console.log)
    .then(workouts => {
        console.log(workouts)
        const workoutOne = workouts.slice(0,5)
        console.log(workoutOne)

        const workoutTwo = workouts.slice(5,10)
        console.log(workoutTwo)

        const workoutThree= workouts[10]
        console.log(workoutThree)

        const workoutFour = workouts.slice(11,16)
        console.log(workoutFour)

        const workoutFive = workouts.slice(16,21)
        console.log(workoutFive)
    })

})