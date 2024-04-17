// ===================================
// BUTTON SET STEP
// ===================================

document.getElementById("btn-setStep").addEventListener("mousedown", onSetStepTRUE);
document.getElementById("btn-setStep").addEventListener("touchstart", onSetStepTRUE);
document.getElementById("btn-setStep").addEventListener("mouseup", onSetStepFALSE);
document.getElementById("btn-setStep").addEventListener("touchend", onSetStepFALSE);


function onSetStepTRUE(event) {

    event.preventDefault();
    var url = "IOWriteSetStep.html";
    var name = '"HMI_PLC".FromHMI.Command.updateStep';
    var val = 1;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}

function onSetStepFALSE(event) {
    event.preventDefault();
    var url = "IOWriteSetStep.html";
    var name = '"HMI_PLC".FromHMI.Command.updateStep';
    var val = 0;
    var sdata = encodeURIComponent(name) + '=' + val;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Request finished, do something with the response if needed
        }
    };
    xhr.send(sdata);
}
