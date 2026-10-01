export async function setupParticulieren(element) {
  let data = {};
  try {
      const res = await fetch('/api/get_content.php?page=particulieren');
      data = await res.json();
  } catch(e) {}

  const title = data.part_title || 'Een Exclusief Huisbezoek';
  const subtitle = data.part_subtitle || 'Haal de absolute magie naar uw huiskamer. Wij bieden een onvergetelijke, tot in de puntjes verzorgde Sinterklaas beleving voor het hele gezin.';
  const price = data.part_price || '€450,-';
  const disclaimer = data.part_disclaimer || 'Vul onderstaand formulier in om een tijdslot (30 min) aan te vragen. Beschikbaarheid is beperkt. <br><strong>Let op: dit is een aanvraag. De definitieve boeking wordt per mail bevestigd.</strong>';

  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <img src="/images/particulieren_header.png" alt="Premium Sinterklaas Huisbezoek" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 30%; z-index: 0;">
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(30,0,10,0.85) 0%, rgba(80,0,32,0.3) 100%); z-index: 1;"></div>
      
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-surface); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          ${title}
        </h1>
        <p style="font-size: 1.2rem; color: #f0f0f0; max-width: 800px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          ${subtitle}
        </p>
      </div>
    </section>

    <section id="particulieren" class="section section-light" style="padding-top: 0;">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="background-color: var(--color-surface); padding: 3rem; border-radius: 8px; border: 1px solid rgba(138, 21, 56, 0.1); box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">Aanvraag Premium Tijdslot</h3>
            <p style="font-size: 2.2rem; color: var(--color-primary); font-weight: 700; margin-bottom: 1.5rem; text-align: center;">
              ${price} <span style="font-size: 1.1rem; font-weight: 400; color: var(--color-text-light);">incl. BTW</span>
            </p>
            <p style="margin-bottom: 2rem; color: var(--color-text-light); border-top: 1px solid #eee; padding-top: 1.5rem; font-size: 1rem; text-align: center; line-height: 1.6;">
              ${disclaimer.replace(/\n/g, '<br>')}
            </p>

            <form id="contact-form" action="/contact.php" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div class="form-group">
                  <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">Naam Ouder/Verzorger *</label>
                  <input type="text" id="name" name="name" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
                <div class="form-group">
                  <label for="phone" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">Telefoonnummer *</label>
                  <input type="tel" id="phone" name="phone" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">E-mailadres *</label>
                <input type="email" id="email" name="email" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
              </div>
              
              <div class="form-group">
                <label for="address" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">Volledig Adres (voor het bezoek) *</label>
                <input type="text" id="address" name="address" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);" placeholder="Straat, Huisnummer, Postcode, Plaats">
              </div>

              <div class="form-group">
                <label for="kids" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">Aantal kinderen aanwezig</label>
                <input type="number" id="kids" name="kids" min="1" max="20" style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
              </div>
              
              <div class="form-group" style="display: none;">
                <label for="subject">Onderwerp</label>
                <input type="text" id="subject" name="subject" value="Aanvraag Premium Huisbezoek">
              </div>

              <div class="form-group">
                <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-navy);">Voorkeursdatum & Bijzonderheden</label>
                <textarea id="message" name="message" rows="4" style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body); resize: vertical;" placeholder="Bijv. 3 of 4 december, evt. bijzonderheden over de locatie of de kinderen..."></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" style="align-self: center; font-size: 1.1rem; padding: 1rem 3rem; margin-top: 1rem; width: 100%;">
                Vraag Tijdslot Aan
              </button>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}
