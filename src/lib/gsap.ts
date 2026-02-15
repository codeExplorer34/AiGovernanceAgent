import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Ensure GSAP plugins are registered once on the client before use.
 */
export function registerGsap() {
  if (typeof window === "undefined") return { gsap, ScrollTrigger };
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export { gsap, ScrollTrigger };

