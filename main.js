var robobustersWeb = document.getElementById("robobustersWeb");
var solarSim = document.getElementById("solarSystem");
var solitaire = document.getElementById("solitaire");
var starcatcher = document.getElementById("starcatcher");
var pictureLab = document.getElementById("pictureLab");
var chessGame = document.getElementById("chessGame");
var strokePredictionApp = document.getElementById("strokePredictionApp");
var bookRecommenderApp = document.getElementById("bookRecommenderApp");
var blackjackGame = document.getElementById("blackjackGame");
var warstoryGame = document.getElementById("warstoryGame");
var bringIndv = document.getElementById("bringIndv");
var bringSolar = document.getElementById("bringSolar");
var bringSol = document.getElementById("bringSol");
var bringStar = document.getElementById("bringStar");
var bringPicLab = document.getElementById("bringPicLab");
var bringChess = document.getElementById("bringChess");
var bringStrokeApp = document.getElementById("bringStrokeApp");
var bringBookRec = document.getElementById("bringBookRec");
var bringBlackjack = document.getElementById("bringBlackjack");
var bringWarstory = document.getElementById("bringWarstory");
var span = document.getElementById("closeRobobustersWeb");
var spanSolar = document.getElementById("closeSolarSystem");
var span1 = document.getElementById("closeSolitaire");
var span2 = document.getElementById("closeStarcatcher");
var spanPicLab = document.getElementById("closePictureLab");
var spanChess = document.getElementById("closeChessGame");
var spanStrokeApp = document.getElementById("closeStrokePredictionApp");
var spanBookRec = document.getElementById("closeBookRecommenderApp");
var spanBlackjack = document.getElementById("closeBlackjackGame");
var spanWarstory = document.getElementById("closeWarstoryGame");
var indvContent = document.querySelector('.indvContent');
var indvThumbnail = document.querySelector('.indvThumbnail');
var body = document.body;
var blur = document.getElementById("");

indvContent.addEventListener('animationend', function () {
  indvThumbnail.classList.add('hoverable');
});

bringIndv.onclick = function () {
  robobustersWeb.style.display = "block";
  
  body.classList.add("no-scroll");
}

bringSolar.onclick = function () {
  solarSim.style.display = "block";
  body.classList.add("no-scroll");
}

bringSol.onclick = function () {
  solitaire.style.display = "block";
  body.classList.add("no-scroll");
}

bringStar.onclick = function () {
  starcatcher.style.display = "block";
  body.classList.add("no-scroll");
}

bringPicLab.onclick = function () {
  pictureLab.style.display = "block";
  body.classList.add("no-scroll");
}

bringChess.onclick = function () {
  chessGame.style.display = "block";
  body.classList.add("no-scroll");
}

bringStrokeApp.onclick = function () {
  strokePredictionApp.style.display = "block";
  body.classList.add("no-scroll");
}

bringBookRec.onclick = function () {
  bookRecommenderApp.style.display = "block";
  body.classList.add("no-scroll");
}

bringBlackjack.onclick = function () {
  blackjackGame.style.display = "block";
  body.classList.add("no-scroll");
}

bringWarstory.onclick = function () {
  warstoryGame.style.display = "block";
  body.classList.add("no-scroll");
}

span.onclick = function () {
  robobustersWeb.style.display = "none";
  body.classList.remove("no-scroll");
}

spanSolar.onclick = function() {
  solarSim.style.display = "none";
  body.classList.remove("no-scroll");
}

span1.onclick = function () {
  solitaire.style.display = "none";
  body.classList.remove("no-scroll");
}

span2.onclick = function () {
  starcatcher.style.display = "none";
  body.classList.remove("no-scroll");
}

spanPicLab.onclick = function () {
  pictureLab.style.display = "none";
  body.classList.remove("no-scroll");
}

spanChess.onclick = function () {
  chessGame.style.display = "none";
  body.classList.remove("no-scroll");
}

spanStrokeApp.onclick = function () {
  strokePredictionApp.style.display = "none";
  body.classList.remove("no-scroll");
}

spanBookRec.onclick = function () {
  bookRecommenderApp.style.display = "none";
  body.classList.remove("no-scroll");
}

spanBlackjack.onclick = function () {
  blackjackGame.style.display = "none";
  body.classList.remove("no-scroll");
}

spanWarstory.onclick = function () {
  warstoryGame.style.display = "none";
  body.classList.remove("no-scroll");
}

window.onclick = function (event) {
  if (event.target == robobustersWeb || event.target == solarSim || event.target == solitaire || 
    event.target == starcatcher || event.target == pictureLab ||
    event.target == chessGame || event.target == strokePredictionApp ||
    event.target == bookRecommenderApp || event.target == blackjackGame ||
    event.target == warstoryGame) {
    robobustersWeb.style.display = "none";
    solarSim.style.display = "none";
    solitaire.style.display = "none";
    starcatcher.style.display = "none";
    pictureLab.style.display = "none";
    chessGame.style.display = "none";
    strokePredictionApp.style.display = "none";
    bookRecommenderApp.style.display = "none";
    blackjackGame.style.display = "none";
    warstoryGame.style.display = "none";
    body.classList.remove("no-scroll");
  }
}

function openIndvWindow() {
  var indvWindow = document.getElementByID("indvWindow");
  indvWindow.classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeIndvWindow() {
  var indvWindow = document.getElementById("indvWindow");
  indvWindow.classList.remove("show");
  document.body.classList.remove("no-scroll");
}

