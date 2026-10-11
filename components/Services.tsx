"use client";

import { useRef } from "react";
import Image from "next/image";
import { Browser, DeviceMobile, Sparkle, Database } from "@phosphor-icons/react";
import { gsap, useGSAP, MOTION_OK } from "@/lib/gsap";

const stack = ["Node.js", "Express", "REST & GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Supabase", "Firebase", "Stripe", "PayPal", "TypeScript", "Redux", "Tailwind CSS"];

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>(".cell").forEach((c, i) =>
          gsap.from(c, { y: 60 + (i % 2) * 30, ease: "none", scrollTrigger: { trigger: c, start: "top 100%", end: "top 60%", scrub: 0.6 } })
        );
      });
    },
    { scope: root }
  );

  return (
    <section className="sec" id="services" ref={root}>
      <div className="wrap">
        <h2 className="h2">
          What I <em>build</em>
        </h2>
        <div className="bento">
          <div className="cell c-web">
            <Browser className="ic big" />
            <h3>Full-stack web apps</h3>
            <p>SaaS platforms, dashboards and online stores, built with React, Next.js, Node.js and MongoDB.</p>
            <div className="shot">
              <Image src="/img/gymflow.webp" alt="GymFlow dashboard" width={1280} height={853} sizes="(max-width: 900px) 100vw, 55vw" />
            </div>
          </div>
          <div className="cell c-mob">
            <DeviceMobile className="ic big" />
            <h3>iOS and Android apps</h3>
            <p>Cross-platform apps in React Native, published to the App Store and Google Play.</p>
            <div className="phones">
              <Image src="/img/belinee-2.webp" alt="Belinee app" width={273} height={592} />
              <Image src="/img/thrive65-1.webp" alt="Boomers Thrive65 app" width={460} height={996} />
            </div>
          </div>
          <div className="cell c-ai">
            <Sparkle className="ic big" />
            <h3>AI inside real products</h3>
            <p>Recipe generators, personalised fitness plans, smart search and automation, wired into apps people already use.</p>
            <div className="ai-img">
              <Image src="/img/mealmind.webp" alt="MealMind AI recipe app" width={690} height={390} sizes="(max-width: 900px) 100vw, 40vw" />
            </div>
          </div>
          <div className="cell c-back">
            <Database className="ic big" />
            <h3>Backends, APIs and payments</h3>
            <p>REST and GraphQL APIs, auth, databases and subscriptions that keep the product running.</p>
            <div className="chips">
              {stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
