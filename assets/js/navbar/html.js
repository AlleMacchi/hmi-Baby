document.getElementById("navbar").innerHTML = `
<nav class="navbar navbar-dark  row_10">
    <div class="container-fluid half-height flex-column"> 
    <button type="button" id="btn_section1" class="btn page-btn no-padding selected">HOME</button>
    <button type="button" id="btn_section2" class="btn page-btn no-padding">MACHINE</button>
    <button type="button" id="btn_section3" class="btn page-btn no-padding">POSITIONS</button>
    <div>
        <button type="button" id="btn_section5" class="btn page-btn no-padding">ALARMS</button>
        <div id="countCircle"></div>
    </div>      
    </div>    
    <div class="container flex-column">
    <button type="button" id="logButton" class="btn page-btn no-padding login-btn">LOG IN</button>
    </div>   
</nav>
`;
