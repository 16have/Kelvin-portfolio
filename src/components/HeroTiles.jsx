import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import styles from "./HeroTiles.module.css";

export default function HeroTiles() {
  const [offset, setOffset] = useState(0);
  const visible = [0, 1, 2].map((i) => projects[(offset + i) % projects.length]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => {
      setOffset((o) => (o + 1) % projects.length);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={styles.stack}>
      {visible.map((p, i) => (
        <div key={p.slug} className={styles.tile} style={{ "--i": i }}>
          <img src={p.image} alt={p.name} className={styles.img} loading="lazy" />
          <span className={styles.label}>{p.name}</span>
        </div>
      ))}
    </div>
  );
}