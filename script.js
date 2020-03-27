const leftPane = document.getElementById("left-pane");
const imagePane = document.getElementById("image-pane");
const rightPane = document.getElementById("right-pane");
const progressPane = document.getElementById("progress-pane");
const prevImgButton = document.getElementById("prev-img-button");
const nextImgButton = document.getElementById("next-img-button");
const images = ["planets.jpg", "spaceship.jpg", "wormhole.png"];
const progressCircles = Array.from(
  document.getElementsByClassName("progress-circle")
);

let currentImg = document.getElementById("current-img");

function autoAdvanceSlides() {
  setTimeout(function() {
    showNextImg();
    autoAdvanceSlides();
  }, 5000);
}

for (let i = 0; i < progressCircles.length; i++) {
  progressCircles[i].addEventListener("click", function() {
    jumpToImg(i);
  });
}

function jumpToImg(imgIndex) {
  currentImg.src = images[imgIndex];
  updateProgressCircles(imgIndex);
}

function showPrevImg() {
  let imgIndex =
    (images.indexOf(currentImg.getAttribute("src")) - 1 + images.length) %
    images.length;
  currentImg.src = images[imgIndex];
  updateProgressCircles(imgIndex);
}

function showNextImg() {
  currentImg.style.opacity = "0";
  setTimeout(function() {
    let imgIndex =
      (images.indexOf(currentImg.getAttribute("src")) + 1 + images.length) %
      images.length;
    currentImg.src = images[imgIndex];
    updateProgressCircles(imgIndex);
    currentImg.style.opacity = "1";
  }, 750);
}

function updateProgressCircles(imgIndex) {
  for (let i = 0; i < progressCircles.length; i++) {
    if (progressCircles[i].classList.contains("circle-fill")) {
      progressCircles[i].classList.remove("circle-fill");
    }
    if (i == imgIndex) {
      progressCircles[i].classList.add("circle-fill");
    }
  }
}

(function() {
  currentImg.src = images[0];
})();

prevImgButton.addEventListener("click", showPrevImg);
nextImgButton.addEventListener("click", showNextImg);

autoAdvanceSlides();
