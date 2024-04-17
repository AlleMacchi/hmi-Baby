// ===================================
// BUTTON UP
// ===================================

document.getElementById("btn_UP").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_UP").classList.add("pressed");
});

document.getElementById("btn_UP").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_UP").classList.remove("pressed");
});

document.getElementById("btn_UP").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_UP").classList.add("pressed");
});

document.getElementById("btn_UP").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_UP").classList.remove("pressed");
});

// ===================================
// BUTTON RIGHT
// ===================================

document.getElementById("btn_RIGHT").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_RIGHT").classList.add("pressed");
});

document.getElementById("btn_RIGHT").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_RIGHT").classList.remove("pressed");
});

document.getElementById("btn_RIGHT").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_RIGHT").classList.add("pressed");
});

document.getElementById("btn_RIGHT").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_RIGHT").classList.remove("pressed");
});

// ===================================
// BUTTON DOWN
// ===================================

document.getElementById("btn_DOWN").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_DOWN").classList.add("pressed");
});

document.getElementById("btn_DOWN").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_DOWN").classList.remove("pressed");
});

document.getElementById("btn_DOWN").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_DOWN").classList.add("pressed");
});

document.getElementById("btn_DOWN").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_DOWN").classList.remove("pressed");
});

// ===================================
// BUTTON LEFT
// ===================================

document.getElementById("btn_LEFT").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_LEFT").classList.add("pressed");
});

document.getElementById("btn_LEFT").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_LEFT").classList.remove("pressed");
});

document.getElementById("btn_LEFT").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_LEFT").classList.add("pressed");
});

document.getElementById("btn_LEFT").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_LEFT").classList.remove("pressed");
});