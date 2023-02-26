
// DOM for Modal Module 

const DomModalEvent = (() => {
  const btn = document.getElementById("modal-button");
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");


  // window.addEventListener("load", () => {
  //   modal.style.display = "none";
  // });


  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none"
  });
})();


// Validate the form with the Constraint Validation API
const constraintValidationAPI = (() => {

  const form = document.getElementsByTagName("form")[0];

  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error-msgs")

  const country = document.getElementById("country");
  const countryError = document.querySelector("#country + datalist#countries + span.error-msgs");

  const zip = document.getElementById("zip");
  const zipError = document.querySelector("#zip + span.error-msgs");

  const password = document.getElementById("password");
  const passwordError = document.querySelector("#password + span.error-msgs");

  const confirmPassword = document.getElementById("confirm-password");
  const confirmPasswordError = document.querySelector("#confirm-password + span.error-msgs");


  email.addEventListener("input", () => {
    // Run check to see if input from user is valid, if so reset class and clear DOM text
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error-msgs"
    } else {
      showError();
    }
  });


  zip.addEventListener("input", () => {
    if (zip.validity.valid) {
      zipError.textContent = "";
      zipError.className = "error-msgs";
    } else {
      showError();
    }
  });

  password.addEventListener("input", () => {
    if (password.validity.valid) {
      passwordError.textContent = "";
      passwordError.className = "error-msgs";
    } else {
      showError();
    }    
  });

  confirmPassword.addEventListener("input", () => {
    if (confirmPassword.validity.valid) {
      confirmPasswordError.textContent = "";
      confirmPasswordError.className = "error-msgs";
    } else {
      showError();
    }
  });

  form.addEventListener("submit", () => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }

    if (!country.validity.valid) {
      showError();
      e.preventDefault();
    }

    if (!zip.validity.valid) {
      showError();
      e.preventDefault();
    }

    if (!password.validity.valid) {
      showError();
      e.preventDefault();
    }


    // Alert the user if successful submission occured
    if (
      email.validity.valid &&
      country.validity.valid &&
      zip.validity.valid &&
      password.validity.valid &&
      confirmPassword.validity.valid
    ) {
      alert("Successfully Submitted. Arigatou!")
    }
  });

  // Create event listener for reset form and clear the DOM when clicked
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", function clearForm() {
    const activeErrorMsgNodeList = document.querySelector(".active");
    for (let i = 0; i < activeErrorMsgNodeList.length; i++) {
      activeErrorMsgNodeList[i].textContent = "";
      activeErrorMsgNodeList[i].className = "error-msgs";
    }
  });


  function showError() {
    // Run validations against email
    if (document.activeElement == email) {
      if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address";
      }
      emailError.className = "error-msgs active";
    }

    // Run validations against country
    if (document.activeElement == country) {
      if (country.validity.valueMissing) {
        countryError.textContent = "You need to specift your country.";
      } else if (country.validity.tooShort) {
        countryError.textContent = "You need to specify your country.";
      }
      countryError.className = "error-msgs active";
    }


    // Run validations against zipcode
    if (document.activeElement == zip) {
      if (zip.validity.valueMissing) {
        zipError.textContent = "You need to specify your zipcode!";
      } else if (zip.validity.tooShort) {
        zipError.textContent = "Your zipcode is too short!";
      } else if (zip.validity.patternMismatch) {
        zipError.textContent = "Your zipcode must be five digits, i.e XXXXX!";
      }
      zipError.className = "error-msgs active";
    }


    //Run validaions against password
    if (document.activeElement == password) {
      if (password.validity.valueMissing) {
        passwordError.textContent = "You need to specify your password!";
      } else if (password.validity.tooShort) {
        passwordError.textContent = "Your password is too short, does not meet minimum of six characters!";
      } else if (password.validity.patterMismatch) {
        passwordError.textContent = "Your password must contain at least one upper case, one lower case, one number, and one special (!@#$%^&*) character!"
      }
      passwordError.className = "error-msgs active";
    }


    // Run validations against confirmation password
    if (document.activeElement == confirmPassword) {
      if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = "You need to confirm your password!";
      } else if (confirmPassword.validity.patterMismatch) {
        if (password.value !== confirmPassword.value) {
          confirmPassword.textContent = "Your passwords do not match";
        }
      }
      confirmPasswordError.className = "error-msgs active";
    }
  }
})();




// const dummyIIFE = (() => {
//   const dummyDiv = document.getElementById("dummy-div");

//   dummyDiv.textContent = "Hello po idol";
//   dummyDiv.className = "dummy-styling";

// })();



