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
