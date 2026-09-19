import { projects } from "../data/projects";
import ProjectEntry from "../components/ProjectEntry";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.lede}>
        Five things I've built and can still explain in detail — the stack,
        the decisions, and what broke along the way.
      </p>
      <div className={styles.list}>
        {projects.map((p) => (
          <div id={p.slug} key={p.slug} className={styles.anchorTarget}>
            <ProjectEntry project={p} expanded />
          </div>
        ))}
      </div>
    </section>
  );
}