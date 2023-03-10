function checkInp(){
    var email = document.getElementById("email").value;
    var pass=document.getElementById("psd").value;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.value="")
    {
        alert("Enter your Email");
        return false;
    }
    else if (!filter.test(email)) {
        document.getElementById("email").focus;
        alert("Please provide a valid email address");
        return false;
    }
    else if(pass.value="")
    {
        alert("Enter your Password");
        return false;
    }
    else if(pass.length<6){
        alert("Password must be atleast 6 characters");
        return false;
    }
    else if(pass.length>12){
        alert("Password should be less than 12 characters")
        return false;
    }
    // else{
    //     window.location.href = `./hps.html`;
    //     return true;
    // }
}