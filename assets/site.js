(() => {
  const button = document.querySelector(".nav-toggle");
  const navigation = document.querySelector(".site-nav");

  if (button && navigation) {
    const closeNavigation = () => {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
      navigation.dataset.open = "false";
    };

    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      button.setAttribute("aria-label", willOpen ? "Close navigation" : "Open navigation");
      navigation.dataset.open = String(willOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeNavigation();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeNavigation();
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
