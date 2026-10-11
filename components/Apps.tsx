"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { mobileApps } from "@/lib/data";
import { gsap, useGSAP } from "@/lib/gsap";
import { AppleIcon, GooglePlayIcon } from "./StoreIcons";
import CaseDialog, { type CaseItem } from "./CaseDialog";

export default function Apps() {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<CaseItem | null>(null);

  // Desktop: vertical scroll pans the shelf sideways so all eight apps are seen in one pass.
  // Images load eagerly because the pan moves them in with transforms, which lazy loading can miss.
  // Below 900px or with reduced motion, CSS turns it into a swipeable scroll-snap row instead.
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const dist = () => track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: pin.current,
          start: "top top",
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });
  });

  return (
    <section id="apps" aria-label="Mobile apps">
      <div className="apps-pin" ref={pin}>
        <div className="apps-track" ref={track}>
          <div className="apps-intro">
            <h2 className="h2">
              Eight apps, live on <em>both</em> stores.
            </h2>
            <p>
              Ride-sharing, student safety, dating, aviation, logistics, senior care, travel and events. Built in React
              Native and shipped to iOS and Android.
            </p>
          </div>
          {mobileApps.map((a) => (
            <div className="mapp" key={a.key}>
              <button type="button" aria-label={`Open ${a.title}`} onClick={() => setOpen({ kind: "app", item: a })}>
                <div className="m-shot">
                  <Image src={`/img/${a.key}-1.webp`} alt={`${a.title} screenshot`} width={273} height={592} loading="eager" />
                  <Image src={`/img/${a.key}-2.webp`} alt="" width={273} height={592} loading="eager" />
                </div>
              </button>
              <div>
                <h3>{a.title}</h3>
                <div className="cat">{a.category}</div>
              </div>
              <div className="stores">
                {a.appStore && (
                  <a className="store" href={a.appStore} target="_blank" rel="noopener noreferrer" aria-label={`${a.title} on the App Store`}>
                    <AppleIcon className="ic" />
                  </a>
                )}
                {a.playStore && (
                  <a className="store" href={a.playStore} target="_blank" rel="noopener noreferrer" aria-label={`${a.title} on Google Play`}>
                    <GooglePlayIcon className="ic" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CaseDialog open={open} onClose={() => setOpen(null)} />
    </section>
  );
}
