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

  <div id="water${index}" class="water" ></div>
</div>`;
}

const mediaQuerySmall = window.matchMedia("(max-width:450px)");
const mediaQueryBig = window.matchMedia("(min-width:450px)");

if (mediaQueryBig.matches) {
  let hjs = 0;
  let tjs = 24;
}

let i = 1.5;
function renderWaterLevel() {
  if (mediaQuerySmall.matches) {
    hjs = kettleArr[kettleArr.length - 1].waterTank * 0.16;
  }

  // if (mediaQuerySmall.matches) {

  //   if (i<2) {
  //     tjs =10
  //     i++
  // }
  // tjs-=3
  // }

  if (mediaQueryBig.matches) {
    hjs = kettleArr[kettleArr.length - 1].waterTank * 0.26;
    // console.log (hjs)
    // console.log (tjs)
  }

  if (mediaQuerySmall.matches) {
    if (i < 2) {
      tjs = 10;
      i++;
    }
  }

  let watered = document.getElementById(`water${kettleArr.length - 1}`);

  watered.style.height = `${hjs}vh`;
  watered.style.top = `${tjs}vh`;
  // hhh += 2.6;

  if (mediaQueryBig.matches) {
    if (tjs > 4) {
      tjs -= 2.6;
    }
  }

  if (mediaQuerySmall.matches) {
    if (tjs > -3) {
      tjs -= 1.6;
      console.log(tjs);
    }
  }
}

let check;
function renderHeat() {
  check = hjs;
  console.log(hjs);

  if (mediaQueryBig.matches) {
    hjs = kettleArr[event.target.id[8]? event.target.id[7]+event.target.id[8] : event.target.id[7]].waterTank * 0.26;
    tjs += check - hjs + 2.6;
  }

  if (mediaQuerySmall.matches) {
    hjs = kettleArr[event.target.id[7]].waterTank * 0.16;
    tjs += check - hjs + 1.6;
  }

  let boiled = document.getElementById(`water${event.target.id[7]}`);

  boiled.style.height = `${hjs}vh`;
  boiled.style.top = `${tjs}vh`;
  hjs = 0;
  tjs = 24;

  document.getElementById(
    `system${event.target.id[7]}`
  ).innerHTML += `<img class="steam" src="steam.jpeg" alt="">`;
}

////////////////////////////////////////
let thermoW = 0;

function renderThermoKettle() {
  if (mediaQueryBig.matches) {
    thermoW = 24 * kettleArr.length - 22.5;
  }

  if (mediaQuerySmall.matches) {
    thermoW = 27 * kettleArr.length - 24.5;
  }

  let lineW = thermoW + 0.8;

  if (mediaQuerySmall.matches) {
    lineW = thermoW + 1.6;
  }

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
// const mediaQuery = window.matchMedia("(max-width:450px)");

// let ten = 10;

// if (mediaQuery.matches) {
//   hjs = hjs * 0.6;
//   tjs = 10;
// }

check = 0;
function renderHeatT() {
  check = hjs;
  console.log(hjs);

  if (mediaQueryBig.matches) {
    hjs = kettleArr[event.target.id[7]].waterTank * 0.26;
    tjs += check - hjs + 2.6;
  }

  if (mediaQuerySmall.matches) {
    hjs = kettleArr[event.target.id[7]].waterTank * 0.16;
    tjs += check - hjs + 1.6;
  }

  let boiledT = document.getElementById(`water${event.target.id[7]}`);

  boiledT.style.height = `${hjs}vh`;
  boiledT.style.top = `${tjs}vh`;
  hjs = 0;
  tjs = 24;

  document.getElementById(
    `system${event.target.id[7]}`
  ).innerHTML += `<img class="steam" src="steam.jpeg" alt="">`;

  if (mediaQueryBig.matches) {
    document.getElementById(`redLine${event.target.id[7]}`).style.height =
      "30vh";
  }
  if (mediaQuerySmall.matches) {
    document.getElementById(`redLine${event.target.id[7]}`).style.height =
      "21vh";
  }
}

//difference of 24 vw

// function renderWaterLevel() {
//   hjs = kettleArr[kettleArr.length - 1].waterTank * 0.26;
//   document.getElementById(
//     `water${kettleArr.length - 1}`
//   ).style.height = `${hjs}vh`;
//   document.getElementById(
//     `water${kettleArr.length - 1}`
//   ).style.top = `${tjs}vh`;
//   // hhh += 2.6;
//   if (tjs > 4) {
//     tjs -= 2.6;
//   }
// }
