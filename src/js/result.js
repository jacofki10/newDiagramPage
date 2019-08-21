import { result } from "./answers";
var pattern = localStorage.getItem('Pattern');

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

// var li = document.getElementById('you_diagnosis').className;
// alert(li);

// var name = $(result[pattern].ilustration).css('background-image');
// console.log(name);
// var image = li.style('background-image');
// console.log(image);
$("#fb_share_btn").click(function (event) {
  event.preventDefault();
  window.open("https://www.facebook.com/dialog/feed?app_id=2344042465687322&display=page&redirect_uri=https://moshitabe.com/&picture=https://moshitabe.com/wp-content/uploads/2019/08/top_0103.jpg");
});
$("#line-this-post").click(function (event) {
  event.preventDefault();
  window.open("https://social-plugins.line.me/lineit/share?url=https://moshitabe.com/&text=" + result[pattern].typeName + "");
});
