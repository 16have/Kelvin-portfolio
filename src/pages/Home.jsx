import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProjectEntry from "../components/ProjectEntry";
import { projects } from "../data/projects";
import styles from "./Home.module.css";

const featured = projects.slice(0, 3);

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className={styles.sectionTitle}>Selected work</h2>
          <Link to="/projects" className={styles.sectionLink}>
            All projects
          </Link>
        </div>
        {featured.map((p) => (
          <ProjectEntry key={p.slug} project={p} />
        ))}
      </section>
    </>
  );
}