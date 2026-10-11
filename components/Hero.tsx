"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        // Entrance: shape, then person, then name. Sets the reading order.
        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .from(".shape", { scale: 0.5, rotate: -30, duration: 1.4 })
          .from(".photo", { yPercent: 14, duration: 1.4 }, "<.1")
          .from(".name .ln > span", { yPercent: 105, duration: 1.1, stagger: 0.08 }, "<.15")
          .from(".eyebrow, .lede, .ctas", { y: 20, duration: 0.9, stagger: 0.07 }, "<.2")
          .from(".badge", { scale: 0, duration: 0.9, ease: "back.out(1.7)" }, "<.2");

        // Depth on the way out: photo drifts slower than the page, shape turns a little.
        const st = { trigger: root.current, start: "top top", end: "bottom top", scrub: true };
        gsap.to(".photo", { yPercent: 8, ease: "none", scrollTrigger: st });
        gsap.to(".shape", { rotate: 20, ease: "none", scrollTrigger: { ...st } });
      });
    },
    { scope: root }
  );

  return (
    <section className="hero" ref={root}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow label">Software engineer, full-stack &amp; AI</div>
          <h1 className="name">
            <span className="ln">
              <span>Huzaifa</span>
            </span>
            <span className="ln">
              <span>
                Shahid<span className="dot">.</span>
              </span>
            </span>
          </h1>
          <p className="lede">
            I design and build web apps, iOS and Android apps, and AI features that businesses rely on every day.
          </p>
          <div className="ctas">
            <a className="btn solid" href="#work">
              View work <ArrowUpRight className="ic" />
            </a>
            <a className="btn" href="#contact">
              Let&apos;s talk
            </a>
          </div>
        </div>

        <div className="portrait">
          <div className="shape">
            <i />
          </div>
          <Image
            className="photo"
            src="/img/huzaifa.webp"
            alt="Huzaifa Shahid in a black suit"
            width={693}
            height={1152}
            priority
            sizes="(max-width: 900px) 70vw, 440px"
          />
          <a className="badge" href="#contact" aria-label="Open to new projects. Go to contact">
            <svg className="ring" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text>
                <textPath href="#circ">Open to new projects &#8226; Open to new projects &#8226;</textPath>
              </text>
            </svg>
            <span className="core">
              <ArrowUpRight className="ic" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
