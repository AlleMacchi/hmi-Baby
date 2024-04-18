document.getElementById("header").innerHTML = `
<div class="logo-container">
    <img class="logo-btn" src="assets/icons/logoOnly.png">
    <h1 id='brand'>Product Reality Group</h1>
</div>
<div class="status-container">
    <div class="status-no-frame">Current Mode</div>
    <div id="current-mode" class="status-frame">Manual</div>
    <div class="status-no-frame">Current State</div>
    <div id="current-state" class="status-frame">Execute</div>
</div>
<div class="agv-number-container">
  <div class="agv-number-label">Baby No</div>
  <div class="agv-number">xx</div>
</div>
<div class="manual-container">
  <button  id="command-btn" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCommand" aria-controls="offcanvasScrolling">ON/OFF</button>
</div>
<div class="manual-container">
  <button  id="manual-btn" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">MAN</button>
</div>


<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasCommand" aria-labelledby="offcanvasScrollingLabel">
</div>


<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"> 
</div>
`;