const authUrl = "http://localhost:3000/login"
const loginForm = document.querySelector('#login')

loginForm.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(loginForm)
    const username = formData.get('username')
    const password = formData.get('password')
    loginForm.reset()
 
    fetch(authUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({username, password})
    }).then(response => response.json())
    .then(response => {
        if (response.message == "Wrong password") {
            let wrongPassword = document.createElement('h3')
            wrongPassword.textContent = "Invalid username or password, please try again"
            document.body.appendChild(wrongPassword)
        } else if  
            (response.message == "Wrong user credentials") {
                let wrongPassword = document.createElement('h3')
                wrongPassword.textContent = "Invalid username or password, please try again"
                document.body.appendChild(wrongPassword) 
        } else {
        localStorage.setItem("token", response.token)
        localStorage.setItem("username", response.username)
        localStorage.setItem("userId", response.user_id)
        window.location.href="page_1.html"
        }
    })
}) 


    