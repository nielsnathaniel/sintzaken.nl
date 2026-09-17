export function setupExtras(element) {
  element.innerHTML = `
    <section id="extras" class="section section-light" style="min-height: 80vh; display: flex; align-items: center;">
      <div class="container">
        <div class="text-center" style="margin-bottom: 4rem;">
          <h1 class="text-red" style="font-size: 3.5rem; margin-bottom: 1rem;">Volledige Ontzorging: Extra's</h1>
          <p style="font-size: 1.2rem; color: var(--color-text-light); max-width: 800px; margin: 0 auto; line-height: 1.8;">
            Wij nemen niet alleen de regie op de werkvloer, maar ontzorgen de gehele randorganisatie met onze aanvullende, professionele boekingsopties.
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          
          <!-- Cadeauservice -->
          <div style="background-color: var(--color-surface); padding: 2.5rem; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="width: 50px; height: 50px; background-color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--color-accent); font-size: 1.5rem;">gift</div>
            <h2 class="text-red" style="font-size: 1.8rem; margin-bottom: 1rem;">De Cadeauservice</h2>
            <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.7; flex-grow: 1;">
              Geen inpakstress voor uw officemanagement. Sint Zaken verzorgt de ingepakte cadeaus. U kunt kiezen voor standaardcadeaus per leeftijdscategorie strak afgestemd op budget, óf laat ouders via een speciale webportal vooraf veilig zelf cadeaus uitzoeken.
            </p>
          </div>
          
          <!-- Social Media Pakket -->
          <div style="background-color: var(--color-surface); padding: 2.5rem; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="width: 50px; height: 50px; background-color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--color-accent); font-size: 1.5rem;">share</div>
            <h2 class="text-red" style="font-size: 1.8rem; margin-bottom: 1rem;">Social Media Pakket</h2>
            <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.7; flex-grow: 1;">
              Haal maximale ROI (Return On Investment) en traffic uit uw evenement. Wij leveren een kant-en-klaar contentpakket voor uw bedrijf of winkelcentrum om perfecte teasers en recap-posts te verspreiden: voor, tijdensén na de Sinterklaasdagen.
            </p>
          </div>
          
          <!-- Videoboodschap -->
          <div style="background-color: var(--color-surface); padding: 2.5rem; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); display: flex; flex-direction: column;">
            <div style="width: 50px; height: 50px; background-color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: var(--color-accent); font-size: 1.5rem;">video</div>
            <h2 class="text-red" style="font-size: 1.8rem; margin-bottom: 1rem;">Videoboodschap</h2>
            <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.7; flex-grow: 1;">
              Laat Sinterklaas uw relaties bedanken in een formele B2B setting, óf kies voor een persoonlijke videoboodschap gericht aan de kinderen van uw medewerkers ter verhoging van de de interne betrokkenheid.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
