export function setupShows(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/shows_nieuw.jpg" alt="De Ultieme Sinterklaas Show" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0;" onerror="this.src='/images/shows_nieuw.png'">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.4) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-gold); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1.5rem; font-weight: 700;">
          De Ultieme Sinterklaas Show
        </h1>
        <p style="font-size: 1.3rem; color: #f0f0f0; max-width: 900px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Voel de spanning stijgen! Zodra de mysterieuze Sinterklaaskoffer op het podium staat, begint de absolute magie.
        </p>
      </div>
    </section>

    <section id="shows" class="section section-light" style="padding-top: 2rem;">
      <div class="container">
        <div style="max-width: 900px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem;">
            
            <div style="text-align: center;">
              <p style="font-size: 1.2rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
                De knipperende volumemeter op de koffer móét naar de 100% voordat de Sint verschijnt. Wat volgt is één gigantische explosie van energie. Stilzitten is er simpelweg niet bij. De kinderen springen massaal op, zingen uit volle borst mee en dansen de sterren van de hemel om die meter handmatig omhoog te jagen.
              </p>
              <p style="color: var(--color-text-light); font-size: 1.2rem; line-height: 1.8; margin-bottom: 2.5rem;">
                De spanning schiet naar een ongekend kookpunt. Wanneer de 100% ein-de-lijk wordt geraakt en Sinterklaas zijn overrompelende entree maakt, gaat het dak er volledig af!
              </p>

              <div style="background: var(--color-surface); padding: 2.5rem; border-radius: 8px; border: 1px solid rgba(138, 21, 56, 0.1); border-top: 4px solid var(--color-accent); box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: left; margin-bottom: 3rem;">
                <h4 class="text-red" style="font-size: 1.6rem; margin-bottom: 1rem;">Eindeloos Flexibel</h4>
                <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.7; margin: 0;">
                  Onze interactieve powershows zijn overal in te zetten, nemen weinig ruimte in beslag en zijn razendsnel op te bouwen. Verkrijgbaar in dynamische sets van <strong>30, 45 of 60 minuten</strong>.
                </p>
              </div>

              <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Boek dit spektakel</a>
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}
