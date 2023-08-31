//terms and condition ko lagi
let openPopupLink = document.getElementsByClassName("pop-up-on-click")[0];
openPopupLink.addEventListener("click", () => {
  // Open a new popup window
  const popupWindow = window.open(
    "",
    "PopupWindow",
    "width=400,height=300,left=" +
      (screen.width - 400) / 2 +
      ",top=" +
      (screen.height - 300) / 2
  );

  // Write content to the popup window
  popupWindow.document.write(`
      <html>
      <head>
        <title>Terms and Conditions</title>
      </head>
      <body>
        <h3>Following terms and conditions are allowed On Clicking</h3>
        <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dicta laborum esse expedita. Consectetur similique alias optio aliquid. Placeat nesciunt eos aperiam facere vitae! Odit, non harum vel est enim, natus ut voluptatibus quam id quia, ullam illo. Ex fuga necessitatibus corrupti, expedita beatae qui repellendus corporis quibusdam earum, magni mollitia impedit sapiente natus. Facilis aliquam quidem adipisci doloribus consequatur sapiente ipsam temporibus molestiae veritatis praesentium quasi modi, vel soluta inventore esse, blanditiis consequuntur libero quo nemo dolorem eum accusantium quod facere! Impedit obcaecati illum culpa quos recusandae blanditiis est asperiores veniam iusto, ipsam fugiat labore rem tempore natus! Officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione totam, et illum iure consectetur veniam. Ab culpa quia harum corrupti tempora. Facere libero quibusdam, maxime ducimus cumque reiciendis ex et dicta tenetur molestiae! Ratione veritatis quam rem, harum laudantium voluptatem ipsa ipsam quaerat quos nulla eligendi. Minus, commodi esse?</p>
      </body>
      </html>
    `);
});


//for registration validation msg:
let fullName;
let nameError;

let userName;
let idError;

let password;
let passwordError;

let rPassword;
let rPasswordError;

let agreeCheckbox;
let termsError;


document
  .getElementById("register-submit")
  .addEventListener("click", (event) => {
    event.preventDefault();


    // Validation checks
    let isValid = true;

    fullName = document.getElementById("name").value;
    if (fullName.trim() === "") {
      nameError = document.getElementById("name-error");
      if (!nameError) {
        let errorMsg = document.createElement("div");
        errorMsg.innerHTML = "Please enter your full name??";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.id = "name-error";
        document.getElementById("name-label").append(errorMsg);
      }
      isValid = false;
    }

    userName = document.getElementById("id").value;
    if (userName.trim() === "") {
      idError = document.getElementById("id-error");
      if (!idError) {
        let errorMsg = document.createElement("div");
        errorMsg.innerHTML = "Please enter a username or email address??";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.id = "id-error";
        document.getElementById("id-label").append(errorMsg);
      }

      isValid = false;
    }
    password = document.getElementById("password").value;
    if (password === "") {
      passwordError = document.getElementById("password-error");
      if (!passwordError) {
        let errorMsg = document.createElement("div");
        errorMsg.innerHTML = "Please enter a password??";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.id = "password-error";
        document.getElementById("password-label").append(errorMsg);
      }
      isValid = false;
    }
    rPassword = document.getElementById("r-password").value;
    if (password !== rPassword) {
      rPasswordError = document.getElementById("r-password-error");
      if (!rPasswordError) {
        let errorMsg = document.createElement("div");
        errorMsg.innerHTML = "Passwords do not match??";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.id = "r-password-error";
        document.getElementById("r-password-label").append(errorMsg);
      }
      isValid = false;
    }
    agreeCheckbox = document.getElementById("terms");
    if (!agreeCheckbox.checked) {
      termsError = document.getElementById("terms-error");
      if (!termsError) {
        let errorMsg = document.createElement("div");
        errorMsg.innerHTML = "You must agree to the terms and conditions??";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "12px";
        errorMsg.id = "terms-error";
        document.getElementById("terms-label").append(errorMsg);
      }
      isValid = false;
    }

    if (isValid) {
      alert("Registration successful!! Login now------>");
      window.location.href = "./index.html";
    }
  });


//fnc to remove error msg
function removeErrorMessage(input) {
  if (input.id === "name") {
    console.log("name remove vitra");
    nameError = document.getElementById("name-error");
    console.log(nameError);
    if (nameError) {
      nameError.remove();
      // nameError=null;
    }
  }
  if (input.id === "id") {
    console.log("id remove vitra");
    idError = document.getElementById("id-error");
    console.log(idError);
    if (idError) {
      idError.remove();
      // idError=null;
    }
  }
  if (input.id === "password") {
    console.log("pw remove vitra");
    passwordError = document.getElementById("password-error");
    console.log(passwordError);
    if (passwordError) {
      passwordError.remove();
      // passwordError=null;
    }
  }
  if (input.id === "r-password") {
    console.log("r pw remove vitra");
    rPasswordError = document.getElementById("r-password-error");
    console.log(rPasswordError);
    if (rPasswordError) {
      rPasswordError.remove();
      // rPasswordError=null;
    }
  }
  if (input.id === "terms") {
    console.log("terms remove vitra");
    termsError = document.getElementById("terms-error");
    console.log(termsError);
    if (termsError) {
      termsError.remove();
      // termsError=null;
    }
  }
}


//above fnc suppport:::fnc
let inputs = document.getElementsByTagName("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", () => {
    removeErrorMessage(inputs[i]);
  });
}

//pasword show->
const showPW = document.getElementById("toggle-password");
showPW.addEventListener("click", () => {
  showPW.classList.toggle("fa-eye");
  showPW.classList.toggle("fa-eye-slash");
  const targets = document.getElementsByClassName("register-password");
  for (i = 0; i < targets.length; i++) {
    if (targets[i].type == "password") {
      targets[i].type = "text";
    } else {
      targets[i].type = "password";
    }
  }
});


//login with third party warn--->
const registers = document.getElementsByClassName("register-with");
Array.from(registers).forEach((register) => {
  register.addEventListener("click", () => {
    alert("This service will be added soon!! Try another way for now------>");
  });
});
