import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>SalesTeam Pro</div>
          <div className={styles.navLinks}>
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Drive Revenue Growth with Expert Sales Professionals</h1>
          <p>Our elite sales team delivers results that transform your business. From lead generation to deal closure, we handle it all.</p>
          <div className={styles.ctaButtons}>
            <a href="#contact" className={styles.primaryBtn}>Get Started</a>
            <a href="#results" className={styles.secondaryBtn}>View Results</a>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>📈</div>
            <h3>Lead Generation</h3>
            <p>Strategic prospecting and qualification to fill your pipeline with high-quality leads.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>💼</div>
            <h3>Sales Development</h3>
            <p>Expert SDRs who nurture relationships and schedule qualified meetings.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>🎯</div>
            <h3>Account Management</h3>
            <p>Dedicated account executives who close deals and drive revenue growth.</p>
          </div>
          <div className={styles.serviceCard}>
            <div className={styles.icon}>📊</div>
            <h3>Sales Analytics</h3>
            <p>Data-driven insights and reporting to optimize your sales performance.</p>
          </div>
        </div>
      </section>

      <section id="team" className={styles.team}>
        <h2>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <div className={styles.avatar}>JS</div>
            <h3>Jessica Sullivan</h3>
            <p className={styles.role}>VP of Sales</p>
            <p>15+ years closing enterprise deals</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.avatar}>MR</div>
            <h3>Marcus Rodriguez</h3>
            <p className={styles.role}>Sales Director</p>
            <p>Expert in SaaS and B2B sales</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.avatar}>AC</div>
            <h3>Amanda Chen</h3>
            <p className={styles.role}>Lead SDR</p>
            <p>Top performer in lead generation</p>
          </div>
          <div className={styles.teamMember}>
            <div className={styles.avatar}>DW</div>
            <h3>David Williams</h3>
            <p className={styles.role}>Account Executive</p>
            <p>Specializes in strategic partnerships</p>
          </div>
        </div>
      </section>

      <section id="results" className={styles.results}>
        <h2>Proven Results</h2>
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>250+</div>
            <div className={styles.statLabel}>Clients Served</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>$50M+</div>
            <div className={styles.statLabel}>Revenue Generated</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>85%</div>
            <div className={styles.statLabel}>Close Rate</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>2.5x</div>
            <div className={styles.statLabel}>Average ROI</div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <h2>Ready to Accelerate Your Sales?</h2>
        <p>Let's discuss how our team can help you achieve your revenue goals.</p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Tell us about your sales goals" rows="4" required></textarea>
          <button type="submit" className={styles.submitBtn}>Schedule a Consultation</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>SalesTeam Pro</h4>
            <p>Expert sales professionals delivering exceptional results.</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: contact@salesteampro.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <p>LinkedIn | Twitter | Facebook</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 SalesTeam Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
