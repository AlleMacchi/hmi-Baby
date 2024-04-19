document.getElementById("offcanvasCommand").innerHTML = `
<div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" id="cmd_close" > <img src="assets/icons/close.svg"> </button>
</div>
<h5 class="offcanvas-title" id="offcanvasScrollingLabel">GENERAL COMMANDS</h5>
<div class="offcanvas-body">
    <div id="selector-section" class="selector">
        <button id="btn_Manual" class="button selected">
            Manual
        </button>
        <button id="btn_Automatic" class="button ">
            Automatic
        </button>
    </div>
    <div class="container-general-command-btn">
        <!-- Command START  -->
        <div class="btn_cmd_container">
            <div id="btn_circle_out_START" class="btn_circle_outlet " >
                <div class="btn_circle_inlet">
                    <button id="btn_START" class="btn_cmd ">
                        START
                    </button>
                </div>
            </div>
        </div>
        <!-- Command STOP  -->
        <div class="btn_cmd_container ">
            <div id="btn_circle_out_STOP"  class="btn_circle_outlet" >
                <div class="btn_circle_inlet ">
                    <button id="btn_STOP" class="btn_cmd">
                        STOP
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="container-reset">
        <button id="btn_RESET" class="button">
            RESET
        </button>
    </div>

</div>
`;