function fullscreen(element) {
  document.getElementById("img").src = element.src;
  document.getElementById("popup").style.display = "block";
  let caption = document.getElementById("sub__heading");
  if (element.alt) {
    caption.innerHTML = element.alt;
  } else {
    caption.innerHTML = "No caption provided";
  }
}
