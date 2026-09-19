export const posts = [
 {
  slug: "flask-to-django-rebuild",
  title: "Rebuilding MyDuka's backend from Flask to Django",
  date: "2026-06-14",
  excerpt:
    "The original Flask scaffold got MyDuka off the ground fast, but it didn't hold up once role-based dashboards and multi-tenancy came into the picture. Notes on the rebuild across six Django apps.",
  body: "Draft — cover why Flask stopped being enough once multi-tenant and role-based requirements landed, how the six Django apps got split up, and what it took to reconcile the React/Vite frontend (originally scaffolded against the Flask API) onto the new Django/DRF backend and JWT auth.",
  },
  {
    slug: "cors-across-two-hosts",
    title: "Debugging CORS across Render and Vercel",
    date: "2026-05-02",
    excerpt:
      "A backend on Render, a frontend on Vercel, and an ALLOWED_HOSTS error that only made sense once I saw the regex pattern Django was actually matching against.",
    body: "Draft — walk through the ALLOWED_HOSTS fix, the CORS regex gotcha, and the Linux case-sensitive filename bug that only showed up in production.",
  },
  {
    slug: "firebase-to-jwt",
    title: "Migrating auth from Firebase to JWT mid-project",
    date: "2026-03-20",
    excerpt:
      "Firebase auth was the fast start. Here's what changed once InventoryPulse needed something the project owned outright.",
    body: "Draft — cover why Firebase stopped fitting, the migration sequence, and what broke along the way.",
  },
];