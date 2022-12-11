var StoryScroll = document.getElementById("BodyStory");
var x = 0;
function left() {
  if (x != 0) {
    x -= 250;
  }

  StoryScroll.scrollTo(x, 0);
}
function right() {
  if (x < 1250) {
    x += 250;
  }

  StoryScroll.scrollTo(x, 0);
  console.log("as" + StoryScroll.scrollWidth / 2.5);
  console.log(x);
}

var loading = document.getElementById("loading"),
  image1 = ["image/1.png", "image/2.png", "image/3.png", "image/4.png"];

setTimeout(() => {
  loading.style.display = "none";
}, 3500);
