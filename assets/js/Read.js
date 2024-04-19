$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  setInterval(function() {
      $.getJSON("IORead_Array.html", function(data){

        // Status Machine
        StatusMachine = data.Array_1;
        // Status Mode
        // Function Read for bit
        function readBits(integer) {
          var bits = [];
          var mask = 1;
              for (var i = 0; i < 16; i++) { // Assuming 32-bit integers
                  bits.push(integer & mask ? 1 : 0);
                  mask <<= 1;
              }
              return bits
          }      

          function decodedString(Stringa){
            var encodedString =Stringa;
            var elem = document.createElement('textarea');
            elem.innerHTML = encodedString;
            return Number(elem.value);
          }


          // Bits of array_2:          
          var bits = readBits(decodedString(data.Array_2));
          StatusMode = bits[0];
          CarrierInPosition = bits[1];
          CarrierIsMoving  = bits[2];
          CarrierIsFault  = bits[3];
          LifterInPositionUp  = bits[4];
          LifterInPositionDown  = bits[5];
          LifterIsMoving  = bits[6];
          LifterIsFault  = bits[7];
          PalletDetectedSide_A = bits[8];
          PalletDetectedSide_B = bits[9];
          MotherDetectedSide_A = bits[10];
          MotherDetectedSide_B = bits[11];
          PathNotFreeSide_A = bits[12];
          PathNotFreeSide_B = bits[13];
          ShuttleOnBoard= bits[14];

        // Status Step
        StatusStep = data.Array_3;
        // Logical Position
        StatusCarrierActPositon_logicalRow = data.Array_4;
        StatusCarrierActPositon_logicalCol = data.Array_5;
        StatusCarrierActPositon_logicalDir = data.Array_6;
        // Result from write
        PositionResult = data.Array_7;


        // Alarms
        // Controller
        var bits = readBits(decodedString(data.Array_8));
        Alarm_Controller_000 = bits[0];
        Alarm_Controller_001 = bits[1];
        Alarm_Controller_002 = bits[2];
        Alarm_Controller_003 = bits[3];
        Alarm_Controller_004 = bits[4];
        Alarm_Controller_005 = bits[5];
        Alarm_Controller_006 = bits[6];
        Alarm_Controller_007 = bits[7];
        Alarm_Controller_008 = bits[8];
        Alarm_Controller_009 = bits[9];
        Alarm_Controller_010 = bits[10];
        Alarm_Controller_011 = bits[11];
        Alarm_Controller_012 = bits[12];
        Alarm_Controller_013 = bits[13];
        Alarm_Controller_014 = bits[14];
        Alarm_Controller_015 = bits[15];

        var bits = readBits(decodedString(data.Array_9));
        Alarm_Controller_100 = bits[0];
        Alarm_Controller_101 = bits[1];
        Alarm_Controller_102 = bits[2];
        Alarm_Controller_103 = bits[3];
        Alarm_Controller_104 = bits[4];
        Alarm_Controller_105 = bits[5];
        Alarm_Controller_106 = bits[6];
        Alarm_Controller_107 = bits[7];
        Alarm_Controller_108 = bits[8];
        Alarm_Controller_109 = bits[9];
        Alarm_Controller_110 = bits[10];
        Alarm_Controller_111 = bits[11];
        Alarm_Controller_112 = bits[12];
        Alarm_Controller_113 = bits[13];
        Alarm_Controller_114 = bits[14];
        Alarm_Controller_115 = bits[15];


        // Carrier
        var bits = readBits(decodedString(data.Array_10));
        Alarm_Carrier_000 = bits[0];
        Alarm_Carrier_001 = bits[1];
        Alarm_Carrier_002 = bits[2];
        Alarm_Carrier_003 = bits[3];
        Alarm_Carrier_004 = bits[4];
        Alarm_Carrier_005 = bits[5];
        Alarm_Carrier_006 = bits[6];
        Alarm_Carrier_007 = bits[7];
        Alarm_Carrier_008 = bits[8];
        Alarm_Carrier_009 = bits[9];
        Alarm_Carrier_010 = bits[10];
        Alarm_Carrier_011 = bits[11];
        Alarm_Carrier_012 = bits[12];
        Alarm_Carrier_013 = bits[13];
        Alarm_Carrier_014 = bits[14];
        Alarm_Carrier_015 = bits[15];

        // Lifter
        var bits = readBits(decodedString(data.Array_11));
        Alarm_Lifter_000 = bits[0];
        Alarm_Lifter_001 = bits[1];
        Alarm_Lifter_002 = bits[2];
        Alarm_Lifter_003 = bits[3];
        Alarm_Lifter_004 = bits[4];
        Alarm_Lifter_005 = bits[5];
        Alarm_Lifter_006 = bits[6];
        Alarm_Lifter_007 = bits[7];
        Alarm_Lifter_008 = bits[8];
        Alarm_Lifter_009 = bits[9];
        Alarm_Lifter_010 = bits[10];
        Alarm_Lifter_011 = bits[11];
        Alarm_Lifter_012 = bits[12];
        Alarm_Lifter_013 = bits[13];
        Alarm_Lifter_014 = bits[14];
        Alarm_Lifter_015 = bits[15];


        // Carrier: Actual Speed
        CarrierActSpeed = data.Array_12;
        // Carrier: Actual Position
        CarrierActPosition_mm = data.Array_13;
        // Setting: Position
        Position_mm = data.Array_14; 
        // Task Number
        TaskNumber = data.Array_15;

        // //Watchdog
        // Watchdog = 0; //data.Array_X
        // updateWatchdog();  // update url and name




      }
  )},1500);       
});


function updateWatchdog(){
  // e.preventDefault();
    var url = "IOWriteWatchdog.html";   // update here
    var name = 'X';                     //update here
    var val = !Watchdog;
    var sdata = encodeURIComponent(name) + '=' + val;
    console.log(val);                  // remove this after testing
    
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

// for Test
// setInterval(updateWatchdog,1500);