"use client";

import { useEffect } from "react";
import {
  applyThemeToDocument,
  getStoredThemeId,
  SITE_THEME_CHANGE_EVENT,
} from "@/lib/theme-storage";
import { DEFAULT_THEME_ID } from "@/lib/themes";

/** Re-applies stored theme after hydration (init script handles first paint). */
export function SiteThemeProvider() {
  useEffect(() => {
    const sync = () => {
      const id = getStoredThemeId() ?? DEFAULT_THEME_ID;
      applyThemeToDocument(id);
    };

    sync();

    const onThemeChange = () => sync();
    window.addEventListener(SITE_THEME_CHANGE_EVENT, onThemeChange);
    window.addEventListener("storage", onThemeChange);

    return () => {
      window.removeEventListener(SITE_THEME_CHANGE_EVENT, onThemeChange);
      window.removeEventListener("storage", onThemeChange);
    };
  }, []);

  return null;
}
