// Ude Import export (MANDATORY)

import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let arrData = JSON.parse(localStorage.getItem("news"))||[]

let title = document.createElement("h3")
title.innerText=arrData.title;

let desc = document.createElement("p")
desc.innerText=arrData.description;

let image = document.createElement('img');
image.src= arrData.urlToImage;

let div = document.getElementById('detailed_news')
div.append(image, title, desc)