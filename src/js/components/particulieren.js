export function setupParticulieren(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/particulieren_header.png" alt="Premium Sinterklaas Huisbezoek" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 30%; z-index: 0;">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(30,0,10,0.85) 0%, rgba(80,0,32,0.3) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-surface); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          Een Exclusief Huisbezoek
        </h1>
        <p style="font-size: 1.2rem; color: #f0f0f0; max-width: 800px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Haal de absolute magie naar uw huiskamer. Wij bieden een onvergetelijke, tot in de puntjes verzorgde Sinterklaas beleving voor het hele gezin.
        </p>
      </div>
    </section>

    <section id="particulieren" class="section section-light" style="padding-top: 0;">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto;">
          <div style="background-color: var(--color-surface); padding: 3rem; border-radius: 8px; border: 1px solid rgba(138, 21, 56, 0.1); box-shadow: 0 10px 40px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">Aanvraag Premium Tijdslot</h3>
            <p style="font-size: 2.2rem; color: var(--color-primary); font-weight: 700; margin-bottom: 1.5rem; text-align: center;">
              €450,- <span style="font-size: 1.1rem; font-weight: 400; color: var(--color-text-light);">incl. BTW</span>
            </p>
            <p style="margin-bottom: 2rem; color: var(--color-text-light); border-top: 1px solid #eee; padding-top: 1.5rem; font-size: 1rem; text-align: center; line-height: 1.6;">
              Vul onderstaand formulier in om een tijdslot (30 min) aan te vragen. Beschikbaarheid is beperkt. <br>
              <strong>Let op: dit is een aanvraag. De definitieve boeking wordt per mail bevestigd.</strong>
            </p>

            <div id="booking-success" style="display: none; padding: 2rem; text-align: center; background-color: rgba(56, 161, 105, 0.1); border: 1px solid rgba(56, 161, 105, 0.2); border-radius: 8px; margin-bottom: 2rem;">
              <h4 style="color: #2F855A; font-size: 1.5rem; margin-bottom: 0.5rem;">Aanvraag Ontvangen!</h4>
              <p style="color: var(--color-text-light); font-size: 1.1rem;">Wij hebben uw verzoek in goede orde ontvangen and bevestigen uw definitieve boeking zo spoedig mogelijk per e-mail.</p>
            </div>

            <form id="booking-form" action="https://formsubmit.co/sint@sintzaken.nl" method="POST" style="display: flex; flex-direction: column; gap: 1.5rem;">
              <input type="hidden" name="_subject" value="Nieuwe BOEKINGSAANVRAAG Particulieren">
              <input type="hidden" name="_template" value="box">
              <input type="hidden" name="_autoresponse" value="Bedankt voor uw boekingsaanvraag bij Sint Zaken (Particulieren Huisbezoek). Wij hebben uw verzoek in goede orde ontvangen. Let op: dit is een aanvraag. De definitieve boeking en het exacte definitieve tijdstip worden nog aan u per mail bevestigd. Hieronder vindt u een kopie van uw ingevulde gegevens.">
              <input type="text" name="_honey" style="display:none">

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Voornaam *</label>
                  <input type="text" name="Voornaam" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Achternaam *</label>
                  <input type="text" name="Achternaam" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">E-mailadres *</label>
                  <input type="email" name="email" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Telefoonnummer *</label>
                  <input type="tel" name="Telefoonnummer" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                </div>
              </div>

              <div style="border-top: 1px solid #eee; padding-top: 1.5rem;">
                <h4 style="color: var(--color-navy); margin-bottom: 1rem; font-size: 1.2rem;">Bezoekadres</h4>
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Straat *</label>
                    <input type="text" name="Straat" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Huisnummer *</label>
                    <input type="text" name="Huisnummer" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                  </div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; margin-bottom: 1.5rem;">
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Postcode *</label>
                    <input type="text" name="Postcode" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Plaats *</label>
                    <input type="text" name="Plaats" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                  </div>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Land *</label>
                  <select name="Land" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body); background-color: #fff;">
                    <option value="Nederland">Nederland</option>
                    <option value="België">België</option>
                  </select>
                </div>
              </div>

              <div style="border-top: 1px solid #eee; padding-top: 1.5rem;">
                <h4 style="color: var(--color-navy); margin-bottom: 1rem; font-size: 1.2rem;">Gewenste Datum & Tijd</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Datum (14 Nov - 6 Dec) *</label>
                    <input type="date" id="booking-date" name="Datum" min="2026-11-14" max="2026-12-06" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
                  </div>
                  <div>
                    <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Tijdslot (30 min) *</label>
                    <select id="booking-time" name="Tijdslot" required disabled style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body); background-color: #f9f9f9;">
                      <option value="">Kies eerst een datum...</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label style="display: block; margin-bottom: 0.5rem; color: var(--color-navy); font-weight: 500;">Opmerkingen of bijzonderheden (optioneel)</label>
                <textarea name="Opmerkingen" rows="4" style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body); resize: vertical;"></textarea>
              </div>

              <div style="display: flex; gap: 0.75rem; align-items: flex-start; margin-top: 0.5rem; margin-bottom: 0.5rem;">
                <input type="checkbox" id="akkoord" required style="margin-top: 0.35rem; transform: scale(1.2);">
                <label for="akkoord" style="font-size: 0.95rem; color: var(--color-text-light); line-height: 1.5;">
                  Ik ga akkoord met de <a href="/voorwaarden.html" target="_blank" style="color: var(--color-accent); text-decoration: underline;">algemene voorwaarden</a> en de <a href="/privacy.html" target="_blank" style="color: var(--color-accent); text-decoration: underline;">privacyverklaring</a>. Ik begrijp dat dit een aanvraag is.
                </label>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem; padding: 1rem; font-size: 1.1rem;">Verstuur Aanvraag</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;

  // === DYNAMIC BOOKING LOGIC ===
  const dateInput = element.querySelector('#booking-date');
  const timeSelect = element.querySelector('#booking-time');
  const form = element.querySelector('#booking-form');
  const successMsg = element.querySelector('#booking-success');

  if (dateInput && timeSelect) {
    dateInput.addEventListener('change', (e) => {
      const selectedDate = e.target.value; // Format: YYYY-MM-DD

      // Clear previous options
      timeSelect.innerHTML = '<option value="">Selecteer een tijdslot...</option>';

      if (!selectedDate) {
        timeSelect.disabled = true;
        timeSelect.style.backgroundColor = '#f9f9f9';
        return;
      }

      timeSelect.disabled = false;
      timeSelect.style.backgroundColor = '#fff';

      let startHour = 14;
      let startMinute = 0;
      let endHour = 22;   // Last slot is 22:00 - 22:30

      // Special handling for Dec 5 and Dec 6
      if (selectedDate === '2026-12-05' || selectedDate === '2026-12-06') {
        startHour = 9;    // 09:00
        endHour = 22;     // Last slot is 22:30 -  we will handle the extra 30 mins carefully.
      }

      // Generate 30-min intervals
      for (let h = startHour; h <= endHour; h++) {
        for (let m = 0; m <= 30; m += 30) {
          // If it's a regular day, skip the 22:30 slot since end is 22:30 (meaning 22:00-22:30 is the last slot)
          if ((selectedDate !== '2026-12-05' && selectedDate !== '2026-12-06') && h === 22 && m === 30) {
            continue;
          }

          let endM = m === 0 ? 30 : 0;
          let endH = m === 0 ? h : h + 1;

          let timeString = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} - ${endH.toString().padStart(2, '0')}:${endM.toString().padStart(2, '0')}`;

          const option = document.createElement('option');
          option.value = timeString;
          option.textContent = timeString;
          timeSelect.appendChild(option);
        }
      }
    });

    // Handle form submission via AJAX to prevent redirect if possible
    if (form && successMsg) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Verzenden...';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
              form.style.display = 'none';
              successMsg.style.display = 'block';
              window.scrollTo({ top: successMsg.offsetTop - 100, behavior: 'smooth' });
            } else {
              throw new Error('Network error');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            alert('Er is een fout opgetreden bij het verzenden. Controleer uw verbinding en probeer het opnieuw.');
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
          });
      });
    }
  }
}
