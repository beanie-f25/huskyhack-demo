import Layout from '../components/Layout';

export default function JoinUs() {
  return (
    <Layout title="Join Us | George Brown Innovators Hub" description="Join the George Brown Innovators Hub community.">
      <section className="hero-section" id="Showcase">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-pill">
                <span className="material-symbols-outlined hero-pill-icon">stars</span>
                <span>Become part of the Hub</span>
              </div>
              <h1>
                Ready to <span className="highlighted-text">Join</span>
                <br /> the Innovators Hub?
              </h1>
              <p className="hero-copy-text">
                Join a welcoming community of George Brown students, mentors, and makers. Explore
                projects, find collaborators, and bring your bold ideas to life.
              </p>
              <div className="hero-actions">
                <button className="primary-button hero-action-button">Apply Now</button>
                <button className="secondary-button hero-action-button">See Community</button>
              </div>
            </div>
            <div className="hero-media">
              <div className="scrapbook-card scrapbook-rotate-left scrapbook-image-left">
                <img
                  alt="Community focus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdspO3LceuCaQ1tsrgh5Ji-0Nd6WO4PjMTqGiTO0pNmbDcmr6VOaiSSeBngpmzOpNUwsIs9OcC28HHur81DrBGm99lCo8cq1GqZOJHFeDIrtAq94SbVxqRfOag0dxlewZ3YuSDSbROqhwVetDEHXHNFnmVqeDZynirZ45-G6YTdiBot9_s0kq-UUyttiCgjFm8R0bK4pgma-LqRTRkmf1r8Atk46huPnmGK3aHwaRSzon8W22eY3jFnAAnfB1XUyTj0dTFxnMWDeQ"
                />
              </div>
              <div className="scrapbook-card scrapbook-rotate-right scrapbook-image-right">
                <img
                  alt="Active campus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7BMV3ZElxYe2WaB9AfpdLJEBZZBhkYAxrS8dv6qde96khbcdoxwS0aeAC4o8MX0mnf1hv_XK90AgP0jM4w8U0ZTA6pgkqMAV8BFQO_B3a0HbhRZZEwJgW_MuGIXLegX9rGfphVBKHcUckK8s7uf6cJccrS1sG8o0hKGMgucQYf0sRictcnnVdgeOM-Doom3jZR0xwSHu_AEzue7-vLtt5LVWfejisTNfZ37W98YvAq1BmmpgeNojXOa15jkigOpNpEAHE50nqGTg"
                />
                <div className="scrapbook-badge">#GBCInnovates</div>
              </div>
              <div className="hero-background-shape" />
            </div>
          </div>
        </section>

        <section className="feature-section" id="Mission">
          <div className="section-inner">
            <div className="section-header">
              <h2>Why Join the Hub?</h2>
              <p>
                Be part of a community that supports your growth, provides mentorship, and helps
                you turn ideas into impact.
              </p>
            </div>
            <div className="feature-grid">
              <article className="feature-card feature-card-primary">
                <div className="feature-icon">handshake</div>
                <h3>Peer Mentorship</h3>
                <p>
                  Learn from fellow students who have walked the path before you. Our community is
                  built on mutual support.
                </p>
              </article>
              <article className="feature-card feature-card-secondary">
                <div className="feature-icon feature-icon-secondary">diversity_3</div>
                <h3>Inclusive Space</h3>
                <p>
                  An environment where diverse perspectives are celebrated and used as fuel for
                  creative problem-solving.
                </p>
              </article>
              <article className="feature-card feature-card-accent">
                <div className="feature-icon feature-icon-accent">emoji_objects</div>
                <h3>Innovation Lab</h3>
                <p>
                  Access the tools and resources needed to turn your smallest spark of an idea into a
                  real-world prototype.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="connect-section" id="Connect">
          <div className="section-inner connect-grid">
            <div className="connect-panel">
              <div className="connect-overlay" />
              <h2>Ready to take the next step?</h2>
              <p>
                Fill out the form and our team will reach out with details on how to become part of
                the Innovators Hub.
              </p>
            </div>
            <div className="connect-form-panel">
              <form className="connect-form" action="#">
                <div className="form-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="Avery Student" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-field">
                  <label>Why do you want to join?</label>
                  <textarea placeholder="Tell us a bit about your goals..." rows="4" />
                </div>
                <button className="primary-button connect-submit" type="submit">
                  Submit Interest
                </button>
              </form>
            </div>
          </div>
        </section>
    </Layout>
  );
}
