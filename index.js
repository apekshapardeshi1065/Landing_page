import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Build Faster with Next.js</h1>
        <p>Create modern, fast, and scalable web apps</p>
        <button>Get Started</button>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.card}>
          <h3>⚡ Fast</h3>
          <p>Optimized performance out of the box.</p>
        </div>
        <div className={styles.card}>
          <h3>📱 Responsive</h3>
          <p>Looks great on all devices.</p>
        </div>
        <div className={styles.card}>
          <h3>🚀 Easy Deploy</h3>
          <p>Deploy instantly with Vercel.</p>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Start your project today</h2>
        <button>Launch Now</button>
      </section>

    </div>
  );
}