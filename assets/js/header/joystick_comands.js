

let pressed = false;

// =========================
//  BUTTON UP
// =========================

document.getElementById("btn_UP").addEventListener("mousedown", onTouchTrueUP);
document.getElementById("btn_UP").addEventListener("touchstart", onTouchTrueUP);
document.getElementById("btn_UP").addEventListener("mouseup", onTouchFalseUP);
document.getElementById("btn_UP").addEventListener("touchend", onTouchFalseUP);
// document.getElementById("btn_UP").addEventListener("mouseleave",(e)=>{if(pressed){
//     onTouchFalseUP(e);
// }});


function onTouchTrueUP(event) {
    // ENABLE LITER
    event.preventDefault();
    var url = "IOWriteLifterEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Lifter.enable';
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

    // COMMAND LIFTER 
    event.preventDefault();
    var url = "IOWriteForward.html";
    var name = '"HMI_PLC".FromHMI.Command.UpFwdOn';
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
    pressed = true;
   console.log(pressed);
}

function onTouchFalseUP(event) {
    // ENABLE LITER
    event.preventDefault();
    var url = "IOWriteLifterEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Lifter.enable';
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

     // COMMAND LIFTER 
    event.preventDefault();
    var url = "IOWriteForward.html";
    var name = '"HMI_PLC".FromHMI.Command.UpFwdOn';
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
    pressed = false;
    console.log(pressed);
 
}

// =========================
//  BUTTON RIGHT
// =========================

document.getElementById("btn_RIGHT").addEventListener("mousedown", onTouchTrueRIGHT);
document.getElementById("btn_RIGHT").addEventListener("touchstart", onTouchTrueRIGHT);
document.getElementById("btn_RIGHT").addEventListener("mouseup", onTouchFalseRIGHT);
document.getElementById("btn_RIGHT").addEventListener("touchend", onTouchFalseRIGHT);
document.getElementById("btn_RIGHT").addEventListener("mouseleave",(e)=>{if(pressed){
    onTouchFalseRIGHT(e);
}});

function onTouchTrueRIGHT(event) {
    // ENABLE CARRIER
    event.preventDefault();
    var url = "IOWriteCarrierEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
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

    // COMMAND CARRIER 
    event.preventDefault();
    var url = "IOWriteForward.html";
    var name = '"HMI_PLC".FromHMI.Command.UpFwdOn';
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
    pressed = true;
}

function onTouchFalseRIGHT(event) {
    // ENABLE CARRIER
    event.preventDefault();
    var url = "IOWriteCarrierEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
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

    // COMMAND CARRIER 
    event.preventDefault();
    var url = "IOWriteForward.html";
    var name = '"HMI_PLC".FromHMI.Command.UpFwdOn';
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
    pressed = false;
}

// =========================
//  BUTTON DOWN
// =========================

document.getElementById("btn_DOWN").addEventListener("mousedown", onTouchTrueDOWN);
document.getElementById("btn_DOWN").addEventListener("touchstart", onTouchTrueDOWN);
document.getElementById("btn_DOWN").addEventListener("mouseup", onTouchFalseDOWN);
document.getElementById("btn_DOWN").addEventListener("touchend", onTouchFalseDOWN);
document.getElementById("btn_DOWN").addEventListener("mouseleave",(e)=>{if(pressed){
    onTouchFalseDOWN(e);
}});


function onTouchTrueDOWN(event) {
// ENABLE LITER
    event.preventDefault();
    var url = "IOWriteLifterEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Lifter.enable';
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

// COMMAND LIFTER
    event.preventDefault();
    var url = "IOWriteBackward.html";
    var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
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
    pressed = true;
}

function onTouchFalseDOWN(event) {
// ENABLE LITER
    event.preventDefault();
    var url = "IOWriteLifterEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Lifter.enable';
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
 // COMMAND LIFTER   
    event.preventDefault();
    var url = "IOWriteBackward.html";
    var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
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
    pressed = false;
}

// =========================
//  BUTTON LEFT
// =========================

document.getElementById("btn_LEFT").addEventListener("mousedown", onTouchTrueLEFT);
document.getElementById("btn_LEFT").addEventListener("touchstart", onTouchTrueLEFT);
document.getElementById("btn_LEFT").addEventListener("mouseup", onTouchFalseLEFT);
document.getElementById("btn_LEFT").addEventListener("touchend", onTouchFalseLEFT);
document.getElementById("btn_LEFT").addEventListener("mouseleave",(e)=>{if(pressed){
    onTouchFalseLEFT(e);
}});

function onTouchTrueLEFT(event) {
    // ENABLE CARRIER
    event.preventDefault();
    var url = "IOWriteCarrierEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
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

    // COMMAND CARRIER 
    event.preventDefault();
    var url = "IOWriteBackward.html";
    var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
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
    pressed = true;

}

function onTouchFalseLEFT(event) {
    // ENABLE CARRIER
    event.preventDefault();
    var url = "IOWriteCarrierEnable.html";
    var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
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

    // COMMAND CARRIER 
    event.preventDefault();
    var url = "IOWriteBackward.html";
    var name = '"HMI_PLC".FromHMI.Command.DownBwdOff';
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
    pressed = false;
}