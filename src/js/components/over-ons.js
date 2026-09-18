export function setupOverOns(element) {
  element.innerHTML = `
    <section id="over-ons" class="section section-dark">
      <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
        
        <div style="flex: 1; min-width: 300px;">
          <h2 class="text-gold" style="font-size: 2.5rem; margin-bottom: 1rem;">De Organisatie achter de Traditie</h2>
          <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 2rem; color: var(--color-background);">
            Achter elke magische glimlach van een kind, schuilt een feilloos georganiseerde machine. Sint Zaken is geboren uit de wens om de standaard van het Sinterklaasfeest te verhogen. Geen chaos, geen concessies in kwaliteit, maar een premium beleving waarbij traditie en strakke event-regie samenkomen. Wij zijn de stille motor die de magie feilloos laat draaien.
          </p>
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2.5rem;">Vraag een Vrijblijvende Offerte Aan</a>
        </div>

        <div style="flex: 1; min-width: 300px;">
          <div style="border-radius: 8px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 2px solid var(--color-gold);">
            <img src="/images/sint_openhaard.jpg" alt="Sinterklaas bij de openhaard" style="width: 100%; height: auto; display: block;">
          </div>
        </div>

      </div>
    </section>
  `;
}
