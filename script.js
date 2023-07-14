function getEmail(){
    const form = document.getElementById("form");
        const userEmail = document.getElementById('user-email');
    
        form.addEventListener('submit',function(e){
            e.preventDefault();
    
            const userEmailValue = userEmail.value;
    
            localStorage.setItem("userEmail",userEmailValue);
            window.location.href = "success.html";
        })  
}
