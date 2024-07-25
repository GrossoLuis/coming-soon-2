
var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    fetch(form.action, {
        method: form.method,
        body: new FormData(form)
    })
    .then(response => {
        if (response.ok) {
            modal.style.display = "block";
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
