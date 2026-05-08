import { useState, useEffect } from "react";

/**
 * A hook that returns true if the current viewport matches the given media query.
 * Reactive — updates on window resize.
 */
export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia(query);
        setMatches(media.matches);

        const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}

/** Convenience: true when viewport < 768px (mobile) */
export function useIsMobile(): boolean {
    return useMediaQuery("(max-width: 767px)");
}

/** Convenience: true when viewport >= 768px (desktop/tablet) */
export function useIsDesktop(): boolean {
    return useMediaQuery("(min-width: 768px)");
}

/** Convenience: true when user prefers reduced motion */
export function usePrefersReducedMotion(): boolean {
    return useMediaQuery("(prefers-reduced-motion: reduce)");
}
