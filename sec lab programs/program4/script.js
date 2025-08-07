JavaScript(validationLogic-Validate.js)
function validateNam(name){
    const regx=/^[A-z a-z\S]+$/;
    if(name.trim()===""){
    return "Name cannot be empty";
    }
    if(!regx.test(name)){
    return"Name can only contain letters and spaces";

    }
    return"Name is valid";
}
function validateEmail(email){
    const regex=/^[a-z A-Z 0-9./-%+-]+@[a-z A-Z 0-9.-]+\.[a-z A-Z]{2}$/;
if(email.trim()===""){
    return"Email cannot be empty";
}
if(regix.test(email)){
return"Invaild email format";
}
return"Email is valid";
}
function validatePassword(password){
const regex=/^(?=*[A-Z])(?=.*\d).{8,}$/;
if(password.trim()===""){
return "password cannot be empty"
}
if(!regex.test(password)){
return "password must be at least 8 characters long, contain an uppercase letter and number";
}
return "password is valid"
}
function validatePhone(phone){
    const regex=/^[0-9]{10}$1/;
        if(phone.trim()===""){
        return "Phone number cannot be empty";
        }
        if(!regex.test(phone)){
        return "Phone number must be 10 digit long";
        }
        return "Phone Number is valid";    
}
function validateForm(){
const name=document.getElementById("name").value
const email=documenr.getElementById("email").value
const password=document.getElementById("password").value;
const phone=document.getElementById("password").value;
const nameError=validateName(name);
const emailError=validateEmail(email);
const passwordError=validatePassword(password);
const phoneError=validatePhone(phone);
if (nameError === "Name is valid" && emailError === "Email is valid" && passwordError
=== "Password is valid" && phoneError === "Phone number is valid") {
return true; // Allow form submission
}
// Display error messages
document.getElementById("nameError").innerText = nameError === "Name is valid"? "" :
nameError;
document.getElementById("emailError").innerText = emailError === "Email is valid"? "":emailError;
document.getElementById("passwordError").innerText = passwordError === "Password is valid" ? "":passwordError;
document.getElementById("phoneError").innerText = phoneError === "Phone number isvalid" ? "":phoneError;
return false;   
}





