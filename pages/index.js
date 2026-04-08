import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="George Brown Innovators Hub | Community Showcase" description="George Brown Innovators Hub landing page.">
      <section className="hero-section" id="Showcase">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-pill">
                <span className="material-symbols-outlined hero-pill-icon">stars</span>
                <span>George Brown Community</span>
              </div>
              <h1>
                Where Every <span className="highlighted-text">Idea</span>
                <br /> Finds a Home.
              </h1>
              <p className="hero-copy-text">
                The Innovators Hub is a vibrant space for George Brown students to collaborate, build,
                and grow together. Join a mentorship-driven community where creativity knows no
                bounds.
              </p>
              <div className="hero-actions">
                <button className="primary-button hero-action-button">Explore Projects</button>
                <button className="secondary-button hero-action-button">Meet Mentors</button>
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
              <h2>Designed for Everyone</h2>
              <p>
                We believe that innovation flourishes in a diverse, supportive ecosystem. Whether
                you're a designer, coder, or storyteller, there's a place for you here.
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

        <section className="community-section" id="Community">
          <div className="section-inner">
            <div className="community-header">
              <div>
                <h2>Our Shared Journey</h2>
                <p>A peek into the active, joyful life at George Brown.</p>
              </div>
              <div className="carousel-controls">
                <button className="circle-button">chevron_left</button>
                <button className="circle-button circle-button-gold">chevron_right</button>
              </div>
            </div>
            <div className="community-grid">
              <div className="community-card community-card-large">
                <div className="community-card-image">
                  <img
                    alt="Students working"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDanWUkt7iO5nbW1fi-X0v6iMesaCAVZBfkNr_dgkrtEkR2j_aKClFM8d6imKEMKVy0RrOpaPbdL02cR2NWD9BtP-U2MlC0dResietHF43zlVWCJU0Vx_hVMdZs1g26rbFX9G6RHUJkYiTlhlLKlZFl_6o3K7bc0X070iZK0bWQ2YKqguZ85H1ZmtbBDawcqAfJsRC2RDOEBkhv8IyEq3-LXwxqdwdnwySSoDrXcMZ6hISHKNUl9Ao06uGZpVeVpPUyXQar0y5h6HE"
                  />
                </div>
                <div className="community-card-footer">
                  <span>Collaboration in the Commons</span>
                  <span>Oct 2023</span>
                </div>
                <div className="community-card-badge">favorite</div>
              </div>
              <div className="community-stack">
                <div className="community-small-card community-small-card-top">
                  <img
                    alt="Presentation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBql4hjT2q7H5J-rEvXNl4G_nnXRZ3wXxbbYhyBB0NNdHmdIgMuQ0BY1GrxhmQp7aSKc1psoaZt_-lUTAN6kMYktOcpgJc5FL5P9nnEmtK4LSjDlgam-IrsppOiMyWbXnROtL-0mv6_vjxoUdy0hmX49ZsRBjCVqq2LSuFHv9LWE2vz4yUslNiOOeZdwmgPQ1_baapTksyr9_3yuNMjRT_E6_DrWcHLdmX5FxajxkNcszqJC2DSLSy2wEcXQisqG96tWWwQlwbmbnE"
                  />
                  <p>"Pitch Night was an incredible experience!"</p>
                </div>
                <div className="community-small-card community-small-card-bottom">
                  <h4>Did You Know?</h4>
                  <p>
                    Our hub has supported over 200 student-led projects this semester alone. Your
                    project could be next!
                  </p>
                  <a href="#">Read more stories →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="connect-section" id="Connect">
          <div className="section-inner connect-grid">
            <div className="connect-panel">
              <div className="connect-overlay" />
              <h2>Let's Create Together</h2>
              <p>
                Whether you're looking for mentorship, have a burning idea, or just want to say hi,
                we're all ears.
              </p>
              <div className="contact-list">
                <div className="contact-row">
                  <div className="contact-icon">chat</div>
                  <div>
                    <p className="contact-label">Visit Us</p>
                    <p className="contact-value">The Commons, Level 3</p>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-icon">alternate_email</div>
                  <div>
                    <p className="contact-label">Email Us</p>
                    <p className="contact-value">hub@georgebrown.ca</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="connect-form-panel">
              <form className="connect-form" action="#">
                <div className="form-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="Avery Student" />
                </div>
                <div className="form-field">
                  <label>What's on your mind?</label>
                  <select>
                    <option>I have a project idea</option>
                    <option>I want to be a mentor</option>
                    <option>I'm looking for a team</option>
                    <option>Just curious!</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea placeholder="Tell us a bit about yourself..." rows="4" />
                </div>
                <button className="primary-button connect-submit" type="submit">
                  Send Hello
                </button>
              </form>
            </div>
          </div>
        </section>
    </Layout>
  );
}
