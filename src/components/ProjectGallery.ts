import lightGallery from "lightgallery";
import type { LightGallery } from "lightgallery/lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Import CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
export function ProjectGallery(): void {
  // Initialize on click
  document.addEventListener("DOMContentLoaded", () => {
    const openGalleryButtons = document.querySelectorAll(".open-gallery-btn");

    openGalleryButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const target = e.currentTarget as HTMLElement;
        const galleryId = target.dataset.gallery;

        if (galleryId) {
          const galleryContainer = document.getElementById(galleryId);

          if (galleryContainer) {
            const galleryInstance = lightGallery(galleryContainer, {
              plugins: [lgThumbnail, lgZoom],
              dynamic: true,
              dynamicEl: Array.from(galleryContainer.querySelectorAll("a")).map(
                (a) => ({
                  src: (a as HTMLAnchorElement).getAttribute("href") || "",
                  thumb:
                    (a.querySelector("img") as HTMLImageElement)?.getAttribute(
                      "src"
                    ) || "",
                })
              ),
            }) as unknown as LightGallery;

            galleryInstance.openGallery();
          }
        }
      });
    });
  });
}
