// ===================================
// BUTTON START
// ===================================

document.getElementById("btn_START").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_START").classList.add("pressed");
});

document.getElementById("btn_START").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_START").classList.remove("pressed");
});

document.getElementById("btn_START").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_START").classList.add("pressed");
});

document.getElementById("btn_START").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_START").classList.remove("pressed");
});

document.getElementById("btn_START").addEventListener("mouseleave", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_START").classList.remove("pressed");
});


// ===================================
// BUTTON STOP
// ===================================

document.getElementById("btn_STOP").addEventListener("touchstart", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_STOP").classList.add("pressed");
});

document.getElementById("btn_STOP").addEventListener("touchend", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_STOP").classList.remove("pressed");
});

document.getElementById("btn_STOP").addEventListener("mousedown", function() {
    this.classList.add("pressed");
    document.getElementById("btn_circle_out_STOP").classList.add("pressed");
});

document.getElementById("btn_STOP").addEventListener("mouseup", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_STOP").classList.remove("pressed");
});

document.getElementById("btn_STOP").addEventListener("mouseleave", function() {
    this.classList.remove("pressed");
    document.getElementById("btn_circle_out_STOP").classList.remove("pressed");
});

// ===================================
// BUTTON RESET
// ===================================

document.getElementById("btn_RESET").addEventListener("touchstart", function() {
    this.classList.add("selected");
});

document.getElementById("btn_RESET").addEventListener("touchend", function() {
    this.classList.remove("selected");
});

document.getElementById("btn_RESET").addEventListener("mousedown", function() {
    this.classList.add("selected");
});

document.getElementById("btn_RESET").addEventListener("mouseup", function() {
    this.classList.remove("selected");
});
document.getElementById("btn_RESET").addEventListener("mouseleave", function() {
    this.classList.remove("selected");
});


// ===================================
// SELECTION MAN/AUTO
// ===================================

document.getElementById("btn_Automatic").addEventListener("touchstart", function() {
    document.getElementById("btn_Automatic").classList.add("selected");
    document.getElementById("btn_Manual").classList.remove("selected");

    document.getElementById("btn-setStep").classList.add("disabled-button");

});

document.getElementById("btn_Automatic").addEventListener("mousedown", function() {
    document.getElementById("btn_Automatic").classList.add("selected");
    document.getElementById("btn_Manual").classList.remove("selected");

    document.getElementById("btn-setStep").classList.add("disabled-button");
});

document.getElementById("btn_Manual").addEventListener("touchstart", function() {
    document.getElementById("btn_Automatic").classList.remove("selected");
    document.getElementById("btn_Manual").classList.add("selected");

    document.getElementById("btn-setStep").classList.remove("disabled-button");
});

document.getElementById("btn_Manual").addEventListener("mousedown", function() {
    document.getElementById("btn_Automatic").classList.remove("selected");
    document.getElementById("btn_Manual").classList.add("selected");

    document.getElementById("btn-setStep").classList.remove("disabled-button");
});
