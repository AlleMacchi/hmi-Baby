$("#dropdown_Section3").click(function(event) {
  event.stopPropagation(); // Prevent default event propagation
  $("#dropdown-menu_Section3").toggle();
});

// Close the dropdown menu if the user clicks outside of it
$(document).click(function(event) {
  var dropdownMenu = $("#dropdown-menu_Section3");
  if (dropdownMenu.is(":visible")) {
    dropdownMenu.hide();
  }
});

// Handle dropdown item click
$("#dropdown-menu_Section3").on("click", ".dropdown-item", function(event) {
  event.preventDefault();
  var value = $(this).attr("data-value");
  $("#setDirLogicalPosition").text(value); // Update button text with selected value
  updateLogicalPositionForStore();
});


function updateLogicalPositionForStore(){
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

  StoreLogicalPosition = LogicalPositionStringa;
  RowStoreLogicalPosition = Row;
  DirStoreLogicalPosition = Dir;
  ColStoreLogicalPosition = Col;

  url="IOWritePositionLogic.html";
  name='"HMI_PLC".FromHMI.Position.logical';
  val=StoreLogicalPosition;
  sdata=escape(name)+'='+val;
  $.post(url,sdata,function(result){});
};