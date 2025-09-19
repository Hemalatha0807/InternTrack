const scriptURL = 'https://script.google.com/macros/s/AKfycbxi_F7eWefeB5Pdmuk603T7jk2zlUB-ck9OdaiK-bwE4oLQnVFdvaxFmATbZLt4tGM8/exec'; // Replace with your Web App URL
const form = document.forms['internship-form'];

form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Internship details submitted successfully!"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message));
});
