var UName=document.getElementById('UName');
var email = document.getElementById('email')
var Phnumber =document.getElementById('Phnumber')
var cpsw =document.getElementById('cpsw')
var psw =document.getElementById('psw')
var error1=document.getElementById('error1')
var error2=document.getElementById('error2')
var error3=document.getElementById('error3')
var error4=document.getElementById('error4')

let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ // Email
let regexp3=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/ //pasword

// function validate(){
//     alert("hello")
//     if(FName.value.trim()=="" || LName.value.trim()=="" || email.value.trim()=="" ||email.value.trim()=="" ||cpsw.value.trim()=="")
//         {
//          alert("Some of the field is missing ")
//          return false
//         }
//     else if(regexp.test(email.value)=== false){
//         alert("emali is incorrect")
//         return false
//     }

//     else if (regexp3.test(psw.value)=== false && regexp3.test(psw.value)=== false ){
//         alert("Not a strong  password")
//         return false
//     }

// }

// Username validation 

UName.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

UName.onkeyup = function() {

    var Uname = /[a-zA-Z]{3,}/g;
    if(Uname.test(UName.value)){
        UName.style.border="2px solid green";
        error1.style.color="green";
        error1.innerHTML=`${UName.value} is strong username`
    }
    else {
        UName.style.border="2px solid red";
        error1.style.color="red";
        error1.innerHTML="username must between 3 and 25 character"
    
      }

  }

// Email validation 
  
email.onfocus = function() {
    document.getElementById("message1").style.display = "block";
  }

  email.onkeyup = function() {
console.log("email")
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ // Email
    if(regexp.test(email.value)){
        email.style.border="2px solid green";
        error2.style.color="green";
        error2.innerHTML=`${email.value} is strong Email`
    }
    else {
        email.style.border="2px solid red";
        error2.style.color="red";
        error2.innerHTML="Email must of format example@gmail.com"
    
      }

  }

  //Phone number 

  Phnumber.onfocus = function() {
    document.getElementById("message2").style.display = "block";
  }

  Phnumber.onkeyup = function() {
console.log("Phnumber")
let regexp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/ //phone number
    if(regexp2.test(Phnumber.value)){
      
        error3.style.color="green";
        error3.innerHTML=`${Phnumber.value} `
        Phnumber.style.border="2px solid green";
    }
    else {
        Phnumber.style.border="2px solid red";
        error3.style.color="red";
        error3.innerHTML="Phone number not of correct format "
    
      }

  }

  //password validation


  psw.onfocus = function() {
    document.getElementById("message3").style.display = "block";
  }

  psw.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-zA-Z0-9]{1,}/g;
    if(psw.value.match(lowerCaseLetters)) {  
      block1.style.display="inline-block"
      // letter.classList.add("valid");
    } else {
      block1.style.display="none"
      // letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Za-z0-9]{4,}/g;
    if(psw.value.match(upperCaseLetters)) {  
      block2.style.display="inline-block"
      // capital.classList.add("valid");
    } else {
      block2.style.display="none"
      // capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,}/g;
    if(psw.value.match(numbers)) {  
      block3.style.display="inline-block"
      
    } else {
      block3.style.display="none"
      
    }
    
    
  }
 
  // confirm Password

  cpsw.onfocus = function() {
    document.getElementById("message4").style.display = "block";
  }

  cpsw.onkeyup = function() {
console.log("cpsw")

    if(cpsw.value===psw.value){
      alert("hello")
        error4.style.color="green";
        error4.innerHTML=`Password matchs`
        cpsw.style.border="2px solid green";
    }
    else {
        cpsw.style.border="2px solid red";
        error4.style.color="red";
        error4.innerHTML="Password does not match "
    
      }

  }


  function validate(){
     if (error1.style.color==="green" && error2.style.color==="green" && error3.style.color==="green" &&   error4.style.color==="green"){
 
         return true

     }

     else{
        UName.style.border="2px solid red";
        email.style.border="2px solid red";
        Phnumber.style.border="2px solid red";
        psw.style.border="2px solid red";
        cpsw.style.border="2px solid red";
         return false
     }

  }



