/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

// // There are many ways to pick a DOM node; here we get the form itself and the email
// // input box, as well as the span element into which we will place the error message

// const form = document.querySelector("form");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");


// email.addEventListener("input", (event) => {
//   // Each time the user types something, we check if the
//   // form fields are valid.

//   if (email.validity.valid) {
//     // In case there is an error message visible, if the field
//     // is valid, we remove the error message.
//     emailError.textContent = ""; // Reset the content of the message
//     emailError.className = "error"; // Reset the visual state of the message
//   } else {
//     // If there is still an error, show the correct error
//     showError();
//   }
// });


// form.addEventListener("submit", (event) => {
//   // If the email field is valid, we let the form submit
//   if (!email.validity.valid) {
//     // If it isn't, we displau an appropriate error message
//     showError();
//     // Then we prevent the form from being sent by cancelling the event
//     event.preventDefault();
//   }
// });


// function showError() {
//   if (email.validity.valueMissing) {
//     // If the field is empty,
//     // display the following error message.
//     emailError.textContent = "You need to enter an email address.";
//   } else if (email.validity.typeMismatch) {
//     // if the field doesn't contain an email address
//     // display the following errror message.
//     emailError.textContent = "Entered value need to be an email address";
//   } else if (email.validity.tooShort) {
//     // if the data is too short,
//     // display the following error message.
//     emailError.textContent = `Email should be atleast ${email.minLength} characters; you entered ${email.value.length}.`;
//   }

//   // Set the styling appropriately
//   emailError.className = "error active";
// }



// function checkZIP() {
//   // For each country, defines the pattern that the ZIP has to follow
//   const constraints = {
//     ch: [
//       "^(CH-)?\\d{4}$",
//       "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
//     ],
//     fr: [
//       "^(F-)?\\d{5}$",
//       "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
//     ],
//     de: [
//       "^(D-)?\\d{5}$",
//       "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
//     ],
//     nl: [
//       "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
//       "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
//     ],
//   };

//   // Read the country id
//   const country = document.getElementById("Country").value;

//   // Get the NPA field
//   const ZIPField = document.getElementById("ZIP");

//   // Build the constraint checker
//   const constraint = new RegExp(constraints[country][0], "");
//   console.log(constraint);

//   // Check it!
//   if (constraint.test(ZIPField.value)) {
//     // The ZIP follows the constraint, we use the ConstraintAPI to tell it
//     ZIPField.setCustomValidity("");
//   } else {
//     // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
//     // give a message about the format required for this country
//     ZIPField.setCustomValidity(constraints[country][1]);
//   }
// }


// window.onload = () => {
//   document.getElementById("Country").onchange = checkZIP;
//   document.getElementById("ZIP").oninput = checkZIP;
// };


// DOM for Modal Module
const DomModalEvents = (() => {
  const modal = document.getElementById("myModal");
  const btn = document.getElementById("myModalBtn");
  const span = document.querySelector(".close");

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
})();

