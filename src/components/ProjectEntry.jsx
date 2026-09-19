import { Link } from "react-router-dom";
import styles from "./ProjectEntry.module.css";

export default function ProjectEntry({ project, expanded = false }) {
  return (
    <article className={styles.entry}>
      <div className={styles.margin}>
        <span className={styles.year}>{project.year}</span>
        <span className={styles.role}>{project.role}</span>
      </div>
      <div className={styles.body}>
        {expanded && project.image && (
          <img
            src={project.image}
            alt={project.name}
            className={styles.thumb}
            loading="lazy"
          />
        )}
        <h3 className={styles.name}>
          {expanded ? (
            project.name
          ) : (
            <Link to={`/projects#${project.slug}`}>{project.name}</Link>
          )}
        </h3>
        <p className={styles.summary}>
          {expanded ? project.detail : project.summary}
        </p>
        <p className={styles.stack}>{project.stack.join(" · ")}</p>
      </div>
    </article>
  );
}