document.querySelectorAll(".page-btn").forEach(button => {
    button.addEventListener("click", function() {
        // Add "selected" class to the clicked button
        this.classList.add("selected");

        // Remove "selected" class from all other buttons
        document.querySelectorAll(".page-btn").forEach(otherButton => {
            if (otherButton !== this) {
                otherButton.classList.remove("selected");
            }
        });
    });
});


document.getElementById("btn_section1").addEventListener("click", function() {
    scrollToSection("section1");
});
document.getElementById("btn_section2").addEventListener("click", function() {
    scrollToSection("section2");
});

document.getElementById("btn_section3").addEventListener("click", function() {
    scrollToSection("section3");
});

document.getElementById("btn_section5").addEventListener("click", function() {
    scrollToSection("section5");
});


// Function to scroll to the specified section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}