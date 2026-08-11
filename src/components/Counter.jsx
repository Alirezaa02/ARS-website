import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

// Animated number that counts up when scrolled into view.
// Supports non-numeric displays (e.g. "24/7") via the `display` prop.
export default function Counter({ value, suffix = "", prefix = "", display, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [text, setText] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (!inView) return;
    if (display) {
      setText(display);
      return;
    }
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(prefix + v.toFixed(decimals) + suffix),
    });
    return controls.stop;
  }, [inView, value, display, prefix, suffix, decimals, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      {text}
    </span>
  );
}
