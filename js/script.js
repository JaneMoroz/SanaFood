console.log("Hello!");

// Make mobile navigation work
const btnNavEl = document.querySelector(".navigation__checkbox");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("change", function () {
  if (btnNavEl.checked) {
    headerEl.classList.add("navigation-open");
  } else {
    headerEl.classList.remove("navigation-open");
  }
});

// Sricky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
