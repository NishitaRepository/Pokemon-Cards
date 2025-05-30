let main = document.getElementById("main");
let arr =
["https://i.pinimg.com/736x/68/1a/35/681a3525e486a4800641b627e53efd34.jpg",
"https://i.pinimg.com/736x/d9/90/3e/d9903ea6340fd60fc121d9fc911f1526.jpg",
"https://i.pinimg.com/736x/80/9a/ac/809aac8ff44dcc40d1b36c7543fc99d8.jpg",
"https://i.pinimg.com/736x/46/14/2c/46142c7876daa79ca127083df054347c.jpg",
"https://i.pinimg.com/736x/be/9e/75/be9e7515501bf291918ed4afcfe4294b.jpg",
"https://i.pinimg.com/736x/25/b5/0a/25b50a6e6b20aecaa727217b24bec58b.jpg"];
let s = "";
for(let i=1;i<=65;i++){
    let r = Math.floor(Math.random()*arr.length)
    s += `<div class="cards"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;

