import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";
import styles from "./BlogPost.module.css";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className={styles.section}>
        <h1>Not found</h1>
        <p>There's no note at this address.</p>
        <Link to="/blog" className={styles.back}>
          Back to notes
        </Link>
      </section>
    );
  }

  return (
    <article className={styles.section}>
      <Link to="/blog" className={styles.back}>
        Back to notes
      </Link>
      <span className={styles.date}>{formatDate(post.date)}</span>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.body}>{post.body}</p>
    </article>
  );
}