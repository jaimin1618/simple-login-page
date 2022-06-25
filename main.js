var Name = document.getElementById("name");
var Passwd = document.getElementById("passwd");
var submit = document.getElementById("sub");

submit.addEventListener("click", function(){
    if(Name.value == "" && Passwd.value == ""){
        alert("Please fill both fields");
    }else if(Name.value == ""){
        alert("Fill the username");
    }else if(Passwd.value == ""){
        alert("Fill the password");
    }else{
        alert("done.")
    }
});


