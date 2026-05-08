import { useEffect, useRef } from "react";

type RafCallback = (time: number) => void;

/**
 * Call a callback on every animation frame while `active` is true.
 * The latest callback is always used without resubscribing.
 */
export function useRaf(callback: RafCallback, active: boolean = true) {
  const callbackRef = useRef<RafCallback>(() => {});
  const activeRef = useRef(active);

  callbackRef.current = callback;
  activeRef.current = active;

  useEffect(() => {
    if (!activeRef.current) return;

    let frameId: number;

    const loop = (time: number) => {
      if (!activeRef.current) return;
      callbackRef.current(time);
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);
}


