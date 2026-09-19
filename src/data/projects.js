export const projects = [
  {
    slug: "myduka",
    name: "MyDuka",
    year: "2026",
    role: "Team",
    summary:
      "A multi-tenant inventory and bookkeeping system for small businesses in Kenya, with role-based dashboards for merchants, admins, and clerks.",
    detail:
      "Grew out of a duka bookkeeping and M-Pesa reconciliation concept validated as the strongest idea among several considered. The backend was rebuilt across six Django apps behind DRF, with a React and Vite frontend reconciled from an earlier Flask-based scaffold onto JWT auth. The UI followed a Figma spec with distinct dashboards per role, and the full test suite — 17 tests — passes across the merged frontend and backend branches.",
    stack: ["Django", "DRF", "React", "Vite", "PostgreSQL"],
    highlight: "Role-based dashboards, multi-tenant by design",
    image: "https://image.thum.io/get/width/800/https://myduka-frontend-1.onrender.com",
  },
  {
    slug: "olive-restaurant",
    name: "Olive Restaurant",
    year: "2026",
    role: "Solo",
    summary:
      "A full-stack ordering platform for a restaurant, with a live order-tracking page and a production deployment split across two hosts.",
    detail:
      "Django REST Framework backend paired with a React and Tailwind frontend, deployed with the backend on Render and the frontend on Vercel. Getting the two to talk in production meant working through ALLOWED_HOSTS, CORS regex patterns, and a case-sensitive filename bug that only surfaced on Linux. Order tracking updates via polling rather than websockets, traded off for deployment simplicity.",
    stack: ["Django REST Framework", "React", "Tailwind", "Render", "Vercel"],
    highlight: "Cross-host deployment, polling-based live tracking",
    image: "https://image.thum.io/get/width/800/https://olive-restaurant-frontend.vercel.app",
  },
  {
    slug: "bakery-management",
    name: "Sweet Delicacy Bakery",
    year: "2026",
    role: "Team",
    summary:
      "An online ordering platform for a bakery, letting customers browse products, manage a cart, and check out, with a full admin side for inventory and order management.",
    detail:
      "React and Tailwind frontend talking to a Flask backend over a REST API, with Flask-SQLAlchemy and SQLite handling storage. Customers browse and search products, manage a shopping cart, and place orders through to payment. Admins get a separate secured flow — product CRUD with image upload, order status updates, and inventory monitoring. Built with a small team, deployed on Render.",
    stack: ["React", "Tailwind", "Flask", "SQLAlchemy", "SQLite"],
    highlight: "M-Pesa-ready ordering flow, full admin product/order management",
    image: "https://image.thum.io/get/width/800/https://bakery-management-frontend-41cl.onrender.com",
  },
  {
    slug: "project-chama",
    name: "Project Chama",
    year: "2026",
    role: "Solo",
    summary:
      "A savings-group (chama) management app — members track contributions and expenses, admins run the finances.",
    detail:
      "React frontend on Firebase, with Google sign-in for regular members and a separate password-gated admin path that bypasses Google auth entirely. Firestore backs member profiles, contributions, expenses, and reminders. Admins get member management with role toggles (promote/demote, add/remove) and full finance controls — logging contributions and expenses and scheduling reminders — all gated behind an admin session tracked through app state and Firestore role data.",
    stack: ["React", "Firebase", "Firestore"],
    highlight: "Dual auth paths — Google sign-in members, password-gated admin",
    image: "https://image.thum.io/get/width/800/https://16have.github.io/project-chama-app/",
  },
  {
    slug: "tables-and-chairs",
    name: "Tables & Chairs",
    year: "2026",
    role: "Solo",
    summary:
      "A furniture e-commerce site — browse, cart, and checkout — built in vanilla HTML, CSS, and JavaScript.",
    detail:
      "No framework: plain HTML5, CSS3, and JavaScript, built as a lightweight, easy-to-customize e-commerce front end. Covers a homepage with featured products, a services section, product listings, a cart with checkout, and a payment step, deployed straight from the repo via GitHub Pages.",
    stack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    highlight: "Full cart + checkout flow with no framework",
    image: "https://image.thum.io/get/width/800/https://16have.github.io/Project-tables-and-chairs-website/",
  },
];