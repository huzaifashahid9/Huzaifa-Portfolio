const services = [
  "Full-stack web apps",
  "iOS & Android apps",
  "AI integration",
  "E-commerce",
  "Dashboards & SaaS",
  "APIs & backends",
  "Payments",
];

// The page's only marquee. Items render twice so the loop is seamless.
export default function Band() {
  return (
    <div className="band-clip">
      <div className="band" aria-label="Services">
        <div className="band-track">
          {services.map((s) => (
            <span key={s}>{s}</span>
          ))}
          {services.map((s) => (
            <span key={`${s}-copy`} aria-hidden="true">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
