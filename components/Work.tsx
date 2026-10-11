"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { filters, webProjects, type WebFilter } from "@/lib/data";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK } from "@/lib/gsap";
import CaseDialog, { type CaseItem } from "./CaseDialog";

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<"all" | WebFilter>("all");
  const [open, setOpen] = useState<CaseItem | null>(null);

  const visible = webProjects.filter((p) => filter === "all" || p.filter === filter);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        ScrollTrigger.batch(".card", {
          start: "top 92%",
          once: true,
          onEnter: (batch) => gsap.from(batch, { y: 60, duration: 1, ease: "power3.out", stagger: 0.08 }),
        });
      });
    },
    { scope: root }
  );

  // Filter change is a state transition: the remaining cards settle back in.
  const firstFilterRun = useRef(true);
  useGSAP(
    () => {
      if (firstFilterRun.current) {
        firstFilterRun.current = false;
        return;
      }
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(".card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06 });
      });
      ScrollTrigger.refresh();
    },
    { scope: root, dependencies: [filter] }
  );

  return (
    <section className="sec" id="work" style={{ paddingTop: 0 }} ref={root}>
      <div className="wrap">
        <div className="work-head">
          <h2 className="h2">
            Selected <em>work</em>
          </h2>
          <div className="tabs" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.id}
                className="tab"
                type="button"
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                <sup>{f.id === "all" ? webProjects.length : webProjects.filter((p) => p.filter === f.id).length}</sup>
              </button>
            ))}
          </div>
        </div>
        <div className="grid">
          {visible.map((p) => (
            <button className="card" type="button" key={p.key} onClick={() => setOpen({ kind: "web", item: p })}>
              <div className="frame">
                <div>
                  <Image src={p.image} alt={`${p.title} screenshot`} width={p.width} height={p.height} sizes="(max-width: 760px) 100vw, 50vw" />
                </div>
              </div>
              <div className="meta">
                <div>
                  <h3>{p.title}</h3>
                  <p>
                    {p.filter === "ai" && <span className="tag-ai">AI</span>}
                    {p.category}
                  </p>
                </div>
                <span className="go">
                  <ArrowUpRight className="ic" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <CaseDialog open={open} onClose={() => setOpen(null)} />
    </section>
  );
}
