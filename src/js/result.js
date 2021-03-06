import { result } from "./answers";
var pattern = localStorage.getItem('Pattern');
import "./../css/style.scss";

document.getElementById("you_diagnosis").classList.add(result[pattern].ilustration);
document.getElementById("typeName").innerHTML = result[pattern].typeName;
document.getElementById("catchCopy").innerHTML = result[pattern].catchCopy;
document.getElementById("text").innerHTML = result[pattern].text;

//twitter button share
$("#tweet-this-post").click(function (event) {
  event.preventDefault();
  window.open("http://twitter.com/intent/tweet?text=" + result[pattern].typeName + "&via=DiegoArnes&", "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
});

//Facebook button share
// var FacebookImg = $('#you_diagnosis').css('background-image');
// img = FacebookImg.replace(/(url\(|\)|")/g, '');
// $("#fb_share_btn").click(function (event) {
//   event.preventDefault();
//   window.open("https://www.facebook.com/dialog/feed?app_id=2344042465687322&display=page&redirect_uri=https://moshitabe.com/&picture=" + FacebookImg + "");
// });

//Line button share
$("#line-this-post").click(function (event) {
  event.preventDefault();
  window.open("https://social-plugins.line.me/lineit/share?url=https://moshitabe.com/&text=" + result[pattern].typeName + "");
});

//qrcode
var QRCode = require('qrcode');
var canvas = document.getElementById('canvas');

QRCode.toCanvas(canvas, 'https://sky-link.co.jp/', {
  color: {
    dark: '#000000',  // Black dots
    light: '#0000' // Transparent background
  },
  width: 400,
  margin: 6,
  scale: 6
}, function (error) {
  if (error) console.error(error)
  console.log('success!');
})

$("#testCode").text(document.cookie);
