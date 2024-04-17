// ===================================
// INPUT LOGICAL CHANGE
// ===================================

function setLogicalStringForStore(Row,Col,Dir){
    
    var RowString = Row;
    var ColString = Col;
    var DirectionString = Dir;

    var Stringa = 'A-L01R' + RowString + DirectionString + ColString;
    return Stringa
}

var LogicalPositionStringa = '';


$("#setRowLogicalPosition").change(function(){
    var Row = $('input[id=setRowLogicalPosition]').val();
    var Col = $('input[id=setColLogicalPosition]').val();
    var Dir = 'A';

    if ($("#setDirLogicalPosition").text() == 'B') {
      Dir = 'B';
    } else {
      Dir = 'A';
    }
    
    $('#physical-pos-saved').text('');

    LogicalPositionStringa = setLogicalStringForStore(Row,Col,Dir);
    // alert(LogicalPositionStringa); 
    if (Row==null || Row==0 || Col>38) {
        StoreLogicalPosition = '';
    } else {
        StoreLogicalPosition = LogicalPositionStringa;
    }

    if (Row==0 || Row>38) {
        alert('Value must be between 1 and 38');
    }        

    RowStoreLogicalPosition = Row;
    DirStoreLogicalPosition = Dir;
    ColStoreLogicalPosition = Col;
  
    url="IOWritePositionLogic.html";
    name='"HMI_PLC".FromHMI.Position.logical';
    val=StoreLogicalPosition;
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});

});


$("#setColLogicalPosition").change(function(){
    var Row = $('input[id=setRowLogicalPosition]').val();
    var Col = $('input[id=setColLogicalPosition]').val();
    var Dir = 'A';

    if ($("#setDirLogicalPosition").text() == 'B') {
      Dir = 'B';
    } else {
      Dir = 'A';
    }
    
    $('#physical-pos-saved').text('');

    LogicalPositionStringa = setLogicalStringForStore(Row,Col,Dir);
    // alert(LogicalPositionStringa); 
    if (Col==null || Col==0 || Col>38) {
        StoreLogicalPosition = '';
    } else {
        StoreLogicalPosition = LogicalPositionStringa;
    }

    if (Col==0 || Col>38) {
        alert('Value must be between 1 and 38');
    }        


    
    RowStoreLogicalPosition = Row;
    DirStoreLogicalPosition = Dir;
    ColStoreLogicalPosition = Col;
  
    url="IOWritePositionLogic.html";
    name='"HMI_PLC".FromHMI.Position.logical';
    val=StoreLogicalPosition;
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});

});
// ===================================
// INPUT PHYICAL CHANGE
// ===================================

$("#setPosition_toStore").change(function(){
 
    url="IOWritePositionMM.html";
    name='"HMI_PLC".FromHMI.Position.mm';
    val=$('input[id=setPosition_toStore]').val()
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});

});

// Prevent Enter key from refreshing the page
$("#setPosition_toStore").on('keydown', function(event) {
    if (event.keyCode === 13) { // 13 is the Enter key code
        event.preventDefault(); // Prevent the default behavior of Enter key
        
        url="IOWritePositionMM.html";
        name='"HMI_PLC".FromHMI.Position.mm';
        val=$('input[id=setPosition_toStore]').val()
        sdata=escape(name)+'='+val;
        $.post(url,sdata,function(result){});

    }
});


// ===================================
// BUTTON READ VALUE
// ===================================
document.getElementById("btn-readValue").addEventListener("mousedown", onTouchTrueREAD_POS);
document.getElementById("btn-readValue").addEventListener("touchstart", onTouchTrueREAD_POS);
// document.getElementById("btn-readValue").addEventListener("mouseup", onTouchFalseREAD_POS);
// document.getElementById("btn-readValue").addEventListener("touchend", onTouchFalseREAD_POS);

function onTouchTrueREAD_POS(event) {

    if ((Number(RowStoreLogicalPosition)>0 && Number(RowStoreLogicalPosition) <39) && (Number(ColStoreLogicalPosition)>0 && Number(ColStoreLogicalPosition) <39) && (DirStoreLogicalPosition === 'A' || DirStoreLogicalPosition === 'B')){
        event.preventDefault();
        var url = "IOWriteRequest.html";
        var name = '"HMI_PLC".FromHMI.Position.request';
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
    } else{
        alert('Logical Position not Valid'); 
    }
}




// ===================================
// BUTTON SET VALUE
// ===================================
document.getElementById("btn-setPositionToStore").addEventListener("mousedown", onTouchTrueSET_POS);
document.getElementById("btn-setPositionToStore").addEventListener("touchstart", onTouchTrueSET_POS);
// document.getElementById("btn-setPositionToStore").addEventListener("mouseup", onTouchFalseSET_POS);
// document.getElementById("btn-setPositionToStore").addEventListener("touchend", onTouchFalseSET_POS);

function onTouchTrueSET_POS(event) {

    if ((Number(RowStoreLogicalPosition)>0 && Number(RowStoreLogicalPosition) <39) && (Number(ColStoreLogicalPosition)>0 && Number(ColStoreLogicalPosition) <39) && (DirStoreLogicalPosition === 'A' || DirStoreLogicalPosition === 'B')){
        event.preventDefault();
        var url = "IOWriteUpdate.html";
        var name = '"HMI_PLC".FromHMI.Position.update';
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
    } else{
        alert('Logical Position not Valid'); 
    }
}



// ===================================
// BUTTON COPY VALUE
// ===================================

$("#btn-copyActPosition").click(function(){
    var positionShuttle = $("#physical-pos-shuttle").text().trim();
    $("#setPosition_toStore").val(positionShuttle);

    url="IOWritePositionMM.html";
    name='"HMI_PLC".FromHMI.Position.mm';
    val=$('input[id=setPosition_toStore]').val()
    sdata=escape(name)+'='+val;
    $.post(url,sdata,function(result){});

});