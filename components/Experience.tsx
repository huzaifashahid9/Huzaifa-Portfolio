import { Trophy, GraduationCap } from "@phosphor-icons/react/dist/ssr";

const work = [
  {
    when: "Jan 2026 - Now",
    role: "App Developer",
    org: "8ration, Karachi",
    points: ["Building cross-platform mobile apps in React Native for iOS and Android.", "Shipping features in agile sprints with senior developers."],
  },
  {
    when: "Jun 2025 - Jan 2026",
    role: "Full Stack Developer",
    org: "Tecxeo Private Limited, Karachi",
    points: ["Built MERN web apps serving 1,000+ daily active users.", "Designed REST APIs and tuned MongoDB queries, cutting response times by 40%."],
  },
  {
    when: "Sep 2024 - Jun 2025",
    role: "Frontend Developer",
    org: "SMIT (Saylani Mass IT Training), Karachi",
    points: ["Built responsive React apps with a focus on performance and user experience."],
  },
];

const education = [
  { when: "2024 - 2028", role: "BS Software Engineering", org: "FAST-NUCES, Karachi" },
  { when: "2022 - 2024", role: "Intermediate, Pre-Engineering", org: "Army Public School (APSACS), Karachi" },
];

export default function Experience() {
  return (
    <section className="sec" id="experience" style={{ paddingTop: 0 }}>
      <div className="wrap xp">
        <div className="xp-left">
          <h2 className="h2">Experience</h2>
          <p>From frontend work at SMIT to full-stack and mobile roles, while studying Software Engineering at FAST-NUCES.</p>
        </div>
        <div>
          <div className="xp-group">
            <h3>Work</h3>
            {work.map((r) => (
              <div className="role" key={r.role}>
                <span className="when">{r.when}</span>
                <div>
                  <h4>{r.role}</h4>
                  <div className="org">{r.org}</div>
                  <ul>
                    {r.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="xp-group">
            <h3>Education</h3>
            {education.map((r) => (
              <div className="role" key={r.role}>
                <span className="when">{r.when}</span>
                <div>
                  <h4>{r.role}</h4>
                  <div className="org">{r.org}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="xp-group">
            <h3>Awards</h3>
            <div className="awards">
              <div className="award wide">
                <Trophy className="ic" />
                <div>
                  <b>Saylani Hackathon Winner 2025</b>
                  <span>Won with a software solution built under hackathon pressure.</span>
                </div>
              </div>
              <div className="award">
                <GraduationCap className="ic" />
                <div>
                  <b>Developer Day</b>
                  <span>FAST University</span>
                </div>
              </div>
              <div className="award">
                <GraduationCap className="ic" />
                <div>
                  <b>Procom Security Track</b>
                  <span>FAST University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
