const logregBox = document.querySelector('.logreg-box')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')

const formL = document.getElementById('form-0');
const formR = document.getElementById('form-1');

registerLink.addEventListener('click',()=>{
    logregBox.classList.add('active')
    formL.reset();
})

loginLink.addEventListener('click',()=>{
    logregBox.classList.remove('active')
    formR.reset();
})


///////////////////////////////////////////



const username = document.getElementById('username');
const emails = document.querySelectorAll('.email-input');
const passwords = document.querySelectorAll('.password-input');
const password2 = document.getElementById('password2');

formL.addEventListener('submit', e => {
    e.preventDefault();
});
formR.addEventListener('submit', e => {
    e.preventDefault();
});

emails.forEach(email => {
    email.addEventListener('input',() => {
        const emailValue = email.value.trim();
        if(emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
        } else {
            setSuccess(email);
        }
    });
})

passwords.forEach(password => {
    password.addEventListener('input',() => {
    const passwordValue = password.value.trim();
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}); 

})

username.addEventListener('input',() => {
    const usernameValue = username.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
});

password2.addEventListener('input',()=>{
    const password2Value = password2.value.trim();
    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwords[1].value.trim()) {
        setError(password2, "Passwords doesn't match");
        password2.previousElementSibling.classList.add('fa-solid')
        password2.previousElementSibling.classList.add('fa-circle-xmark')
    } else {
        setSuccess(password2);
        password2.previousElementSibling.classList.remove('fa-circle-xmark')
        password2.previousElementSibling.classList.add('fa-check')
    }
})



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    //inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    //inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    //const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    //const password2Value = password2.value.trim();

   /*  if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    } */

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    /* if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    } */

};

const toasts = document.getElementById('toasts')
const buttons = document.querySelectorAll('.btn-0')

buttons[0].addEventListener('click',()=>{
    if (loginOK()){
        createNotification('Login successful! ','fa-solid fa-check', 'green')
    }
    else{
        createNotification('Login Failed! ','fa-solid fa-circle-xmark', 'red')
    }
})
buttons[1].addEventListener('click',()=>{
    if (loginOK()){
    createNotification('Register successful! ','fa-solid fa-check', 'green')
}
    else {
    createNotification('Register Failed! ','fa-solid fa-circle-xmark', 'red')

    }
})
function createNotification(msg,type,color) {
    const notif = document.createElement('div')
    const icon = document.createElement('i')
    notif.classList.add('toast')
    notif.innerText = msg
    notif.style.color= color
    toasts.appendChild(notif)
    icon.className = type
    notif.appendChild(icon)
    setTimeout(()=>{
        notif.remove()
    }, 3000)
}

function loginOK(){
    if (
        emails[0].parentElement.classList.contains('error') ||
        passwords[0].parentElement.classList.contains('error')
    ){
        return false
    }
    else {
        return true
    }
}


const brands = document.querySelectorAll('.fa-brands')

brands.forEach(brand =>{
    brand.addEventListener('mouseenter',()=>{
        brand.classList.add('fa-flip')
    })
    brand.addEventListener('mouseleave',()=>{
        brand.classList.remove('fa-flip')
    })
})

/////////// /////////
const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

