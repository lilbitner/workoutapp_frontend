 const createForm = document.querySelector('#login-create') 
 const signupUrl = "http://localhost:3000/users"

 createForm.addEventListener('submit', () => {
    event.preventDefault()
    console.log(event)
    const formData = new FormData(createForm)
    const username = formData.get('username')
    const password = formData.get('password')
 
    fetch(signupUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(response => response.json())
    .then(response => {
        if (response.user) {

            let usernameCreation = document.createElement('h3')
                usernameCreation.textContent = `Welcome to Euphoria, ${response.user.username}! Please login.` 
                document.querySelector('#container').appendChild(usernameCreation)
        } else {
              
            let shortPassword = document.createElement('h3')
            shortPassword.textContent = "Password must have 7 or more characters"
            document.querySelector('#container').appendChild(shortPassword)
        }
    })
})





