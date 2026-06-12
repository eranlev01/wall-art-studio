/** Theme tokens for the client preview page. Delete with /theme-preview when done. */

export type ThemeGroup =
  | "street"
  | "studio"
  | "gallery"
  | "mural";

export type ThemeId =
  | "neon-street"
  | "spray-cyan"
  | "concrete-lime"
  | "soft-street"
  | "urban-refined"
  | "ochre-studio"
  | "indigo-atelier"
  | "wine-charcoal"
  | "gallery-canvas"
  | "linen-gallery"
  | "dusty-atelier"
  | "midnight-mural"
  | "pastel-wall";

export type SiteTheme = {
  id: ThemeId;
  group: ThemeGroup;
  name: string;
  tagline: string;
  audience: string;
  pros: string[];
  cons: string[];
  tokens: {
    bg: string;
    bg2: string;
    card: string;
    acc: string;
    sec: string;
    grn: string;
    txt: string;
    muted: string;
    border: string;
  };
};

export const THEME_GROUPS: { id: ThemeGroup; label: string }[] = [
  { id: "street", label: "רחוב & גרפיטי" },
  { id: "studio", label: "סטודיו & קנבס" },
  { id: "gallery", label: "גלריה & אור" },
  { id: "mural", label: "מיורל & קהילה" },
];

