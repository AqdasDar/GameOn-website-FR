function editNav(event) {
    event.preventDefault();
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
const closeBtn = document.querySelectorAll(".close");
const NavResponsive = document.getElementById("navResponsive");
const form = document.getElementById("form");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));
NavResponsive.addEventListener("click", editNav);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// fermer modal form
function closeModal() {
  modalbg.style.display = "none";
}

//form
form.addEventListener("submit", validate);
function validate(event) {

    ///Gestion des erreurs
    //first name
     let firstName = event.target.first.value; //event.target.first.value = document.getElementById("first").value
    // pour récupérer la valeur du champ first dans le formulaire reserve qui a été soumis (submit) et qui a été capturé par l'event
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
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; //regex email format
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
    //quantity nombre de tournois entre 0 et 99
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

    //checkbox  conditions d'utilisation
    let checkbox = document.getElementById("checkbox1");
    let checkboxError = document.getElementById("checkboxError");
    if (checkbox.checked === false) {
        checkboxError.innerHTML = "Veuillez accepter les conditions d'utilisation.";
        checkboxError.style.color = "red";
        event.preventDefault();
    } else {
        checkboxError.innerHTML = "";
    }
    // si pas d'erreur, message de confirmation
    if (firstNameError.innerHTML === "" && lastNameError.innerHTML === "" && emailError.innerHTML === "" && birthdateError.innerHTML === "" && quantityError.innerHTML === "" && locationError.innerHTML === "" && checkboxError.innerHTML === "") {
        let modal_body = document.getElementsByClassName("modal-body")[0];
        let content = document.querySelector(".content");
        modal_body.innerHTML = "<p class='success'>Merci pour votre inscription</p>";
        let success = document.querySelector(".success");
        modal_body.style.textAlign = "center";
        modal_body.style.fontSize = "36px";
        modal_body.style.width = "100vw";
        modal_body.style.height = "100vh";
        modal_body.style.display = "flex";
        modal_body.style.justifyContent = "center";
        modal_body.style.alignItems = "center";
        content.style.margin = "0";
        content.style.padding = "0";
        content.style.maxWidth = "none";
        success.style.display = "flex";
        success.style.justifyContent = "center";
        success.style.alignItems = "center";
        success.style.width = "100%";
        modal_body.innerHTML += '<input class="button bouton btn-submit" type="submit" value="Fermer">';
        let btnSubmit = document.querySelector(".btn-submit");
btnSubmit.style.position = "absolute";
btnSubmit.style.bottom = "0";

        //fermer modal si click sur bouton fermer avec refresh page
        btnSubmit.addEventListener("click", refreshPage);


        //refresh page if click on close button
        closeBtn.forEach((btn) => btn.addEventListener("click", refreshPage));
        function refreshPage() {
            window.location.reload();
        }
    }
}
