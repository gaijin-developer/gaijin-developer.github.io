const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submitButton = document.getElementById("sub");
const email = document.getElementById("email");
const message = document.getElementById("message");
const warnArea = document.getElementById("warn");
const success = document.getElementById("success");

let regex =/^\w+\D/ig;
let emailRegex = /.+@\w+\.[A-Za-z]+/ig;
submitButton.addEventListener("click", formProcess, false);




function formProcess(event){
  event.preventDefault();
  
  
let firstNameVal = firstName.value.trim();
const lastNameVal = lastName.value.trim();
const emailVal = email.value.trim();
const messageVal = message.value.trim();
  
  
//console.log(firstNameVal.match(regex).length);
 //console.log(!regex.test(lastNameVal));
  if (firstNameVal==="" || lastNameVal==="" || emailVal==="" || messageVal==""){
    success.innerText="";
    warn.innerText="Please complete this form"
  }else if(!firstNameVal.match(regex)){
    
    success.innerText="";
    warnArea.innerText="Please enter a valid first name";
  } 
 else if(!lastNameVal.match(regex)){
    success.innerText="";
    warnArea.innerText="Please enter a valid last name";
  } 
  else if(!emailVal.match(emailRegex)){
    success.innerText="";
  warnArea.innerText="Please enter a valid email"; 
  }
  else if(message.value == ""){
     success.innerText="";
  warnArea.innerText="Please enter a Message"; 
  }
  
  else{
    warnArea.innerText="";
    success.innerText="Success, message has been sent";
    
    submitData();
    
    firstName.value="";
    lastName.value="";
    email.value="";
    message.value="";
  }
  
  
  
  //console.log("hello world")
}
function submitData(){
  if (success.innerText=="Success, message has been sent" ){
    console.log("hello world")
  }
}


function resetFunc(){
  warnArea.innerText ="";
  success.innerText ="";
}