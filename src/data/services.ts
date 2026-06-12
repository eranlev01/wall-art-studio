export type ScatterTone = "white" | "accent" | "secondary";

export type ScatterWord = {
  text: string;
  tone?: ScatterTone;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "hero";
  top?: string;
  insetInlineStart?: string;
  insetInlineEnd?: string;
  bottom?: string;
  rotate?: number;
  delay?: number;
  /** Text behind (z-index) or in front of hero figure */
  layer?: "front" | "back";
  /** Parallax depth group for hero headline */
  depth?: "static" | "mid" | "fg";
  /** Remount animation when text changes (cycling words) */
  animateKey?: string;
};

export type ServiceItem = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  img: string;
  accent: string;
  category: string;
  audience: string[];
  benefits: string[];
  projects: string[];
  scatterTitle: ScatterWord[];
  intro: [string, string];
};

export const services: ServiceItem[] = [
  {
    id: "commercial",
    num: "01",
    title: "ציורי קיר לעסקים",
    tagline: "מיתוג שאי אפשר לעבור ליד בלי לעצור",
    desc: "ציורים מותאמים אישית שמחזקים מותג ויוצרים חוויה בלתי נשכחת לכל מבקר. מקפה קטן ועד רשת בינלאומית.",
    img: "https://www.urbanstyle.co.il/wp-content/uploads/2021/11/kfc-ashdod-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C-%D7%A6%D7%99%D7%95%D7%A8%D7%99-%D7%A7%D7%99%D7%A8.d110a0.webp",
    accent: "#E8FF00",
    category: "עסקים",
    audience: ["מסעדות", "חנויות", "משרדים", "רשתות"],
    benefits: [
      "חיזוק זהות מותגית בחלל",
      "רגעים שמושכים שיתופים ברשתות",
      "חוויית לקוח ייחודית",
      "בידול מהמתחרים",
    ],
    projects: ["aroma-orim", "kfc-ashdod", "barber-shop"],
    scatterTitle: [
      { text: "ציורי", tone: "white", size: "lg", top: "6%", insetInlineStart: "2%", rotate: -5, delay: 0.05 },
      { text: "קיר", tone: "accent", size: "hero", top: "22%", insetInlineStart: "14%", rotate: 3, delay: 0.2 },
      { text: "ל", tone: "accent", size: "xs", top: "54%", insetInlineStart: "48%", rotate: -12, delay: 0.35 },
      { text: "עסקים", tone: "white", size: "xl", top: "48%", insetInlineStart: "0%", rotate: -2, delay: 0.45 },
    ],
    intro: [
      "כל עסק מתחיל עם קיר. אנחנו הופכים אותו לנקודת מבט — לא עוד תפאורה, אלא שפה ויזואלית שמדברת עם הלקוחות שלכם.",
      "מהרעיון הראשון ועד המכחול האחרון: תכנון, ויזואליזציה, התאמה למותג, וביצוע ברמה שמחזיקה שנים.",
    ],
  },
  {
    id: "education",
    num: "02",
    title: "ציורי קיר למוסדות חינוך",
    tagline: "קירות שמעוררים השראה בכל יום מחדש",
    desc: "נרטיבים ויזואליים שמעוררים השראה, מחזקים ערכים ומפיחים חיים בחלל הלמידה.",
    img: "https://www.urbanstyle.co.il/wp-content/uploads/2021/11/%D7%91%D7%99%D7%AA_%D7%A1%D7%A4%D7%A8_%D7%A6%D7%99%D7%95%D7%A8%D7%99_%D7%A7%D7%99%D7%A8_%D7%A8%D7%9E%D7%AA_%D7%92%D7%9F_%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C.d110a0.webp",
    accent: "#FF4D00",
    category: "חינוך",
    audience: ["בתי ספר", "גנים", "קמפוסים", "מרכזי חינוך"],
    benefits: [
      "חיזוק ערכים וזהות בית ספרית",
      "חלל למידה מעורר השראה",
      "מעורבות תלמידים וקהילה",
      "פרויקטים בהיקף מלא — חצרות, מסדרונות, חדרי ספורט",
    ],
    projects: ["school-hillel"],
    scatterTitle: [
      { text: "ציורי", tone: "white", size: "md", top: "10%", insetInlineEnd: "6%", rotate: 4, delay: 0.05 },
      { text: "קיר", tone: "accent", size: "hero", top: "26%", insetInlineStart: "8%", rotate: -3, delay: 0.18 },
      { text: "למוסדות", tone: "white", size: "lg", top: "50%", insetInlineStart: "0%", rotate: 2, delay: 0.32 },
      { text: "חינוך", tone: "secondary", size: "xl", top: "62%", insetInlineEnd: "4%", rotate: -6, delay: 0.48 },
    ],
    intro: [
      "קיר בבית ספר הוא לא קישוט — הוא חלק מהסיפור. אנחנו יוצרים נרטיבים ויזואליים שמחזקים ערכים ומפיחים חיים בחלל הלמידה.",
      "מפרויקטים בבתי ספר, גנים וקמפוסים — עם תכנון מלא, עמידה בלוחות זמנים, ותוצאה שמשמחת תלמידים וצוות.",
    ],
  },
  {
    id: "public",
    num: "03",
    title: "אמנות במרחב הציבורי",
    tagline: "רחובות שהופכים לגלריות פתוחות",
    desc: "ציורי קיר בהיקף גדול שהופכים רחובות ומרחבים עירוניים ליצירת אמנות חיה.",
    img: "https://www.urbanstyle.co.il/wp-content/uploads/2023/09/%D7%A6%D7%99%D7%95%D7%A8%D7%99-%D7%A7%D7%99%D7%A8-%D7%94%D7%A8%D7%A6%D7%99%D7%A3-%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91.b197b0.webp",
    accent: "#E8FF00",
    category: "ציבורי",
    audience: ["עיריות", "רשויות", "יזמים", "קהילות"],
    benefits: [
      "התחדשות עירונית וייפוי",
      "יצירת נקודות עניין ותיירות",
      "גאווה קהילתית",
      "פרויקטים בהיקף גדול — מגדלים, גשרים, חופים",
    ],
    projects: ["hof-orenim", "hof-miami"],
    scatterTitle: [
      { text: "אמנות", tone: "accent", size: "hero", top: "14%", insetInlineStart: "6%", rotate: -4, delay: 0.1 },
      { text: "במרחב", tone: "white", size: "lg", top: "38%", insetInlineEnd: "2%", rotate: 5, delay: 0.25 },
      { text: "ה", tone: "accent", size: "xs", top: "56%", insetInlineStart: "42%", rotate: 8, delay: 0.38 },
      { text: "ציבורי", tone: "white", size: "xl", top: "52%", insetInlineStart: "0%", rotate: -2, delay: 0.5 },
    ],
    intro: [
      "אמנות ציבורית משנה את הדרך שבה אנשים חווים את העיר. אנחנו מובילים פרויקטים בהיקף גדול — מחזיתות בניינים, חופים, ומרחבים עירוניים.",
      "שילוב מלא עם הרשות, תכנון מקצועי, חומרים עמידים, וביצוע שמחזיק מעמד בפני מזג האוויר והזמן.",
    ],
  },
  {
    id: "residential",
    num: "04",
    title: "ציורי קיר לבית ולגינה",
    tagline: "הקיר שלכם. הסיפור שלכם.",
    desc: "עיצוב ייחודי ואישי שהופך כל חלל ביתי לסביבה מרגשת.",
    img: "https://www.itaynevet.com/wp-content/uploads/2025/04/%D7%A6%D7%99%D7%95%D7%A8%D7%99-%D7%A7%D7%99%D7%A8-%D7%9C%D7%97%D7%93%D7%A8%D7%99-%D7%99%D7%9C%D7%93%D7%99%D7%9D-%E2%80%93-%D7%A2%D7%95%D7%9C%D7%9D-%D7%A9%D7%9C-%D7%93%D7%9E%D7%99%D7%95%D7%9F-%D7%A2%D7%9C-%D7%94%D7%A7%D7%99%D7%A8%D7%95%D7%AA-%D7%90%D7%99%D7%AA%D7%99-%D7%A0%D7%91%D7%98.d110a0.webp",
    accent: "#FF4D00",
    category: "פרטי",
    audience: ["בעלי בתים", "מעצבי פנים", "גינות", "מרפסות"],
    benefits: [
      "עיצוב אישי לחלוטין",
      "התאמה לסגנון הבית",
      "חללים פנים וחוץ",
      "מתנה שאי אפשר לשכוח",
    ],
    projects: [],
    scatterTitle: [
      { text: "ציורי", tone: "white", size: "lg", top: "8%", insetInlineStart: "4%", rotate: -3, delay: 0.08 },
      { text: "קיר", tone: "accent", size: "hero", top: "24%", insetInlineEnd: "8%", rotate: 4, delay: 0.22 },
      { text: "לבית", tone: "white", size: "xl", top: "50%", insetInlineStart: "2%", rotate: -1, delay: 0.38 },
      { text: "ולגינה", tone: "secondary", size: "md", top: "66%", insetInlineEnd: "6%", rotate: 6, delay: 0.52 },
    ],
    intro: [
      "מקיר סלון ועד גינת גג — כל פרויקט ביתי מתחיל בהקשבה. אנחנו מתאימים סגנון, צבע, וקנה מידה לחלום שלכם.",
      "תהליך מלא: רעיון, סקיצה, אישור, וביצוע — עם תוצאה שנשארת לשנים.",
    ],
  },
  {
    id: "workshops",
    num: "05",
    title: "סדנאות גרפיטי",
    tagline: "חוויה שכל משתתף לוקח הביתה",
    desc: "חוויית גרפיטי חינוכית ומהנה לקבוצות, חברות ואירועים.",
    img: "https://www.urbanstyle.co.il/wp-content/uploads/2020/08/%D7%A2%D7%9E%D7%99%D7%AA%D7%99-%D7%9E%D7%9C%D7%9B%D7%94-%D7%91%D7%A8%D7%91%D7%A8-%D7%A9%D7%95%D7%A4-%D7%90%D7%95%D7%A8%D7%91%D7%A0%D7%A1%D7%98%D7%99%D7%99%D7%9C-%D7%A6%D7%99%D7%95%D7%A8-%D7%92%D7%A8%D7%A4%D7%99%D7%98%D7%99.b197b0.webp",
    accent: "#E8FF00",
    category: "חוויה",
    audience: ["חברות", "קבוצות", "אירועים", "בתי ספר"],
    benefits: [
      "Team building יצירתי",
      "חוויה בלתי נשכחת",
      "מתאים למתחילים ומתקדמים",
      "אנחנו מביאים את כל הציוד",
    ],
    projects: ["barber-shop"],
    scatterTitle: [
      { text: "סדנאות", tone: "accent", size: "hero", top: "12%", insetInlineStart: "0%", rotate: -5, delay: 0.1 },
      { text: "גרפיטי", tone: "white", size: "xl", top: "44%", insetInlineEnd: "4%", rotate: 3, delay: 0.28 },
    ],
    intro: [
      "סדנת גרפיטי היא הרבה יותר מציור — זו חוויה. מתחילים ועד מתקדמים, אנחנו מביאים את הצבע, הידע, והאנרגיה.",
      "מושלם לחברות, קבוצות, אירועים, וימי גיבוש — עם תוצר שכל משתתף גאה בו.",
    ],
  },
];

export function getServiceById(id: string) {
  return services.find((s) => s.id === id);
}

export const highlightServices = services.filter((s) =>
  ["commercial", "public", "workshops"].includes(s.id)
);
