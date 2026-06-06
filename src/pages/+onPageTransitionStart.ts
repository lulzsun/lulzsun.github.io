// https://vike.dev/onPageTransitionStart

import type { PageContextClient } from "vike/types";
export const scrollPositions = new Map<string, number>();

export async function onPageTransitionStart(pageContext: Partial<PageContextClient>) {
  console.log("Page transition start");
  console.log("pageContext.isBackwardNavigation", pageContext.isBackwardNavigation);
  document.body.classList.add("page-transition");
  scrollPositions.set(window.location.pathname, window.scrollY);
}
