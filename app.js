 const createForm = document.querySelector('#login-create') 
 const loginForm = document.querySelector('#login')
 const signupUrl = "http://localhost:3000/users"
 const authUrl = "http://localhost:3000/login"

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
    }).then(response => { 
        if(response.status >= 400) throw new Error("Bad Request")
        window.location.href='index.html'
    }).catch(error => console.error(error.message))
}) 

loginForm.addEventListener('submit', () => {
    event.preventDefault()
    const formData = new FormData(loginForm)
    const username = formData.get('username')
    const password = formData.get('password')
 
    fetch(authUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({username, password})
    }).then(response => response.json())
   .then( window.location.href="page_1.html")
    .then(response => {
        localStorage.setItem("token", response.token)
    })
}) 

// const token = localStorage.getItem("token")

// fetch('http://localhost:3000/users', {
//     method: "GET", 
//     headers: {
//         "Authorization": `Bearer ${token}`
//     }
// })




