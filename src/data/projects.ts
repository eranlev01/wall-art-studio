import type { ScatterWord } from "./services";

export type ProjectItem = {
  slug: string;
  label: string;
  sub?: string;
  category: string;
  client: string;
  location: string;
  src: string;
  desc: string;
  challenge: string;
  result: string;
  scatterTitle: ScatterWord[];
  accent: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "aroma-orim",
    label: "ארומה אורים",
    sub: "רמת גן",
    category: "עסקים",
    client: "ארומה",
    location: "רמת גן",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2021/02/%D7%90%D7%A8%D7%95%D7%9E%D7%94-%D7%90%D7%95%D7%A8%D7%99%D7%9D-%D7%A8%D7%9E%D7%AA-%D7%92%D7%9F-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C-THIS-IS-SQUARE.b197b0.webp",
    desc: "ציור קיר מותאם לזהות המותג בסניף אורים — חוויה ויזואלית שמחזקת את האווירה הייחודית של המקום.",
    challenge: "ליצור קיר שמרגיש אישי לסניף, תוך שמירה על שפה מותגית אחידה.",
    result: "קיר שמושך מבטים, מעודד צילום, ומשתלב בחלל הקפה.",
    accent: "#E8FF00",
    scatterTitle: [
      { text: "ארומה", tone: "accent", size: "hero", top: "18%", insetInlineStart: "4%", rotate: -4, delay: 0.1 },
      { text: "אורים", tone: "white", size: "xl", top: "48%", insetInlineEnd: "2%", rotate: 3, delay: 0.35 },
    ],
  },
  {
    slug: "hof-orenim",
    label: "חוף אורנים",
    category: "ציבורי",
    client: "חוף אורנים",
    location: "ישראל",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2022/04/%D7%97%D7%95%D7%A3-%D7%90%D7%95%D7%A8%D7%A0%D7%99%D7%9D-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C.b197b0.webp",
    desc: "פרויקט אמנות ציבורית בחוף — ציור קיר בהיקף גדול שמחבר בין נוף, קהילה, ואמנות.",
    challenge: "עבודה בשטח פתוח, התאמה לסביבה הטבעית, ועמידות לאורך זמן.",
    result: "יצירה שהפכה חלק מהזיכרון הוויזואלי של המקום.",
    accent: "#FF4D00",
    scatterTitle: [
      { text: "חוף", tone: "white", size: "lg", top: "10%", insetInlineEnd: "8%", rotate: 5, delay: 0.08 },
      { text: "אורנים", tone: "accent", size: "hero", top: "28%", insetInlineStart: "0%", rotate: -3, delay: 0.25 },
    ],
  },
  {
    slug: "aroma-shokeda",
    label: "ארומה שוקדה",
    category: "עסקים",
    client: "ארומה",
    location: "שוקדה",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2021/11/%D7%90%D7%A8%D7%95%D7%9E%D7%94_%D7%A9%D7%95%D7%A7%D7%AA_%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C_%D7%A6%D7%99%D7%95%D7%A8%D7%99_%D7%A7%D7%99%D7%A8.d110a0.webp",
    desc: "עיצוב קיר ייחודי לסניף שוקדה — שילוב בין אמנות רחוב לחוויית מותג.",
    challenge: "התאמה לחלל קטן יחסית עם impact מקסימלי.",
    result: "קיר שמגדיר את הסניף ויוצר נקודת מבט מיידית.",
    accent: "#E8FF00",
    scatterTitle: [
      { text: "ארומה", tone: "accent", size: "hero", top: "16%", insetInlineStart: "6%", rotate: -2, delay: 0.1 },
      { text: "שוקדה", tone: "white", size: "xl", top: "46%", insetInlineEnd: "0%", rotate: 4, delay: 0.3 },
    ],
  },
  {
    slug: "altshuler-parking",
    label: "אלטשולר שחם",
    sub: "חניון",
    category: "עסקים",
    client: "אלטשולר שחם",
    location: "חניון",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2020/12/%D7%90%D7%9C%D7%98%D7%A9%D7%95%D7%9C%D7%A8-%D7%A9%D7%97%D7%9D-%D7%A6%D7%99%D7%95%D7%A8-%D7%92%D7%A8%D7%A4%D7%99%D7%98%D7%99-%D7%97%D7%A0%D7%99%D7%95%D7%9F-%D7%90%D7%95%D7%A4%D7%A0%D7%99%D7%99%D7%9D-02.b197b0.webp",
    desc: "גרפיטי וציור קיר בחניון — הפיכת חלל פונקצional לחוויה ויזואלית.",
    challenge: "עבודה בחלל עם תנועה גבוהה, תאורה מוגבלת, ודרישות עמידות.",
    result: "קיר שמשנה את תחושת החניון לחלוטין.",
    accent: "#FF4D00",
    scatterTitle: [
      { text: "אלטשולר", tone: "white", size: "lg", top: "8%", insetInlineStart: "2%", rotate: -4, delay: 0.05 },
      { text: "שחם", tone: "accent", size: "hero", top: "30%", insetInlineEnd: "4%", rotate: 2, delay: 0.22 },
    ],
  },
  {
    slug: "hof-miami",
    label: "חוף מיעמי",
    sub: "אשדוד",
    category: "ציבורי",
    client: "עיריית אשדוד",
    location: "אשדוד",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2021/06/%D7%A6%D7%99%D7%95%D7%A8%D7%99-%D7%A7%D7%99%D7%A8-%D7%97%D7%95%D7%A3-%D7%9E%D7%99%D7%A2%D7%9E%D7%99-%D7%90%D7%A9%D7%93%D7%95%D7%93-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C.b197b0.webp",
    desc: "ציור קיר גדול בחוף מיעמי באשדוד — אמנות ציבורית בקנה מידה מרשים.",
    challenge: "פרויקט בהיקף גדול, עבודה בשטח, ותיאום עם גורמים עירוניים.",
    result: "יצירה שהפכה סמל ויזואלי לחוף.",
    accent: "#E8FF00",
    scatterTitle: [
      { text: "חוף", tone: "accent", size: "hero", top: "14%", insetInlineStart: "8%", rotate: -3, delay: 0.1 },
      { text: "מיעמי", tone: "white", size: "xl", top: "42%", insetInlineEnd: "2%", rotate: 5, delay: 0.28 },
    ],
  },
  {
    slug: "barber-shop",
    label: "ברבר שופ",
    sub: "עמיתי מלכה",
    category: "עסקים",
    client: "ברבר שופ",
    location: "עמיתי מלכה",
    src: "https://www.urbanstyle.co.il/wp-content/uploads/2020/08/%D7%A2%D7%9E%D7%99%D7%AA%D7%99-%D7%9E%D7%9C%D7%9B%D7%94-%D7%91%D7%A8%D7%91%D7%A8-%D7%A9%D7%95%D7%A4-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C-%D7%A6%D7%99%D7%95%D7%A8-%D7%92%D7%A8%D7%A4%D7%99%D7%98%D7%99.b197b0.webp",
    desc: "גרפיטי וציור קיר לברbershop — אווירה אורבנית שמתאימה לקהל הצעיר.",
    challenge: "לתפוס את האנרגיה של המקום בציור אחד.",
    result: "קיר שמגדיר את המותג ומושך תשומת לב.",
    accent: "#FF4D00",
    scatterTitle: [
      { text: "ברבר", tone: "accent", size: "hero", top: "20%", insetInlineStart: "0%", rotate: -5, delay: 0.1 },
      { text: "שופ", tone: "white", size: "xl", top: "50%", insetInlineEnd: "6%", rotate: 3, delay: 0.32 },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
