"use client";

import { useRef, useState } from "react";
import { Copy, Check, Phone, MapPin, GithubLogo, LinkedinLogo, InstagramLogo } from "@phosphor-icons/react";
import { contact } from "@/lib/data";

export default function Contact() {
  const emailRef = useRef<HTMLElement>(null);
  const [toast, setToast] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = (msg: string) => {
    setToast(msg);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 1900);
  };

  const selectEmail = () => {
    if (!emailRef.current) return;
    const r = document.createRange();
    r.selectNodeContents(emailRef.current);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(r);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      show("Email copied");
    } catch {
      selectEmail();
      show("Email selected, press Ctrl+C");
    }
  };

  return (
    <section id="contact" style={{ paddingBottom: 24 }}>
      <div className="wrap">
        <div className="contact">
          <div className="label" style={{ color: "#3d3412", marginBottom: 22 }}>
            Contact
          </div>
          <h2 className="h2">
            Have a product in mind? Let&apos;s <em>build</em> it.
          </h2>
          <div className="c-rows">
            <div>
              <div className="mail">
                <a href={`mailto:${contact.email}`} style={{ textDecoration: "none" }}>
                  <code ref={emailRef}>{contact.email}</code>
                </a>
              </div>
              <div className="ctas" style={{ marginTop: 22 }}>
                <button className="btn solid" type="button" onClick={copy}>
                  <Copy className="ic" />
                  Copy email
                </button>
              </div>
            </div>
            <div className="c-meta">
              <div>
                <Phone className="ic" />
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} style={{ textDecoration: "none" }}>
                  {contact.phone}
                </a>
              </div>
              <div>
                <MapPin className="ic" />
                {contact.location}
              </div>
              <div className="socials">
                <a className="soc" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubLogo className="ic" />
                </a>
                <a className="soc" href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinLogo className="ic" />
                </a>
                <a className="soc" href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramLogo className="ic" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`toast${toast ? " show" : ""}`} role="status">
        <Check className="ic" />
        <span>{toast ?? ""}</span>
      </div>
    </section>
  );
}
