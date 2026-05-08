type EventHandler<T = unknown> = (payload: T) => void;

type HandlerSet = Set<EventHandler>;

const listeners = new Map<string, HandlerSet>();

export function on<T = unknown>(type: string, handler: EventHandler<T>) {
  let set = listeners.get(type);
  if (!set) {
    set = new Set();
    listeners.set(type, set);
  }
  // Casting is safe because we only ever call handlers with the payload they registered for.
  (set as HandlerSet).add(handler as EventHandler);

  return () => off(type, handler);
}

export function once<T = unknown>(type: string, handler: EventHandler<T>) {
  const wrapped: EventHandler<T> = (payload) => {
    off(type, wrapped);
    handler(payload);
  };

  return on(type, wrapped);
}

export function off<T = unknown>(type: string, handler: EventHandler<T>) {
  const set = listeners.get(type);
  if (!set) return;
  set.delete(handler as EventHandler);
  if (set.size === 0) {
    listeners.delete(type);
  }
}

export function emit<T = unknown>(type: string, payload: T) {
  const set = listeners.get(type);
  if (!set) return;
  // Clone to avoid issues if handlers remove themselves while iterating.
  Array.from(set).forEach((handler) => {
    try {
      (handler as EventHandler<T>)(payload);
    } catch (error) {
      // Swallow to avoid one listener breaking others; log for debugging if needed.
      // eslint-disable-next-line no-console
      console.error(`[eventBus] Error in handler for "${type}"`, error);
    }
  });
}


