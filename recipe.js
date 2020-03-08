fetch('https://api.spoonacular.com/recipes/random?number=1&tags=ketogenic&apiKey=3b6e3c5caca545fab473693788643040')
.then(response => response.json())
.then(recipes => {
    const recipeValues = Object.values(recipes)
    const recipe = recipeValues[0]
    recipe.forEach(object=> {
        const recipeCard = document.createElement('div')
        recipeCard.id = 'card'
        recipeCard.innerHTML = `
            <img src='${object.image}' id='recipe-image' alt='${object.title} width=80px height=80px>
            <div class ='container'> 
            <h1 id='card-title'>${object.title}</h1>  
            <button class='recipe-title' onclick = window.location.href='${object.sourceUrl}'>Click here for more recipe information</button>
            <button id='home-button' onclick= window.location.href='page_1.html'>Home</button
            </div>
            `
        document.querySelector('div').append(recipeCard)
    })
})
  
