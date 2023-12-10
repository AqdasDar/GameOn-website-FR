function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//form
document.getElementsByName("reserve")[0].addEventListener("submit", validate);
function validate(event) {

    //first name
    let firstName = event.target.first.value;
    let firstNameError = document.getElementById("firstError");
    if (firstName.length < 2) {
        firstNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
        firstNameError.style.color = "red";
        event.preventDefault();
    } else {
        firstNameError.innerHTML = "";
    }
    //last name
    let lastName = event.target.last.value;
    let lastNameError = document.getElementById("lastError");
    if (lastName.length < 2) {
        lastNameError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
        lastNameError.style.color = "red";
        event.preventDefault();
    } else {
        lastNameError.innerHTML = "";
    }
    //email regex
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = "Veuillez entrer une adresse mail valide.";
        emailError.style.color = "red";
        event.preventDefault();
    } else {
        emailError.innerHTML = "";
    }
    //birthdate
    let birthdate = document.getElementById("birthdate").value;
    let birthdateError = document.getElementById("birthdateError");
    if (birthdate === "") {
        birthdateError.innerHTML = "Veuillez entrer votre date de naissance.";
        birthdateError.style.color = "red";
        event.preventDefault();
    } else {
        birthdateError.innerHTML = "";
    }
    //quantity
    let quantity = document.getElementById("quantity").value;
    let quantityError = document.getElementById("quantityError");
    if (quantity === "" || quantity < 0 || quantity > 99 || isNaN(quantity)) {
        quantityError.innerHTML = "Veuillez entrer un nombre.";
        quantityError.style.color = "red";
        event.preventDefault();
    }else {
        quantityError.innerHTML = "";
    }
    //location
    let location = document.getElementsByName("location");
    let locationError = document.getElementById("locationError");
    if (location[0].checked === false && location[1].checked === false && location[2].checked === false && location[3].checked === false && location[4].checked === false && location[5].checked === false) {
        locationError.innerHTML = "Veuillez choisir une option.";
        locationError.style.color = "red";
        event.preventDefault();
    } else {
        locationError.innerHTML = "";
    }

    //checkbox
    let checkbox = document.getElementById("checkbox1");
    let checkboxError = document.getElementById("checkboxError");
    if (checkbox.checked === false) {
        checkboxError.innerHTML = "Veuillez accepter les conditions d'utilisation.";
        checkboxError.style.color = "red";
        event.preventDefault();
    } else {
        checkboxError.innerHTML = "";
    }

    if (firstNameError.innerHTML === "" && lastNameError.innerHTML === "" && emailError.innerHTML === "" && birthdateError.innerHTML === "" && quantityError.innerHTML === "" && locationError.innerHTML === "" && checkboxError.innerHTML === "") {
        let modal_body = document.getElementsByClassName("modal-body")[0];
        modal_body.innerHTML = "<p class='success'>Merci ! Votre réservation a été reçue.</p>";
        modal_body.style.textAlign = "center";
        modal_body.style.fontSize = "1.5rem";
        modal_body.style.color = "green";
        modal_body.style.padding = "2rem";
        modal_body.style.fontWeight = "bold";
        modal_body.style.backgroundColor = "white";
        modal_body.style.borderRadius = "10px";
        modal_body.style.boxShadow = "0 0 10px 0 rgba(0, 0, 0, 0.2)";
        modal_body.style.margin = "0 auto";
        modal_body.style.width = "50%";
        modal_body.style.marginTop = "2rem";
        modal_body.style.marginBottom = "2rem";
        modal_body.style.border = "2px solid green";
        modal_body.style.borderTop = "none";
        modal_body.style.borderBottom = "none";

        //refresh page if click on close button and
        closeBtn.forEach((btn) => btn.addEventListener("click", refreshPage));
        function refreshPage() {
            window.location.reload();
        }

    }
}
