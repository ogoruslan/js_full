import "./style.css";
import logo from "./assets/images/logo.png";
import _ from "lodash";

console.log(_.capitalize("webpack works"));
console.log("Webpack works!");

const img = document.createElement("img");

img.src = logo;
img.alt = "Logo";
img.width = 300;

document.body.appendChild(img);
