// b65e82c1ab1b4e768a273f36de34557d

/* `https://newsapi.org/v2/everything? 
    q=${keyword}& 
    from=${this.date}
    sortBy={sort}& 
    apiKey=${myKey}`;*/

/* `https://newsapi.org/v2/top-headlines?
    country=${country}&
    apiKey=${myKey}`*/

/*`https://newsapi.org/v2/top-headlines? 
   sources=${source}& 
   apiKey=${myKey}`*/

// https://newsapi.org/v2/everything?q=${searchItem}&apiKey=b65e82c1ab1b4e768a273f36de34557d


let apiKey = "b65e82c1ab1b4e768a273f36de34557d";
let searchItem = "bitcoin";
let country = "in";

let url = `https://newsapi.org/v2/everything?q=editorials&sortBy=popularity&apiKey=${apiKey}`;
let storyUrl = `https://newsapi.org/v2/everything?q=op-ed&apiKey=${apiKey}`;
let sideUrl = `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`;
let headLineUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
let headLineUrl2 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;

console.log("connected");

let headline_text = document.getElementById("head-text"),
    headline_image = document.getElementById("head-img"),
    newsLaod = document.querySelector(".news-random2"),
    sideLoad = document.querySelector("#newsLoad"),
    news_slides = document.getElementsByClassName("newsSlide"),
    Nname = document.getElementById("name"),
    side_news = document.getElementsByClassName("newsChild"),
    author = document.getElementsByClassName("author");

let headContainer = document.querySelector(".newsContent");
let breaking = document.getElementById("breaking");
let headScript = "";

// <div id="breaking" class="newsCard"></div>

let loadHead = () => {
    fetch(headLineUrl2)
        .then((response) => response.json())
        .then((data) => {
            if (
                data.articles[0].urlToImage != null &&
                data.articles[0].title != null
            ) {
                headScript += `
                <img id="head-img" src="${data.articles[0].urlToImage}" alt=""/>
                <a href="${data.articles[0].url}" target="_blank" class="head-lines" id="head-text" style="font-size: 27px;">${data.articles[0].title}</a>`;
            }
            breaking.innerHTML = headScript;

            
        });
};

// loadHead();
let loadnews = () => {
    let html = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {});
};

let script = "";

let loadStories = () => {
    fetch(storyUrl)
        .then((response) => response.json())
        .then((data) => {
            for (let item of data.articles) {
                if (item.urlToImage != null && item.author != null) {
                    script += `<div class="news-random news-random-2"><img src="${item.urlToImage}" alt=""><p class="head-lines head-lines-of-roundup">${item.content}</p><p style="opacity: 70%; font-size: 22px;">${item.author}</p><a href = ${item.url} target="_blank" class="read-shots">Read More</a>
                     </div>`;
                }
            }
            newsLaod.innerHTML = script;
        });
};

let sideScript = "";
let loadSideStories = () => {
    fetch(sideUrl)
        .then((response) => response.json())
        .then((data) => {
            for (let item of data.articles) {
                // console.log(item);
                if (item.urlToImage != null && item.title != null) {
                    sideScript += `<div class="news-random "><img src="${item.urlToImage}" alt=""><div class="news-roundup"><a href="${item.url}" target="_blank" class="heading-3">${item.title}</a></div></div>`;
                }
            }
            sideLoad.innerHTML = sideScript;
        });
};

// loadStories();
// loadSideStories();
// loadHeadline();
// loadBreaking();
// loadEditorials();
// loadBynational();
// loadByinternational();
// loadBycovid();
// loadByBusiness();
// loadBypolitics();
// loadBySports();


Nname.addEventListener("click", loadnews);
