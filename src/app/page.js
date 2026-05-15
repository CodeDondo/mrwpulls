"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const highlights = [
  { value: "Booster-only", label: "hele siden er bygget omkring booster packs" },
  { value: "Live queue", label: "åbnes i den rækkefølge de bliver købt" },
  { value: "Ship only what you want", label: "alt bevares, bulk kun hvis du selv ønsker det" },
];

const steps = [
  {
    title: "1. Køb en booster pack",
    text: "Vælg en booster pack, og den ryger direkte i kø til den næste live opening.",
  },
  {
    title: "2. Vi åbner den live",
    text: "Du ser åbningen i realtid på streamen, og hvert pull bliver vist frem, mens chatten følger med.",
  },
  {
    title: "3. Du vælger hvad der sendes",
    text: "Alt bliver bevaret som standard. Kun det du selv ønsker med i pakken, bliver sendt videre, så bulk ikke kommer med uden din godkendelse.",
  },
];

const features = [
  "Booster packs åbnes i live queue og i tydelig rækkefølge",
  "Shoutouts i streamen og en gennemsigtig proces hele vejen",
  "Kun det du selv vælger, bliver sendt med i forsendelsen",
  "Sikker pakning med sleeves, top loaders og ordentlig shipping",
];

// lineup removed to keep the page focused on live openings and purchases

const shippingNotes = [
  "Alt og bulk pakkes som standard, medmindre du ønsker andet.",
  "Kort, der skal sendes, bliver sleeves og top loadet før afsendelse.",
  "Forsendelser pakkes sikkert, så de er klar til mapper eller grading ved ankomst.",
];

const twitchParent = "localhost";

