document.getElementById("section1").innerHTML = `
<div class="container-view container-fluid"> 
<div class="home">
  <h1>Home</h1>
  <div id="row-title">X</div> 
  <div class="position-div">
  <div class="Number " id="SelRowColTitle">ROW</div>
  <div class="square " id="NumberRowColTitle">2</div>
</div>
  <div id="row-container-squares">
    <!-- The 38 position squares -->
    <div class="position-div">
      <div class="Number " id="SelRowColRow">COL</div>      
      <div class="square invisible" ></div>
    </div>
    <div class="position-div">
      <div class="Number active " data-position="1">1</div>
      <div class="square active" data-position="1"></div>
      <div class="status square invisible" data-position="1"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="2">2</div>
      <div class="square" data-position="2"></div>
      <div class="status square invisible" data-position="2"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="3">3</div>
      <div class="square" data-position="3"></div>
      <div class="status square invisible" data-position="3"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="4">4</div>
      <div class="square" data-position="4"></div>
      <div class="status square invisible" data-position="4"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="5">5</div>
      <div class="square" data-position="5"></div>
      <div class="status square invisible" data-position="5"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="6">6</div>
      <div class="square" data-position="6"></div>
      <div class="status square invisible" data-position="6"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="7">7</div>
      <div class="square" data-position="7"></div>
      <div class="status square invisible" data-position="7"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="8">8</div>
      <div class="square" data-position="8"></div>
      <div class="status square invisible" data-position="8"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="9">9</div>
      <div class="square" data-position="9"></div>
      <div class="status square invisible" data-position="9"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="10">10</div>
      <div class="square" data-position="10"></div>
      <div class="status square invisible" data-position="10"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="11">11</div>
      <div class="square" data-position="11"></div>
      <div class="status square invisible" data-position="11"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="12">12</div>
      <div class="square" data-position="12"></div>
      <div class="status square invisible" data-position="12"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="13">13</div>
      <div class="square" data-position="13"></div>
      <div class="status square invisible" data-position="13"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="14">14</div>
      <div class="square" data-position="14"></div>
      <div class="status square invisible" data-position="14"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="15">15</div>
      <div class="square" data-position="15"></div>
      <div class="status square invisible" data-position="15"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="16">16</div>
      <div class="square" data-position="16"></div>
      <div class="status square invisible" data-position="16"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="17">17</div>
      <div class="square" data-position="17"></div>
      <div class="status square invisible" data-position="17"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="18">18</div>
      <div class="square" data-position="18"></div>
      <div class="status square invisible" data-position="18"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="19">19</div>
      <div class="square" data-position="19"></div>
      <div class="status square invisible" data-position="19"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="20">20</div>
      <div class="square" data-position="20"></div>
      <div class="status square invisible" data-position="20"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="21">21</div>
      <div class="square" data-position="21"></div>
      <div class="status square invisible" data-position="21"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="22">22</div>
      <div class="square" data-position="22"></div>
      <div class="status square invisible" data-position="22"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="23">23</div>
      <div class="square" data-position="23"></div>
      <div class="status square invisible" data-position="23"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="24">24</div>
      <div class="square" data-position="24"></div>
      <div class="status square invisible" data-position="24"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="25">25</div>
      <div class="square" data-position="25"></div>
      <div class="status square invisible" data-position="25"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="26">26</div>
      <div class="square" data-position="26"></div>
      <div class="status square invisible" data-position="26"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="27">27</div>
      <div class="square" data-position="27"></div>
      <div class="status square invisible" data-position="27"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="28">28</div>
      <div class="square" data-position="28"></div>
      <div class="status square invisible" data-position="28"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="29">29</div>
      <div class="square" data-position="29"></div>
      <div class="status square invisible" data-position="29"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="30">30</div>
      <div class="square" data-position="30"></div>
      <div class="status square invisible" data-position="30"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="31">31</div>
      <div class="square" data-position="31"></div>
      <div class="status square invisible" data-position="31"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="32">32</div>
      <div class="square" data-position="32"></div>
      <div class="status square invisible" data-position="32"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="33">33</div>
      <div class="square" data-position="33"></div>
      <div class="status square invisible" data-position="33"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="34">34</div>
      <div class="square" data-position="34"></div>
      <div class="status square invisible" data-position="34"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="35">35</div>
      <div class="square" data-position="35"></div>
      <div class="status square invisible" data-position="35"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="36">36</div>
      <div class="square" data-position="36"></div>
      <div class="status square invisible" data-position="36"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="37">37</div>
      <div class="square" data-position="37"></div>
      <div class="status square invisible" data-position="37"></div>
    </div>
    <div class="position-div">
      <div class="Number" data-position="38">38</div>
      <div class="square" data-position="38"></div>
      <div class="status square invisible" data-position="38"></div>
    </div>
  </div>
  
<!-- sezione steps -->
<div class="Parameters">         
  <div class="step-container">
    <div class="form_container">
      <div id="current-step-title" class="status-no-frame">Current Step</div>
      <div id="current-step">Step 4: Go to First Position</div>
    </div>

 
  <div class="form_container">
    <div class="dropdown">
      <button type="button" class="btn btn-secondary dropdown-toggle" onclick="toggleDropdown()">
        Select Step
      </button>
      <div class="dropdown-content" id="selectSteps">
        <a href="#" onclick="selectOption('5')">Step 5: Go to Mother</a>
        <a href="#" onclick="selectOption('4')">Step 4: Go to First Position</a>
        <a href="#" onclick="selectOption('3')">Step 3: Lift Up</a>
        <a href="#" onclick="selectOption('2')">Step 2: Go to position</a>
        <a href="#" onclick="selectOption('1')">Step 1: Lift Down</a>
        <a href="#" onclick="selectOption('0')">Step 0: Init</a>
      </div>
    </div>
    
    <input type="text" id="selectedOption" class="form-control" placeholder="0" readonly>                      
    <button 
          id="btn-setStep"
          class="btn_form "
          type="submit">
          Confirm
      </button>      
  </div>
</div>
</div>

</div>

</div>

`;