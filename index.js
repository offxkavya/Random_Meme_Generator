let img = document.querySelector(".meme img");
let generateBtn = document.querySelector(".generate-btn");

async function randomMemeGenerator(){
    let res = await fetch("https://meme-api.com/gimme");    
    console.log(res);
    let json = await res.json();
    console.log(json);
    let url = json.url;
    console.log(url);
    img.src = url;
}

randomMemeGenerator();

let timer = setInterval(randomMemeGenerator, 7000);

img.addEventListener("mouseover", function(){
    clearInterval(timer);
});

img.addEventListener("mouseleave", function(){
    timer = setInterval(randomMemeGenerator, 7000);
});

generateBtn.addEventListener("click", function() {
    randomMemeGenerator();
    // Reset the timer to avoid immediate auto-refresh after button click
    clearInterval(timer);
    timer = setInterval(randomMemeGenerator, 7000);
});