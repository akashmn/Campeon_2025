import { Link, Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>CAMPION</div>
        <div className={styles.navLinks}>
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <Link to="/">Home</Link>
          <Link to="/terms">Terms & Conditions</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <p>© 2024 CAMPEON. All rights reserved.</p>
      </footer>
    </div>
  );
}
