const logout = document.createElement('button')
logout.innerHTML = `
<h4>Logout<h4>
<onclick=  window.location.href='index.html''>  
`
logout.id = 'logoutClick'
document.querySelector('#logoutButton').appendChild(logout)

logout.addEventListener('click', () => {
    localStorage.clear()
    document.location.href = 'login.html'
})


const loginName = window.localStorage.getItem("username")

const webTitle = document.querySelector('#welcome-name')
webTitle.innerHTML = ` 
Welcome, ${loginName}!`


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

    let weatherCollectionThree = document.getElementsByTagName('p1');
    let weatherElementThree = weatherCollectionThree[2].innerText 

    let weatherCollectionFive = document.getElementsByTagName('p1');
    let weatherElementFive = weatherCollectionFive[4].innerText
    
    workoutUrl = `http://localhost:3000/${goalInput}`

    fetch(workoutUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({weatherElementThreeKey: weatherElementThree, weatherElementFiveKey: weatherElementFive})
    }).then(response => response.json())
    .then(workouts => {
       
        const workoutTitleOne =  document.createElement('h1')
        workoutTitleOne.textContent = workouts[0].title 
       const frontCardOne = document.querySelector('.flip-card-front-one')
       frontCardOne.appendChild(workoutTitleOne)


    
        const workoutOne = workouts.slice(0,5)
        workoutOne.map(exercise => {
        const flipCardBackOne = document.querySelector('.flip-card-back-one')
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        flipCardBackOne.append(exerciseInfo)
        })

        const workoutTitleTwo =  document.createElement('h1')
        workoutTitleTwo.textContent = workouts[5].title 
       const frontCardTwo = document.querySelector('.flip-card-front-two')
       frontCardTwo.appendChild(workoutTitleTwo)
        

        const workoutTwo = workouts.slice(5,10)
        workoutTwo.map(exercise => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackTwo = document.querySelector('.flip-card-back-two')
        flipCardBackTwo.append(exerciseInfo)
        })

        const workoutTitleThree =  document.createElement('h1')
        workoutTitleThree.textContent = workouts[10].title 
       const frontCardThree = document.querySelector('.flip-card-front-three')
       frontCardThree.appendChild(workoutTitleThree)
        

        const workoutThree = workouts[10]
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = workoutThree.info 
        const flipCardBackThree = document.querySelector('.flip-card-back-three')
        flipCardBackThree.append(exerciseInfo)
        
        

        const workoutTitleFour =  document.createElement('h1')
        workoutTitleFour.textContent = workouts[11].title 
       const frontCardFour = document.querySelector('.flip-card-front-four')
       frontCardFour.appendChild(workoutTitleFour)

        const workoutFour = workouts.slice(11,16)
        workoutFour.map(exercise => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackFour = document.querySelector('.flip-card-back-four')
        flipCardBackFour.append(exerciseInfo)
        })
        

        const workoutTitleFive =  document.createElement('h1')
        workoutTitleFive.textContent = workouts[16].title 
       const frontCardFive = document.querySelector('.flip-card-front-five')
       frontCardFive.appendChild(workoutTitleFive)

        const workoutFive = workouts.slice(16, (workouts.length))
        workoutFive.map(exercise => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackFive = document.querySelector('.flip-card-back-five')
        flipCardBackFive.append(exerciseInfo)
        })
    })

})


//save button to save workouts, add event listener to save button to post? to workouts and days? 