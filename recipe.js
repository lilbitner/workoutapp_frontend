fetch('https://api.spoonacular.com/recipes/random?number=1&tags=ketogenic&apiKey=3b6e3c5caca545fab473693788643040')
.then(response => response.json())
.then(recipes => {
    const recipeValues = Object.values(recipes)
    const recipeArray = recipeValues[0]
    const recipeInfo = recipeArray['0']

    // recipeInfo.forEach(recipe => 

    const recipeCard = document.createElement('div')
    recipeCard.className = 'card'
    recipeCard.innerHTML = `
    <img src='${recipeInfo.image}' id='recipe-image' alt='${recipeInfo.title} width=80px height=80px>
    <div class ='container'> 
    <h1 id='card-title'>${recipeInfo.title}</h1>  
    <a class='recipe-title' href='${recipeInfo.sourceUrl}'>Click here for more recipe information</a>
    </div>
    `
    document.querySelector('div').append(recipeCard)

// <p id='card-instructions'>${recipeInfo.instructions}</p>

    // let h1 = document.createElement('h1')
    // h1.innerText = recipeInfo.title 
    // document.querySelector("div").appendChild(h1)

    // let img = document.createElement('img')
    // img.src = recipeInfo.image 
    // document.querySelector("div").appendChild(img)


    // let a = document.createElement('a')
    //  a.innerHTML = recipeInfo.sourceUrl
    
    // document.querySelector("div").appendChild(a)
    // console.log(recipeInfo.image)

    // recipeInfo.extendedIngredients.forEach(ingredient => {

    // let li = document.createElement('li')
    // li.textContent = extendedIngredients.name 
    // })
    // document.appendChild(ul)

    
console.log(recipeInfo)
console.log(recipeArray)
console.log(recipes)
console.log(Object.values(recipes))
console.log()
        })
  
// vegetarian: false
// vegan: false
// glutenFree: false
// dairyFree: false
// veryHealthy: false
// cheap: false
// veryPopular: false
// sustainable: false
// weightWatcherSmartPoints: 9
// gaps: "no"
// lowFodmap: false
// sourceUrl: "http://www.foodista.com/recipe/FLJTTJNH/chicken-mulligatawny-soup"
// spoonacularSourceUrl: "https://spoonacular.com/chicken-mulligatawny-soup-638199"
// aggregateLikes: 36
// spoonacularScore: 74
// healthScore: 18
// creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"
// license: "CC BY 3.0"
// sourceName: "Foodista"
// pricePerServing: 248.49
// extendedIngredients: (14) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// id: 638199
// title: "Chicken Mulligatawny Soup"
// readyInMinutes: 45
// servings: 6
// image: "https://spoonacular.com/recipeImages/638199-556x370.jpg"
// imageType: "jpg"
// cuisines: []
// dishTypes: ["soup"]
// diets: []
// occasions: (2) ["fall", "winter"]
// winePairing: {}
// instructions: "<ol><li>Heat the butter in a large pot over medium heat. Add the onions, celery, carrots, apples and ginger. Saut for 5 minutesstirring occasionally.</li><li>Mix in the flour, curry powder and cayenne pepper. Stir another 3-5 minutes, then add the chicken stock, rice chopped chicken and 1 tsp. salt.</li><li>Bring to a boil and lower the heat to a simmer. Simmer for 15 minutesor until the rice is tender and the chicken has cooked through.</li><li>Add the coconut milk and salt and pepper to taste.</li><li>Garnish with toasted almonds or cilantro!</li></ol>"
// analyzedInstructions: [{…}]