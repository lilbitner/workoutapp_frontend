let userId = localStorage.getItem('userId')
const loginName = window.localStorage.getItem("username")
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

    weatherForm.addEventListener('submit', () => {
        event.preventDefault()
        const formData = new FormData(weatherForm)
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
} 
createWeatherForm()


    const goalForm = document.querySelector('#goal-form')
    goalForm.innerHTML = `
    <h2 id='goal-form-title'>Submit your goal<h2> <br> 
    <select id='form-input' name='goal' placeholder= 'Your goal'>
    <option value='bulk'>Bulk</option>
    <option value='cut'>Cut</option>
    </select>
    <input id='submit_button_goal' type="submit" name="Submit">
    `


// fetch('http://localhost:3000/workouts')
// .then(response => response.json())
// .then(console.log)

// fetch(`http://localhost:3000/users/id=${userId}`)
// // `http:localhost:3000/users/id=${userId}`
// .then(response => response.json())
// .then(console.log)
// .then(days => days.filter(day => {
//     day.user_id == localstorage.getitem('userId)
// let number = day.split_number.max 
// if (number > 0 ){
//             workoutNumberForm = document.createElement('form') 
//             workoutNumberForm.innerHTML = `
//             <select id=workoutNumber>
//             <option value='Workout${number}'>Workout${number}</option> 
//             `
//             document.querySelector('.header-button').appendChild(workoutNumberForm)


    goalForm.addEventListener('submit', () => {
        
        event.preventDefault()

        const formData = new FormData(goalForm)
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
                console.log(exercises)

                    const workoutTitleOne =  document.createElement('h1')
                    workoutTitleOne.textContent = exercises[0].title 
                    const frontCardOne = document.querySelector('.flip-card-front-one')
                    frontCardOne.appendChild(workoutTitleOne)

                    
                    const workoutOne = exercises.slice(0,5)
                    workoutOne.map((exercise) => {
                        const flipCardBackOne = document.querySelector('.flip-card-back-one')
                        let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = exercise.info 
                        flipCardBackOne.append(exerciseInfo);
                        exerciseInfo.dataset.exerciseId = exercise.id 
                        exerciseInfo.dataset.workoutId = exercise.workout_id  
                        exerciseInfo.dataset.title = exercise.title 
                        exerciseInfo.dataset.place = exercise.place 
                        exerciseInfo.dataset.category = exercise.category
                        exerciseInfo.dataset.bodyPart = exercise.body_part 
                        exerciseInfo.dataset.info = exercise.info 
                    })

                    const workoutTitleTwo =  document.createElement('h1')
                    workoutTitleTwo.textContent = exercises[5].title 
                    const frontCardTwo = document.querySelector('.flip-card-front-two')
                    frontCardTwo.appendChild(workoutTitleTwo)
                        

                    const workoutTwo = exercises.slice(5,10)
                    workoutTwo.map((exercise) => {
                        let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = exercise.info 
                        const flipCardBackTwo = document.querySelector('.flip-card-back-two')
                        flipCardBackTwo.append(exerciseInfo)
                        exerciseInfo.dataset.exerciseId = exercise.id 
                        exerciseInfo.dataset.workoutId = exercise.workout_id 
                        exerciseInfo.dataset.title = exercise.title 
                        exerciseInfo.dataset.place = exercise.place 
                        exerciseInfo.dataset.category = exercise.category
                        exerciseInfo.dataset.bodyPart = exercise.body_part 
                        exerciseInfo.dataset.info = exercise.info 
                    })

                    const workoutTitleThree =  document.createElement('h1')
                    workoutTitleThree.textContent = exercises[10].title 
                    const frontCardThree = document.querySelector('.flip-card-front-three')
                    frontCardThree.appendChild(workoutTitleThree)
                        

                    const workoutThree = exercises[10]
                    let exerciseInfo = document.createElement('p')
                    exerciseInfo.textContent = workoutThree.info 
                    exerciseInfo.dataset.exerciseId = workoutThree.id 
                    exerciseInfo.dataset.workoutId = workoutThree.workout_id 
                    exerciseInfo.dataset.title = workoutThree.title 
                    exerciseInfo.dataset.place = workoutThree.place 
                    exerciseInfo.dataset.category = workoutThree.category
                    exerciseInfo.dataset.bodyPart = workoutThree.body_part 
                    exerciseInfo.dataset.info = workoutThree.info 
                    const flipCardBackThree = document.querySelector('.flip-card-back-three')
                    flipCardBackThree.append(exerciseInfo)
                        
                        

                    const workoutTitleFour =  document.createElement('h1')
                    workoutTitleFour.textContent = exercises[11].title 
                    const frontCardFour = document.querySelector('.flip-card-front-four')
                    frontCardFour.appendChild(workoutTitleFour)

                    const workoutFour = exercises.slice(11,16)
                    workoutFour.map((exercise,i) => {
                    let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = exercise.info 
                        const flipCardBackFour = document.querySelector('.flip-card-back-four')
                        flipCardBackFour.append(exerciseInfo)
                        exerciseInfo.dataset.exerciseId = exercise.id 
                        exerciseInfo.dataset.workoutId = exercise.workout_id 
                        exerciseInfo.dataset.title = exercise.title 
                        exerciseInfo.dataset.place = exercise.place 
                        exerciseInfo.dataset.category = exercise.category
                        exerciseInfo.dataset.bodyPart = exercise.body_part 
                        exerciseInfo.dataset.info = exercise.info  
                    })
                        

                    const workoutTitleFive =  document.createElement('h1')
                    workoutTitleFive.textContent = exercises[16].title 
                    const frontCardFive = document.querySelector('.flip-card-front-five')
                    frontCardFive.appendChild(workoutTitleFive)

                    const workoutFive = exercises.slice(16, (exercises.length))
                    workoutFive.map((exercise,i) => {
                        let exerciseInfo = document.createElement('p')
                        exerciseInfo.textContent = exercise.info 
                        const flipCardBackFive = document.querySelector('.flip-card-back-five')
                        flipCardBackFive.append(exerciseInfo)
                        exerciseInfo.dataset.exerciseId = exercise.id 
                        exerciseInfo.dataset.workoutId = exercise.workout_id 
                        exerciseInfo.dataset.title = exercise.title 
                        exerciseInfo.dataset.place = exercise.place 
                        exerciseInfo.dataset.category = exercise.category
                        exerciseInfo.dataset.bodyPart = exercise.body_part 
                        exerciseInfo.dataset.info = exercise.info 
                    })

                    let exerciseAttributes = document.getElementsByTagName('p')
                    let pTagArray = Array.from(exerciseAttributes)
                    pTagArray.map(tag => {
                        exerciseWorkoutArray.push({workoutId: tag.dataset.workoutId, 
                            exerciseTitle: tag.dataset.title, exercisePlace: tag.dataset.place, exerciseCategory: tag.dataset.category,
                             exerciseBodyPart: tag.dataset.bodyPart, exerciseInfo: tag.dataset.info})
                        return tag 


                    })
                    console.log('exercisearray', exerciseWorkoutArray)
                        
                       
        })
    }) 

