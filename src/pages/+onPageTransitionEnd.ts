import { scrollPositions } from "./+onPageTransitionStart";

export async function onPageTransitionEnd() {
  console.log("Page transition end");
  document.body.classList.remove("page-transition");
  const saved = scrollPositions.get(window.location.pathname);
  console.log(saved);
  window.scrollTo(0, saved ?? 0);
}
