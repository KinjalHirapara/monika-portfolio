import "./assets/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { setupNavbarBehavior } from "./components/Navbar";
import { ProjectGallery } from "./components/ProjectGallery";

setupNavbarBehavior();
ProjectGallery();

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById(
    "back_to_top"
  ) as HTMLAnchorElement | null;
  if (backToTop) {
    backToTop.addEventListener("click", scrollToTop);
  }
});
