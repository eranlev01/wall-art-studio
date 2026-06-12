"use client";

import { ArtButton } from "@/components/ui/art-button";
import { ArtCardWave } from "@/components/ui/art-card-wave";
import { ThemePreviewBodyClass } from "@/app/theme-preview/theme-preview-body";
import {
  getStoredThemeId,
  persistAndApplySiteTheme,
  resetSiteTheme,
  SITE_THEME_CHANGE_EVENT,
} from "@/lib/theme-storage";
import { routes } from "@/lib/routes";
import {
  DEFAULT_THEME_ID,
  getTheme,
  SITE_THEMES,
  THEME_GROUPS,
  themesByGroup,
  type ThemeId,
  type SiteTheme,
  themeToCssVars,
} from "@/lib/themes";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

function Swatch({ label, color }: { label: string; color: string }) {
  return (
    <div className="tp-swatch">
      <span className="tp-swatch-chip" style={{ background: color }} />
      <span className="tp-swatch-label">{label}</span>
      <span className="tp-swatch-hex">{color}</span>
    </div>
  );
}

function ThemeMockups() {
  return (
    <div className="tp-mocks">
      <section className="tp-mock-hero">
        <span className="tag">סטודיו לציור קיר</span>
        <h2 className="tp-mock-h2">
          הופכים קירות
          <br />
          <span className="tp-accent">ליצירות</span>
        </h2>
        <p className="tp-mock-lead">
          גרפיטי, ציורי קיר וcanvas מקוריים — מפרויקטים עירוניים ועד יצירות לבית.
        </p>
        <div className="tp-mock-btns">
          <ArtButton variant="y" href="#">
            לפרויקטים שלנו
          </ArtButton>
          <ArtButton variant="ghost" href="#">
            צרו קשר
          </ArtButton>
        </div>
      </section>

      <section className="tp-mock-cards">
        <article className="tp-mock-card">
          <div className="tp-mock-frame" style={{ borderColor: "var(--acc)" }}>
            <div className="tp-mock-frame-fill" />
            <span className="tp-mock-num">01</span>
          </div>
          <h3 className="tp-mock-card-title">קירות מסחריים</h3>
          <p className="tp-mock-card-desc">מסעדות, משרדים וחנויות</p>
        </article>

        <article className="art-card art-card-quote tp-mock-quote">
          <div className="art-card-wave-top">
            <span className="art-card-quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="test-body">
              עבודה מדהימה — הקיר הפך לנקודת מבט בכל החנות.
            </p>
            <ArtCardWave />
          </div>
          <div className="art-card-body art-card-body-center">
            <div className="test-author">
              <div className="test-av">ד</div>
              <div className="test-name">דנה כהן</div>
              <div className="test-role">בעלת מסעדה</div>
            </div>
          </div>
        </article>
      </section>

      <section className="tp-mock-strip banner-accent">
        <span className="tag">שיתופי פעולה</span>
        <h3 className="tp-mock-strip-h">רוצים לעבוד יחד?</h3>
        <ArtButton variant="o" href="#">
          שלחו הצעה →
        </ArtButton>
      </section>
    </div>
  );
}

function ThemeChip({
  theme,
  active,
  siteActive,
  onSelect,
}: {
  theme: SiteTheme;
  active: boolean;
  siteActive: boolean;
  onSelect: (id: ThemeId) => void;
}) {
  return (
    <button
      type="button"
      className={`tp-chip${active ? " active" : ""}${siteActive ? " site-active" : ""}`}
      onClick={() => onSelect(theme.id)}
      aria-pressed={active}
      aria-label={theme.name}
    >
      <span className="tp-chip-dots">
        <i style={{ background: theme.tokens.acc }} />
        <i style={{ background: theme.tokens.sec }} />
      </span>
      <span className="tp-chip-name">{theme.name}</span>
    </button>
  );
}

function ThemePickerButton({
  theme,
  active,
  siteActive,
  onSelect,
}: {
  theme: SiteTheme;
  active: boolean;
  siteActive: boolean;
  onSelect: (id: ThemeId) => void;
}) {
  return (
    <button
      type="button"
      className={`tp-theme-btn${active ? " active" : ""}${siteActive ? " site-active" : ""}`}
      onClick={() => onSelect(theme.id)}
      aria-pressed={active}
    >
      <span className="tp-theme-dots">
        <i style={{ background: theme.tokens.bg }} />
        <i style={{ background: theme.tokens.acc }} />
        <i style={{ background: theme.tokens.sec }} />
      </span>
      <span className="tp-theme-text">
        <strong>
          {theme.name}
          {siteActive && <span className="tp-site-badge">פעיל</span>}
        </strong>
        <small>{theme.tagline}</small>
      </span>
    </button>
  );
}

