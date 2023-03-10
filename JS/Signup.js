const spanFullname = document.querySelector('.fullname-span');
const spanPassword = document.querySelector('.password-span');
const spanEmail = document.querySelector('.email-span');
const spanConfirm = document.querySelector('.confirm-span');
const inputFullname = document.querySelector('#fullname');
const inputPassword = document.querySelector('#password');
const inputConfirm = document.querySelector('#confirm');
const inputEmail = document.querySelector('#email');
const regexFullname = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,}$/;
const regexPassword = /^[a-zA-Z,0-9]{6,12}$/;
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const regexConfirm = inputPassword.value;

inputFullname.addEventListener('change', (event) => {
    if(!regexFullname.test(event.currentTarget.value)){
        spanFullname.style.display='block';
        inputFullname.style.marginBottom='0px';
    }else{
        spanFullname.style.display='none';
        inputFullname.style.marginBottom='18.4px';
    }});

inputPassword.addEventListener('change', (event) => {
    if(!regexPassword.test(event.currentTarget.value)){
        spanPassword.style.display='block';
        inputPassword.style.marginBottom = '0px';
    }else{
        spanPassword.style.display = 'none';
        inputPassword.style.marginBottom = '18.4px';
    }});

inputEmail.addEventListener('change', (event) => {
    if(!regexEmail.test(event.currentTarget.value)){
        spanEmail.style.display='block';
        inputEmail.style.marginBottom='0px';
    }else{
        spanEmail.style.display='none';
        inputEmail.style.marginBottom='18.4px';
    }});

inputConfirm.addEventListener('change', (event) => {
    if(inputPassword.value == event.currentTarget.value){
        spanConfirm.style.display='none';
        inputConfirm.style.marginBottom='18.4px';
    }else{
        spanConfirm.style.display='block';
        inputConfirm.style.marginBottom='18.4px';
    }});
const form = document.getElementById("signup-form");
form.addEventListener("submit",function(event){
      event.preventDefault();
    //   const data = event.target.value
      const fm = document.forms[0]
      const name = fm['fullname'].value 
      const password = fm['password'].value
      const email = fm['email'].value
      const prof= fm['profession'].value;
    //   const name = document.getElementById("name").value;
    //   const email = document.getElementById("email").value;
    //   const password = document.getElementById("pasword").value;
    //   const redirection = document.getElementById("redirection").value;
      if (name && email && password && prof=='Teacher') {
        alert("Sign Up Successfull.Redirecting to Teacher's Portal...");
        window.location.href = './T_login.html';
      } 
      else if(name && email && password && prof=='Student'){
        alert("Sign Up Successfull.Redirecting to Student's Portal...");
        window.location.href = './S_login.html';
      }
      else {
        alert("Please fill in all the fields.");
      }
    });
    // function redirection(){
    //     switch(document.getElementById('profession').value)
    //     {
    //         case "Teacher":
    //             window.location.href = "./D:/Web Dev/Project/T_login.html";
    //             return true;
    //             // break;
    //         case "Student":
    //             window.location.href = "./D:/Web Dev/Project/S_login.html";
    //             return true;
    //             // break;
    //         default :
    //             document.getElementById('profession').focus;
    //             alert("Choose an Option");
    //             // break;
    //             return false;
    //     }
    // }