function onTouchFalseREAD_POS() {

    var url = "IOWriteRequest.html";
    var name = '"HMI_PLC".FromHMI.Position.request';
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

function onTouchFalseSET_POS() {

    var url = "IOWriteUpdate.html";
    var name = '"HMI_PLC".FromHMI.Position.update';
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



function updatePositionSaved(){
    if (PositionResult>0 && PositionResult<99) {
        $('#physical-pos-saved').text(Position_mm);
        onTouchFalseREAD_POS();
        onTouchFalseSET_POS();
    } else if (PositionResult>98){
        $('#physical-pos-saved').text('Error');
    }
}


function updateSection3Data(){
    updatePositionSaved();
}

setInterval(updateSection3Data, 1000);