"use client";

import { useEffect } from "react";

/** Adds body class so site chrome (top bar) is hidden on the preview page. */
export function ThemePreviewBodyClass() {
  useEffect(() => {
    document.body.classList.add("theme-preview-active");
    document.documentElement.classList.remove("custom-cursor-active");
    return () => document.body.classList.remove("theme-preview-active");
  }, []);
  return null;
}
