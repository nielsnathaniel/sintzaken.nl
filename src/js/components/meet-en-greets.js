export function setupMeetEnGreets(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/winkelcentrum_sint.jpg" alt="Sinterklaas in het winkelcentrum" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; z-index: 0;">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(30,0,10,0.9) 0%, rgba(80,0,32,0.4) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-surface); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          Magische Resultaten voor uw Evenement of Locatie
        </h1>
        <p style="font-size: 1.2rem; color: #f0f0f0; max-width: 800px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Verleng de verblijfstijd en creëer drommen blije gezichten met een betoverende beleving waar kinderen, ouders en bezoekers volop van genieten.
        </p>
      </div>
    </section>

    <section id="winkelcentra" class="section section-light">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md); margin-bottom: 4rem;">
          <!-- Pillar 1 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Betoveren (Shows)</h3>
            <p style="color: var(--color-text-light);">
              Trek grote groepen publiek naar een centraal plein met fantastische podiumshows. Muziek, avontuur en de aankomst van de enige echte Sinterklaas.
            </p>
          </div>
          
          <!-- Pillar 2 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Ontmoeten (Meet & Greets)</h3>
            <p style="color: var(--color-text-light);">
              Creëer die diepe interactie waar kinderen naar verlangen. Persoonlijke meet & greets, prachtig gestileerd, veilig en feilloos georganiseerd.
            </p>
          </div>
          
          <!-- Pillar 3 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Spreiden (Activiteiten)</h3>
            <p style="color: var(--color-text-light);">
              Professionele face-painters transformeren kinderen in prachtige (non-piet gerelateerde) winterse en Sinterklaas figuren. Een enorme feeststemming!
            </p>
          </div>
        </div>

        <!-- Activiteiten op Locatie -->
        <h3 class="text-red text-center" style="font-size: 2rem; margin-bottom: 2rem;">Feestelijke Pop-Up Activiteiten</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-md);">
          
          <div style="background: var(--color-background); padding: 2rem; border-radius: 8px; border: 1px solid rgba(138,21,56,0.1);">
            <h4 class="text-red" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Sint's Knutselcorner</h4>
            <p style="color: var(--color-text-light); font-size: 0.95rem;">
              Een gethematiseerde creatieve ruimte waar kinderen hun eigen mijters of papieren schoentjes vouwen, terwijl ouders even lekker gaan winkelen.
            </p>
          </div>

          <div style="background: var(--color-background); padding: 2rem; border-radius: 8px; border: 1px solid rgba(138,21,56,0.1);">
            <h4 class="text-red" style="font-size: 1.3rem; margin-bottom: 0.5rem;">De Betoverde Schoorsteen</h4>
            <p style="color: var(--color-text-light); font-size: 0.95rem;">
              Onder luid gejuich kunnen de kinderen hun schoentje zetten. Gegarandeerde terugkomst naar het winkelcentrum wanneer ze die de volgende week weer mogen ophalen.
            </p>
          </div>

          <div style="background: var(--color-background); padding: 2rem; border-radius: 8px; border: 1px solid rgba(138,21,56,0.1);">
            <h4 class="text-red" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Schmink Plek</h4>
            <p style="color: var(--color-text-light); font-size: 0.95rem;">
              Professionele face-painters transformeren kinderen in prachtige (non-piet gerelateerde) winterse en Sinterklaas figuren. Een enorme feeststemming!
            </p>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
