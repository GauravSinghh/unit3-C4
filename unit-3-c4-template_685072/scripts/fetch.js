
let getData = async (url)=>{
    let res = await fetch(url);
    let data = await res.json();
   // console.log(data.articles)
  return data;
}

let append = (data)=>{
    data.forEach((el)=>{
        let newsDiv = document.createElement("div")
        newsDiv.style.cursor="pointer"
        newsDiv.setAttribute("class","news")
        newsDiv.addEventListener("click",function(){
            newsitem(el)
        
        })

        let detailsDiv = document.createElement("div")

        let h3 = document.createElement("h3")
        h3.innerText = el.title;

        let p = document.createElement("p")
        p.innerText=el.description;

        let image = document.createElement("img")
        image.src= el.urlToImage;

        detailsDiv.append(h3,p)
        newsDiv.append(image,detailsDiv)
        
        let container = document.getElementById("results")
        container.append(newsDiv)
    })
}
function newsitem(el){
    console.log(el)
    window.location.href="news.html"
    localStorage.setItem("news",JSON.stringify(el))
}


export { getData , append }