import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { useInView } from "framer-motion";

export function useCountUp(
  target: number,
  options: { duration?: number; delay?: number } = {}
) {
  const { duration = 1.4, delay = 0 } = options;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as RefObject<Element>, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startAt = performance.now() + delay * 1000;
    const run = (now: number) => {
      if (now < startAt) { requestAnimationFrame(run); return; }
      const t = Math.min((now - startAt) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(ease * target));
      if (t < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [inView, target, duration, delay]);

  return { value, ref };
}
