import styles from '../page.module.css'

export default function TermsPage(){
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <span>Handelsbetingelser</span>
              <h2>Vilkår for køb og salg</h2>
        </div>
            <article className={styles.docCard}>
              <p>Disse handelsbetingelser gælder for køb af varer på denne hjemmeside. Ved at gennemføre et køb accepterer du disse betingelser. Er du i tvivl om noget, kontakt os før køb.</p>

              <h3>Sælger</h3>
              <p>Virksomhed: Morten R. Winther (MRW Pulls)<br/>Adresse: [indsæt adresse]<br/>CVR: [indsæt CVR]</p>

              <h3>Ordre og bekræftelse</h3>
              <p>Når du har afgivet en ordre, modtager du en ordrebekræftelse pr. e-mail. Vi forbeholder os retten til at annullere ordre ved fejl i pris eller lagerstatus.</p>

              <h3>Pris og betaling</h3>
              <p>Alle priser er angivet i DKK inkl. moms hvor det er relevant. Betaling sker via de betalingsmetoder, der tilbydes i checkout (kort, MobilePay, PayPal etc.). Betaling trækkes ved købstidspunktet.</p>

              <h3>Levering og fragt</h3>
              <p>Forsendelse sker efter at fragt er valgt og betalt i checkout. Vi tilbyder forskellige forsendelsesmuligheder med varierende pris og leveringstid. Se vores <a href="/shipping">forsendelsesside</a> for detaljer.</p>

              <h3>Fortrydelsesret (forbrugere)</h3>
              <p>Som forbruger har du 14 dages fortrydelsesret fra den dag, du modtager varen. For at udøve fortrydelsesretten skal du give os besked inden fristens udløb og returnere varen i samme stand. Returneringsomkostninger bæres af kunden, medmindre andet er aftalt.</p>

              <h3>Reklamation</h3>
              <p>Ved fejl eller mangler skal du reklamere inden for rimelig tid efter du har opdaget fejlen. Kontakt vores kundeservice med ordrenummer og beskrivelse af problemet.</p>

              <h3>Ansvarsbegrænsning</h3>
              <p>Vi er kun ansvarlige for tab, der følger af vores groft uagtsomme eller forsætlige handlinger eller som følger af væsentlig kontraktbrud. Vi fraskriver os indirekte tab i videst muligt omfang tilladt ved lov.</p>

              <h3>Force majeure</h3>
              <p>Vi er ikke ansvarlige for misligholdelse som følge af hændelser uden for vores kontrol (strejke, katastrofer, leverandørsvigt, mv.).</p>

                    <h3>Lovvalg og værneting</h3>
                    <p>Denne aftale er underlagt dansk ret. Eventuelle tvister afgøres ved danske domstole, med mindre andet følger af ufravigelig lovgivning for forbrugere.</p>
                  </article>
                  </section>
    </main>
  )
}