export const SITE_THEMES: SiteTheme[] = [
  /* ── רחוב & גרפיטי ── */
  {
    id: "neon-street",
    group: "street",
    name: "ניאון רחוב",
    tagline: "הפלטה הנוכחית — אנרגטית ועירונית",
    audience: "גרפיטי, קירות חוץ, מותגים צעירים, פסטיבלים",
    pros: [
      "מזוהה מיד עם גרפיטי ואמנות רחוב",
      "בולט בזיכרון — לא נראה כמו עוד סטודיו",
      "מתאים לפרויקטים מסחריים ועירוניים",
    ],
    cons: [
      "עשוי להרגיש צעיר מדי לקוני canvas",
      "פחות \"גלריה\" — יותר \"רחוב\"",
    ],
    tokens: {
      bg: "#0D0D0D",
      bg2: "#111111",
      card: "#161616",
      acc: "#E8FF00",
      sec: "#FF4D00",
      grn: "#25D366",
      txt: "#EBEBEB",
      muted: "#666666",
      border: "rgba(255,255,255,0.07)",
    },
  },
  {
    id: "spray-cyan",
    group: "street",
    name: "ספריי ציאן",
    tagline: "קלאסיקת גraffiti — ציאן ומagenta",
    audience: "hip-hop walls, תרבות רחוב, מותגים urban",
    pros: [
      "צבעי aerosol איקוניים — מיידית \"גרפיטי\"",
      "שילוב ציאן/ורוד = אנרגיה בלי נeon צהוב",
      "עובד מצוין על רקע כהה עם תמונות פרויקט",
    ],
    cons: [
      "פחות חם מochre/gallery — קר יותר",
      "דורש תמונות חזקות שלא \" ייבלעו\" ברקע",
    ],
    tokens: {
      bg: "#0E1117",
      bg2: "#151922",
      card: "#1A2030",
      acc: "#00D4E8",
      sec: "#FF3D9A",
      grn: "#25D366",
      txt: "#E8ECF4",
      muted: "#7A8499",
      border: "rgba(255,255,255,0.08)",
    },
  },
  {
    id: "concrete-lime",
    group: "street",
    name: "בטון & ליים",
    tagline: "קיר בטון — צבע spray עדין",
    audience: "מיורלים עירוניים, חניונים, מרחבים תעשייתיים",
    pros: [
      "אפור בטון = canvas אורבני אמיתי",
      "ליים רך — street בלי צעקה",
      "מתאים לפרויקטים גדולים וindustrial",
    ],
    cons: [
      "פחות \"יוקרתי\" לגלריה",
      "accentים עדינים — CTA צריך contrast",
    ],
    tokens: {
      bg: "#2A2A28",
      bg2: "#323230",
      card: "#3C3C38",
      acc: "#B8E986",
      sec: "#6EB5FF",
      grn: "#25D366",
      txt: "#F0EFEB",
      muted: "#9A9890",
      border: "rgba(255,255,255,0.09)",
    },
  },
  {
    id: "soft-street",
    group: "street",
    name: "רחוב רך",
    tagline: "גרפיטי עם גוונים חמים ורכים",
    audience: "חינוך, קהילה, מותגים creative-רכים",
    pros: [
      "עדיין כהה ואורבני — לא aggressive",
      "זהב עתיק + קורל = חם ונגיש",
      "טוב לפרויקטים עם ילדים / מוסדות",
    ],
    cons: [
      "פחות distinctive מהנeon",
      "accentים רכים — כפתורים צריכים contrast",
    ],
    tokens: {
      bg: "#1A1A1E",
      bg2: "#222228",
      card: "#2A2A32",
      acc: "#C9B896",
      sec: "#E07A5F",
      grn: "#25D366",
      txt: "#ECE8E2",
      muted: "#9A9590",
      border: "rgba(255,255,255,0.09)",
    },
  },

  /* ── סטודיו & קנבס ── */
  {
    id: "urban-refined",
    group: "studio",
    name: "עירוני מעודן",
    tagline: "רחוב — אבל בוגר יותר",
    audience: "משרדים, מסעדות, רשויות + קוני אמנות",
    pros: [
      "שומר על אופי עירוני בלי נeon",
      "זהב/טרקוטה = craft ואמנות",
      "גשר טוב בין קירות חוץ לcanvas",
    ],
    cons: [
      "פחות \"וואו\" ראשוני מהנeon",
      "עדיין כהה — לא look גalerie בהיר",
    ],
    tokens: {
      bg: "#121212",
      bg2: "#181818",
      card: "#1E1E1E",
      acc: "#D4AF37",
      sec: "#C45C3E",
      grn: "#25D366",
      txt: "#E8E4DE",
      muted: "#8A8580",
      border: "rgba(255,255,255,0.08)",
    },
  },
  {
    id: "ochre-studio",
    group: "studio",
    name: "אוקרה & סienna",
    tagline: "פיגментים, בד, מכחול — סטודיו ציור",
    audience: "canvas מקורי, יצירות לבית, אספנים",
    pros: [
      "מרגיש כמו atelier אמיתי — שמן, בד, pigment",
      "גווני אדמה = אמון ויציבות",
      "מושלם למכירת ציורים מקוריים",
    ],
    cons: [
      "פחות \"רחוב\" — יותר \"אמן בstudio\"",
      "על רקע כהה — accentים חמים בלבד",
    ],
    tokens: {
      bg: "#1C1814",
      bg2: "#252019",
      card: "#2E2820",
      acc: "#D4A044",
      sec: "#C4622D",
      grn: "#25D366",
      txt: "#EDE6DC",
      muted: "#9A9088",
      border: "rgba(255,255,255,0.08)",
    },
  },
  {
    id: "indigo-atelier",
    group: "studio",
    name: "אינדיגו & זהב",
    tagline: "סטודיו אמן — עומק ויוקרה",
    audience: "גלריות, קונים premium, פרויקטים תרבותיים",
    pros: [
      "אינדיגו + זהב = fine art מיידי",
      "סגול משני — creative בלי street",
      "מתאים גם לcanvas וגם לפרויקטים ציבוריים גדולים",
    ],
    cons: [
      "פחות \"גרaffiti tag\" — יותר \"מוזיאון\"",
      "כהה — לא לכולם",
    ],
    tokens: {
      bg: "#141428",
      bg2: "#1A1A35",
      card: "#222245",
      acc: "#E8C547",
      sec: "#9B6BCC",
      grn: "#25D366",
      txt: "#E4E2F0",
      muted: "#8884A0",
      border: "rgba(255,255,255,0.08)",
    },
  },
  {
    id: "wine-charcoal",
    group: "studio",
    name: "פחם & יין",
    tagline: "charcoal drawing meets street edge",
    audience: "ציורי קיר premium, מסעדות יוקרה, canvas גדול",
    pros: [
      "פחם + brass = רישום, sketch, craft",
      "בורגundy מוסיף depth בלי neon",
      "מתאים לstudio שמוכר גם קיר וגם canvas",
    ],
    cons: [
      "מעט דARK — accentים subtle",
      "דורש טיפוגרafia חזקה",
    ],
    tokens: {
      bg: "#181516",
      bg2: "#211A1C",
      card: "#2A2225",
      acc: "#C9A87C",
      sec: "#8B3A4A",
      grn: "#25D366",
      txt: "#EDE8E4",
      muted: "#8A8280",
      border: "rgba(255,255,255,0.08)",
    },
  },

  /* ── גלריה & אור ── */
  {
    id: "gallery-canvas",
    group: "gallery",
    name: "גלריה & קנבס",
    tagline: "חם, רך — לקונים של ציורים",
    audience: "קוני canvas, בית פרטי, interior design",
    pros: [
      "מרגיש כמו סטודיו אמנות",
      "קרם + sienna = אמון ויוקרה",
      "מתאים למכירת יצירות מקוריות",
    ],
    cons: [
      "פחות \"גרפיטי\" מיידי",
      "תמונות פרויקט street צריכות contrast",
    ],
    tokens: {
      bg: "#F5F0E8",
      bg2: "#EDE6DA",
      card: "#FFFFFF",
      acc: "#B85C38",
      sec: "#5C7A62",
      grn: "#25D366",
      txt: "#2C2825",
      muted: "#8A8279",
      border: "rgba(44,40,37,0.12)",
    },
  },
  {
    id: "linen-gallery",
    group: "gallery",
    name: "פשתן & דיו",
    tagline: "גלריה בהירה — הדפסים וcanvas",
    audience: "חנות יצירות, portfolio, לקוחות בית",
    pros: [
      "רקע linen = נקי, מקצועי, gallery-white",
      "דיו + קורל — art print aesthetic",
      "הכי קרוב ל\"חנות canvas\" מסחרית",
    ],
    cons: [
      "הכי פחות \"street\" מהכל",
      "hero צריך imagery חזקה",
    ],
    tokens: {
      bg: "#F7F4EF",
      bg2: "#EFEBE3",
      card: "#FFFFFF",
      acc: "#2D3436",
      sec: "#E17055",
      grn: "#25D366",
      txt: "#2D3436",
      muted: "#7D8488",
      border: "rgba(45,52,54,0.12)",
    },
  },
  {
    id: "dusty-atelier",
    group: "gallery",
    name: "ורוד עתיק & מINT",
    tagline: "contemporary art gallery — רך ומודרני",
    audience: "canvas contemporary, נשים/בית, מותגים lifestyle",
    pros: [
      "dusty rose + sage = trendy gallery 2024–26",
      "בהיר — נעים לגלישה ארוכה",
      "מתאים לcanvas abstract וpop-art",
    ],
    cons: [
      "לא לפרויקטים industrial/street",
      "עדין — graffiti imagery חייבת לשאת",
    ],
    tokens: {
      bg: "#F2EBE8",
      bg2: "#EAE3DF",
      card: "#FFFBF9",
      acc: "#B87A7A",
      sec: "#6B9080",
      grn: "#25D366",
      txt: "#3A3330",
      muted: "#9A908C",
      border: "rgba(58,51,48,0.11)",
    },
  },

  /* ── מיורל & קהילה ── */
  {
    id: "midnight-mural",
    group: "mural",
    name: "חצות & teal",
    tagline: "מיורלים גדולים — פסטיבל ועיר",
    audience: "פסטיבלים, עיריות, קירות ענק",
    pros: [
      "teal + coral = mural festival classic",
      "כהה עם צבעים חיים — תמונות \"קופצות\"",
      "מתאים לportfolio של פרויקטים גדולים",
    ],
    cons: [
      "שני accentים חזקים — צריך balance בUI",
      "פחות \"canvas shop\"",
    ],
    tokens: {
      bg: "#0F1A1A",
      bg2: "#152424",
      card: "#1C2E2E",
      acc: "#FF6B6B",
      sec: "#4ECDC4",
      grn: "#25D366",
      txt: "#E8F0F0",
      muted: "#7A9090",
      border: "rgba(255,255,255,0.08)",
    },
  },
  {
    id: "pastel-wall",
    group: "mural",
    name: "קיר pastel",
    tagline: "community walls — צבעים רכים על כהה",
    audience: "בתי ספר, hospitals, שכונות, NGO",
    pros: [
      "aqua + peach = friendly mural",
      "עדיין dark base — street context",
      "נגיש לכל גיל — לא aggressive",
    ],
    cons: [
      "פחות premium/luxury",
      "accentים pastel — CTA פחות בולט",
    ],
    tokens: {
      bg: "#252530",
      bg2: "#2E2E3A",
      card: "#383845",
      acc: "#A8DADC",
      sec: "#F4A988",
      grn: "#25D366",
      txt: "#EEEEF2",
      muted: "#9498A8",
      border: "rgba(255,255,255,0.09)",
    },
  },
];

