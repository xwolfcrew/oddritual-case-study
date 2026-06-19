document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("[data-nav-theme]");
  const nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.dataset.navTheme;
          nav.setAttribute("data-theme", theme);
        }
      });
    },
    {
      rootMargin: `-${navHeight}px 0px -${window.innerHeight - navHeight}px 0px`,
    },
  );

  sections.forEach((section) => observer.observe(section));

  const cards = document.querySelectorAll(".card-image");

  cards.forEach((wrap) => {
    const el = wrap.querySelector(".cta-hover-el");

    wrap.addEventListener("mousemove", (e) => {
      const rect = wrap.getBoundingClientRect();
      const y = e.clientY - rect.top;
      el.style.transform = `translateY(${y}px)`;
    });

    wrap.addEventListener("mouseleave", () => {
      el.style.transform = `translateY(0px)`;
    });
  });
});
