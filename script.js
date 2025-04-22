function myFunction() {
    document.getElementById("myDrop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function closeNav() {
    document.getElementById("offcanvasNavbar").style.width = "0%";
}
function myFunction(x) {
    x.classList.toggle("change");
}
// document.getElementById("demo").innerHTML = "" ? z




const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        if (item.classList.contains("active")) {
            item.classList.remove("active");
        } else {
            faqItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        }
    });
});