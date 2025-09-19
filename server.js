const scriptURL ='https://script.google.com/macros/s/AKfycbw8i3LRiXlmKlpXrHtivMjM6l3o_fJCCz658MIl19Bps_pZ8M_QuBq6bymVoo2AyUwH6Q/exec'

const form = document.forms['internship-form']

form.addEventListener('submit', e => {
    e.preventDefault();
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});
