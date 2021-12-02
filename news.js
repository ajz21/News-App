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
let storyUrl =
    "https://newsapi.org/v2/everything?q=op-ed&apiKey=b65e82c1ab1b4e768a273f36de34557d";

let apiKey = "b65e82c1ab1b4e768a273f36de34557d";
let searchItem = "bitcoin";
let country = "in";
let url = `https://newsapi.org/v2/everything?q=editorials&sortBy=popularity&apiKey=${apiKey}`;

let headLineUrl = `https://newsapi.org/v2/top-headlines?
country=${country}&
apiKey=${apiKey}`;

let headLineUrl2 = `https://newsapi.org/v2/top-headlines?country=in&
apiKey=${apiKey}`;

console.log("connected");

let headline_text = document.getElementById("head-text"),
    headline_image = document.getElementById("head-img");
let newsLaod = document.getElementById("newsLoad");

// console.log(headline_image);
// headline_image.src = "mike.jpg";

let Nname = document.getElementById("name");
let side_news = document.getElementsByClassName("newsChild");

let i = 0;
let loadHead = () => {
    fetch(headLineUrl2)
        .then((response) => response.json())
        .then((data) => {
            (headline_text.innerText = data.articles[0].title),
                (headline_image.src = data.articles[0].urlToImage),
                (headline_text.href = data.articles[0].url);
            for (key of side_news) {
                (key.firstElementChild.src = data.articles[i].urlToImage),
                    (key.lastElementChild.href = data.articles[i].url),
                    (key.lastElementChild.innerText = data.articles[i].title);
                i++;
            }
        });
};

let author = document.getElementsByClassName("author");
// console.log(author[0]);
// loadHead();
let j = 0;
let loadnews = () => {
    let html = "";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.articles);
            // for(let r in data.articles){
            // console.log(data.articles[i].author != null);
            // console.log(data.articles[r].urlToImage != null);}
            // for (let item of data.articles) {
            //     if (item.urlToImage != null) {
            //         html += `<div class="news-random news-random-style"><img src="${item.urlToImage}" alt=""><div class="news-roundup"><a href="${item.url}" target="_blank" class="heading-3">${item.title}</a></div></div>`;
            //     }
            // }
            for (let york of news_slides) {
                if (
                    data.articles[i].urlToImage != null &&
                    data.articles[i].author != null
                ) {
                    console.log(data.articles[i]);
                    (york.firstElementChild.src = data.articles[i].urlToImage),
                        (york.lastElementChild.innerText =
                            data.articles[i].author),
                        (author[i].href = data.articles[i].url),
                        (author[i].innerText = data.articles[i].title);

                    // j++;
                }
                i++;
            }
            // newsLaod.innerHTML = html;
        });
};

let loadStories = () => {
    fetch(storyUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.articles);
        });
};

loadStories();
let news_slides = document.getElementsByClassName("newsSlide");

// for (let york of news_slides) {
    //     console.log(york.firstElementChild);
    //     console.log(york.lastElementChild);
    // console.log(york.lastElementChild.innerText);
    // console.log(york.lastElementChild.href);
    // console.log(york.lastElementChild.lastElementChild.innerText);
// }
// console.log(news_slides.firstElementChild);
// console.log(news_slides.lastElementChild);
Nname.addEventListener("click", loadnews);
