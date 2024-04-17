$('#SelRowColTitle').text("ROW");
$('#SelRowColRow').text("COL");

function updateLogicalRow(){
    $('#NumberRowColTitle').text(StatusCarrierActPositon_logicalRow);
}

function updateLogicalCol(){
var Pos = Number(StatusCarrierActPositon_logicalCol); 

// Get all elements with class "Number"
var numbers = document.querySelectorAll('.Number');
var squares =  document.querySelectorAll('.square');
var status =  document.querySelectorAll('.square.status');


// Loop through each element
numbers.forEach(function(number) {
    // Get the value of data-position attribute
    var position = parseInt(number.getAttribute('data-position'));
    
    // Check if the position matches the Row
    if (position === Pos) {
        // Add the "active" class
        number.classList.add('active');
    } else {
        // Remove the "active" class
        number.classList.remove('active');
    }
});

// Loop through each element
squares.forEach(function(number) {
    // Get the value of data-position attribute
    var position = parseInt(number.getAttribute('data-position'));
    
    // Check if the position matches the Row
    if (position === Pos) {
        // Add the "active" class
        number.classList.add('active');
        if(CarrierIsFault) {
            number.classList.add('blinking');
        }else{
            number.classList.remove('blinking'); 
        }
    } else {
        // Remove the "active" class
        number.classList.remove('active');
    }
});

// Loop through each element
status.forEach(function(number) {
    // Get the value of data-position attribute
    var position = parseInt(number.getAttribute('data-position'));
    
    // Check if the position matches the Row
    if (position === Pos) {
        // Add the "active" class
        
        if (CarrierInPosition) {
            number.textContent = 'ok';
            number.classList.remove('alarm');
        } else if (CarrierIsMoving) {
            number.textContent = '<->';
            number.classList.remove('alarm');
        }else if(CarrierIsFault) {
            number.textContent = '!';
            number.classList.add('alarm');
        }else{
            number.textContent = '?';
            number.classList.remove('alarm');
        }

    } else {
        // Remove the "active" class
        number.textContent = '';
    }
});


}

function generateString3nummbers(row) {
    // Convert row to a string with leading zeros if necessary
    var rowString = row.toString().padStart(3, '0');
    
    // Generate the string using the provided format
    var result = rowString;
    
    return result;
}

function generateString2nummbers(row) {
    // Convert row to a string with leading zeros if necessary
    var rowString = row.toString().padStart(2, '0');
    
    // Generate the string using the provided format
    var result = rowString;
    
    return result;
}


function updateLogicalString(){
    
    var RowString = generateString3nummbers(StatusCarrierActPositon_logicalRow);
    var ColString = generateString2nummbers(StatusCarrierActPositon_logicalCol);
    var DirectionString 

    if (Number(StatusCarrierActPositon_logicalDir)==0) {
        DirectionString = 'A';
    } else {
        DirectionString = 'B'; 
    }
    var StringaTitolo = 'A-L01R' + RowString + DirectionString + ColString;
    $('#row-title').text(StringaTitolo);
}


function updateActualPosition(){
    updateLogicalRow();
    updateLogicalCol();    
    updateLogicalString();  
}

setInterval(updateActualPosition, 1000);