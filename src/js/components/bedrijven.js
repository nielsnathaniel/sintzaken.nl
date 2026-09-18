export function setupBedrijven(element) {
  element.innerHTML = `
    <section id="bedrijven" class="section section-dark" style="background-color: var(--color-primary-light);">
      <div class="container" style="display: flex; flex-wrap: wrap; align-items: center; gap: var(--spacing-lg);">
        
        <div style="flex: 1; min-width: 300px;">
          <h2 class="text-gold" style="font-size: 2.5rem;">Sinterklaas op het Bedrijf: Een Magisch Feest</h2>
          <p style="font-size: 1.1rem; margin-bottom: 1.5rem; color: var(--color-background);">
            Vergeet even de waan van de dag en laat de Sint en zijn Pieten de sfeer bepalen. Wij toveren uw bedrijf om tot een warme, feestelijke plek waar collega's en hun gezinnen samen genieten van een sfeervolle en onvergetelijke pakjesmiddag. Alles wordt tot in de puntjes verzorgd, zodat u zelf volop kunt meegenieten!
          </p>
          <ul style="list-style: none; padding: 0; margin-bottom: 2rem;">
            <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--color-accent);">✓</span> Een onvergetelijke, warme Sinterklaas beleving
            </li>
            <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--color-accent);">✓</span> Volledig verzorgd, van aankomst tot cadeautjes
            </li>
            <li style="margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--color-accent);">✓</span> Vrolijke, prachtig geklede Roetveegpieten
            </li>
          </ul>
          <a href="#contact" class="btn btn-primary">Bespreek het grote feest</a>
        </div>
        
        <div style="flex: 1; min-width: 300px; position: relative;">
          <!-- Placeholder for AI Image of Corporate Event -->
          <div style="border-radius: 8px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid rgba(212, 175, 55, 0.3);">
            <img src="/images/bedrijfsfeest_definitief.jpg" alt="Sinterklaas op het hoofdkantoor bij een bedrijfsfeest" style="width: 100%; height: auto; display: block;" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'600\\' height=\\'400\\' viewBox=\\'0 0 600 400\\'%3E%3Crect width=\\'600\\' height=\\'400\\' fill=\\'%230a192f\\'/%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' font-family=\\'serif\\' font-size=\\'24\\' fill=\\'%23d4af37\\' text-anchor=\\'middle\\' dominant-baseline=\\'middle\\'%3ESinterklaas Bedrijfsfeest%3C/text%3E%3C/svg%3E'">
          </div>
        </div>
        
      </div>
      
      <!--  Activiteiten Bedrijven -->
      <div class="container" style="margin-top: 5rem;">
        <h3 class="text-gold text-center" style="font-size: 2.2rem; margin-bottom: 2.5rem;">Magische Extra's voor de Kinderen</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-md);">
          
          <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px; border-left: 3px solid var(--color-accent);">
            <h4 class="text-gold" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Sint's Knutselcorner</h4>
            <p style="color: var(--color-background); font-size: 0.95rem; opacity: 0.9;">
              Terwijl de ouders bijkletsen, maken de kinderen onder begeleiding prachtige pietenmutsen en schoentjes, klaar om gezet te worden!
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px; border-left: 3px solid var(--color-accent);">
            <h4 class="text-gold" style="font-size: 1.3rem; margin-bottom: 0.5rem;">De Schmink Hoek</h4>
            <p style="color: var(--color-background); font-size: 0.95rem; opacity: 0.9;">
              Onze geweldige artiesten toveren ieder kind om: van magische ijsprinsessen tot glinsterende Sinterklaas-creaties.
            </p>
          </div>

          <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px; border-left: 3px solid var(--color-accent);">
            <h4 class="text-gold" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Feestelijke Fotostudio</h4>
            <p style="color: var(--color-background); font-size: 0.95rem; opacity: 0.9;">
              Een prachtige foto samen met de Sint als tastbaar aandenken. Zelfs de baas ontsnapt niet aan een vrolijk kiekje!
            </p>
          </div>
          
           <div style="background: rgba(255,255,255,0.05); padding: 2rem; border-radius: 8px; border-left: 3px solid var(--color-accent);">
            <h4 class="text-gold" style="font-size: 1.3rem; margin-bottom: 0.5rem;">De Pietengymzaal</h4>
            <p style="color: var(--color-background); font-size: 0.95rem; opacity: 0.9;">
              Cadeautjes in de schoorsteen mikken, balanceren over smalle daken en springen over de hindernisbaan. Hebben ze het Pietendiploma verdiend?
            </p>
          </div>

        </div>
      </div>
    </section>
  `;
}
