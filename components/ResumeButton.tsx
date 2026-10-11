"use client";

import { DownloadSimple } from "@phosphor-icons/react";
import { resume } from "@/lib/data";

type Props = { className?: string; label?: string };

/* `download` renames the file and skips navigation. Browsers that ignore it (iOS Safari,
   the in-app browsers in LinkedIn and Instagram) fall back to target="_blank", so the PDF
   opens in a new tab instead of replacing the portfolio. */
export default function ResumeButton({ className = "btn", label = "Download CV" }: Props) {
  return (
    <a
      className={`${className} dl`}
      href={resume.href}
      download={resume.filename}
      type="application/pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (PDF)`}
    >
      <DownloadSimple className="ic" />
      {label}
    </a>
  );
}
