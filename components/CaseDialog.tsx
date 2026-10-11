"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import type { MobileApp, WebProject } from "@/lib/data";
import { AppleIcon, GooglePlayIcon } from "./StoreIcons";

export type CaseItem = { kind: "web"; item: WebProject } | { kind: "app"; item: MobileApp };

export default function CaseDialog({ open, onClose }: { open: CaseItem | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) {
      d.showModal();
      d.scrollTop = 0;
    }
    if (!open && d.open) d.close();
  }, [open]);

  const item = open?.item;

  return (
    <dialog
      ref={ref}
      aria-labelledby="d-title"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {open && item && (
        <>
          <button className="d-close" type="button" onClick={onClose} aria-label="Close">
            <X className="ic" />
          </button>
          {open.kind === "web" ? (
            <div className="d-hero">
              <Image src={open.item.image} alt={`${item.title} screenshot`} width={open.item.width} height={open.item.height} sizes="(max-width: 1000px) 100vw, 1000px" />
            </div>
          ) : (
            <div className="d-shots">
              <Image src={`/img/${item.key}-1.webp`} alt={`${item.title} screen one`} width={273} height={592} />
              <Image src={`/img/${item.key}-2.webp`} alt={`${item.title} screen two`} width={273} height={592} />
            </div>
          )}
          <div className="d-body">
            <div>
              <span className="label">{item.category}</span>
              <h3 id="d-title">{item.title}</h3>
              <p>{item.description}</p>
              {open.kind === "app" && (
                <div className="d-stores">
                  {open.item.appStore && (
                    <a className="btn" href={open.item.appStore} target="_blank" rel="noopener noreferrer">
                      <AppleIcon className="ic" />
                      App Store
                    </a>
                  )}
                  {open.item.playStore && (
                    <a className="btn" href={open.item.playStore} target="_blank" rel="noopener noreferrer">
                      <GooglePlayIcon className="ic" />
                      Google Play
                    </a>
                  )}
                </div>
              )}
              {open.kind === "web" && open.item.url && (
                <div className="d-stores">
                  <a className="btn solid" href={open.item.url} target="_blank" rel="noopener noreferrer">
                    Visit site
                  </a>
                </div>
              )}
            </div>
            <div>
              <span className="label">Key features</span>
              <ul className="d-feats">
                {item.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
