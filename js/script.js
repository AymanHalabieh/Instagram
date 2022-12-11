var loading = document.getElementById("loading"),
  image1 = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"],
  imagediv = document.getElementById("image"),
  counter = 0,
  btn = document.getElementById("login");

setTimeout(() => {
  loading.style.display = "none";
}, 2000);

function changeimage() {
  setInterval(() => {
    counter++;
    if (counter == image1.length) {
      counter = 0;
    }
    imagediv.style.backgroundImage = "url('" + image1[counter] + "')";
  }, 2000);
}
changeimage();

var username = document.getElementById("UserName");
var password = document.getElementById("password");

