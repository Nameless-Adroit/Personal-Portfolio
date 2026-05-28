const welcomeMessage = document.getElementById('welcomeMessage');
const text = 'WELCOME';
let i = 0;

//function responisble for typing the welcome message letter by letter
function typeWriter(){
  if(i < text.length){   
    welcomeMessage.innerHTML += text.charAt(i); 
    i++;
    setTimeout(typeWriter, 200);
  }
}

typeWriter();


//This function is the one responsible for updating time on the page
setInterval(()=>{
    let time = new Date();
    document.getElementById('nav-time').innerHTML = time.toLocaleString();
},1000);


//Client side form validation
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const genderInputs = document.getElementsByName("gender");
const genderError = document.getElementById('genderError');
const btnSubmit = document.getElementById('btnSubmit');

//Adding an Event listener to the submit button to validate the form inputs when the user clicks it
btnSubmit.addEventListener('click', (event) => {
    let valid = true;

    // Read values at click time 
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
   

    //Validating values and showing error messages if invalid, otherwise clearing error messages
    if (name === "") {
        nameError.innerHTML = "Please enter your name";
        valid = false;
    } else {
        nameError.innerHTML = "";
    }

    if (email === "") {
        emailError.innerHTML = "Please enter your email";
        valid = false;
    }else if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){ //This is the "regex" That checks if the email is in a valid format
        emailError.innerHTML = "Please enter a valid email address.";
        valid = false;
    }else {
        emailError.innerHTML = "";
    }

    if (message === "") {
        messageError.innerHTML = "Please enter your message";
        valid = false;
    } else {
        messageError.innerHTML = "";
    }

    //Checking for gender selection and showing error message if not selected.
    let selectedGender = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = true;
            break;
        }
    }

    if (!selectedGender) {
        genderError.innerHTML = "Please select your gender";
        valid = false;
    } else {
        genderError.innerHTML = "";
    }

    // Prevent form submission if invalid ✅
    if (!valid) {
        event.preventDefault();
    }
});

