import {
  DEFAULT_THEME_ID,
  getTheme,
  isLightTheme,
  SITE_THEMES,
  themeToCssVars,
  type ThemeId,
} from "@/lib/themes";

export const THEME_ID_STORAGE_KEY = "wall-art-site-theme-id";
export const THEME_VARS_STORAGE_KEY = "wall-art-site-theme-vars";

export const SITE_THEME_CHANGE_EVENT = "site-theme-change";

export function isValidThemeId(id: string): id is ThemeId {
  return SITE_THEMES.some((t) => t.id === id);
}

export function getStoredThemeId(): ThemeId | null {
  if (typeof window === "undefined") return null;
  const id = localStorage.getItem(THEME_ID_STORAGE_KEY);
  if (!id || !isValidThemeId(id)) return null;
  return id;
}

export function applyThemeToDocument(id: ThemeId): void {
  const theme = getTheme(id);
  const vars = themeToCssVars(theme);
  const root = document.documentElement;

  root.setAttribute("data-theme", id);
  root.setAttribute("data-theme-light", isLightTheme(id) ? "true" : "false");

  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

export function clearThemeFromDocument(): void {
  const root = document.documentElement;
  const stored = localStorage.getItem(THEME_VARS_STORAGE_KEY);

  root.removeAttribute("data-theme");
  root.removeAttribute("data-theme-light");

  if (stored) {
    try {
      const vars = JSON.parse(stored) as Record<string, string>;
      for (const key of Object.keys(vars)) {
        root.style.removeProperty(key);
      }
    } catch {
      /* ignore */
    }
  }

  localStorage.removeItem(THEME_ID_STORAGE_KEY);
  localStorage.removeItem(THEME_VARS_STORAGE_KEY);
}

export function persistAndApplySiteTheme(id: ThemeId): void {
  const vars = themeToCssVars(getTheme(id));
  localStorage.setItem(THEME_ID_STORAGE_KEY, id);
  localStorage.setItem(THEME_VARS_STORAGE_KEY, JSON.stringify(vars));
  applyThemeToDocument(id);
  window.dispatchEvent(new CustomEvent(SITE_THEME_CHANGE_EVENT, { detail: id }));
}

export function resetSiteTheme(): void {
  clearThemeFromDocument();
  applyThemeToDocument(DEFAULT_THEME_ID);
  localStorage.setItem(THEME_ID_STORAGE_KEY, DEFAULT_THEME_ID);
  localStorage.setItem(
    THEME_VARS_STORAGE_KEY,
    JSON.stringify(themeToCssVars(getTheme(DEFAULT_THEME_ID)))
  );
  window.dispatchEvent(
    new CustomEvent(SITE_THEME_CHANGE_EVENT, { detail: DEFAULT_THEME_ID })
  );
}

/** Inline script — runs before paint to avoid theme flash */
export const THEME_INIT_SCRIPT = `(function(){try{var id=localStorage.getItem("${THEME_ID_STORAGE_KEY}");var v=localStorage.getItem("${THEME_VARS_STORAGE_KEY}");if(!v)return;var vars=JSON.parse(v);var r=document.documentElement;if(id)r.setAttribute("data-theme",id);var light=id==="gallery-canvas"||id==="linen-gallery"||id==="dusty-atelier";r.setAttribute("data-theme-light",light?"true":"false");for(var k in vars)if(Object.prototype.hasOwnProperty.call(vars,k))r.style.setProperty(k,vars[k]);}catch(e){}})();`;
