// =========================
//  BUTTON SELECTION LOGICAL
// =========================

document
  .getElementById("btn_Logical")
  .addEventListener("mousedown", onTouchTrueLogical);
document
  .getElementById("btn_Logical")
  .addEventListener("touchstart", onTouchTrueLogical);
document
  .getElementById("btn_Physical")
  .addEventListener("mousedown", onTouchFalseLogical);
document
  .getElementById("btn_Physical")
  .addEventListener("touchstart", onTouchFalseLogical);

function onTouchTrueLogical(event) {
  event.preventDefault();
  var url = "IOWriteCarrierMmOrLogical.html";
  var name = '"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

function onTouchFalseLogical(event) {
  event.preventDefault();
  var url = "IOWriteCarrierMmOrLogical.html";
  var name = '"HMI_PLC".FromHMI.Selection.Carrier.mm_or_logical';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

// =========================
//  BUTTON GO
// =========================

document.getElementById("btn_GO").addEventListener("mousedown", onTouchTrueGO);
document.getElementById("btn_GO").addEventListener("touchstart", onTouchTrueGO);
document.getElementById("btn_GO").addEventListener("mouseup", onTouchFalseGO);
document.getElementById("btn_GO").addEventListener("touchend", onTouchFalseGO);

function onTouchTrueGO(event) {
  // ENABLE CARRIER
  event.preventDefault();
  var url = "IOWriteCarrierEnable.html";
  var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);

  event.preventDefault();
  var url = "IOWriteGoTo.html";
  var name = '"HMI_PLC".FromHMI.Command.GoToPosition';
  var val = 1;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

function onTouchFalseGO(event) {
  // ENABLE CARRIER
  event.preventDefault();
  var url = "IOWriteCarrierEnable.html";
  var name = '"HMI_PLC".FromHMI.Selection.Carrier.enable';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);

  event.preventDefault();
  var url = "IOWriteGoTo.html";
  var name = '"HMI_PLC".FromHMI.Command.GoToPosition';
  var val = 0;
  var sdata = encodeURIComponent(name) + "=" + val;

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished, do something with the response if needed
    }
  };
  xhr.send(sdata);
}

// ===================================
// INPUT LOGICAL STRING
// ===================================

function setLogicalString(Row, Col, Dir) {
  var RowString = generateString3nummbers(Row);
  var ColString = generateString2nummbers(Col);
  var DirectionString;

  if (Number(Dir) == 0) {
    DirectionString = "A";
  } else {
    DirectionString = "B";
  }
  var Stringa = "A-L01R" + RowString + DirectionString + ColString;
  return Stringa;
}

var LogicalPositionStringa = "";

// =========================
//  BUTTON SET LOGICAL POSITION
// =========================

document
  .getElementById("btn-setPosition_logical")
  .addEventListener("mousedown", onTouchTrueSetLOGICAL);
document
  .getElementById("btn-setPosition_logical")
  .addEventListener("touchstart", onTouchTrueSetLOGICAL);

function onTouchTrueSetLOGICAL(event) {
  var Row = $("input[id=setPositionLogical]").val();
  var Col = StatusCarrierActPositon_logicalCol;
  var Dir = "0";

  if ($("#setDirLogicalPosition_Section2").text() === "B") {
    Dir = "1";
  } else {
    Dir = "0";
  }

  if (Row == null || Row < 1 || Row > 38) {
    alert("Value must be between 1 and 38");
    document.getElementById("setPositionLogical").value = "";
    $("#set-logical-position").text("");
  } else {
    LogicalPositionStringa = setLogicalString(Row, Col, Dir);
    url = "IOWritePositionLogical.html";
    name = '"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_logical';
    val = $("#set-logical-position").text();
    sdata = escape(name) + "=" + val;
    $.post(url, sdata, function (result) {});
    $("#set-logical-position").text(LogicalPositionStringa);
  }
}

// =========================
//  BUTTON SET PHYSICAL POSITION
// =========================

document
  .getElementById("btn-setPosition_mm")
  .addEventListener("mousedown", onTouchTrueSetPHYSICAL);
document
  .getElementById("btn-setPosition_mm")
  .addEventListener("touchstart", onTouchTrueSetPHYSICAL);

function onTouchTrueSetPHYSICAL(event) {
  $("#set-position").html(
    $("input[id=setPosition_mm]").val() + " <span>&nbsp;mm</span>"
  );

  url = "IOWritePosition.html";
  name = '"HMI_PLC".FromHMI.Setting.Carrier.PositionToReach_mm';
  val = $("input[id=setPosition_mm]").val();
  sdata = escape(name) + "=" + val;
  $.post(url, sdata, function (result) {});
}

// =========================
//  BUTTON SET CARRIER SPEED
// =========================

document
  .getElementById("btn-setCarrierSpeed")
  .addEventListener("mousedown", onTouchTrueSetCARRIERSPD);
document
  .getElementById("btn-setCarrierSpeed")
  .addEventListener("touchstart", onTouchTrueSetCARRIERSPD);

function onTouchTrueSetCARRIERSPD(event) {
  url = "IOWriteCarrierSpeed.html";
  name = '"HMI_PLC".FromHMI.Setting.Carrier.Speed';
  val = $("input[id=setCarrierSpeed]").val();
  sdata = escape(name) + "=" + val;
  $.post(url, sdata, function (result) {});

  if (val < 1 || val > 10) {
    alert("Value must be between 1 and 10");
    document.getElementById("setCarrierSpeed").value = "";
  } else {
    document.getElementById("CarrierSetSpeed").textContent = `${val}%`;
  }
}

// =========================
//  BUTTON SET LIFTER SPEED
// =========================

document
  .getElementById("btn-setLifterSpeed")
  .addEventListener("mousedown", onTouchTrueSetLIFTERSPD);
document
  .getElementById("btn-setLifterSpeed")
  .addEventListener("touchstart", onTouchTrueSetLIFTERSPD);

function onTouchTrueSetLIFTERSPD(event) {
  url = "IOWriteLifterSpeed.html";
  name = '"HMI_PLC".FromHMI.Setting.Lifter.Speed';
  val = $("input[id=setLifterSpeed]").val();
  sdata = escape(name) + "=" + val;
  $.post(url, sdata, function (result) {});

  if (val < 1 || val > 100) {
    alert("Value must be between 1 and 100");
    document.getElementById("setLifterSpeed").value = "";
  } else {
    document.getElementById("LifterSetSpeed").textContent = `${val}%`;
  }
}
