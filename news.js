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
let url = `https://newsapi.org/v2/everything?q=${searchItem}&apiKey=${apiKey}`;

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

let i = 1;
let loadHead = () => {
    fetch(headLineUrl2)
        .then((response) => response.json())
        .then((data) => {
            (headline_text.innerText = data.articles[0].title),
                (headline_image.src = data.articles[0].urlToImage),
                (headline_text.href = data.articles[0].url);
            for (key of side_news) {
                (key.firstElementChild.src = data.articles[i].urlToImage),
                    (key.lastElementChild.innerText = data.articles[i].title);
                i++;
            }
        });
};

let side_news = document.getElementsByClassName("newsChild");

// console.log(side_news.length);
// for(keys of side_news){
//     console.log(keys.firstElementChild);
//     console.log(keys.lastElementChild);
// }
// for(item in side_news){
//     console.log(item);
// }

loadHead();
let loadnews = () => {
    // fetch(url)
    // .then((response)=> response.json())
    // .then((data) => {
    //     headline_image.src = data.articles[0].urlToImage;
    // });
    let html = "";

    fetch(headLineUrl)
        .then((response) => response.json())
        .then((data) => {
            for (let item of data.articles) {
                if(item.urlToImage != null){
                html += `<div class="news-random news-random-style"><img src="${item.urlToImage}" alt=""><div class="news-roundup"><a href="${item.url}" target="_blank" class="heading-3">${item.title}</a></div></div>`;
            }}
    newsLaod.innerHTML = html;
        });

    
};

Nname.addEventListener("click", loadnews);
