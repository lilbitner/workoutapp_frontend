fetch('https://api.spoonacular.com/recipes/random?number=1&tags=ketogenic&apiKey=3b6e3c5caca545fab473693788643040')
.then(response => response.json())
.then(recipes => {
    const recipeValues = Object.values(recipes)
    const recipeArray = recipeValues[0]
    const recipeInfo = recipeArray['0']

    // recipeInfo.forEach(recipe => 

    const recipeCard = document.createElement('div')
    recipeCard.id = 'card'
    recipeCard.innerHTML = `
    <img src='${recipeInfo.image}' id='recipe-image' alt='${recipeInfo.title} width=80px height=80px>
    <div class ='container'> 
    <h1 id='card-title'>${recipeInfo.title}</h1>  
    <button class='recipe-title' onclick = window.location.href='${recipeInfo.sourceUrl}'>Click here for more recipe information</button>
    <button id='home-button' onclick= window.location.href='page_1.html'>Home</button
    </div>
    `
    document.querySelector('div').append(recipeCard)


    
console.log(recipeInfo)
console.log(recipeArray)
console.log(recipes)
console.log(Object.values(recipes))
console.log()
        })
  
