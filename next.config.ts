import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // The old static site served the CV from /img/CV/<name>.pdf under three different
  // filenames. Those links are out in the world (LinkedIn, applications), so keep them alive.
  async redirects() {
    return [
      { source: "/img/CV/:file", destination: "/huzaifa-shahid-resume.pdf", permanent: true },
      { source: "/HuzaifaResume_CV.pdf", destination: "/huzaifa-shahid-resume.pdf", permanent: true },
    ];
  },
};

export default nextConfig;
