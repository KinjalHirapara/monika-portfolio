export function setupNavbarBehavior(): void {
  const navbar = document.getElementById("navbar-links");

  window.addEventListener("scroll", () => {
    // Change navbar background on scroll
    if (window.scrollY > 50) {
      navbar?.classList.add(
        "bg-black/50",
        "shadow-md",
        "backdrop-blur-sm",
        "md:text-white"
      );
      navbar?.classList.remove("bg-transparent", "md:text-black");
    } else {
      navbar?.classList.remove(
        "bg-black/50",
        "shadow-md",
        "backdrop-blur-sm",
        "md:text-white"
      );
      navbar?.classList.add("bg-transparent", "md:text-black");
    }

    // // Active link highlight
    // let current = "";
    // sections.forEach((section) => {
    //   const top = section.offsetTop - 100;
    //   const height = section.offsetHeight;
    //   if (window.scrollY >= top && window.scrollY < top + height) {
    //     current = section.id;
    //   }
    // });

    // navLinks.forEach((link) => {
    //   link.classList.remove("text-blue-400", "font-semibold");
    //   if (link.getAttribute("href") === `#${current}`) {
    //     link.classList.add("text-blue-400", "font-semibold");
    //   }
    // });
  });
}
