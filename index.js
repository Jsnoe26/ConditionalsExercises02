let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (crewStatus === "true") {
    console.log("Crew Ready");
} else { 
  console.log("Crew Not Ready");
}
if (computerStatusCode === "200") {
  console.log("Please Stand By. Computer Is Rebooting");
} else if (computerStatusCode === "400") {
  console.log("Success Computer Online!");
} else {
  console.log("ALERT: Computer offline!");
}




