import styles from '../page.module.css'

export default function CookiesPage(){
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Cookiepolitik</span>
          <h2>Hvordan vi bruger cookies</h2>
        </div>
        <article className={styles.docCard}>
          <p>Vi bruger cookies og lignende teknologier for at forbedre brugeroplevelsen, huske dine præferencer og indsamle anonymiseret statistik. Denne politik forklarer hvilke cookies vi bruger, hvorfor og hvordan du kan kontrollere dem.</p>

          <h3>Hvad er cookies?</h3>
          <p>Cookies er små tekstfiler, der gemmes på din enhed når du besøger en hjemmeside. De kan være nødvendige for funktionalitet, forbedre ydeevne eller bruges til analyser og marketing.</p>

          <h3>Typer af cookies vi bruger</h3>
          <ul>
            <li><strong>Nødvendige cookies:</strong> Påkrævet for at sitet fungerer (f.eks. sessionshåndtering).</li>
            <li><strong>Præference-cookies:</strong> Husk indstillinger som sprog eller layout.</li>
            <li><strong>Analytiske cookies:</strong> Anonyme statistikker om besøg og brug for at forbedre sitet (f.eks. Google Analytics).</li>
            <li><strong>Marketing cookies:</strong> Bruges til målrettet annoncering og tracking (tredjeparts-udbydere).</li>
          </ul>

          <h3>Sådan kontrollerer du cookies</h3>
          <p>Du kan slette eller blokere cookies via din browser. Vær opmærksom på, at nogle funktioner kan blive begrænsede hvis cookies deaktiveres. Du kan også bruge cookie-banners og samtykkeværktøjer for at administrere valg.</p>

          <h3>Tredjeparts-cookies</h3>
          <p>Vi kan anvende tredjeparts-tjenester (fx analytics eller sociale widgets) som selv placerer cookies. Tredjepartsleverandører har egne politikker, som du bør gennemlæse.</p>
        </article>
      </section>
    </main>
  )
}
