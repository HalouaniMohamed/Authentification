import res from 'express/lib/response'
import fetch from 'node-fetch'
const form = document.getElementById('registration-form')
const username = document.getElementById('username').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const passwordConfirm = document.getElementById('username').value
form.addEventListener('submit', registerUser)

async function registerUser (event) {
  event.preventDefault()
  let valid = false
  if (password === passwordConfirm) {
    valid = true
  }
  if (valid) {
    const result = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'applicatio/json'
      },
      body: JSON.stringify({
        username, email, password
      })
    }).then(res => res.json())
    console.log(result)
  } else {
    res.send(400)
  }
}
