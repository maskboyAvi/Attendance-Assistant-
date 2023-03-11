//Toggle in the Navabar
var navMenu = document.getElementById("nav_menu")
var toggleMenu = document.getElementById("toggle_menu")
var closeMenu = document.getElementById("close_menu")

toggleMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("show")
})
closeMenu.addEventListener("click", () =>{
    navMenu.classList.remove("show")
})

// Validation of Name
function validName(char){
    if((char>=65 && char<=90) || (char>=97 && char<=122) || (char==32)){
        return true;
    }
    else if((char>=49 && char<=57)){
        alert("Numbers are not allowed in name");
        return false;
    }
    else{
        alert("Special Characters are not allowed in the name");
        return false;
    }
}
// Validation of email
function checkEmail(){
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const inputEmail = document.querySelector('#email').value;
        if(!regexEmail.test(inputEmail)){
            alert("Invalid Email");
            return false;
        }else{
            return true;
        };
    }
// Using ajax jquery    
$('#feedbackForm').on('submit',function(e){
    //alert('ss')
    e.preventDefault();
    $('send-feedback').attr('disabled',true);
    $.ajax({
        url:'https://script.google.com/macros/s/AKfycbzlLtLXlbB03se4TNAcWxkMbRxG9HHOH0XH7yFN87e8y26Nx1-nSAh83GyPdoLNWSix/exec',
        type:'post',
        data:$('#feedbackForm').serialize(),
        success:function(result){
            $('#feedbackForm')[0].reset();
            alert('Thank you for your valuable feedback');
            $('send-feedback').attr('disabled',false);
        }
    })
})