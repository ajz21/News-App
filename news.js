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

let url = `https://newsapi.org/v2/everything?q=editorial&sortBy=relevency&apiKey=${apiKey}`;
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
let sideHeadLine = document.getElementById("sidenews");
let coursel = document.querySelector(".coursel");

let headScript = "";
let sideHeadSrcipt = "";

// function for loading headline and Breaking news
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

            for (let i = 1; i < 5; i++) {
                sideHeadSrcipt += `<div class="newsChild">
                <img src="${data.articles[i].urlToImage}" alt=""/><a href="${data.articles[i].url}" target="_blank" class="head-lines">${data.articles[i].title}</a>
            </div>`;
            }

            breaking.innerHTML = headScript;
            sideHeadLine.innerHTML = sideHeadSrcipt;
        });
};

let loadEd = () => {
    let edScript = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (let i of data.articles) {
                if (i.urlToImage != null && i.author != null) {
                    edScript += `<div class="newsSlide newsCard">
                <img src="${i.urlToImage}" alt=""/>
                <a href="${i.url}" target="_blank" class="head-lines author">${i.title}</a>
                <p>${i.author}</p>
            </div>`;
                }
            }
            coursel.innerHTML = edScript;
        });
};

let script = "";

// funciton to load stories
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

// function to load side stories
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

let index = 0;

let next = document.getElementById("nextBtn");
let pre = document.getElementById("preBtn");

let slide = () => {
    pre.classList.toggle("nextBtn", true);
    if (index < coursel.children.length - 3) {
        index++;
        coursel.style.transform = "translateX(" + index * -34 + "%)";
    } else {
        index = 0;
    }
};
pre.addEventListener("click", () => {
    if (index != 0) {
        index--;
        coursel.style.transform = "translateX(" + index * -34 + "%)";
    } else {
        // index =
    }
});

next.addEventListener("click", slide);
// loadStories();
// loadSideStories();
// loadHead();
// loadBreaking();
// loadEd();
// loadEditorials();
// loadBynational();
// loadByinternational();
// loadBycovid();
// loadByBusiness();
// loadBypolitics();
// loadBySports();

// Nname.addEventListener("click", loadnews);
