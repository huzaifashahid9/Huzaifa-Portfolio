"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";

const statement =
  "I turn ideas into products people use: full-stack web apps, cross-platform mobile apps and AI-powered tools. I started at SMIT building small projects for startups. Today I ship complete products, from the database to the App Store.";

const stats = [
  { to: 18, label: "products shipped across web and mobile" },
  { to: 8, label: "apps live on the App Store and Google Play" },
  { to: 1000, suffix: "+", label: "daily active users on apps I built at Tecxeo" },
  { text: "2025", label: "Saylani Hackathon winner" },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // The statement reads in word by word as you scroll.
        gsap.fromTo(
          ".statement .w",
          { color: "#a3a49f" },
          {
            color: "#141518",
            stagger: 0.05,
            ease: "none",
            scrollTrigger: { trigger: ".statement", start: "top 80%", end: "bottom 45%", scrub: true },
          }
        );

        // Count the numbers up once.
        gsap.utils.toArray<HTMLElement>("[data-to]").forEach((el) => {
          const n = Number(el.dataset.to);
          const suffix = el.dataset.suffix ?? "";
          const o = { v: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () =>
              gsap.to(o, {
                v: n,
                duration: 1.6,
                ease: "power3.out",
                onUpdate: () => {
                  el.textContent = Math.round(o.v).toLocaleString("en-US") + suffix;
                },
              }),
          });
        });
      });
    },
    { scope: root }
  );

  return (
    <section className="sec" id="about" ref={root}>
      <div className="wrap">
        <p className="statement">
          {statement.split(" ").map((w, i) => (
            <span className="w" key={i}>
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              {s.to !== undefined ? (
                <strong data-to={s.to} data-suffix={s.suffix}>
                  {s.to.toLocaleString("en-US") + (s.suffix ?? "")}
                </strong>
              ) : (
                <strong>{s.text}</strong>
              )}
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
