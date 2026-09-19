import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Starfield from "./Starfield";
import styles from "./Layout.module.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Notes" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.shell}>
      <Starfield />
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <NavLink to="/" className={styles.mark} end>
          <span className={styles.dot} />
          Kelvin Tullo
        </NavLink>
        <nav>
          <ul className={styles.navList}>
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}