export default function ThemePreviewPage() {
  const [activeId, setActiveId] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [siteThemeId, setSiteThemeId] = useState<ThemeId>(DEFAULT_THEME_ID);
  const [appliedToast, setAppliedToast] = useState(false);

  const active = getTheme(activeId);
  const siteTheme = getTheme(siteThemeId);
  const isActiveOnSite = activeId === siteThemeId;

  const refreshSiteTheme = useCallback(() => {
    setSiteThemeId(getStoredThemeId() ?? DEFAULT_THEME_ID);
  }, []);

  const onSelect = useCallback((id: ThemeId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  const onApplyToSite = useCallback(() => {
    persistAndApplySiteTheme(activeId);
    setSiteThemeId(activeId);
    setAppliedToast(true);
    window.setTimeout(() => setAppliedToast(false), 3200);
  }, [activeId]);

  const onResetDefault = useCallback(() => {
    resetSiteTheme();
    setSiteThemeId(DEFAULT_THEME_ID);
    setActiveId(DEFAULT_THEME_ID);
    window.history.replaceState(null, "", `#${DEFAULT_THEME_ID}`);
  }, []);

  useEffect(() => {
    refreshSiteTheme();
    const hash = window.location.hash.replace("#", "");
    if (SITE_THEMES.some((t) => t.id === hash)) {
      setActiveId(hash as ThemeId);
    } else {
      const stored = getStoredThemeId();
      if (stored) setActiveId(stored);
    }

    const onThemeChange = () => refreshSiteTheme();
    window.addEventListener(SITE_THEME_CHANGE_EVENT, onThemeChange);
    return () => window.removeEventListener(SITE_THEME_CHANGE_EVENT, onThemeChange);
  }, [refreshSiteTheme]);

  return (
    <div className="tp-page">
      <ThemePreviewBodyClass />

      {appliedToast && (
        <div className="tp-toast" role="status">
          הפלטה <strong>{active.name}</strong> הוחלה על כל האתר
        </div>
      )}

      <header className="tp-header">
        <div className="tp-header-inner">
          <div>
            <p className="tp-kicker">בחירת עיצוב · נשמר בדפדפן</p>
            <h1 className="tp-title">בחירת פלטת צבעים</h1>
            <p className="tp-sub">
              {SITE_THEMES.length} פלטות · פעילה באתר: <strong>{siteTheme.name}</strong>
            </p>
          </div>
          <Link href={routes.home} className="tp-back">
            ← לדף הבית
          </Link>
        </div>
      </header>

      {/* Mobile: horizontal theme strip */}
      <div className="tp-chip-scroll" role="tablist" aria-label="בחירת פלטה">
        {SITE_THEMES.map((theme) => (
          <ThemeChip
            key={theme.id}
            theme={theme}
            active={theme.id === activeId}
            siteActive={theme.id === siteThemeId}
            onSelect={onSelect}
          />
        ))}
      </div>

      <div className="tp-layout">
        <aside className="tp-picker">
          <p className="tp-picker-label">בחרו פלטה ({SITE_THEMES.length})</p>
          {THEME_GROUPS.map((group) => (
            <div key={group.id} className="tp-picker-group">
              <p className="tp-picker-group-label">{group.label}</p>
              {themesByGroup(group.id).map((theme) => (
                <ThemePickerButton
                  key={theme.id}
                  theme={theme}
                  active={theme.id === activeId}
                  siteActive={theme.id === siteThemeId}
                  onSelect={onSelect}
                />
              ))}
            </div>
          ))}

          <div className="tp-apply-box tp-apply-box-sidebar">
            <ArtButton
              variant="y"
              className="btn-block"
              onClick={onApplyToSite}
              disabled={isActiveOnSite}
            >
              {isActiveOnSite ? "פלטה זו פעילה באתר" : "החל על האתר"}
            </ArtButton>
            <button type="button" className="tp-reset-btn" onClick={onResetDefault}>
              איפוס לניאון רחוב (ברירת מחדל)
            </button>
          </div>

          <details className="tp-notes">
            <summary>פרטים על {active.name}</summary>
            <div className="tp-notes-body">
              <h3>למי מתאים?</h3>
              <p>{active.audience}</p>
              <h3>יתרונות</h3>
              <ul>
                {active.pros.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <h3>שיקולים</h3>
              <ul>
                {active.cons.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </details>
        </aside>

        <div className="tp-preview-wrap">
          <div
            className="theme-shell"
            data-theme={activeId}
            style={themeToCssVars(active)}
          >
            <div className="tp-preview-bar">
              <span>{active.name}</span>
              <div className="tp-preview-swatches">
                <Swatch label="רקע" color={active.tokens.bg} />
                <Swatch label="דגש" color={active.tokens.acc} />
                <Swatch label="משני" color={active.tokens.sec} />
              </div>
            </div>
            <ThemeMockups />
          </div>
        </div>
      </div>

      {/* Mobile: sticky apply bar */}
      <div className="tp-apply-mobile">
        <span className="tp-apply-mobile-label">{active.name}</span>
        <ArtButton
          variant="y"
          size="sm"
          onClick={onApplyToSite}
          disabled={isActiveOnSite}
        >
          {isActiveOnSite ? "פעיל" : "החל על האתר"}
        </ArtButton>
      </div>

      <footer className="tp-footer">
        <p>
          הבחירה נשמרת ב-localStorage — לחצו &quot;החל על האתר&quot; ואז גלשו לדף הבית לראות
          את השינוי בכל העמודים.
        </p>
      </footer>
    </div>
  );
}
