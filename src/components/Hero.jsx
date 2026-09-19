import HeroTiles from "./HeroTiles";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>Software developer, Nairobi</p>
        <h1 className={styles.title}>
          Builds systems
          <br />
          that hold up.
        </h1>
        <p className={styles.lede}>
          Full-stack developer working across web platforms and applied ML.
        </p>
        <a href="/projects" className={styles.cta}>
          View work
        </a>
      </div>

      <HeroTiles />
    </section>
  );
}