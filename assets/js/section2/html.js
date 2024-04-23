document.getElementById("section2").innerHTML = `
<div class="container-view container-fluid"> 
<div class="flex-container">
  <div class="flex-item-left">
    <div class="container-machine-img">
      <div class="machine-img">
        <img class="shuttle-img" src="assets/icons/agv-Baby.webp">
        <!-- <div class="triangle-up-green" id="movement-lift-up"></div>
        <div class="triangle-down" id="movement-lift-down"></div>
        <div class="triangle-right-green" id="movement-carrier-fwd"></div>
        <div class="triangle-left" id="movement-carrier-bwd"></div> -->
        <div class="sensor green" id="sensor-lift-up">A</div>
        <div class="sensor" id="sensor-lift-down">B</div>
        <div class="sensor" id="sensor-Before-Cargo-side-A">C</div>
        <div class="sensor" id="sensor-After-Cargo-side-A">D</div>
        <div class="battery-container">
          <h1 id="sensorBatteryLabel">Battery%</h1>
          <div class="sensorBattery" id="sensorBattery"></div>
        </div>
        <div class="sensor" id="sensor-Before-Cargo-side-B">E</div>
        <div class="sensor" id="sensor-After-Cargo-side-B">F</div>
        <div class="sensor" id="sensor-Mother-detects-side-A">G</div>
        <div class="sensor" id="sensor-Mother-detects-side-B">H</div>
        <div class="sensor" id="sensor-side-Goods-Close-side-A">I</div>
        <div class="sensor" id="sensor-side-Goods-Close-side-B">L</div>
        <div class="sensor" id="sensor-On-Mother">M</div>
      </div>


      <div class="container-machine-info">
        
        <div>
          <div class="status-no-frame status-no-frame-custom">Current Speed</div>
          <div class="text-info" id="current-speed">100<span>&nbsp%</span></div>
        </div>
        
        <div>                        
          <div class="status-no-frame status-no-frame-custom">Current Position</div>
          <div class="text-info" id="current-position">1234 <span>&nbspmm</span></div>
        </div>
        
        <div>                        
          <div class="status-no-frame status-no-frame-custom">Current Logical Position</div>
          <div class="text-info" id="current-logical-position">A-L01R001A05</div>
        </div>

        <div>                        
          <div class="status-no-frame status-no-frame-custom">Status Position</div>
          <div class="text-info" id="status-position">in position</div>
        </div>

      </div>
    </div>                    
  </div>
  <div class="flex-item-right">
    A: Lifter Up <br>
    B: Liter Down <br>
    C: Pallet detected 1 - Side A - <br>
    D: Pallet detected 2 - Side A - <br>
    E: Pallet detected 1 - Side B - <br>
    F: Pallet detected 2 - Side B - <br>
    G: Mother detected - Side A - <br>
    H: Mother detected - Side B - <br>
    I: Path not Free - Side A - <br>
    L: Path not Free - Side B - <br>
    M: Shuttle on board the mother <br>
  </div>
  </div>


<div id="commands-section" class="container-go-position">

  <div class="container-sector-go container-sector-go-custom">
    
    <div class="form_container">
      <form class="form">
          <input 
              id="setCarrierSpeed"
              class="form_input"
              type="number"
              min="1" 
              max="10"
              placeholder="Set speed"
          />
      </form>          
      <button 
          id="btn-setCarrierSpeed"
          class="btn_form btn_form_custom"
          type="submit">
          Confirm
      </button>          
    </div>
    <h4>CARRIER SET SPEED</h4>
    <h4 id="CarrierSetSpeed"></h4>
    <div class="form_container">
      <form class="form">
          <input 
              id="setLifterSpeed"
              class="form_input"
              type="number"
              min="1" 
              max="100"
              placeholder="Set speed"
          />
      </form>          
      <button 
          id="btn-setLifterSpeed"
          class="btn_form btn_form_custom"
          type="submit">
          Confirm
      </button>          
    </div>
    <h4>LIFTER SET SPEED</h4>
    <h4 id="LifterSetSpeed"></h4>
  </div>
  

  <div class="container-sector-go">
    <div class="Parameters">    
    
      <button id="btn_Logical" class="button selection-btn">
          Logical
      </button>

      <div class="form_container">
          <form class="form">
              <input 
                  id="setPositionLogical"
                  class="form_input"
                  type="number"
                  min="1" 
                  max="38"
                  placeholder="Set column"
              />
          </form>   
          <button 
              id="btn-setPosition_logical"
              class="btn_form btn_form_custom"
              type="submit">
              Confirm
          </button>                 
      </div>
      <br>
      <div id="set-logical-position"></div> 
    </div>

  </div>

  <div class="container-sector-go">
    <div class="Parameters">    
    
      <button id="btn_Physical" class="button selection-btn selected">
          Physical
      </button>

      <div class="form_container">
          <form class="form">
              <input 
                  id="setPosition_mm"
                  class="form_input"
                  type="number"
                  placeholder="Set position"
              />
          </form>          
          <button 
              id="btn-setPosition_mm"
              class="btn_form btn_form_custom"
              type="submit">
              Confirm
          </button>          
      </div>
      <br>
      <div id="set-position">0 <span>&nbspmm</span></div> 
    </div>
  </div>

  <div class="container-sector-go ">
    <div class="btn_cmd_container btn_cmd_container-custom">
      <div id="btn_circle_out_GO"  class="btn_circle_outlet" >
          <div class="btn_circle_inlet ">
              <button id="btn_GO" class="btn_cmd">
                  GO
              </button>
          </div>
      </div>
      </div>
  </div>



</div>
</div>
`;
