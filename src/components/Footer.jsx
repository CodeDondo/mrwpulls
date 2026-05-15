"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Link href="/" aria-label="Home" className={styles.logoLink}>
            <div className={styles.logoWrap}>
              <Image src="/logo.png" alt="MRW Pulls logo" width={180} height={60} />
            </div>
          </Link>
          <p>Live booster openings, tydelig queue og sikker shipping.</p>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/mrwpulls/" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.2"/><path d="M16 11.37a4 4 0 1 1-1.63-3.02" stroke="currentColor" strokeWidth="1.2"/></svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.twitch.tv/mortenrwinther" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4v14l4 2h6l6-6V4H4z" stroke="currentColor" strokeWidth="1.2"/></svg>
              <span>Twitch</span>
            </a>
            <a href="https://www.youtube.com/@mortenrwinther" target="_blank" rel="noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 7s-.2-1.4-.8-2c-.7-.8-1.4-.8-1.8-.9C16 4 12 4 12 4h0s-4 0-7.4.1c-.4 0-1.1.1-1.8.9C2.2 5.6 2 7 2 7S2 9 2 11v2c0 2 0 4 0 4s.2 1.4.8 2c.7.8 1.6.8 2 0 .6-.6 1.6-.6 2.6-.7C8 19 12 19 12 19s4 0 7.4-.1c1 0 2 .1 2.6.7.4.1 1.3.1 2-.9.6-.6.8-2 .8-2s0-2 0-4v-2c0-2 0-4 0-4z" stroke="currentColor" strokeWidth="0.6"/></svg>
              <span>YouTube</span>
            </a>
          </div>
        </div>

        <nav className={styles.footerNav} aria-label="Footer navigation">
          <h4>Handel & juridisk</h4>
          <ul>
            <li><a href="/terms">Handelsbetingelser</a></li>
            <li><a href="/privacy">Privatlivspolitik</a></li>
            <li><a href="/cookies">Cookiepolitik</a></li>
            <li><a href="/shipping">Forsendelse</a></li>
            <li><a href="/contact">Kontakt</a></li>
          </ul>
        </nav>

        <div className={styles.footerDiscord}>
          <h4>Community</h4>
          <div className={styles.discordWrap}>
            <iframe src="https://discord.com/widget?id=1425637564622176298&theme=dark" width="100%" height="260" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" title="Discord" />
          </div>
          <div className={styles.discordHint}>Åben i ny fane for chat.</div>
        </div>
      </div>

      <div className={styles.footerLegal}>
        <small>© {new Date().getFullYear()} Morten R. Winther — <a href="/privacy">Privatlivspolitik</a> · <a href="/cookies">Cookiepolitik</a></small>
      </div>
    </footer>
  );
}