// Validate the form with the Constraint Validation API
const constraintValidationAPI = (() => {
  const form = document.getElementsByTagName("form")[0];

  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error-msgs");

  const country = document.getElementById("country");
  const countryError = document.querySelector("#country + span.error-msgs");

  const zip = document.getElementById("zip");
  const zipError = document.querySelector("#zip + span.error-msgs");

  const pw = document.getElementById("pw");
  const pwError = document.querySelector("#pw + span.error-msgs");

  const confPw = document.getElementById("conf-pw");
  const confPwError = document.querySelector("#conf-pw + span.error-msgs");

  email.addEventListener("input", function (event) {
    // Run check to see if input from user is valid, if so reset class and clear DOM text
    if (email.validity.valid) {
      emailError.textContent = "";
      emailError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  country.addEventListener("input", function (event) {
    if (country.validity.valid) {
      countryError.textContent = "";
      countryError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  zip.addEventListener("input", function (event) {
    if (zip.validity.valid) {
      zipError.textContent = "";
      zipError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  pw.addEventListener("input", function (event) {
    if (pw.validity.valid) {
      pwError.textContent = "";
      pwError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run check to see if input from user is valid, if so reset class and clear DOM text
  confPw.addEventListener("input", function (event) {
    if (confPw.validity.valid) {
      confPwError.textContent = "";
      confPwError.className = "error-msgs";
    } else {
      showError();
    }
  });

  // Run checks on submission to ensure valid entries
  form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!country.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!zip.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!pw.validity.valid) {
      showError();
      event.preventDefault();
    }

    if (!confPw.validity.valid) {
      showError();
      event.preventDefault();
    }

    // Alert the user if successful submission occured
    if (
      email.validity.valid &&
      country.validity.valid &&
      zip.validity.valid &&
      pw.validity.valid &&
      confPw.validity.valid
    ) {
      alert("Successfully Submitted.  Thank You!");
    }
  });

  // Create event listener for reset form and clear the DOM when clicked
  const resetButton = document.querySelector(".reset-button");
  resetButton.addEventListener("click", function clearForm() {
    const activeErrorMsgNodeList = document.querySelectorAll(".active");
    for (let i = 0; i < activeErrorMsgNodeList.length; i++) {
      activeErrorMsgNodeList[i].textContent = "";
      activeErrorMsgNodeList[i].className = "error-msgs";
    }
  });

  function showError() {
    // Run validations against email
    if (document.activeElement == email) {
      if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address.";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an email address.";
      }
      emailError.className = "error-msgs active";
    }

    // Run validations against country
    if (document.activeElement == country) {
      if (country.validity.valueMissing) {
        countryError.textContent = "You need to specify your country.";
      } else if (country.validity.tooShort) {
        countryError.textContent =
          "Your specified country value is too short! Min length is two characters!";
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
        zipError.textContent = "Your zipcode must be five digits, ie XXXXX!";
      }
      zipError.className = "error-msgs active";
    }

    // Run validations against password
    if (document.activeElement == pw) {
      if (pw.validity.valueMissing) {
        pwError.textContent = "You need to specify a password!";
      } else if (pw.validity.tooShort) {
        pwError.textContent =
          "Your password is too short, does not meet min of six characters!";
      } else if (pw.validity.patternMismatch) {
        pwError.textContent =
          "Your password must contain at least one upper case, one lower case, one number, and one special (!@#$%^&*)!";
      }
      pwError.className = "error-msgs active";
    }

    // Run validations against confirmation password
    if (document.activeElement == confPw) {
      if (confPw.validity.valueMissing) {
        confPwError.textContent = "You need to confirm your password!";
      } else if (confPw.validity.patternMismatch) {
        if (pw.value !== confPw.value) {
          confPwError.textContent = "Your passwords do not match!";
        }
      }
      confPwError.className = "error-msgs active";
    }
  }
})();





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsdUNBQXVDO0FBQ3ZDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSwyREFBMkQsaUJBQWlCLFlBQVksY0FBYyxtQkFBbUI7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLEVBQUU7QUFDdEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvcm0tdmFsaWRhdGlvbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyAvLyBUaGVyZSBhcmUgbWFueSB3YXlzIHRvIHBpY2sgYSBET00gbm9kZTsgaGVyZSB3ZSBnZXQgdGhlIGZvcm0gaXRzZWxmIGFuZCB0aGUgZW1haWxcclxuLy8gLy8gaW5wdXQgYm94LCBhcyB3ZWxsIGFzIHRoZSBzcGFuIGVsZW1lbnQgaW50byB3aGljaCB3ZSB3aWxsIHBsYWNlIHRoZSBlcnJvciBtZXNzYWdlXHJcblxyXG4vLyBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbi8vIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWlsXCIpO1xyXG4vLyBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWlsICsgc3Bhbi5lcnJvclwiKTtcclxuXHJcblxyXG4vLyBlbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbi8vICAgLy8gRWFjaCB0aW1lIHRoZSB1c2VyIHR5cGVzIHNvbWV0aGluZywgd2UgY2hlY2sgaWYgdGhlXHJcbi8vICAgLy8gZm9ybSBmaWVsZHMgYXJlIHZhbGlkLlxyXG5cclxuLy8gICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcclxuLy8gICAgIC8vIEluIGNhc2UgdGhlcmUgaXMgYW4gZXJyb3IgbWVzc2FnZSB2aXNpYmxlLCBpZiB0aGUgZmllbGRcclxuLy8gICAgIC8vIGlzIHZhbGlkLCB3ZSByZW1vdmUgdGhlIGVycm9yIG1lc3NhZ2UuXHJcbi8vICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJcIjsgLy8gUmVzZXQgdGhlIGNvbnRlbnQgb2YgdGhlIG1lc3NhZ2VcclxuLy8gICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvclwiOyAvLyBSZXNldCB0aGUgdmlzdWFsIHN0YXRlIG9mIHRoZSBtZXNzYWdlXHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIC8vIElmIHRoZXJlIGlzIHN0aWxsIGFuIGVycm9yLCBzaG93IHRoZSBjb3JyZWN0IGVycm9yXHJcbi8vICAgICBzaG93RXJyb3IoKTtcclxuLy8gICB9XHJcbi8vIH0pO1xyXG5cclxuXHJcbi8vIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcclxuLy8gICAvLyBJZiB0aGUgZW1haWwgZmllbGQgaXMgdmFsaWQsIHdlIGxldCB0aGUgZm9ybSBzdWJtaXRcclxuLy8gICBpZiAoIWVtYWlsLnZhbGlkaXR5LnZhbGlkKSB7XHJcbi8vICAgICAvLyBJZiBpdCBpc24ndCwgd2UgZGlzcGxhdSBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlXHJcbi8vICAgICBzaG93RXJyb3IoKTtcclxuLy8gICAgIC8vIFRoZW4gd2UgcHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHNlbnQgYnkgY2FuY2VsbGluZyB0aGUgZXZlbnRcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBzaG93RXJyb3IoKSB7XHJcbi8vICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4vLyAgICAgLy8gSWYgdGhlIGZpZWxkIGlzIGVtcHR5LFxyXG4vLyAgICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXHJcbi8vICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBlbnRlciBhbiBlbWFpbCBhZGRyZXNzLlwiO1xyXG4vLyAgIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbi8vICAgICAvLyBpZiB0aGUgZmllbGQgZG9lc24ndCBjb250YWluIGFuIGVtYWlsIGFkZHJlc3NcclxuLy8gICAgIC8vIGRpc3BsYXkgdGhlIGZvbGxvd2luZyBlcnJyb3IgbWVzc2FnZS5cclxuLy8gICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIkVudGVyZWQgdmFsdWUgbmVlZCB0byBiZSBhbiBlbWFpbCBhZGRyZXNzXCI7XHJcbi8vICAgfSBlbHNlIGlmIChlbWFpbC52YWxpZGl0eS50b29TaG9ydCkge1xyXG4vLyAgICAgLy8gaWYgdGhlIGRhdGEgaXMgdG9vIHNob3J0LFxyXG4vLyAgICAgLy8gZGlzcGxheSB0aGUgZm9sbG93aW5nIGVycm9yIG1lc3NhZ2UuXHJcbi8vICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gYEVtYWlsIHNob3VsZCBiZSBhdGxlYXN0ICR7ZW1haWwubWluTGVuZ3RofSBjaGFyYWN0ZXJzOyB5b3UgZW50ZXJlZCAke2VtYWlsLnZhbHVlLmxlbmd0aH0uYDtcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIFNldCB0aGUgc3R5bGluZyBhcHByb3ByaWF0ZWx5XHJcbi8vICAgZW1haWxFcnJvci5jbGFzc05hbWUgPSBcImVycm9yIGFjdGl2ZVwiO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGNoZWNrWklQKCkge1xyXG4vLyAgIC8vIEZvciBlYWNoIGNvdW50cnksIGRlZmluZXMgdGhlIHBhdHRlcm4gdGhhdCB0aGUgWklQIGhhcyB0byBmb2xsb3dcclxuLy8gICBjb25zdCBjb25zdHJhaW50cyA9IHtcclxuLy8gICAgIGNoOiBbXHJcbi8vICAgICAgIFwiXihDSC0pP1xcXFxkezR9JFwiLFxyXG4vLyAgICAgICBcIlN3aXR6ZXJsYW5kIFpJUHMgbXVzdCBoYXZlIGV4YWN0bHkgNCBkaWdpdHM6IGUuZy4gQ0gtMTk1MCBvciAxOTUwXCIsXHJcbi8vICAgICBdLFxyXG4vLyAgICAgZnI6IFtcclxuLy8gICAgICAgXCJeKEYtKT9cXFxcZHs1fSRcIixcclxuLy8gICAgICAgXCJGcmFuY2UgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA1IGRpZ2l0czogZS5nLiBGLTc1MDEyIG9yIDc1MDEyXCIsXHJcbi8vICAgICBdLFxyXG4vLyAgICAgZGU6IFtcclxuLy8gICAgICAgXCJeKEQtKT9cXFxcZHs1fSRcIixcclxuLy8gICAgICAgXCJHZXJtYW55IFpJUHMgbXVzdCBoYXZlIGV4YWN0bHkgNSBkaWdpdHM6IGUuZy4gRC0xMjM0NSBvciAxMjM0NVwiLFxyXG4vLyAgICAgXSxcclxuLy8gICAgIG5sOiBbXHJcbi8vICAgICAgIFwiXihOTC0pP1xcXFxkezR9XFxcXHMqKFtBLVJULVpdW0EtWl18U1tCQ0UtUlQtWl0pJFwiLFxyXG4vLyAgICAgICBcIk5ldGhlcmxhbmQgWklQcyBtdXN0IGhhdmUgZXhhY3RseSA0IGRpZ2l0cywgZm9sbG93ZWQgYnkgMiBsZXR0ZXJzIGV4Y2VwdCBTQSwgU0QgYW5kIFNTXCIsXHJcbi8vICAgICBdLFxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIFJlYWQgdGhlIGNvdW50cnkgaWRcclxuLy8gICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDb3VudHJ5XCIpLnZhbHVlO1xyXG5cclxuLy8gICAvLyBHZXQgdGhlIE5QQSBmaWVsZFxyXG4vLyAgIGNvbnN0IFpJUEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJaSVBcIik7XHJcblxyXG4vLyAgIC8vIEJ1aWxkIHRoZSBjb25zdHJhaW50IGNoZWNrZXJcclxuLy8gICBjb25zdCBjb25zdHJhaW50ID0gbmV3IFJlZ0V4cChjb25zdHJhaW50c1tjb3VudHJ5XVswXSwgXCJcIik7XHJcbi8vICAgY29uc29sZS5sb2coY29uc3RyYWludCk7XHJcblxyXG4vLyAgIC8vIENoZWNrIGl0IVxyXG4vLyAgIGlmIChjb25zdHJhaW50LnRlc3QoWklQRmllbGQudmFsdWUpKSB7XHJcbi8vICAgICAvLyBUaGUgWklQIGZvbGxvd3MgdGhlIGNvbnN0cmFpbnQsIHdlIHVzZSB0aGUgQ29uc3RyYWludEFQSSB0byB0ZWxsIGl0XHJcbi8vICAgICBaSVBGaWVsZC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgLy8gVGhlIFpJUCBkb2Vzbid0IGZvbGxvdyB0aGUgY29uc3RyYWludCwgd2UgdXNlIHRoZSBDb25zdHJhaW50QVBJIHRvXHJcbi8vICAgICAvLyBnaXZlIGEgbWVzc2FnZSBhYm91dCB0aGUgZm9ybWF0IHJlcXVpcmVkIGZvciB0aGlzIGNvdW50cnlcclxuLy8gICAgIFpJUEZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KGNvbnN0cmFpbnRzW2NvdW50cnldWzFdKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyB3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ291bnRyeVwiKS5vbmNoYW5nZSA9IGNoZWNrWklQO1xyXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWklQXCIpLm9uaW5wdXQgPSBjaGVja1pJUDtcclxuLy8gfTtcclxuXHJcblxyXG4vLyBET00gZm9yIE1vZGFsIE1vZHVsZVxyXG5jb25zdCBEb21Nb2RhbEV2ZW50cyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15TW9kYWxcIik7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteU1vZGFsQnRuXCIpO1xyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG5cclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSk7XHJcblxyXG4gIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxufSkoKTtcclxuXHJcbi8vIFZhbGlkYXRlIHRoZSBmb3JtIHdpdGggdGhlIENvbnN0cmFpbnQgVmFsaWRhdGlvbiBBUElcclxuY29uc3QgY29uc3RyYWludFZhbGlkYXRpb25BUEkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvcm1cIilbMF07XHJcblxyXG4gIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcclxuICBjb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbCArIHNwYW4uZXJyb3ItbXNnc1wiKTtcclxuXHJcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRyeVwiKTtcclxuICBjb25zdCBjb3VudHJ5RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvdW50cnkgKyBzcGFuLmVycm9yLW1zZ3NcIik7XHJcblxyXG4gIGNvbnN0IHppcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiemlwXCIpO1xyXG4gIGNvbnN0IHppcEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN6aXAgKyBzcGFuLmVycm9yLW1zZ3NcIik7XHJcblxyXG4gIGNvbnN0IHB3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwd1wiKTtcclxuICBjb25zdCBwd0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwdyArIHNwYW4uZXJyb3ItbXNnc1wiKTtcclxuXHJcbiAgY29uc3QgY29uZlB3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25mLXB3XCIpO1xyXG4gIGNvbnN0IGNvbmZQd0Vycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25mLXB3ICsgc3Bhbi5lcnJvci1tc2dzXCIpO1xyXG5cclxuICBlbWFpbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyBSdW4gY2hlY2sgdG8gc2VlIGlmIGlucHV0IGZyb20gdXNlciBpcyB2YWxpZCwgaWYgc28gcmVzZXQgY2xhc3MgYW5kIGNsZWFyIERPTSB0ZXh0XHJcbiAgICBpZiAoZW1haWwudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvci1tc2dzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUnVuIGNoZWNrIHRvIHNlZSBpZiBpbnB1dCBmcm9tIHVzZXIgaXMgdmFsaWQsIGlmIHNvIHJlc2V0IGNsYXNzIGFuZCBjbGVhciBET00gdGV4dFxyXG4gIGNvdW50cnkuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgY291bnRyeUVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3ItbXNnc1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFJ1biBjaGVjayB0byBzZWUgaWYgaW5wdXQgZnJvbSB1c2VyIGlzIHZhbGlkLCBpZiBzbyByZXNldCBjbGFzcyBhbmQgY2xlYXIgRE9NIHRleHRcclxuICB6aXAuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKHppcC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICB6aXBFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIHppcEVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3ItbXNnc1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd0Vycm9yKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIFJ1biBjaGVjayB0byBzZWUgaWYgaW5wdXQgZnJvbSB1c2VyIGlzIHZhbGlkLCBpZiBzbyByZXNldCBjbGFzcyBhbmQgY2xlYXIgRE9NIHRleHRcclxuICBwdy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAocHcudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgcHdFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgIHB3RXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvci1tc2dzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUnVuIGNoZWNrIHRvIHNlZSBpZiBpbnB1dCBmcm9tIHVzZXIgaXMgdmFsaWQsIGlmIHNvIHJlc2V0IGNsYXNzIGFuZCBjbGVhciBET00gdGV4dFxyXG4gIGNvbmZQdy5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoY29uZlB3LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIGNvbmZQd0Vycm9yLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgY29uZlB3RXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvci1tc2dzXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLy8gUnVuIGNoZWNrcyBvbiBzdWJtaXNzaW9uIHRvIGVuc3VyZSB2YWxpZCBlbnRyaWVzXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCFlbWFpbC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvdW50cnkudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgc2hvd0Vycm9yKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF6aXAudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgc2hvd0Vycm9yKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwdy52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWNvbmZQdy52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICBzaG93RXJyb3IoKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGVydCB0aGUgdXNlciBpZiBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gb2NjdXJlZFxyXG4gICAgaWYgKFxyXG4gICAgICBlbWFpbC52YWxpZGl0eS52YWxpZCAmJlxyXG4gICAgICBjb3VudHJ5LnZhbGlkaXR5LnZhbGlkICYmXHJcbiAgICAgIHppcC52YWxpZGl0eS52YWxpZCAmJlxyXG4gICAgICBwdy52YWxpZGl0eS52YWxpZCAmJlxyXG4gICAgICBjb25mUHcudmFsaWRpdHkudmFsaWRcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIlN1Y2Nlc3NmdWxseSBTdWJtaXR0ZWQuICBUaGFuayBZb3UhXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIHJlc2V0IGZvcm0gYW5kIGNsZWFyIHRoZSBET00gd2hlbiBjbGlja2VkXHJcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ1dHRvblwiKTtcclxuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYWN0aXZlRXJyb3JNc2dOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWN0aXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVFcnJvck1zZ05vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjdGl2ZUVycm9yTXNnTm9kZUxpc3RbaV0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICBhY3RpdmVFcnJvck1zZ05vZGVMaXN0W2ldLmNsYXNzTmFtZSA9IFwiZXJyb3ItbXNnc1wiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzaG93RXJyb3IoKSB7XHJcbiAgICAvLyBSdW4gdmFsaWRhdGlvbnMgYWdhaW5zdCBlbWFpbFxyXG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gZW1haWwpIHtcclxuICAgICAgaWYgKGVtYWlsLnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIllvdSBuZWVkIHRvIGVudGVyIGFuIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZW1haWwudmFsaWRpdHkudHlwZU1pc21hdGNoKSB7XHJcbiAgICAgICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9IFwiRW50ZXJlZCB2YWx1ZSBuZWVkcyB0byBiZSBhbiBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgICB9XHJcbiAgICAgIGVtYWlsRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvci1tc2dzIGFjdGl2ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1biB2YWxpZGF0aW9ucyBhZ2FpbnN0IGNvdW50cnlcclxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IGNvdW50cnkpIHtcclxuICAgICAgaWYgKGNvdW50cnkudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBzcGVjaWZ5IHlvdXIgY291bnRyeS5cIjtcclxuICAgICAgfSBlbHNlIGlmIChjb3VudHJ5LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgICAgY291bnRyeUVycm9yLnRleHRDb250ZW50ID1cclxuICAgICAgICAgIFwiWW91ciBzcGVjaWZpZWQgY291bnRyeSB2YWx1ZSBpcyB0b28gc2hvcnQhIE1pbiBsZW5ndGggaXMgdHdvIGNoYXJhY3RlcnMhXCI7XHJcbiAgICAgIH1cclxuICAgICAgY291bnRyeUVycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3ItbXNncyBhY3RpdmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSdW4gdmFsaWRhdGlvbnMgYWdhaW5zdCB6aXBjb2RlXHJcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSB6aXApIHtcclxuICAgICAgaWYgKHppcC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcclxuICAgICAgICB6aXBFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gc3BlY2lmeSB5b3VyIHppcGNvZGUhXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoemlwLnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgICAgemlwRXJyb3IudGV4dENvbnRlbnQgPSBcIllvdXIgemlwY29kZSBpcyB0b28gc2hvcnQhXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoemlwLnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xyXG4gICAgICAgIHppcEVycm9yLnRleHRDb250ZW50ID0gXCJZb3VyIHppcGNvZGUgbXVzdCBiZSBmaXZlIGRpZ2l0cywgaWUgWFhYWFghXCI7XHJcbiAgICAgIH1cclxuICAgICAgemlwRXJyb3IuY2xhc3NOYW1lID0gXCJlcnJvci1tc2dzIGFjdGl2ZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJ1biB2YWxpZGF0aW9ucyBhZ2FpbnN0IHBhc3N3b3JkXHJcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBwdykge1xyXG4gICAgICBpZiAocHcudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XHJcbiAgICAgICAgcHdFcnJvci50ZXh0Q29udGVudCA9IFwiWW91IG5lZWQgdG8gc3BlY2lmeSBhIHBhc3N3b3JkIVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHB3LnZhbGlkaXR5LnRvb1Nob3J0KSB7XHJcbiAgICAgICAgcHdFcnJvci50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICBcIllvdXIgcGFzc3dvcmQgaXMgdG9vIHNob3J0LCBkb2VzIG5vdCBtZWV0IG1pbiBvZiBzaXggY2hhcmFjdGVycyFcIjtcclxuICAgICAgfSBlbHNlIGlmIChwdy52YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2gpIHtcclxuICAgICAgICBwd0Vycm9yLnRleHRDb250ZW50ID1cclxuICAgICAgICAgIFwiWW91ciBwYXNzd29yZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIHVwcGVyIGNhc2UsIG9uZSBsb3dlciBjYXNlLCBvbmUgbnVtYmVyLCBhbmQgb25lIHNwZWNpYWwgKCFAIyQlXiYqKSFcIjtcclxuICAgICAgfVxyXG4gICAgICBwd0Vycm9yLmNsYXNzTmFtZSA9IFwiZXJyb3ItbXNncyBhY3RpdmVcIjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSdW4gdmFsaWRhdGlvbnMgYWdhaW5zdCBjb25maXJtYXRpb24gcGFzc3dvcmRcclxuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09IGNvbmZQdykge1xyXG4gICAgICBpZiAoY29uZlB3LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xyXG4gICAgICAgIGNvbmZQd0Vycm9yLnRleHRDb250ZW50ID0gXCJZb3UgbmVlZCB0byBjb25maXJtIHlvdXIgcGFzc3dvcmQhXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoY29uZlB3LnZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCkge1xyXG4gICAgICAgIGlmIChwdy52YWx1ZSAhPT0gY29uZlB3LnZhbHVlKSB7XHJcbiAgICAgICAgICBjb25mUHdFcnJvci50ZXh0Q29udGVudCA9IFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoIVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25mUHdFcnJvci5jbGFzc05hbWUgPSBcImVycm9yLW1zZ3MgYWN0aXZlXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9