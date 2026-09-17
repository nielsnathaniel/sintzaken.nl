export function setupSocialProof(element) {
  element.innerHTML = `
    <section id="social-proof" class="section section-light" style="background-color: var(--color-background); border-top: 1px solid rgba(0,0,0,0.05);">
      <div class="container text-center">
        
        <div style="margin-bottom: 4rem;">
          <h2 class="text-red" style="font-size: 2.2rem; margin-bottom: 1rem;">Geweldige Resultaten voor Toonaangevende Klanten</h2>
          <p style="color: var(--color-text-light); max-width: 700px; margin: 0 auto; font-size: 1.1rem;">
            Onze professionele aanpak wordt vertrouwd door vooraanstaande bedrijven, evenementen en winkelcentra.
          </p>
          
          <div class="logos-wrapper" style="margin-top: 3rem;">
            <div class="logos-track">
              <!-- Originele set -->
              <div class="logo-item">Multimate</div>
              <div class="logo-item">Mediamarkt</div>
              <div class="logo-item">Centric</div>
              <div class="logo-item">Coolblue</div>
              <div class="logo-item">Gemeente Rotterdam</div>
              <div class="logo-item">Isala Theater</div>
              <div class="logo-item">ABN Amro</div>
              <div class="logo-item">Technische unie</div>
              <div class="logo-item">BAM</div>
              <div class="logo-item">Ronald Mcdonald Center</div>
              <!-- Dubbele set voor infinite scroll -->
              <div class="logo-item" aria-hidden="true">Multimate</div>
              <div class="logo-item" aria-hidden="true">Mediamarkt</div>
              <div class="logo-item" aria-hidden="true">Centric</div>
              <div class="logo-item" aria-hidden="true">Coolblue</div>
              <div class="logo-item" aria-hidden="true">Gemeente Rotterdam</div>
              <div class="logo-item" aria-hidden="true">Isala Theater</div>
              <div class="logo-item" aria-hidden="true">ABN Amro</div>
              <div class="logo-item" aria-hidden="true">Technische unie</div>
              <div class="logo-item" aria-hidden="true">BAM</div>
              <div class="logo-item" aria-hidden="true">Ronald Mcdonald Center</div>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-red" style="font-size: 1.8rem; margin-bottom: 2rem;">Wat Onze Klanten Zeggen</h3>
          
          <div class="testimonial-grid">
            <div class="testimonial-card" style="text-align: left;">
              <p class="testimonial-text">
                "De professionaliteit en charme van de acteurs was ongekend. Het Sinterklaasfeest op ons kantoor was nog nooit zo magisch. Alles werd tot in de puntjes verzorgd."
              </p>
              <p class="testimonial-author">— Event Manager, Groot Zakelijk</p>
            </div>
            
            <div class="testimonial-card" style="text-align: left;">
              <p class="testimonial-text">
                "Dankzij de doordachte looproutes en meet & greet strategie hebben we een recordaantal bezoekers in ons winkelcentrum mogen verwelkomen. Fantastisch resultaat!"
              </p>
              <p class="testimonial-author">— Centrummanager, Retail</p>
            </div>
            
            <div class="testimonial-card" style="text-align: left;">
              <p class="testimonial-text">
                "Ze namen de volledige zorg uit handen. Van het decor tot de vergunningen voor het buitenpodium; Sint Zaken regelde alles perfect. Een absolute aanrader."
              </p>
              <p class="testimonial-author">— Organisatie, Lokale Intocht</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
