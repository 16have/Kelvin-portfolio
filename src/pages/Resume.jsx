import { Link } from "react-router-dom";
import styles from "./Resume.module.css";

const skillGroups = [
  { title: "Backend", items: ["Django / DRF", "Flask", "FastAPI"] },
  { title: "Frontend", items: ["React", "Tailwind / Bootstrap", "HTML5", "CSS3", "Javascript"] },
  { title: "Data & ML", items: ["XGBoost", "Statistical modeling", "PostgreSQL"] },
  { title: "DevOps", items: ["Docker", "Render", "Vercel"] },
  { title: "IT", items: ["Software installations", "Hardware maintenance"] },
];

export default function Resume() {
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <h1 className={styles.title}>Resume</h1>
        {/* Drop your PDF at public/resume.pdf and this link will serve it. */}
        <a className={styles.download} href="/resume.pdf" download>
          Download PDF
        </a>
      </div>

      <p className={styles.summary}>
        Full-stack developer working across backend, frontend, and
        data/ML — from multi-tenant business tools to web applications. Based in Nairobi, Kenya.
      </p>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Skills</h2>
        <div className={styles.skillGroups}>
          {skillGroups.map((g) => (
            <div key={g.title} className={styles.skillGroup}>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Selected projects</h2>
        <p className={styles.summary}>
          Full detail, stack, and write-ups live on the{" "}
          <Link to="/projects">projects page</Link>.
        </p>
      </div>
    </section>
  );
}