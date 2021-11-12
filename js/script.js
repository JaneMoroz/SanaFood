console.log("Hello!");

// Make mobile navigation work
const bodyEl = document.body;
const btnNavEl = document.querySelector(".navigation__checkbox");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("change", function () {
  if (btnNavEl.checked) {
    headerEl.classList.add("navigation-open");
    document.body.classList.add("sticky");
    // bodyEl.classList.add("fixed-position");
  } else {
    headerEl.classList.remove("navigation-open");
    // bodyEl.classList.remove("fixed-position");
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

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

///////////////////////////////////////
// Close menu when the link is clicked
document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clicked");

    // Matching strategy
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      headerEl.classList.remove("navigation-open");
      btnNavEl.checked = false;
    }
  });
