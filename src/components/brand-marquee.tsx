const BRANDS = [
  "ארומה",
  "KFC ישראל",
  "אלטשולר שחם",
  "עיריית תל אביב",
  "ישרוטל",
  "גוגל ישראל",
  "חוף אורנים",
  "בית ספר הילל",
];

function BrandSegment() {
  return (
    <>
      {BRANDS.map((name) => (
        <span key={name} className="marquee-item">
          {name}
          <span className="marquee-sep" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </>
  );
}

/** Seamless infinite brand strip — duplicated segments, no loop gap */
export function BrandMarquee() {
  return (
    <section className="marquee-strip" aria-label="לקוחות שעבדנו איתם">
      <div className="marquee-label">עבדנו עם</div>
      <div className="marquee-viewport">
        <div className="marquee-runner">
          <div className="marquee-segment">
            <BrandSegment />
          </div>
          <div className="marquee-segment" aria-hidden="true">
            <BrandSegment />
          </div>
        </div>
      </div>
    </section>
  );
}
