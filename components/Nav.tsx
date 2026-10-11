"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  // Solid nav once the hero eyebrow leaves the viewport (no scroll listener).
  useEffect(() => {
    const target = document.querySelector(".eyebrow");
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "-80px 0px 0px 0px",
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-in">
        <a className="brand" href="#top">
          Huzaifa<b>.</b>
        </a>
        <nav className="links" aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#apps">Apps</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
        </nav>
        <a className="btn solid" href="#contact">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
