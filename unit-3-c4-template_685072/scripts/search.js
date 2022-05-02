// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";
document.getElementById('navbar').innerHTML=navbar();
import { getData, append } from "./fetch.js";
let search = document.querySelector("#search_input")


let getNews = ()=>{
    let value = JSON.parse(localStorage.getItem("value"))||search.value
    let url = `https://masai-mock-api.herokuapp.com/news?q=${value}`;
    
    getData(url).then((res)=>{
        append(res.articles)
    })

}
search.addEventListener("keydown",function (event){
   
    if(event.key==="Enter"){
        event.preventDefault()
      getNews()
    }
})
getNews()