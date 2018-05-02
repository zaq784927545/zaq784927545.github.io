function  showPic(whichpic) {
 var source = whichpic.getAttribute("href");
 var placeholder = document.getElementById("placeholder");
 placeholder.setAttribute("src",source);
 var text = whichpic.getAttribute("title");
 var description = document.getElementById("description");
window.onload = countBodyChildren;
function showPic(whichpic){
 var source = whichpic.getAttribute("href");
 var placeholder = document.getElmentById("placeholder");
 placeholder.setAttribute("src",source);
 var text = whichpic.getAttribute("title");
 var description = document.getElementById("description");
 description.firstChild.nodeValue = text;
}
