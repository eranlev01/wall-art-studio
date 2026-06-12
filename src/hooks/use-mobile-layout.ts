"use client";

import { useEffect, useState } from "react";

const MOBILE_WIDTH = "(max-width: 900px)";
const COARSE_POINTER = "(hover: none) and (pointer: coarse)";

/** True on narrow viewports or touch-first devices — disable heavy motion there. */
export function useMobileLayout() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const widthMq = window.matchMedia(MOBILE_WIDTH);
    const touchMq = window.matchMedia(COARSE_POINTER);
    const update = () => setMobile(widthMq.matches || touchMq.matches);

    update();
    widthMq.addEventListener("change", update);
    touchMq.addEventListener("change", update);
    return () => {
      widthMq.removeEventListener("change", update);
      touchMq.removeEventListener("change", update);
    };
  }, []);

  return mobile;
}
