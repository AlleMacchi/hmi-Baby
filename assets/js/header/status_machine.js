function selStateMachine(){
    let status = Number(StatusMachine);
    switch (status) {
      case 1:
        $('#current-state').text("CLEARING");
        break;
      case 10:
        $('#current-state').text("STOPPED");
        break;
      case 21:
        $('#current-state').text("STARTING");
        break;
      case 20:
        $('#current-state').text("IDLE");
        break;
      case 40:
        $('#current-state').text("SUSPENDED");
        break;
      case 30:
        $('#current-state').text("EXECUTE");
        break;
      case  5:
        $('#current-state').text("STOPPING");
        break;
      case  99:
        $('#current-state').text("ABORTING");
        break;
      case  100:
        $('#current-state').text("ABORTED");
        break;
      case  51:
        $('#current-state').text("HOLDING");
        break;
      case  60:
        $('#current-state').text("HELD");
        break;
      case  61:
        $('#current-state').text("UNHOLDING");
        break;
      case  31:
        $('#current-state').text("SUSPENDING");
        break;
      case  41:
        $('#current-state').text("UNSUSPENDING");
        break;
      case  11:
        $('#current-state').text("RESETTING");
        break;
      case  71:
        $('#current-state').text("COMPLETING");
        break;
      case  80:
        $('#current-state').text("COMPLETE");
        break;
      default:
        $('#current-state').text("UNDEFINED");
      }
}

function selModeMachine(){
    if (StatusMode){
        $('#current-mode').text("AUTOMATIC");
      }else{
        $('#current-mode').text("MANUAL");
      }
}



function updateStatus(){
    selStateMachine();
    selModeMachine();      
}

setInterval(updateStatus, 1000);