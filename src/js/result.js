import { result } from "./answers";
var pattern = localStorage.getItem('Pattern');

document.getElementById("you_diagnosis").classList.add(result[pattern].ilustration);
document.getElementById("typeName").innerHTML = result[pattern].typeName;
document.getElementById("catchCopy").innerHTML = result[pattern].catchCopy;
document.getElementById("text").innerHTML = result[pattern].text;
