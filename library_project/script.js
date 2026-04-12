const form = document.querySelector("form");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let ErrorText = document.querySelector(".incorrect");
    let userError = document.querySelector(".incorrect2");
    let reqUser = document.querySelector(".enter_username");

    userError.style.display = "none";
    ErrorText.style.display = "none";
    reqUser.style.display = "none";

    if(username.trim() === "" || password.trim() === ""){
            reqUser.style.display = "initial";
            return;
        }

    if(username !== "admin"){
        userError.style.display = "initial";
    }else if(password !== "1234"){
        ErrorText.style.display = "initial";
    }else{
        window.location.href = "dashboard section/dashboard.html";
        form.reset();
    }

        
});