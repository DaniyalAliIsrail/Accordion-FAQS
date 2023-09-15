const accordions = document.querySelectorAll(".accordion");
console.log(accordions);

accordions.forEach((accordion) => {
  const answer = accordion.querySelector(".answer");
  const downIcon = accordion.querySelector(".carret-down");

  accordion.addEventListener("click", () => {
    if (downIcon.classList.contains("active-carret-dwon")) {
      downIcon.classList.remove("active-carret-dwon");
      answer.style.maxHeight=null
    } else {
      downIcon.classList.add("active-carret-dwon");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
