import styles from '../page.module.css'

export default function PrivacyPage(){
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Privatlivspolitik</span>
          <h2>Hvordan vi behandler dine personoplysninger</h2>
        </div>

        <article className={styles.docCard}>
          <p>Dette dokument beskriver, hvordan vi indsamler, bruger og beskytter personoplysninger i forbindelse med køb og brug af tjenesten.</p>

          <h3>Dataansvarlig</h3>
          <p>Dataansvarlig: Morten R. Winther (MRW Pulls)<br/>Kontakt: info@mrwpulls.example</p>

          <h3>Hvilke oplysninger vi indsamler</h3>
          <p>Vi indsamler oplysninger, der er nødvendige for at gennemføre ordrer: navn, adresse, e-mail, telefonnummer, betalingsoplysninger (delvis/ekstern gateway) og transaktionsdata. Vi kan desuden logge tekniske data (IP, device, browser) til sikkerhed og analyse.</p>

          <h3>Behandlingsformål og retsgrundlag</h3>
          <p>Oplysninger behandles for at behandle ordrer (kontrakt), overholde juridiske forpligtelser (regnskab), og med dit samtykke til marketing og cookies hvor relevant. Vi kan også have et legitimt interesseret grundlag for sikkerhed og bedrageri-forebyggelse.</p>

          <h3>Videregivelse til tredjeparter</h3>
          <p>Vi deler kun oplysninger med nødvendige tjenesteudbydere (fragt, betalingsgateway, regnskab) og kun i det omfang det er nødvendigt for opgaven. Vi kræver passende databehandleraftaler.</p>

          <h3>Opbevaringsperiode</h3>
          <p>Personoplysninger opbevares kun så længe det er nødvendigt i forhold til formålene (typisk regnskabsmæssigt i 5 år) eller indtil du anmoder om sletning, med forbehold for lovbestemte pligter.</p>

          <h3>Dine rettigheder</h3>
          <p>Du har ret til indsigt, berigtigelse, indsigelse, sletning og begrænsning samt dataportabilitet og at klage til Datatilsynet. Kontakt os via <a href="/contact">kontakt</a> for udøvelse af rettigheder.</p>

          <h3>Sikkerhed</h3>
          <p>Vi anvender rimelige tekniske og organisatoriske foranstaltninger for at beskytte data mod uautoriseret adgang, tab eller misbrug.</p>
        </article>
      </section>
    </main>
  )
}
