// Function to change the dropdown content based on StepsType value
function changeDropdownContent(StepsType) {

    switch (StepsType) {
        case 0:
            document.getElementById("selectSteps").innerHTML = `
                <a href="#" onclick="selectOption('0')">Step 0: Init</a>
            `;
            break;
        case 1:
            document.getElementById("selectSteps").innerHTML = `
                <a href="#" onclick="selectOption('5')">Step 5: Go to Mother</a>
                <a href="#" onclick="selectOption('4')">Step 4: Go to First Position</a>
                <a href="#" onclick="selectOption('3')">Step 3: Lift Up</a>
                <a href="#" onclick="selectOption('2')">Step 2: Go to position</a>
                <a href="#" onclick="selectOption('1')">Step 1: Lift Down</a>
                <a href="#" onclick="selectOption('0')">Step 0: Init</a>
            `;
            break;
        case 2:
            document.getElementById("selectSteps").innerHTML = `
                <a href="#" onclick="selectOption('5')">Step 5: Go to Mother</a>
                <a href="#" onclick="selectOption('4')">Step 4: Go to First Position</a>
                <a href="#" onclick="selectOption('3')">Step 3: Lift Down</a>
                <a href="#" onclick="selectOption('2')">Step 2: Go to position</a>
                <a href="#" onclick="selectOption('1')">Step 1: Lift Up</a>
                <a href="#" onclick="selectOption('0')">Step 0: Init</a>
            `;
            break;
        default:
            break;
    }
}

function changeTextActualStep(StepsType, ActStep) {
    var steps = [];
    switch (StepsType) {
        case 0:
            steps = [
                "Step 0: Init"
            ];
            break;
        case 1:
            steps = [
                "Step 0: Init",
                "Step 1: Lift Down",
                "Step 2: Go to position",
                "Step 3: Lift Up",
                "Step 4: Go to First Position",
                "Step 5: Go to Mother"
            ];
            break;
        case 2:
            steps = [
                "Step 0: Init",
                "Step 1: Lift Up",
                "Step 2: Go to position",
                "Step 3: Lift Down",
                "Step 4: Go to First Position",
                "Step 5: Go to Mother"
            ];
            break;
        default:
            break;
    }
    var stepsLength = steps.length;
    var stepIndex;
    if (ActStep <= stepsLength) {
        stepIndex = ActStep;
    } else {
        stepIndex = 0;
    }
    document.getElementById("current-step").textContent = steps[stepIndex];

}


function updateActualSteps(){
    changeDropdownContent(Number(TaskNumber));
    changeTextActualStep(Number(TaskNumber),Number(StatusStep));
}

setInterval(updateActualSteps, 1000);