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
    document.getElementById("logButton").children[0].src =
      "./assets/icons/logout.svg";
    document.getElementById("login-logout").textContent = "LOGOUT";
    document.getElementById("login-logout").setAttribute("onclick", "logout()");
    document.getElementById("profile").textContent = username;
    document.getElementById("profileIcon").src =
      "./assets/icons/" + username + ".svg";

    //disable inputs
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("username").style.opacity = 0.5;
    document.getElementById("password").style.opacity = 0.5;

    // scroll to section 1 and display messages
    document.getElementById("logButton").classList.remove("selected");
    document.getElementById("btn_section1").classList.add("selected");
    scrollToSection("section1");
    
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
  // console.log("Access level: ", username);

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
  //reset login button
  document.getElementById("logButton").children[0].src =
    "./assets/icons/login.svg";
  document.getElementById("login-logout").innerHTML = "LOGIN";
  document.getElementById("login-logout").setAttribute("onclick", "login()");
  document.getElementById("profile").textContent = username;
  document.getElementById("profileIcon").src = "./assets/icons/operator.svg";

  //reset access level
  configureAccess(username);
  //display message
}

configureAccess(username);

let idleTime = 0; // in seconds
let idleLimit = 300; // in seconds
let isTabActive = true; // Assume the tab is active initially

// Reset the idle timer on any of these events
function resetIdleTimer() {
  if (isTabActive) {
    idleTime = 0; // Reset idle time
    // console.log("Idle time reset.");
  }
}

// Increment the idle time counter every second
setInterval(() => {
  if (isTabActive) {
    idleTime++;
    // console.log("Idle time: ", idleTime);
    if (idleTime >= idleLimit) {
      if (username != "operator") {
        alert(`The ${username} user has been inactive for ${idleLimit/60} min, logging out...`);
        logout();
      }
      idleTime = 0; // Reset idle time
    }
  }
}, 1000); // check every second

// Listen for any of the following events to reset the idle timer
window.addEventListener("mousemove", resetIdleTimer);
window.addEventListener("mousedown", resetIdleTimer);
window.addEventListener("click", resetIdleTimer);
window.addEventListener("scroll", resetIdleTimer);
window.addEventListener("keypress", resetIdleTimer);

// Handle tab visibility change
document.addEventListener("visibilitychange", () => {
  isTabActive = !document.hidden;
  if (isTabActive) {
    resetIdleTimer(); // Reset timer if the tab is active
  }
});
