export default function Home() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Bookstack", href: "#bookstack" },
    { label: "LifeFascinations [blog]", href: "/blog" },
    { label: "Letters to My Father [blog/letters]", href: "/blog/letters" },
    { label: "Travelogues", href: "#travelogues" },
    { label: "Contact", href: "#contact" },
  ];

  const questLog = [
    "Forged a curiosity compass from old stories.",
    "Traded certainty for wonder in the market of ideas.",
    "Unlocked the side quest: writing letters that heal.",
    "Gained +5 Insight from unfinished books.",
  ];

  return (
    <main className="sonambala-page" id="home">
      <aside className="sidebar">
        <h1>Sonambala</h1>
        <p className="tagline">A Progress Quest for a mindful life.</p>
        <nav aria-label="Sidebar">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <section className="content">
        <header className="hero">
          <p className="eyebrow">Now Questing</p>
          <h2>Build a life worth narrating.</h2>
          <p>
            Sonambala is a living journal of ideas, projects, letters, books, and
            roads traveled. Inspired by the playful spirit of Progress Quest,
            this space tracks growth, curiosity, and meaningful side quests.
          </p>
          <div className="progress-wrap" aria-label="Quest progress">
            <label htmlFor="quest-progress">Main Quest Progress</label>
            <progress id="quest-progress" max={100} value={73} />
            <span>73% complete · Next level at 80%</span>
          </div>
        </header>

        <section className="panel-grid">
          <article className="panel" id="about">
            <h3>About</h3>
            <p>
              A digital campfire for thoughtful living—part archive, part adventure
              log, part conversation with the future.
            </p>
          </article>

          <article className="panel" id="projects">
            <h3>Projects</h3>
            <p>
              Independent builds in writing, software, and storytelling. Each one
              is a questline with lessons and loot.
            </p>
          </article>

          <article className="panel" id="bookstack">
            <h3>Bookstack</h3>
            <p>
              Books that shaped the map. Notes, highlights, and the occasional
              argument with the author.
            </p>
          </article>

          <article className="panel" id="travelogues">
            <h3>Travelogues</h3>
            <p>
              Places, people, and the small moments that changed perspective.
              Honest notes from the road.
            </p>
          </article>
        </section>

        <section className="quest-log" id="letters">
          <h3>Quest Log</h3>
          <ul>
            {questLog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <footer className="contact" id="contact">
          <h3>Contact</h3>
          <p>
            Open to collaborations, conversations, and meaningful quests.
          </p>
          <a href="mailto:hello@sonambala.com">hello@sonambala.com</a>
        </footer>
      </section>

      <style jsx>{`
        .sonambala-page {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 280px 1fr;
          background: radial-gradient(circle at top right, #243145 0%, #0d121b 45%, #080b11 100%);
          color: #e8edf7;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
        }

        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          padding: 2rem 1.25rem;
          border-right: 1px solid rgba(194, 207, 230, 0.2);
          background: rgba(8, 11, 17, 0.88);
          backdrop-filter: blur(6px);
        }

        .sidebar h1 {
          margin: 0;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 1.2rem;
          color: #f7c84d;
        }

        .tagline {
          margin: 0.8rem 0 1.5rem;
          color: #b4bed0;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        .sidebar ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.55rem;
        }

        .sidebar a {
          display: block;
          padding: 0.55rem 0.7rem;
          border: 1px solid rgba(194, 207, 230, 0.18);
          border-radius: 0.45rem;
          color: #dde5f4;
          text-decoration: none;
          font-size: 0.92rem;
          transition: 0.2s ease;
        }

        .sidebar a:hover {
          border-color: rgba(247, 200, 77, 0.9);
          color: #f7c84d;
          transform: translateX(2px);
          background: rgba(247, 200, 77, 0.06);
        }

        .content {
          padding: 2rem clamp(1.25rem, 4vw, 4rem);
          display: grid;
          gap: 1.5rem;
        }

        .hero,
        .panel,
        .quest-log,
        .contact {
          background: rgba(14, 20, 30, 0.78);
          border: 1px solid rgba(194, 207, 230, 0.18);
          border-radius: 0.8rem;
          padding: 1.35rem;
        }

        .eyebrow {
          margin: 0;
          color: #9fb2d3;
          font-size: 0.84rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero h2 {
          margin: 0.4rem 0 0.8rem;
          font-size: clamp(1.6rem, 2.5vw, 2.4rem);
        }

        .hero p {
          margin: 0 0 1rem;
          line-height: 1.6;
          color: #cad3e4;
          max-width: 70ch;
        }

        .progress-wrap {
          display: grid;
          gap: 0.45rem;
        }

        progress {
          width: min(500px, 100%);
          height: 14px;
        }

        .progress-wrap span {
          font-size: 0.88rem;
          color: #a6b7d6;
        }

        .panel-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        h3 {
          margin-top: 0;
          color: #f7c84d;
        }

        .panel p,
        .quest-log li,
        .contact p {
          color: #c7d1e2;
          line-height: 1.6;
        }

        .quest-log ul {
          margin: 0;
          padding-left: 1.2rem;
          display: grid;
          gap: 0.5rem;
        }

        .contact a {
          color: #92d8ff;
          text-decoration: none;
          border-bottom: 1px dashed rgba(146, 216, 255, 0.6);
        }

        @media (max-width: 860px) {
          .sonambala-page {
            grid-template-columns: 1fr;
          }

          .sidebar {
            position: static;
            height: auto;
          }
        }
      `}</style>
    </main>
  );
}
