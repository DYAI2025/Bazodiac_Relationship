import { useCallback, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MotionToggle } from "./components/MotionToggle";
import { Hero } from "./sections/Hero";
import { ValueFrame } from "./sections/ValueFrame";
import { HowItWorks } from "./sections/HowItWorks";
import { Report } from "./sections/Report";
import { OpportunityShadow } from "./sections/OpportunityShadow";
import { Themes } from "./sections/Themes";
import { Method } from "./sections/Method";
import { Privacy } from "./sections/Privacy";
import { FinalCTA } from "./sections/FinalCTA";
import { RegisterPage } from "./pages/Register";
import { LoginPage } from "./pages/Login";
import { MethodPage } from "./pages/MethodPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { parseSafeNext } from "./data/auth";

type RouteMatch = {
  page: "landing" | "register" | "login" | "method" | "privacy" | "terms" | "accessibility";
  hash: string;
  next: string;
};

function parseHash(rawHash: string): RouteMatch {
  const h = (rawHash || "").replace(/^#/, "");
  const [pathRaw, queryRaw] = h.split("?");
  const path = (pathRaw || "/").toLowerCase();
  const query = new URLSearchParams(queryRaw || "");
  const next = parseSafeNext(query.get("next"));

  if (path === "/" || path === "") return { page: "landing", hash: "/", next };
  if (path.startsWith("/register")) return { page: "register", hash: h, next };
  if (path.startsWith("/login")) return { page: "login", hash: h, next };
  if (path === "/method") return { page: "method", hash: h, next };
  if (path === "/privacy") return { page: "privacy", hash: h, next };
  if (path === "/terms") return { page: "terms", hash: h, next };
  if (path === "/accessibility") return { page: "accessibility", hash: h, next };
  return { page: "landing", hash: path, next };
}

export default function App() {
  const [hash, setHash] = useState<string>(() => window.location.hash);

  useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const route = parseHash(hash);

  const scrollToId = useCallback((id: string) => {
    const clean = id.replace(/^\//, "");
    const el = document.getElementById(clean);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "-1");
    setTimeout(() => {
      try { (el as HTMLElement).focus({ preventScroll: true }); } catch { /* noop */ }
    }, 280);
  }, []);

  const onNavigate = useCallback((target: string) => {
    if (!target.startsWith("/#/")) return;
    const path = target.slice(2);
    window.location.hash = path;
    if (["/", "/how-it-works", "/inside-report", "/method", "/privacy"].includes(path)) {
      if (path !== "/") setTimeout(() => scrollToId(path), 60);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollToId]);

  useEffect(() => {
    if (route.page !== "landing") {
      if (route.page === "register") document.title = "Create account — Bazodiac Relationships";
      else if (route.page === "login") document.title = "Log in — Bazodiac Relationships";
      else if (route.page === "method") document.title = "Method — Bazodiac Relationships";
      else if (route.page === "privacy") document.title = "Privacy principles — Bazodiac Relationships";
      else if (route.page === "terms") document.title = "Prototype terms — Bazodiac Relationships";
      else if (route.page === "accessibility") document.title = "Accessibility — Bazodiac Relationships";
      window.scrollTo({ top: 0 });
      return;
    }
    document.title = "Bazodiac Relationships";
    const path = route.hash.replace(/^\//, "");
    if (path && path !== "/") setTimeout(() => scrollToId(path), 60);
  }, [route, scrollToId]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header onNavigate={onNavigate} currentPath={route.hash.replace(/^\//, "")} />

      {route.page === "landing" && (
        <main id="main" role="main">
          <Hero onNavigate={onNavigate} />
          <ValueFrame />
          <HowItWorks onNavigate={onNavigate} />
          <Report />
          <OpportunityShadow />
          <Themes />
          <Method onNavigate={onNavigate} />
          <Privacy onNavigate={onNavigate} />
          <FinalCTA onNavigate={onNavigate} />
        </main>
      )}

      {route.page === "register" && <RegisterPage onNavigate={onNavigate} next={route.next} />}
      {route.page === "login" && <LoginPage onNavigate={onNavigate} next={route.next} />}
      {route.page === "method" && <MethodPage onNavigate={onNavigate} />}
      {route.page === "privacy" && <PrivacyPage onNavigate={onNavigate} />}
      {route.page === "terms" && <TermsPage onNavigate={onNavigate} />}
      {route.page === "accessibility" && <AccessibilityPage onNavigate={onNavigate} />}

      <Footer onNavigate={onNavigate} />
      <MotionToggle />
    </>
  );
}
