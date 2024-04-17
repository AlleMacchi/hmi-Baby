// User                    Password                              funzionalitá
// operator             nessuna password                 Solo vede, Nessun commando abilitato
// supervisor          1221                                      Solo Movimenti manuali
// maintenance      3ff4                                        Tutto aperto

// Bottoni Bloccati Operator:
// Manual / Auto

// Bottoni Bloccati per Supervisor:
// Copy Actual position in Position page
// Set position in Position

// Maintenance: Nessun Blocco

// =================================
// Initialise accounts and controls
//==================================

const userLogin = {
  operator: { password: "", username: "operator" },
  supervisor: { password: "1221", username: "supervisor" },
  maintenance: { password: "3ff4", username: "maintenance" },
};

const controls = [
  //sidebars
  "selector-section",
  "joystick-section",
  //homepage
  "steps-section",
  //machine
  "commands-section",
  //positions
  "setPosition_toStore",
  "btn-copyActPosition",
  "btn-setPositionToStore",
];

var username = "";
var password = "";

//===============================================
// Login function to check username and password
//===============================================

function login() {
  //get username and password input
  username = document.getElementById("username").value;
  password = document.getElementById("password").value;

  if (userLogin[username] && userLogin[username].password === password) {
    //set access level
    configureAccess(username);
    //change login button to logout
    document.getElementById("logButton").innerHTML = "LOGOUT";
    document.getElementById("login-logout").textContent = "LOGOUT";
    document.getElementById("login-logout").setAttribute("onclick", "logout()");

    //disable inputs
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("username").style.opacity = 0.5;
    document.getElementById("password").style.opacity = 0.5;

    // scroll to section 1 and display messages
    scrollToSection("section1");
    confirm("Logged in successfully as " + username);
  } else {
    //display message error
    alert("Invalid username or password");
    //reset pw safety
    document.getElementById("password").value = "";
  }
}

//===============================================================================================
// configuration of access based on the username, if none provider is operator level permissions
//===============================================================================================

function configureAccess(username) {
  // if no login then operator
  if (username == "") {
    username = "operator";
  }

  //display in coloe access level
  console.log("Access level: ", username);

  // Enable all Controls (from previous interactions)
  controls.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.disabled = false;
      element.style.opacity = 1;
      element.style.pointerEvents = "auto";
      element.style.cursor = "auto";
    }
  });

  //Disable controls list based on the username
  const controlsToDisable = {
    operator: [
      //sidebars
      "selector-section",
      "joystick-section",
      //homepage
      "steps-section",
      //machine
      "commands-section",
      //positions
      "setPosition_toStore",
      "btn-copyActPosition",
      "btn-setPositionToStore",
    ],
    supervisor: [
      //positions
      "setPosition_toStore",
      "btn-copyActPosition",
      "btn-setPositionToStore",
    ],
    maintenance: [],
  };

  // Disable buttons based on the username and the realted list
  controlsToDisable[username].forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.disabled = true;
      element.style.opacity = 0.3;
      element.style.pointerEvents = "none";
      element.style.cursor = "not-allowed";
    }
  });
}

function logout() {
  //reset data
  username = "operator";
  password = "";
  //reset inputs
  document.getElementById("password").value = "";
  document.getElementById("username").value = "";
  document.getElementById("username").disabled = false;
  document.getElementById("password").disabled = false;
  document.getElementById("username").style.opacity = 1;
  document.getElementById("password").style.opacity = 1;
  //reset access level
  configureAccess(username);
  //reset login button
  document.getElementById("login-logout").innerHTML = "LOGIN";
  document.getElementById("login-logout").setAttribute("onclick", "login()");
  //display message
  alert("Logged out successfully");
}

configureAccess(username);
