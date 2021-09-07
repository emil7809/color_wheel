"use strict";

window.addEventListener("load", start);

function start(){
    console.log("start");
    document.querySelector("#color_selector").addEventListener("input", chosenColor);
}

function chosenColor() {
    //console.log("chosenColor");
  const HEXvalue = document.querySelector("#color_selector").value;
  const RGBvalue = HEXtoRGB(HEXvalue);
  const HSLvalue = RGBtoHSL(RGBvalue);

  displayColor(HEXvalue);
  displayColorData(HEXvalue, RGBvalue, HSLvalue);
}

function HEXtoRGB(HEX) { 

    let rValue = HEX.substring(1, 3);
    let bValue = HEX.substring(3, 5);
    let gValue = HEX.substring(5, 7);
  
    rValue = parseInt(rValue, 16);
    bValue = parseInt(bValue, 16);
    gValue = parseInt(gValue, 16);
  
    const RGBvalue = {
      r: rValue,
      b: bValue,
      g: gValue,
    };
  
   
    return RGBvalue;
    
}

function RGBtoHSL(RGBvalue) {

    let r = RGBvalue.r;
    let g = RGBvalue.g;
    let b = RGBvalue.b;
    
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    const HSLvalue = {
        h: Math.round(h),
        s: Math.round(s),
        l: Math.round(l),
      };
      return HSLvalue;

}




function displayColor(color) {
    //console.log("displayColor");
    document.querySelector("#color_wheel").style.backgroundColor = color;
}

function displayColorData(HEX, RGB, HSL) {
     
    document.querySelector("#HEX_data span").textContent = HEX;
    document.querySelector("#RGB_data span").textContent = `${RGB.r}, ${RGB.g}, ${RGB.b}`;
    document.querySelector("#HSL_data span").textContent = `${HSL.h}, ${HSL.s}, ${HSL.l}`;
}