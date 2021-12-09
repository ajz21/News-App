let apiKey = "b65e82c1ab1b4e768a273f36de34557d";

// intializing the urls
let urledit = `https://newsapi.org/v2/everything?
q=opinion editorial&
sortBy=relevency&
apiKey=${apiKey}`;

let storyUrl = `https://newsapi.org/v2/everything?
q=stories&
sortBy=popularity&
apiKey=${apiKey}`;

let sideUrl = `https://newsapi.org/v2/everything?
q=sports&
sortBy=popularity&
apiKey=${apiKey}`;

let sideUrl2 = `https://newsapi.org/v2/everything?
q=sports&
sortBy=relevency&
apiKey=${apiKey}`;

let headLineUrl2 = `https://newsapi.org/v2/top-headlines?
country=in&
apiKey=${apiKey}`;

// assiging avriable values
let newsLaod = document.querySelector(".news-random2"),
    sideLoad = document.querySelector("#newsLoad"),
    headContainer = document.querySelector(".newsContent"),
    breaking = document.getElementById("breaking"),
    sideHeadLine = document.getElementById("sidenews"),
    newsLoadContainer = document.querySelector(".newsLoadContainer"),
    newsContainer = document.querySelector(".newsContainer"),
    newsContainer2 = document.querySelector(".newsContainer2"),
    moreBtn = document.getElementById("more"),
    coursel = document.querySelector(".coursel");

// function for loading headline and Breaking news
let loadHead = (url) => {
    let headScript = "";
    let sideHeadSrcipt = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // fetching the headlines
            if (
                data.articles[0].urlToImage != null &&
                data.articles[0].title != null
            ) {
                headScript += `
                <img id="head-img" src="${data.articles[10].urlToImage}" alt=""/>
                <a href="${data.articles[10].url}" target="_blank" class="head-lines" id="head-text" style="font-size: 27px;">${data.articles[10].title}</a>`;
            }

            // fetching the side breakings
            let arr = [];

            // storing the objects which has url and titles
            for (let item of data.articles) {
                if (
                    (item.urlToImage && item.title && item.url != null) ||
                    undefined
                ) {
                    arr.push(item);
                }
            }

            // iterating through the array of articles
            for (let i = 1; i < 5; i++) {
                sideHeadSrcipt += `
                <div class="newsChild">
                <img src="${arr[i].urlToImage}" alt=""/>
                <a href="${arr[i].url}" target="_blank" class="head-lines">
                ${arr[i].title}</a>
                </div>`;
            }

            // adding html dynamically to the dom
            breaking.innerHTML = headScript;
            sideHeadLine.innerHTML = sideHeadSrcipt;
        });
};

// function to fetch the editorial page
let loadEd = (url) => {
    let edScript = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            for (let i of data.articles) {
                // checking the articles with author and image
                if (i.urlToImage != null && i.author != null) {
                    edScript += `
                    <div class="newsSlide newsCard">
                    <img src="${i.urlToImage}" alt=""/>
                    <a href="${i.url}" target="_blank" class="head-lines author">${i.title}</a>
                    <p>${i.author}</p>
                    </div>`;
                }
            }

            coursel.innerHTML = edScript;
        });
};

// funciton to load stories
let loadStories = (url) => {
    let script = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // adding html dynamically as the main stories and inserting to the newsLaod container
            for (let item of data.articles) {
                if (item.urlToImage != null && item.author != null) {
                    script += `
                    <div class="news-random news-random-2">
                    <img src="${item.urlToImage}" alt="">
                    <p class="head-lines head-lines-of-roundup">${item.content}</p>
                    <p style="opacity: 70%; font-size: 22px;">${item.author}</p>
                    <a href = ${item.url} target="_blank" class="read-shots">Read More</a>
                    </div>`;
                }
            }
            newsLaod.innerHTML = script;
        });
};

// function to load side stories
let sideScript = "";

let loadSideStories = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // adding html dynamically as the side stories at the bottom
            for (let item of data.articles) {
                if (item.urlToImage != null && item.title != null) {
                    sideScript += `
                    <div class="news-random ">
                    <img src="${item.urlToImage}" alt="">
                    <div class="news-roundup">
                    <a href="${item.url}" target="_blank" class="heading-3">${item.title}</a>
                    </div>
                    </div>`;
                }
            }
            sideLoad.innerHTML = sideScript;
        });
};

// declaring the index
let index = 0;

let next = document.getElementById("nextBtn");
let pre = document.getElementById("preBtn");


// function to move froward in news coursel
let slide = () => {
    pre.classList.toggle("nextBtn", true);
    if (index < coursel.children.length - 3) {
        index++;
        coursel.style.transform = "translateX(" + index * -34 + "%)";
    } else {
        index = 0;
    }
};


// function to move backwards in coursel
pre.addEventListener("click", () => {
    if (index != 0) {
        index--;
        coursel.style.transform = "translateX(" + index * -34 + "%)";
    } else {
    }
});

// addeventlistener on next btn
next.addEventListener("click", slide);

// navbar
const specificNews = (searchItem) => {

    let spcUrl = `https://newsapi.org/v2/everything?q=${searchItem}&sortBy=popularity&apiKey=${apiKey}`;

    let html = "";

    fetch(spcUrl)
        .then((response) => response.json())
        .then((data) => {
            for (let item of data.articles) {
                if (
                    item.author &&
                    item.urlToImage &&
                    item.publishedAt != null
                ) {
                    html += `
                    <div class="news-section-cards">
                    <img src="${item.urlToImage}" alt="">
                    <a href="${
                        item.url
                    }" target="_blank" style="text-align: center;">${
                        item.title
                    }</a>
                    <p style="opacity:80%;">${item.author}</p>
                    <p style="opacity:70%;">${
                        item.publishedAt.split("T")[0]
                    }</p>
                    </div>`;
                }
            }
            newsContainer2.style.display = "none";
            newsContainer.innerHTML = html;
            newsContainer.classList.add("newsContainer-grid");
        });
};


// home button to return to the home page after toggling through sections

const home = () => {
    // changing the display of the home news container
    newsContainer2.style.display = "flex";
    newsContainer.classList.remove("newsContainer-grid");
};

// more button to see more news at the end

moreBtn.addEventListener("click", () => {
    newsLoadContainer.style.overflow = "visible";
    moreBtn.style.display = "none";
    loadSideStories(sideUrl2);
});

// calling the function to load the home page

// funciton calling the head lines and brakings
loadHead(headLineUrl2);

// funciton calling editorials
loadEd(urledit);

// function calling stories and side stories
loadStories(storyUrl);
loadSideStories(sideUrl);
