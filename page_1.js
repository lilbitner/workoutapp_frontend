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

let exerciseIdArray = []
let workoutIdArray = []
i=0
goalForm.addEventListener('submit', () => {
    
    event.preventDefault()
    i++;
    i;
            workoutNumberForm = document.createElement('form') 
            workoutNumberForm.innerHTML = `
            <select id=workoutNumber>
            <option value='Workout${i}'>Workout${i}</option> 
            `
            document.querySelector('.header-button').appendChild(workoutNumberForm)

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
        console.log(workouts)

        const workoutTitleOne =  document.createElement('h1')
        workoutTitleOne.textContent = workouts[0].title 
       const frontCardOne = document.querySelector('.flip-card-front-one')
       frontCardOne.appendChild(workoutTitleOne)

    
        const workoutOne = workouts.slice(0,5)
        workoutOne.map((exercise) => {
        const flipCardBackOne = document.querySelector('.flip-card-back-one')
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        flipCardBackOne.append(exerciseInfo);
        exerciseInfo.setAttribute('exerciseId', `${exercise.id}`);
        })

        const workoutTitleTwo =  document.createElement('h1')
        workoutTitleTwo.textContent = workouts[5].title 
       const frontCardTwo = document.querySelector('.flip-card-front-two')
       frontCardTwo.appendChild(workoutTitleTwo)
        

        const workoutTwo = workouts.slice(5,10)
        workoutTwo.map((exercise) => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackTwo = document.querySelector('.flip-card-back-two')
        flipCardBackTwo.append(exerciseInfo)
        exerciseInfo.setAttribute('exerciseId', `${exercise.id}`);
        })

        const workoutTitleThree =  document.createElement('h1')
        workoutTitleThree.textContent = workouts[10].title 
       const frontCardThree = document.querySelector('.flip-card-front-three')
       frontCardThree.appendChild(workoutTitleThree)
        

        const workoutThree = workouts[10]
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = workoutThree.info 
        i=10;
        exerciseInfo.setAttribute('exerciseId', `${workoutThree.id}`);
        const flipCardBackThree = document.querySelector('.flip-card-back-three')
        flipCardBackThree.append(exerciseInfo)
        
        

        const workoutTitleFour =  document.createElement('h1')
        workoutTitleFour.textContent = workouts[11].title 
       const frontCardFour = document.querySelector('.flip-card-front-four')
       frontCardFour.appendChild(workoutTitleFour)

        const workoutFour = workouts.slice(11,16)
        workoutFour.map((exercise,i) => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackFour = document.querySelector('.flip-card-back-four')
        flipCardBackFour.append(exerciseInfo)
        exerciseInfo.setAttribute('exerciseId', `${exercise.id}`);
        })
        

        const workoutTitleFive =  document.createElement('h1')
        workoutTitleFive.textContent = workouts[16].title 
       const frontCardFive = document.querySelector('.flip-card-front-five')
       frontCardFive.appendChild(workoutTitleFive)

        const workoutFive = workouts.slice(16, (workouts.length))
        workoutFive.map((exercise,i) => {
        let exerciseInfo = document.createElement('p')
        exerciseInfo.textContent = exercise.info 
        const flipCardBackFive = document.querySelector('.flip-card-back-five')
        flipCardBackFive.append(exerciseInfo)
        exerciseInfo.setAttribute('exerciseId', `${exercise.id}`);
        })

                        let exerciseIdAttribute = document.getElementsByTagName('p')
                        console.log(exerciseIdAttribute)
                        let idArray = Array.from(exerciseIdAttribute)
                        console.log(idArray)
                        // exerciseIdArray = []
                        console.log(idArray.map(tag => {
                            exerciseIdArray.push(tag.attributes.exerciseid.value)
                        //  .getAttribute('exerciseid')
                        }))
                        console.log(exerciseIdArray)

                        // workoutIdArray = []
                        workouts.map(exercise => {
                            if (exercise.title == "Leg Day") 
                                    {let workoutId = 1 
                                        workoutIdArray.push(workoutId)
                                    }
                        else if (exercise.title == "Upper Body Day") 
                                    {let workoutId = 2
                                        workoutIdArray.push(workoutId)
                                    } 
                        else if (exercise.title == "Low Intensity Steady State Training") 
                                    {let workoutId = 3
                                        workoutIdArray.push(workoutId)
                                    } 
                        else if (exercise.title == "High Intensity Interval Training") 
                                    {let workoutId = 4
                                        workoutIdArray.push(workoutId)
                                    } 
                        else if (exercise.title == "Cardio Training") 
                                    {let workoutId = 5
                                        workoutIdArray.push(workoutId)
                                    } 
                        })
                        console.log(workoutIdArray)

})
}) 



 
 function workoutId() {
    let workoutTitles = document.getElementsByTagName('h1'); 
    console.log(workoutTitles)
    
     let workoutTitleObjectFour = workoutTitles[11].innerText 
     console.log(workoutTitleObjectFour)
     let workoutTitleObjectFive = workoutTitles[12].innerText 

        if (workoutTitleObjectFour == "HIIT") 
            {workoutId4 = 4} else {workoutId4 = 1}
        console.log(workoutId4)
        if (workoutTitleObjectFive == "Cardio") 
        {workoutId5 = 5} else {workoutId5 = 2}
        console.log(workoutId5)
        return {workoutId4, workoutId5}
 }

const saveButton = document.querySelector('#save')
const dayURL = "http://localhost:3000/days"
const combinationURL = "http://localhost:3000/combinations"
let userId = localStorage.getItem('user_id')

splitNumber = 0 
saveButton.addEventListener('click', () => {
        splitNumber++; 
        splitNumber;
      
        workoutId();

        fetch(dayURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({user_id: userId,  workout_id: 1, day_name: "Day One", split_number: splitNumber}, {user_id:userId,  workout_id: 2, day_name: "Day Two", split_number: splitNumber}, {user_id: userId,  workout_id: 3, day_name: "Day Three", split_number: splitNumber}, {user_id: userId, workout_id: workoutId4, day_name: "Day Four", split_number: splitNumber}, {user_id: userId, workout_id: workoutId5, day_name: "Day Five", split_number: splitNumber})
        })
        fetch(combinationURL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({workoutIdArrayKey: workoutIdArray, exerciseIdArrayKey: exerciseIdArray}) 
                })
    })

    
// fetch()
//     workoutNumberForm = document.createElement('form') 
//         workoutNumberForm.innerHTML = `
//         <select id=workoutNumber>
//         <option value='Workout${splitNumber}'>Workout${splitNumber}</option> 
//         `
//         document.querySelector('#save').appendChild(workoutNumberForm)

    