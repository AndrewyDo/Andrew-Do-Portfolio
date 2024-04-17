const scriptURL = 'https://script.google.com/macros/s/AKfycbxXb5NCj_j7b_dT9NvvP9RMgeR8aAAS0gp_dzncht6f70344Lm4EOk1OhA3vYMnkMdqMQ/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("message")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML = "Message sent successfully!"
        setTimeout(function() {
            message.innerHTML = ""
        }, 4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})