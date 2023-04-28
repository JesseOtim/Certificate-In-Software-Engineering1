const ValidateForm = (event) => {

    event.preventDefault();
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const country = document.getElementById("country");
    const state = document.getElementById("state");
    const zipcode = document.getElementById("zipcode");
    const Town = document.getElementById("Town");
    const email = document.getElementById("email");
    const dateofbirth = document.getElementById("dateofbirth");
    const gender = document.getElementById("gender");
    const phonenumber1 = document.getElementById("phonenumber1");
    const phonenumber2 = document.getElementById("phonenumber2");
  
    let error = 0;
    //
    let firstnameError = document.getElementById("firstnameErr");
    let lastnameError = document.getElementById("lastnameErr");
    let emailError = document.getElementById("emailErr");
    let TownError = document.getElementById("TownErr");
    let countryError = document.getElementById("countryErr");
    let dateofbirthError = document.getElementById("dateofbirthErr");
    let genderErr = document.getElementById("genderErr");
    let generalError = document.getElementById("generalErr");
  
    // First name Validation
    if (firstname.value == "") {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML = "Please the name cannot be empty";
      firstnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else if (firstname.value.length < 2) {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML =
        "Please the First name must be at least 5 letters";
      firstnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else if (firstname.value.length > 255) {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML =
        "Please the first name must be less than 50 letters";
      firstnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      firstname.style.border = "2px solid green";
      firstnameError.innerHTML = "";
    };
  
    // Last name Validation
    if (lastname.value == "") {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML = "Please fill in the last name";
      lastnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else if (lastname.value.length < 2) {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML = "Please the last name must be atleast 5 letters";
      lastnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else if (lastname.value.length > 255) {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML =
        "Please the last name must be less than 50 letters";
      lastnameError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      lastname.style.border = "2px solid green";
      lastnameError.innerHTML = "";
    };
  
    
 
  
    // Town validation

  
    if (Town.value == "") {
      Town.style.border = "2px solid red";
      TownError.innerHTML = "Town can't be blank";
      TownError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    }else {
      Town.style.border = "2px solid darkgreen";
      TownError.innerHTML = "";
    }
  
    // country
  
    if(country.value == "") {
      country.style.border = "2px solid red";
      countryError.innerHTML = "Town can't be blank";
      countryError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      country.style.border = "2px solid darkgreen";
      countryError.innerHTML = "";
    }
  

    if(zipcode.value == "") {
      zipcode.style.border = "2px solid red";
      zipcodeError.innerHTML = "Town can't be blank";
      zipcodeError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false

    } else {
      zipcode.style.border = "2px solid darkgreen";
      zipcodeError.innerHTML = "";
    }

    if(state.value == "") {
      state.style.border = "2px solid red";
      stateError.innerHTML = "Town can't be blank";
      stateError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    }else if(state.value !== Town.value) {
      state.style.border = "2px solid red";
      stateError.textContent = "Towns don't match";
      stateError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      state.style.border = "2px solid darkgreen";
      stateError.innerHTML = "";
    }

    
    if(gender.value == "") {
      gender.style.border = "2px solid red";
      genderError.innerHTML = "Town can't be blank";
      genderError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      gender.style.border = "2px solid darkgreen";
      genderError.innerHTML = "";
    }

    

    //Email Address Validation
    const emailregex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == "") {
      email.style.border = "2px solid red";
      emailError.textContent = "Email is required";
      emailError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false

    } else if (!email.value.match(emailregex)) {
      email.style.border = "2px solid red";
      emailError.textContent = "Please put in a correct email address";
      emailError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
       return false
    } else if (email.value.length < 20) {
      email.style.border = "2px solid red";
      emailError.textContent = "Please put in a correct email address";
      emailError.style =
        "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++;
      return false
    } else {
      email.style.border = "2px solid green";
      emailError.textContent = "";

    if (firstname.value === "" || lastname.value === "" || state.value === "" || zipcode.value === "" ||  country.value === "" || phonenumber.value === "" || dateofbirth.value === "" || gender.value === "" || Town.value === "" || phonenumber1.value === "" || phonenumber2.value === "") {
      generalError.innerHTML = "";
      generalError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      errorCount++;
    } else {
      generalError.innerHTML = "";
    }

  };
  
  };