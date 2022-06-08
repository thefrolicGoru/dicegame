var randomNumber1 = Math.floor((Math.random()*6)+1);
var png = "dice"+randomNumber1+".png";
var png_src = "images/"+png;
var image1=document.querySelectorAll("img")[0].setAttribute("src",png_src);

var randomNumber2 = Math.floor((Math.random()*6)+1);
var png2 = "dice"+randomNumber2+".png";
var png_src2 = "images/"+png2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",png_src2);

if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerText = "🚩 Player1 win";
else if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerText = "Player2 win 🚩";
else{document.querySelector("h1").innerText = "It's a draw";}
