const emailInput = document.querySelector('.page__suscription__form__input');

const emailError = document.querySelector('.page__suscription__form__input-error');

const button = document.querySelector('.page__suscription__form__button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(emailInput.value, emailInput, emailError);
})

function validateEmail(valueInput, divInput, divError){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    } else{
        if(emailInput.value == ""){
            showError(divInput, divError, `Whoops! It looks like you forgot to add your email`);
        } else {
            showError(divInput, divError, `Please provide a valid email address`);
        }
        
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid var(--LightRed)';
    divError.innerHTML = `<p class="suscription__error-message">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = `2px solid var(--PaleBlue)`;
    divError.innerHTML = " ";
}
