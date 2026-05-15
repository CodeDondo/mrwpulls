import styles from '../page.module.css'

export default function ShippingPage(){
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Forsendelse</span>
              <h2>Hvordan vi pakker og sender</h2>
        </div>
            <article className={styles.docCard}>
              <p>Vi pakker alle varer professionelt for at sikre sikker transport. <strong>Alt og bulk pakkes som standard, medmindre du aktivt vælger andet.</strong> Husk at købe fragt i checkout for at vi kan sende din ordre.</p>

              <h3>Pakkemetode</h3>
              <p>Kort, der skal sendes, bliver sleeved og top-loadet. Værdifulde eller sjældne kort får ekstra beskyttelse efter aftale. Forsendelser er emballeret, så de tåler transport.</p>

              <h3>Forsendelsesvalg og priser</h3>
              <p>Ved checkout vælger du forsendelsesmetode (standard, express, tracked). Priser afhænger af vægt og destination og vises før betaling.</p>

              <h3>Leveringstid</h3>
              <p>Normal levering er 2-7 arbejdsdage afhængigt af destination og valgt forsendelsesmetode. Vi forsøger at afsende inden for 2-5 arbejdsdage efter ordrebekræftelse og betaling af fragt.</p>

                    <h3>Mistet forsendelse og skader</h3>
                    <p>Hvis en forsendelse bliver mistet eller ankommer beskadiget, kontakt os straks. Gem al emballage og dokumentation; vi hjælper med reklamation til fragtfirmaet og eventuel erstatning i henhold til vores politik.</p>
                  </article>
                  </section>
    </main>
  )
}
