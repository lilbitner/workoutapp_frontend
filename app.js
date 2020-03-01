 const createForm = document.querySelector('#login-create') 
 const loginForm = document.querySelector('#login')

 createForm.addEventListener('submit', () => {
    const formData = new FormData(createForm)
    const username = formData.get('username')
    const name = formData.get('password')
 
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(response => response.json())
    .then(response => {
        localStorage.setItem("token", response.token)
})
}) 

loginForm.addEventListener('submit', () => {
    const formData = new FormData(loginForm)
    const username = formData.get('username')
    const name = formData.get('password')
 
    fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then(response => response.json())
    .then(response => {
        localStorage.setItem("token", response.token)
})
}) 

const token = localStorage.getItem("token")

fetch('http://localhost:3000/users', {
    method: "GET", 
    headers: {
        "Authorization": `Bearer ${token}`
    }
})




