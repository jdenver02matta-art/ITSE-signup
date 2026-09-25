/* =========================================
   SIGN IN MODAL
========================================= */

const signInBtn =
    document.getElementById("signInBtn");

const signInModal =
    document.getElementById("signInModal");

const closeModal =
    document.getElementById("closeModal");

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


/* OPEN SIGN IN */

signInBtn.addEventListener(
    "click",
    function() {

        signInModal.classList.add("show");

    }
);


/* CLOSE SIGN IN */

closeModal.addEventListener(
    "click",
    function() {

        signInModal.classList.remove("show");

    }
);


/* CLOSE WHEN CLICKING OUTSIDE */

signInModal.addEventListener(
    "click",
    function(event) {

        if (event.target === signInModal) {

            signInModal.classList.remove("show");

        }

    }
);


/* SIGN IN FORM */

loginForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        loginMessage.textContent =
            "Sign in submitted successfully!";

    }
);


/* =========================================
   SEARCH
========================================= */

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");


searchForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const search =
            searchInput.value
                .trim()
                .toLowerCase();


        if (search === "") {

            searchInput.focus();

            return;

        }


        const sections =
            document.querySelectorAll("section");


        let found = false;


        sections.forEach(
            function(section) {

                const content =
                    section.textContent
                        .toLowerCase();


                if (
                    content.includes(search)
                    && !found
                ) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                    found = true;

                }

            }
        );


        if (!found) {

            alert(
                'No results found for "' +
                searchInput.value +
                '"'
            );

        }

    }
);