const splitNameForm = document.createElement('form')
splitNameForm.id = 'split-title'
splitNameForm.innerHTML = `
    <input id='split' type='text' name='split-name' placeholder= 'Name of workout split'>
    <input id='split-button' type="submit" value="Save Split">`
document.querySelector('.save-split').appendChild(splitNameForm)

const searchWorkoutForm = document.createElement('form')
searchWorkoutForm.id = 'search-workout'
searchWorkoutForm.innerHTML = `
    <input id='split' type='text' name='split-name' placeholder='Name of last workout'>
    <input id='split' type='text' name='goal' placeholder='Bulk or Cut?'>
    <input id='split-button' type='submit' value='Find Workout'>`
document.querySelector('.save-split').appendChild(searchWorkoutForm)






const saveButton = document.querySelector('#save')
const dayURL = "http://localhost:3000/days"
const exerciseURL = "http://localhost:3000/exercises"

splitNameForm.addEventListener('submit', () => {
   
    
    event.preventDefault()
    const formData = new FormData(splitNameForm)
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


console.log('dayarray', workoutArray)

        fetch(dayURL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({workoutArrayKey: workoutArray})
        }).then(response => response.json())
        .then(console.log('day return'))
        fetch(exerciseURL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({exerciseWorkoutArrayKey: exerciseWorkoutArray}) 
        }).then(response => response.json())
        .then(console.log('exercise return'))
})