export const DEFAULT_THEME_ID: ThemeId = "neon-street";

export function getTheme(id: ThemeId): SiteTheme {
  return SITE_THEMES.find((t) => t.id === id) ?? SITE_THEMES[0];
}

export function themesByGroup(group: ThemeGroup): SiteTheme[] {
  return SITE_THEMES.filter((t) => t.group === group);
}

/** CSS custom properties object for inline style on preview shell */
export function hexToRgb(hex: string): string {
  const normalized = hex.replace("#", "").trim();
  if (normalized.length !== 6) return "232, 255, 0";
  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export function themeToCssVars(theme: SiteTheme): Record<string, string> {
  const { tokens } = theme;
  return {
    "--bg": tokens.bg,
    "--bg2": tokens.bg2,
    "--card": tokens.card,
    "--acc": tokens.acc,
    "--sec": tokens.sec,
    "--grn": tokens.grn,
    "--txt": tokens.txt,
    "--muted": tokens.muted,
    "--border": tokens.border,
    "--acc-rgb": hexToRgb(tokens.acc),
    "--sec-rgb": hexToRgb(tokens.sec),
  };
}

/** Light themes need inverted badge text on accent chips */
export function isLightTheme(id: ThemeId): boolean {
  return id === "gallery-canvas" || id === "linen-gallery" || id === "dusty-atelier";
}
