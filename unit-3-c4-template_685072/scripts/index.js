// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()




let country= document.getElementById("sidebar").children;
console.log(country)

for(let i of country)
{
    
    i.addEventListener('click',function(){
        myf(i.id)
    })
        console.log(i.id)
  
 
}

function myf(i){
   
   localStorage.setItem("cc",JSON.stringify(i))
   window.location.reload()
   
   
}
let url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
let code= JSON.parse(localStorage.getItem("cc"))||"in"
if(code!==undefined)
{
    url =`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`
    getData(url).then((res)=>{
        append(res.articles)
    })
}



import { getData, append } from "../scripts/fetch.js"

getData(url).then((res)=>{
    append(res.articles)
})

let search = document.querySelector("#search_input")
search.addEventListener("keydown",function (event){
   let value = search.value;
    if(event.key==="Enter"){
        event.preventDefault()
        window.location.href="search.html"
      
        localStorage.setItem("value",JSON.stringify(value))
    }
})