let $table = document.getElementById("table");
// console.log($table);
// let $testBtn = document.getElementById("testBtn");
// console.log($testBtn);

// $testBtn.addEventListener("click", waterLevel);

function renderAddKettle() {
  const index = kettleArr.length - 1;
  hjs = 0;
  tjs = 24;
  $table.innerHTML += ` <div id="system${index}" class="system">
  <img id="kettlePic" class="kettle" src="kettle.jpeg" alt="" />

 

  <img onclick="kettleArr[event.target.id[7]].heat()" id="heatBtn${index}"  class="heatBtn" src="button.jpeg" alt="" />

  <div id="water${index}" class="water" style="height: ${0}vh; top: ${0}vh;" ></div>
</div>`;
}

let hjs = 0;

let tjs = 24;
function renderWaterLevel() {
  hjs = kettleArr[kettleArr.length - 1].waterTank * 0.26;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.height = `${hjs}vh`;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.top = `${tjs}vh`;
  // hhh += 2.6;
  if (tjs > 4) {
    tjs -= 2.6;
  }
}

let check = 0;
function renderHeat() {
  check = hjs;
  hjs = kettleArr[event.target.id[7]].waterTank * 0.26;
  tjs += check - hjs + 2.6;

  document.getElementById(
    `water${event.target.id[7]}`
  ).style.height = `${hjs}vh`;
  document.getElementById(`water${event.target.id[7]}`).style.top = `${tjs}vh`;
  hjs = 0;
  tjs = 24;

  document.getElementById(
    `system${event.target.id[7]}`
  ).innerHTML += `<img class="steam" src="steam.jpeg" alt="">`;
}

////////////////////////////////////////
let thermoW = 0;

function renderThermoKettle() {
  thermoW = 24 * kettleArr.length - 22.5;
  let lineW = thermoW + 0.8;

  const index = kettleArr.length - 1;
  hjs = 0;
  tjs = 24;

  $table.innerHTML += ` <div id="system${index}" class="system">
  <img id="kettlePic" class="kettle" src="kettle.jpeg" alt="" />

 

  <img onclick="kettleArr[event.target.id[7]].heat()" id="heatBtn${index}"  class="heatBtn" src="button.jpeg" alt="" />

  <img class="thermo" style="position: absolute; left: ${thermoW}vw;" src="thermo.jpeg" alt="" /> 

  <div id="redLine${index}" class="redLine" style="position: absolute; left: ${lineW}vw; height:0vh  "></div>

  <div id="water${index}" class="water" style="height: ${0}vh; top: ${0}vh;" ></div>
</div>`;
}

hjs = 0;

tjs = 24;

// media query
const mediaQuery = window.matchMedia("(max-width:450px)");

let ten = 10;

if (mediaQuery.matches) {
  hjs = hjs * 0.6;
  tjs = 10;
}

function renderWaterLevel() {
  hjs = kettleArr[kettleArr.length - 1].waterTank * 0.26;

  if (mediaQuery.matches) {
    hjs = hjs * 0.6;
    tjs = ten;
    ten = ten - 1.5;
  }

  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.height = `${hjs}vh`;
  document.getElementById(
    `water${kettleArr.length - 1}`
  ).style.top = `${tjs}vh`;
  // hhh += 2.6;
  if (tjs > 4) {
    tjs -= 2.6;
  }
}

check = 0;
function renderHeatT() {
  check = hjs;
  hjs = kettleArr[event.target.id[7]].waterTank * 0.26;
  tjs += check - hjs + 2.6;

  document.getElementById(
    `water${event.target.id[7]}`
  ).style.height = `${hjs}vh`;
  document.getElementById(`water${event.target.id[7]}`).style.top = `${tjs}vh`;
  hjs = 0;
  tjs = 24;

  document.getElementById(
    `system${event.target.id[7]}`
  ).innerHTML += `<img class="steam" src="steam.jpeg" alt="">`;

  document.getElementById(`redLine${event.target.id[7]}`).style.height = "30vh";
}

//difference of 24 vw