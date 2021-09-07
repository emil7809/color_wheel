"use strict";

window.addEventListener("load", start);

function start(){
    console.log("start");
    document.querySelector("#color_selector").addEventListener("input", chosenColor);
}

function chosenColor() {
    console.log("chosenColor");
  const HEXvalue = document.querySelector("#color_selector").value;
  //const RGBvalue = HEXtoRBG(HEXvalue);
  //const HSLvalue = RBGtoHSL(RGBvalue);

  displayColor(HEXvalue);
  //displayColorData(HEXvalue, RGBvalue, HSLvalue);
}

function HEXvalues() {

}

function RGBvalues() {
    
}

function HSLvalues() {
    
}

function displayColor(color) {
    console.log("displayColor");
    document.querySelector("#color_wheel").style.backgroundColor = color;
}

function displayColorData() {

}