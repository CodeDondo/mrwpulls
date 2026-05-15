import styles from '../page.module.css'

export default function ContactPage(){
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Kontakt</span>
          <h2>Kom i kontakt med os</h2>
        </div>
        <article className={styles.docCard}>
          <p>Har du spørgsmål om dine køb, forsendelse eller vores politikker, så skriv til os på e-mail eller brug Discord/Instagram for hurtig support. Vi bestræber os på at svare inden for 1-3 hverdage.</p>

          <h3>Kontaktinformation</h3>
          <p>Email: <a href="mailto:info@mrwpulls.example">info@mrwpulls.example</a></p>
          <p>Discord: MRW Pulls (se widget i footeren)</p>

          <h3>Henvendelser vedrørende juridiske spørgsmål</h3>
          <p>For spørgsmål om privatliv eller databehandling, brug e-mailen ovenfor eller kontakt via den kontaktformular, når den er tilgængelig.</p>
        </article>
      </section>
    </main>
  )
}
