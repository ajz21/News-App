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

console.log("connected");

let headline_text = document.getElementById("breaking"),
    headline_image = document.getElementById("head-img");
    let newsLaod = document.getElementById("newsLoad");

// console.log(headline_image);
// headline_image.src = "mike.jpg";

let Nname = document.getElementById("name");

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
