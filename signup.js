const signupForm =
    document.getElementById("signupForm");

const signupMessage =
    document.getElementById("signupMessage");


signupForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    /* CHECK PASSWORDS */

    if (password !== confirmPassword) {

        signupMessage.textContent =
            "Passwords do not match.";

        return;

    }


    /* SAVE BASIC USER INFORMATION */

    localStorage.setItem(
        "itseName",
        name
    );

    localStorage.setItem(
        "itseEmail",
        email
    );


    /* SHOW MESSAGE */

    signupMessage.textContent =
        "Account created! Redirecting...";


    /*
       Wait 1 second, then go
       to the Home page.
    */

    setTimeout(function() {

        window.location.href =
            "index.html";

    }, 1000);

});