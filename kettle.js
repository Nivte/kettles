//html variables

let $fillWaterBtn = document.getElementById("fillWaterBtn");

//variables

// let color = "";
// let waterTank = 0;
// let temperature = 25;
let kettleArr = [];

function addKettle() {
  kettleArr.push(new Kettle());
  renderAddKettle();
  i = 1.5;
}

// place to start a class

class Kettle {
  //constructor

  constructor(color) {
    this.color = color;
    this.waterTank = 0;
    this.temperature = 25;
    this.isBoiling = false;
  }

  //kettle.prototype functions

  fillWater() {
    if (this.waterTank < 85 && this.isBoiling === false) {
      console.log((this.waterTank += 10));
      console.log(kettleArr);
      renderWaterLevel();

      // let index = 0;
      console.log(kettleArr.length);
    } else {
      i = 1.5;
    }
  }

  heat() {
    if (!this.isBoiling) {
      if (this.waterTank > 25) {
        this.temperature = 100;

        this.waterTank = this.waterTank * 0.8;

        console.log(kettleArr);
        renderHeat();
        this.isBoiling = true;
        i = 1.5;
      } else {
        alert("fill more water");
      }
    }
  }
}
debugger
// let newKettle = new kettle("silver");

function getKettles() {
  console.log(kettleArr);
}
getKettles();

$fillWaterBtn.addEventListener("click", () =>
  kettleArr.length > 0
    ? kettleArr[kettleArr.length - 1].fillWater()
    : alert("you have to open the package first")
);

// $createRingBtn.addEventListener("click", addRingKettle);

// let rId = 0;

// let ringKettleArr = [];
// function addRingKettle() {
//   ringKettleArr.push({ ringKettle1, rId });
//   rId++;
//   console.log(ringKettleArr);
// }

// ringKettle.prototype.ring = function ring() {
//   if (temperature > 95) {
//     this.bell = true;
//   }
// };

// function ringKettle(color) {
//   kettle.call(this);

//   let bell;
//   this.bell = false;
// }

// function ringKettle(color) {
//   kettle.call(this);

//   let bell;
//   this.bell = false;
// }

// ring function

// creating instances for example

// let newKettle = new kettle("blue");
// let ringKettle1 = new ringKettle("blue");
// console.log(ringKettle1);
// console.log(newKettle);

function addThermoKettle() {
  if (kettleArr.length < 4) {
    kettleArr.push(new ThermoKettle());
    renderThermoKettle();
    console.log(kettleArr);
    i = 1.5;
  } else {
    alert("only for the top line");
  }
}

// place to start a class

class ThermoKettle extends Kettle {
  //constructor

  constructor(color) {
    super();
    this.thermometer = "down";
  }

  //kettle.prototype functions

  heat() {
    if (!this.isBoiling) {
      if (this.waterTank > 25) {
        this.temperature = 100;

        this.waterTank = this.waterTank * 0.8;

        console.log(kettleArr);
        renderHeatT();
        this.isBoiling = true;
        i = 1.5;
      } else {
        alert("fill more water");
      }
    }

    this.thermometer = "up";
  }
}

// let newKettle = new kettle("silver");

function getKettles() {
  console.log(kettleArr);
}
getKettles();
