export async function setupOverOns(element) {
  let data = {};
  try {
      const res = await fetch('/api/get_content.php?page=over-ons');
      data = await res.json();
  } catch(e) {}

  const title = data.about_title || 'De Organisatie achter de Traditie';
  const text = data.about_text || 'Achter elke magische glimlach van een kind, schuilt een feilloos georganiseerde machine. Sint Zaken is geboren uit de wens om de standaard van het Sinterklaasfeest te verhogen. Geen chaos, geen concessies in kwaliteit, maar een premium beleving waarbij traditie en strakke event-regie samenkomen. Wij zijn de stille motor die de magie feilloos laat draaien.';

  element.innerHTML = `
    <section id="over-ons" class="section section-dark">
      <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: 4rem;">
        
        <div style="flex: 1; min-width: 300px;">
          <h2 class="text-gold" style="font-size: 2.5rem; margin-bottom: 1rem;"><span class="cms-editable" data-page="over-ons" data-key="about_title">${title}</span></h2>
          <p style="font-size: 1.15rem; line-height: 1.8; margin-bottom: 2rem; color: var(--color-background);">
            ${text.replace(/\n/g, '<br><br>')}
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
