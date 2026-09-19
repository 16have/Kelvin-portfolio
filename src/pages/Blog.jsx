import { Link } from "react-router-dom";
import { posts } from "../data/posts";
import styles from "./Blog.module.css";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function Blog() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Notes</h1>
      <p className={styles.lede}>
        Write-ups from projects as I build them — mostly the parts that took
        longer to figure out than they should have.
      </p>
      <div className={styles.list}>
        {posts.map((post) => (
          <article key={post.slug} className={styles.entry}>
            <span className={styles.date}>{formatDate(post.date)}</span>
            <h2 className={styles.postTitle}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}