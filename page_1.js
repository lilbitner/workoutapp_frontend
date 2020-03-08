let userId = localStorage.getItem('userId')
const loginName = window.localStorage.getItem("username")
const saveButton = document.querySelector('#save')
const dayURL = "http://localhost:3000/days"
const exerciseURL = "http://localhost:3000/exercises"
let exerciseWorkoutArray = []
let workoutArray = []

function createLogoutButton () {
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
} 
createLogoutButton()

function createWelcomeTitle () {
    const webTitle = document.querySelector('#welcome-name')
    webTitle.innerHTML = ` 
    Welcome, ${loginName}!`
}
createWelcomeTitle()

function createWeatherForm() {
    const weatherForm = document.createElement('form')
    weatherForm.id = 'weather-form'
    weatherForm.innerHTML= `
    <h2 id='form-title'>Submit City for Weather Forecast<h2> <br> 
    <input id='weather-form-input' type='text' name='city' placeholder= 'City Name'>
    <input id='submit_button_weather' type="submit" name="Submit">`
    document.querySelector('.weather-form').appendChild(weatherForm)
} 
createWeatherForm() 

let weatherInput = document.querySelector('#weather-form')

weatherInput.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(weatherInput)
    const city = formData.get('city')

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=034655c18b43d676c2ac0f170b031d32`)
    .then(response => response.json()) 
    .then(weather => {
    const weatherArray = weather.list 

    let weatherElementNumber = 0;

        weatherArray.forEach(weatherElement => { 
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

function createGoalForm() {
    const goalForm = document.querySelector('#goal-form')
    goalForm.id = 'goal-input-choice'
    goalForm.innerHTML = `
    <h2 id='goal-form-title'>Submit your goal<h2> <br> 
    <select id='form-input' name='goal' placeholder= 'Your goal'>
    <option value='bulk'>Bulk</option>
    <option value='cut'>Cut</option>
    </select>
    <input id='submit_button_goal' type="submit" name="Submit">
    `
}
createGoalForm()

goalFormInput = document.querySelector('#goal-input-choice')
goalFormInput.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(goalFormInput)
    const goalInput = formData.get('goal')

    let weatherCollectionThree = document.getElementsByTagName('p1');
    let weatherElementThree = weatherCollectionThree[2].innerText 

    let weatherCollectionFive = document.getElementsByTagName('p1');
    let weatherElementFive = weatherCollectionFive[4].innerText
   
    let workoutUrl = `http://localhost:3000/${goalInput}`

    fetch(workoutUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({weatherElementThreeKey: weatherElementThree, weatherElementFiveKey: weatherElementFive})
    }).then(response => response.json())
    .then(exercises => {
        const oneExercisePerDayArray = [exercises[0], exercises[5], exercises[10], exercises[11], exercises[16]]
        oneExercisePerDayArray.forEach((exercise,i) => {
            const workoutTitle =  document.createElement('h1')
            workoutTitle.textContent = exercise.title 
            document.querySelector(`#flip-card-front${i}`).appendChild(workoutTitle) 
        })

        const workoutOne = exercises.slice(0,5)
        const workoutTwo = exercises.slice(5,10)
        const workoutThree = exercises[10]
        const workoutFour = exercises.slice(11,16)
        const workoutFive = exercises.slice(16, (exercises.length))
        const oneWorkoutPerDayArray = [workoutOne, workoutTwo, workoutThree, workoutFour, workoutFive] 

        oneWorkoutPerDayArray.forEach((workout,i) => {
            const flipCardBack = document.querySelector(`.flip-card-back${i}`)
            switch(true) {
                    case (i==0||i==1||i==3||i==4): 
                    workout.map(exercise => {
                        let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = exercise.info 
                        flipCardBack.append(exerciseInfo);
                        exerciseInfo.dataset.exerciseId = exercise.id 
                        exerciseInfo.dataset.workoutId = exercise.workout_id  
                        exerciseInfo.dataset.title = exercise.title 
                        exerciseInfo.dataset.place = exercise.place 
                        exerciseInfo.dataset.category = exercise.category
                        exerciseInfo.dataset.bodyPart = exercise.body_part 
                        exerciseInfo.dataset.info = exercise.info 
                    })
                    break;
                    case (i==2):
                        let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = workout.info 
                        flipCardBack.append(exerciseInfo);
                        exerciseInfo.dataset.exerciseId = workout.id 
                        exerciseInfo.dataset.workoutId = workout.workout_id  
                        exerciseInfo.dataset.title = workout.title 
                        exerciseInfo.dataset.place = workout.place 
                        exerciseInfo.dataset.category = workout.category
                        exerciseInfo.dataset.bodyPart = workout.body_part 
                        exerciseInfo.dataset.info = workout.info 
                    break;
                    default: 
            }
        })
        function createArrayOfExerciseInformation () { 
            const exerciseAttributes = document.getElementsByTagName('p')
            let pTagArray = Array.from(exerciseAttributes);
            pTagArray.map(tag => {
                exerciseWorkoutArray.push({workoutId: tag.dataset.workoutId, 
                exerciseTitle: tag.dataset.title, exercisePlace: tag.dataset.place, exerciseCategory: tag.dataset.category,
                exerciseBodyPart: tag.dataset.bodyPart, exerciseInfo: tag.dataset.info})
                return tag 
            })
        } 
        createArrayOfExerciseInformation()
    })                                     
}) 
 

function createSplitNameForm () {
    const splitNameForm = document.createElement('form')
    splitNameForm.id = 'split-title'
    splitNameForm.innerHTML = `
        <input id='split' type='text' name='split-name' placeholder= 'Name of workout split'>
        <input id='split-button' type="submit" value="Save Split">`
    document.querySelector('.save-split').appendChild(splitNameForm)
}
createSplitNameForm()


splitNameFormInput = document.querySelector('#split-title')
splitNameFormInput.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(splitNameFormInput)
    const splitInput = formData.get('split-name')
    splitNameForm.reset()
        
    let exerciseIdAttribute = document.getElementsByTagName('p')
    let pTagArray = Array.from(exerciseIdAttribute)
    pTagArray.map((tag, i) => {
        switch(true) {
            case (i<=4): 
            workoutArray.push({user_id: userId, day_name: 'Day 1', workoutId: tag.dataset.workoutId, split_number: splitInput});
            break;
            case (i>4 && i<=9):
               workoutArray.push({user_id: userId, day_name: 'Day 2', workoutId: tag.dataset.workoutId, split_number: splitInput});
            break;
            case (i==10):
                 workoutArray.push({user_id: userId, day_name: 'Day 3', workoutId: tag.dataset.workoutId, split_number: splitInput});
            break;
            case (i>10 && i<=15): 
            workoutArray.push({user_id: userId, day_name: 'Day 4', workoutId: tag.dataset.workoutId, split_number: splitInput});
            break;
            case (i>15): 
            workoutArray.push({user_id: userId, day_name: 'Day 5', workoutId: tag.dataset.workoutId, split_number: splitInput});
            default: 
        }
        return tag 
    
    })

    fetch(dayURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({workoutArrayKey: workoutArray})
    }).then(response => response.json())
    fetch(exerciseURL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({exerciseWorkoutArrayKey: exerciseWorkoutArray}) 
    }).then(response => response.json())
})





   




    

    

    







  


    