searchWorkoutForm.addEventListener('submit', () => {
   
    
    event.preventDefault()
    const formData = new FormData(searchWorkoutForm)
    const searchWorkoutInput = formData.get('split-name')
    const goalSearchInput = formData.get('goal')
    searchWorkoutForm.reset()
    console.log(searchWorkoutInput)
    console.log(event)

    fetch(`http://localhost:3000/users/id=${userId}`)
    .then(response => response.json())
    // .then(console.log)
    .then(userObject => {
        const daysArray = userObject.days
    console.log(daysArray)
    frontCardTitle = []
    daysArray.map(day => {
     workoutTitle = day.workout.title
     frontCardTitle.push(workoutTitle)
    })

    const workoutTitleOne =  document.createElement('h1')
    workoutTitleOne.id = 'one'
    workoutTitleOne.textContent = frontCardTitle[0]  
    const frontCardOne = document.querySelector('.flip-card-front-one')
    frontCardOne.appendChild(workoutTitleOne) 

    const workoutTitleTwo =  document.createElement('h1')
    workoutTitleTwo.id = 'two'
    workoutTitleTwo.textContent = frontCardTitle[5] 
    const frontCardTwo = document.querySelector('.flip-card-front-two')
    frontCardTwo.appendChild(workoutTitleTwo)

    const workoutTitleThree =  document.createElement('h1')
    workoutTitleThree.id = 'three'
    workoutTitleThree.textContent = frontCardTitle[10] 
    const frontCardThree = document.querySelector('.flip-card-front-three')
    frontCardThree.appendChild(workoutTitleThree)

    const workoutTitleFour =  document.createElement('h1')
    workoutTitleFour.id = 'four'
    workoutTitleFour.textContent = frontCardTitle[11]
    const frontCardFour = document.querySelector('.flip-card-front-four')
    frontCardFour.appendChild(workoutTitleFour)

    const workoutTitleFive =  document.createElement('h1')
    workoutTitleFive.id = 'five'
    workoutTitleFive.textContent = frontCardTitle[16]
    const frontCardFive = document.querySelector('.flip-card-front-five')
    frontCardFive.appendChild(workoutTitleFive)
    workoutArray =[]
    daysArray.map(day => {
        workoutElement = day.workout.exercises 
        workoutArray.push(workoutElement)
    }) 



    // console.log(workoutArray)
    const arrayExercise = workoutArray[0] 

   const workoutArrayOfInterestBulk = [workoutArray[0], workoutArray[5], workoutArray[11],  workoutArray[16] ]
   const workoutArrayofInterestBulkSingle = [workoutArray[10]]
   const workoutArrayofInterestCut = [workoutArray[0], workoutArray[5], workoutArray[11]]
   const workoutArrayofInterestCutSingle = [workoutArray[10], workoutArray[16]]
//    console.log('workoutArrayOfInterestBulk', workoutArrayOfInterestBulk)

//    console.log('slicing', arrayExercise.slice(Math.max(arrayExercise.length -5, 0)))


    let arrayIWant = ( workoutArrayOfInterestBulk.map(workout => { return workout.slice(Math.max(workout.length -5, 0))}))
    let arrayIWantTwo = ( workoutArrayofInterestBulkSingle.map(workout => { return workout.slice(Math.max(workout.length -1, 0))}))
    console.log(arrayIWantTwo)

    arrayIWantTwo.map(workout => {
        console.log(workout)
        workout.map(exercise => {
            let exerciseInfoFive = document.createElement('p')
            exerciseInfoFive.textContent = exercise.info 
            console.log(exercise.info)
            const flipCardBackThree = document.querySelector('.flip-card-back-three')
            flipCardBackThree.append(exerciseInfoFive);
        }) 
    })


    
    // console.log('arrayIwant', arrayIWant)

    arrayIWant.map((workout,i) => {
        console.log(workout)
    switch(true) {
        case (i==0):
        workout.map(exercise => {
            let exerciseInfoOne = document.createElement('p')
            exerciseInfoOne.textContent = exercise.info 
            console.log(exercise.info)
            const flipCardBackOne = document.querySelector('.flip-card-back-one')
            flipCardBackOne.append(exerciseInfoOne);   
        })   
        break;
        case (i==1):
        workout.map(exercise => {
            let exerciseInfoTwo = document.createElement('p')
            exerciseInfoTwo.textContent = exercise.info 
            const flipCardBackTwo = document.querySelector('.flip-card-back-two')
            flipCardBackTwo.append(exerciseInfoTwo);
        })
        break;
        case (i==2):
        workout.map(exercise => {
            let exerciseInfoThree = document.createElement('p')
            exerciseInfoThree.textContent = exercise.info 
            const flipCardBackFour = document.querySelector('.flip-card-back-four')
            flipCardBackFour.append(exerciseInfoThree);
        })
        break;
        case (i==3):
        workout.map(exercise => {
            let exerciseInfoFour = document.createElement('p')
            exerciseInfoFour.textContent = exercise.info  
            const flipCardBackFive = document.querySelector('.flip-card-back-five')
            flipCardBackFive.append(exerciseInfoFour);
        })
        default: 
    }
    })
    
   
})
})
   




    

    

    







  


    