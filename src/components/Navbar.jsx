"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    function onPointer(e) {
      if (!open) return;
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const links = [
    { href: "/", label: "Forside" },
    { href: "/shop", label: "Shop" },
    { href: "/live", label: "Live" },
    { href: "/faq", label: "FAQ" },
    { href: "/about", label: "Om" },
  ];

  return (
    <header className={styles.navbar} ref={rootRef}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Logo" width={150} height={44} className={styles.logo} />
        </Link>

        <nav className={styles.desktopNav} aria-label="Hovednavigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Åbn menu"
        >
          <span className={open ? `${styles.burgerLines} ${styles.open}` : styles.burgerLines} />
        </button>
      </div>

      <div className={open ? `${styles.overlay} ${styles.show}` : styles.overlay} onClick={() => setOpen(false)} />

      <div className={open ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu} role="menu">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
