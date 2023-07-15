const form = document.getElementById("form");
const userEmail = document.getElementById('user-email');
const invalidMsg = document.getElementById('invalid-msg')

function validateEmail(){
    if (userEmail.value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)){
        invalidMsg.style.display = "none";
        return true;
    }
    else{
        invalidMsg.style.display = "flex";
        return false;
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    if (validateEmail()){
        const userEmailValue = userEmail.value;

        localStorage.setItem("userEmail",userEmailValue);
        window.location.href = "success.html";
    }
    
})  
