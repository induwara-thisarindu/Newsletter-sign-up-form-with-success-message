const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');
const emailEl = document.getElementById('email');
const errorMessage = document.getElementById('error-msg');
const emailP = document.getElementById('email-holder');
const containerCard = document.getElementById('container');
const successCard = document.getElementById('card-container');
const dismissButton = document.getElementById('dismiss');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
});

submitBtn.addEventListener('click', (e) => {
    handleSubmit();
});

function handleSubmit() {
    let emailValue = emailEl.value;

    if (emailValue === "") {
        errorMessage.innerHTML = "Please enter an email";
        emailEl.classList.toggle("error", true);
    } else if (!isEmail(emailValue)) {
        errorMessage.innerHTML = "Valid email required";
        emailEl.classList.toggle("error", true);
    } else {
        errorMessage.innerHTML = "";
        emailP.innerText = emailValue;
        emailEl.classList.toggle("error", false);
        containerCard.classList.add("display");
        successCard.classList.add("display-show");
    }
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

dismissButton.addEventListener('click', (e) => {
    containerCard.classList.remove('display');
    successCard.classList.remove("display-show");

    emailEl.value = '';
})