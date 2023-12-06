const color = function () {
  const btn = document.querySelector(".button");
  const link = document.querySelector(".link");

  btn.addEventListener("mouseenter", () => {
    link.style.color = "white";
  });

  btn.addEventListener("mouseleave", () => {
    link.style.color = "black";
  });
};
color();

const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");
const img1 = document.querySelector("#img1");

const images = [
  "./Images/travel-flipkart.webp",
  "./Images/Phone.webp",
  "./Images/Zeb-comp.webp",
];

let currentImageindex = 0;

btnRight.addEventListener("click", () => {
  currentImageindex = (currentImageindex + 1)%images.length;
  img1.setAttribute("src", images[currentImageindex]);
});

btnLeft.addEventListener("click", () => {
  currentImageindex = (currentImageindex + images.length - 1)%images.length;
  img1.setAttribute("src", images[currentImageindex]);
});