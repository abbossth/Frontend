let humidity = 0;
var temperature = 0;
var photoResistor = 0;
var soilMoisture = 0;

var waterPumpMotorValue = 0; // false
var servoMotorValue = 0;
var roofMotorValue = 0;

var roofBtnId = document.getElementById("roofBtn");
var servoBtnId = document.getElementById("servoBtn");
var waterBtnId = document.getElementById("waterBtn");
var xyValues = [{ x: humidity, y: temperature }];

const firebaseConfig = {
  apiKey: "AIzaSyAt8-rsXFpMZ_GvI7t3hVCaRu7Yp6oBkVs",
  authDomain: "iot-11733.firebaseapp.com",
  databaseURL: "https://iot-11733-default-rtdb.firebaseio.com",
  projectId: "iot-11733",
  storageBucket: "iot-11733.appspot.com",
  messagingSenderId: "992119481",
  appId: "1:992119481:web:9eeac3f47f749f1342a968",
  measurementId: "G-B52MX722FK",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
// Sensors
var dbHumidity = database.ref("Humid");
var dbTemperature = database.ref("Temperature");
var dbPhotoResistor = database.ref("Light");
var dbSoilMoisture = database.ref("Water");
var dbSoilMoisture = database.ref("Motion");

// Activators
var dbRoofMotorStatus = database.ref("roofMotorStatus");
var dbServoMotorStatus = database.ref("servoMotorStatus");
var dbWaterPumpStatus = database.ref("waterPumpStatus");

// Fetch the data for Sensors
dbHumidity.on("value", function (getdata1) {
  humidity = getdata1.val();
  document.getElementById("humidity_value").innerHTML = humidity;
});

dbTemperature.on("value", function (getdata2) {
  temperature = getdata2.val();
  document.getElementById("temperature_value").innerHTML =
    temperature + "&#8451;";
});

dbPhotoResistor.on("value", function (getdata2) {
  photoResistor = getdata2.val();
  document.getElementById("photo_resistor_value").innerHTML = photoResistor;
});

dbSoilMoisture.on("value", function (getdata2) {
  soilMoisture = getdata2.val();
  document.getElementById("soil_moisture_value").innerHTML = soilMoisture + "%";
});

// Fetch the data for Activators
dbRoofMotorStatus.on("value", function (getdata2) {
  temperature = getdata2.val();
  //document.getElementById('temperature').innerHTML = temp + "&#8451;";
});

dbServoMotorStatus.on("value", function (getdata2) {
  photoResistor = getdata2.val();
  //document.getElementById('photoResistor').innerHTML = temp + "&#8451;";
});

dbWaterPumpStatus.on("value", function (getdata2) {
  soilMoisture = getdata2.val();
  //document.getElementById('soilMoisture').innerHTML = temp + "&#8451;";
});

roofMotor(roofMotorValue);
servoMotor(servoMotorValue);
waterMotor(waterPumpMotorValue);

function roofMotor(value) {
  if (value == 1) {
    roofBtnId.classList.add("btn-success");
    roofBtnId.classList.remove("btn-outline-danger");
    roofBtnId.innerHTML = "ON";
  } else {
    roofBtnId.classList.remove("btn-success");
    roofBtnId.classList.add("btn-outline-danger");
    roofBtnId.innerHTML = "OFF";
  }
}

function servoMotor(value) {
  if (value == 1) {
    servoBtnId.classList.add("btn-success");
    servoBtnId.classList.remove("btn-outline-danger");
    servoBtnId.innerHTML = "ON";
  } else {
    servoBtnId.classList.remove("btn-success");
    servoBtnId.classList.add("btn-outline-danger");
    servoBtnId.innerHTML = "OFF";
  }
}

function waterMotor(value) {
  if (value == 1) {
    waterBtnId.classList.add("btn-success");
    waterBtnId.classList.remove("btn-outline-danger");
    waterBtnId.innerHTML = "ON";
  } else {
    waterBtnId.classList.remove("btn-success");
    waterBtnId.classList.add("btn-outline-danger");
    waterBtnId.innerHTML = "OFF";
  }
}

function onClickRoof() {
  roofValue = !roofMotorValue;
  roofMotor(roofValue);
}

function onClickServo() {
  servoValue = !roofMotorValue;
  servoMotor(servoValue);
}

function onClickWater() {
  waterValue = !roofMotorValue;
  waterMotor(waterValue);
}

// function press() {
//     index++;
//     if (index%2==1) {
//     database.ref('LED').set("1");
//     document.getElementById('led').innerHTML="turn off";
// }
// else {
//     database.ref('LED').set("0");
//     document.getElementById('led').innerHTML="turn on";
// }
// }

/* <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA0vUouXw1ax_9CfdIO55LX0LEdAi0fhpE",
    authDomain: "iot-cw-00011581-6458a.firebaseapp.com",
    databaseURL: "https://iot-cw-00011581-6458a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "iot-cw-00011581-6458a",
    storageBucket: "iot-cw-00011581-6458a.appspot.com",
    messagingSenderId: "602842487625",
    appId: "1:602842487625:web:7c677ff1a91d16bb279898",
    measurementId: "G-B03YWK1WBK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script> */
