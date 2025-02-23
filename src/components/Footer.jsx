import { Link } from 'react-router-dom';
import { Trophy, Mail, Phone, MapPin } from 'lucide-react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          {/* Logo Section */}
          <div>
            <div className={styles.logoSection}>
              <Trophy size={28} className={styles.trophy} />
              <span className={styles.logoText}>CAMPEON</span>
            </div>
            <p className={styles.logoDesc}>
              The ultimate intercollege sports tournament bringing together talent and competition.
            </p>
          </div>

          {/* Navigation Links */}
          <div className={styles.footerLinks}>
            {['Home', 'Events', 'About', 'Leaderboard', 'FAQ'].map(link => (
              <Link 
                key={link} 
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                className={styles.footerLink}
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <Mail size={14} className={styles.contactIcon} />
              <span>contact@campeon.com</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={14} className={styles.contactIcon} />
              <span>+91 123 456 7890</span>
            </div>
            <div className={styles.contactItem}>
              <MapPin size={14} className={styles.contactIcon} />
              <span>Main Stadium, Sports Complex, Kerala</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.copyright}>
          © {currentYear} <span>CAMPEON</span> • All rights reserved
        </div>
      </div>
    </footer>
  );
}
