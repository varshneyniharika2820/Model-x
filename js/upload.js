const scriptURL = 'https://script.google.com/macros/s/AKfycbzkMOZ7OrgvqnXZdtoEYGAISH-i5cukgBE4_MHcUXv58HJ9vKfZYenYQelAOJ8u94P_/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
