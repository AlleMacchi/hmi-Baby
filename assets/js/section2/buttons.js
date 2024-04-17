// ===================================
// BUTTON SEL LOGICAL
// ===================================

document.getElementById("btn_Logical").addEventListener("touchstart", function() {
    this.classList.add("selected");
    document.getElementById("btn_Physical").classList.remove("selected");
});

document.getElementById("btn_Logical").addEventListener("mousedown", function() {
    this.classList.add("selected");
    document.getElementById("btn_Physical").classList.remove("selected");
});


// ===================================
// BUTTON SEL PHYSICAL
// ===================================
document.getElementById("btn_Physical").addEventListener("touchstart", function() {
    this.classList.add("selected");
    document.getElementById("btn_Logical").classList.remove("selected");
});

document.getElementById("btn_Physical").addEventListener("mousedown", function() {
    this.classList.add("selected");
    document.getElementById("btn_Logical").classList.remove("selected");
});

// ===================================
// BUTTON GO
// ===================================

document.getElementById("btn_GO").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_GO").classList.add("pressed");
});

document.getElementById("btn_GO").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_GO").classList.remove("pressed");
});

document.getElementById("btn_GO").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_GO").classList.add("pressed");
});

document.getElementById("btn_GO").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_GO").classList.remove("pressed");
});



