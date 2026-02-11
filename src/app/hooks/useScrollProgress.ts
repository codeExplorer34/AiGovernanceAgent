import { useScrollState } from "../components/ui/SmoothScrollProvider";

/**
 * Convenience hook to access normalized scroll progress (0–1) for the page.
 */
export function useScrollProgress() {
  const { progress } = useScrollState();
  return progress;
}

