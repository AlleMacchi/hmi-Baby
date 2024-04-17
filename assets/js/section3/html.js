document.getElementById("section3").innerHTML = `
<div class="container-view container-fluid"> 

<div class="container-positions">

  <div class="flex-row-container">
    <div class="flex-row-item-left flex-row-item">
      <div class="title-row">LOGICAL POSITION</div> 


      <div class="string-position-logic">A-L01R 
        <span>
          <input 
              id="setRowLogicalPosition"
              class="input-position-logic"
              type="number"
              min="1" 
              max="38"
              placeholder="Row"
              oninput="this.value = ('00' + this.value).slice(-3);"
          />
        </span>
        <span>
          <div class="dropdown" id="dropdown_Section3" >
            <button 
              id="setDirLogicalPosition"
              class="dropdown-toggle dropdown-position-logic" 
              type="button">
              A
            </button>
            <div class="dropdown-menu" id="dropdown-menu_Section3" >
              <a class="dropdown-item" href="#" data-value="A">A</a>
              <a class="dropdown-item" href="#" data-value="B">B</a>
            </div>
          </div>   
        </span>
        <span>
          <input 
              id="setColLogicalPosition"
              class="input-position-logic"
              type="number"
              min="1" 
              max="38"
              placeholder="Col"
              oninput="this.value = ('0' + this.value).slice(-2);"
          />
        </span>

        <button           
          id="btn-readValue"
          class="btn-position"
          type="button">
          Read Value
        </button>
        <div id="LogicalPositionStore"></div>
      </div>


    </div>
    <div class="flex-row-item-right">

      <div class="title-row">POSITION SAVED (mm)</div> 
      <div class="string-position-logic">
        <div id="physical-pos-saved">12358</div>
      </div>

    </div>
  </div>
  <div class="line second-row"></div>
  
  <div class="flex-row-container ">
    
    <div class="flex-row-item-left">
      <div class="title-row">ACTUAL POSITION SHUTTLE (mm)</div> 
      <div class="string-position-logic">
         <div id="physical-pos-shuttle">12357</div>
      </div>

      <button           
        id="btn-copyActPosition"
        class="btn-position"
        type="button">
        Copy to Set
      </button>
    </div>



    <div class="flex-row-item-right">
      <div class="title-row">SET PHYSICAL POSITION (mm)</div> 
      <form class="form">
          <input 
              id="setPosition_toStore"
              class="form_input"
              type="number"
              placeholder="Set position"
          />
      </form> 
      <button           
        id="btn-setPositionToStore"
        class="btn-position"
        type="button">
        Set Position
      </button>
    </div>
  </div>

</div>


</div>

`;