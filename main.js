function fullscreen(element) {
  document.getElementById("img1").src = element.src;
  document.getElementById("modal").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
