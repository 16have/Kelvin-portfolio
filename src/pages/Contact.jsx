import styles from "./Contact.module.css";

// Replace these with your real details.
const links = [
  { label: "Email", value: "459have@gmail.com", href: "mailto:459have@gmail.com" },
  { label: "GitHub", value: "github.com/16have", href: "https://github.com/16have" },
  { label: "LinkedIn", value: "linkedin.com/in/Kelvin-Tullo", href: "https://linkedin.com/in/Kelvin-Tullo" },
];
export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Contact</h1>
      <p className={styles.lede}>
        The fastest way to reach me is email. Happy to talk about a project,
        a role, or just the work above.
      </p>
      <div className={styles.list}>
        {links.map((l) => (
          <div className={styles.row} key={l.label}>
            <span className={styles.label}>{l.label}</span>
            <a className={styles.value} href={l.href} target="_blank" rel="noreferrer">
              {l.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}