const faqs = [
  {
    q: "Hvad sælger du?",
    a: "Kun booster packs. Hele siden er bygget omkring ét produkt — køb en pack, den ryger i live-queue, og du kan vælge præcis hvad der skal sendes efter åbning.",
  },
  {
    q: "Bliver bulk sendt med?",
    a: "Ja — alt og bulk pakkes som standard, medmindre du aktivt vælger andet. Husk at købe fragt ved checkout, så vi kan sende det til dig.",
  },
  {
    q: "Hvad sker der efter åbningen?",
    a: "Alle kort bliver lagt til side efter åbning. Du får mulighed for at vælge hvilke kort vi sender — intet sendes automatisk uden din godkendelse.",
  },
  {
    q: "Hvordan pakkes kortene?",
    a: "Kort der skal sendes, bliver sleeved og top-loadet; for værdifulde kort benytter vi ekstra beskyttelse og solide forsendelsesmaterialer.",
  },
  {
    q: "Hvordan fungerer live queue?",
    a: "Packs åbnes i den rækkefølge de bliver købt — hver købsordre placeres i queue, og åbningen streames live, så processen er gennemsigtig.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`${styles.faqCard} ${open ? styles.open : ""}`}>
      <button
        className={styles.faqTrigger}
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
      >
        <h3>{q}</h3>
        <span className={styles.faqChevron} aria-hidden>
          ▸
        </span>
      </button>

      <div
        className={styles.faqContent}
        role="region"
        aria-hidden={!open}
      >
        <p>{a}</p>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.badge}>Pokémon rip and ship</div>
            <h1>Pokémon rip and ship med live booster packs, tydelig queue og sikker shipping, pakket ind som et show.</h1>
            <p>
              Her samler du hele din Pokémon-forretning ét sted. Vis dine live openings, lad folk se,
              hvordan booster packs bliver håndteret, og gør det tydeligt, at der er styr på både hype,
              chat og shipping fra første klik.
            </p>

            <div className={styles.actions}>
              <a className={styles.primaryAction} href="#live">
                Se livestream
              </a>
              <a className={styles.secondaryAction} href="https://www.twitch.tv/mortenrwinther" target="_blank" rel="noreferrer">
                Åbn Twitch
              </a>
            </div>

            <div className={styles.highlightRow}>
              {highlights.map((item) => (
                <div key={item.value} className={styles.highlightCard}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

            <div className={styles.heroVisual}>
            <div className={styles.bannerFrame}>
              <Image
                src="/banner.png"
                alt="Banner for Pokémon rip and ship"
                fill
                priority
                className={styles.bannerImage}
                sizes="(max-width: 900px) 100vw, 520px"
              />
              <div className={styles.bannerGlow} />
            </div>

            <div className={styles.bannerCaption}>
              <div className={styles.bannerPill}>Featured live now</div>
              <strong>Booster packs, live queue og sikker shipping i én enkel oplevelse</strong>
              <p className={styles.bannerCaptionText}>En shop-first forside, hvor det er tydeligt hvad der sælges, hvornår det åbnes, og hvordan det sendes.</p>
            </div>

            <div className={styles.bannerMetaRow}>
              <div className={styles.bannerMetaCard}>
                <span>Stream vibe</span>
                <strong>Hype, pulls og chat i realtid</strong>
              </div>
              <div className={styles.bannerMetaCard}>
                <span>Shipping</span>
                <strong>Sleeves, top loaders og sikker pakning</strong>
              </div>
              <div className={styles.bannerMetaCard}>
                <span>Fokus</span>
                <strong>Booster packs, community og live queue</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Sådan fungerer det</span>
            <h2>Den korte version: køb, følg med og vælg selv hvad der sendes</h2>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <article key={step.title} className={styles.stepCard}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Det essentielle</span>
            <h2>Kun booster packs — køb, følg live, vælg hvad der sendes</h2>
          </div>

          <div className={styles.lineupGrid}>
            {features.slice(0,3).map((f, i) => (
              <article key={f} className={styles.lineupCard}>
                <h3>{i + 1}. {f.split('.')[0]}</h3>
                <p>{f}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.liveSection} id="live">
          <div className={styles.sectionHeading}>
            <span>Live break</span>
            <h2>Se næste booster opening direkte på Twitch</h2>
          </div>

          <div className={styles.liveLead}>
            <p>Live booster openings vises direkte fra stream — køb, følg og godkend forsendelse.</p>
          </div>

          <div className={styles.liveLayout}>
            <div className={styles.streamShell}>
              <iframe
                title="Twitch livestream med Morten R. Winther"
                src={`https://player.twitch.tv/?channel=mortenrwinther&parent=${twitchParent}&parent=127.0.0.1`}
                height="100%"
                width="100%"
                allowFullScreen
                loading="lazy"
                className={styles.streamFrame}
              />
            </div>

            <div className={styles.liveSidebar}>
              <div className={styles.infoPanel}>
                <span className={styles.floatLabel}>Det følger du med i</span>
                <p>
                  Streamen viser booster packs i live rækkefølge, så du kan følge åbningen, høre shoutout
                  og se hvordan pakken bliver håndteret fra første pull til den er klar til afsendelse.
                </p>
              </div>

              <div className={styles.featureList}>
                {features.map((feature) => (
                  <div key={feature} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              <a className={styles.twitchLink} href="https://www.twitch.tv/mortenrwinther" target="_blank" rel="noreferrer">
                Følg kanalen på Twitch
              </a>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Shipping</span>
            <h2>Sådan bliver dine cards håndteret efter åbningen</h2>
          </div>

          <p className={styles.shippingNote}><strong>Bemærk:</strong> Alt og bulk pakkes som standard, medmindre du siger andet. Husk at købe fragt ved checkout.</p>

          <div className={styles.shippingGrid}>
            {shippingNotes.map((note) => (
              <article key={note} className={styles.shippingCard}>
                <p>{note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>FAQ</span>
            <h2>Det folk normalt spørger om</h2>
          </div>

          <div className={styles.faqGrid}>
            {/* Interactive dropdown FAQ */}
            {faqs.map((item, idx) => (
              <FAQItem key={item.q} index={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* CTA section removed per request */}
      </main>
    </div>
  );
}
