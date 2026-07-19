import { useEffect, useRef, useState } from "react";

type Props = { onNavigate: (path: string) => void; currentPath: string };

const NAV_LINKS = [
  { label: "How it works", target: "/#/how-it-works" },
  { label: "Inside the report", target: "/#/inside-report" },
  { label: "Method", target: "/#/method" },
  { label: "Privacy", target: "/#/privacy" },
];

export function Header({ onNavigate, currentPath }: Props) {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const handleNav = (target: string) => { setOpen(false); onNavigate(target); };
  const isActive = (target: string) => target === `/#${currentPath}`;

  return (
    <header className="site-header" role="banner">
      <div className="shell header-row">
        <a href="/#/" className="brand-lockup" aria-label="Bazodiac Relationships — go to top" onClick={(e) => { e.preventDefault(); handleNav("/#/"); }}>
          <span className="wordmark serif-display">Bazodiac</span><span className="sub">Relationships</span>
        </a>
        <nav className="nav" aria-label="Primary">
          {NAV_LINKS.map((l) => <a key={l.target} href={l.target} className={isActive(l.target) ? "active" : ""} onClick={(e) => { e.preventDefault(); handleNav(l.target); }}>{l.label}</a>)}
        </nav>
        <div className="header-actions">
          <a href="/#/login" className="btn btn-ghost btn-sm" onClick={(e) => { e.preventDefault(); handleNav("/#/login"); }}>Log in</a>
          <a href="/#/register?next=create-report" className="btn btn-primary btn-sm" onClick={(e) => { e.preventDefault(); handleNav("/#/register?next=create-report"); }}>Create account</a>
          <button ref={menuBtnRef} type="button" className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`}>
        <nav aria-label="Mobile">
          <a href="/#/register?next=create-report" onClick={(e) => { e.preventDefault(); handleNav("/#/register?next=create-report"); }}>Create account</a>
          {NAV_LINKS.map((l) => <a key={l.target} href={l.target} onClick={(e) => { e.preventDefault(); handleNav(l.target); }}>{l.label}</a>)}
          <a href="/#/login" onClick={(e) => { e.preventDefault(); handleNav("/#/login"); }}>Log in</a>
        </nav>
      </div>
    </header>
  );
}
