export function setupProefpiet(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/proefpiet_2.jpg" alt="De Proefpiet Show" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; z-index: 0;">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.5) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-gold); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1.5rem; font-weight: 700;">
          De Proefpiet Show
        </h1>
        <p style="font-size: 1.3rem; color: #f0f0f0; max-width: 900px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Een magische en muzikale voorstelling vol knotsgekke proefjes en muzikale hoogtepunten.
        </p>
      </div>
    </section>

    <section id="proefpiet" class="section section-light" style="padding-top: 2rem;">
      <div class="container">
        
        <div style="max-width: 900px; margin: 0 auto 4rem auto; text-align: center;">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;">Spanning, Experimenten en Muziek</h2>
          <p style="font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 2rem;">
            Als er één Piet is die het feestje goed kan opstarten, dan is het Proefpiet wel! Met zijn koffer vol vreemde drankjes, gekke uitvindingen en rokende erlenmeyers neemt hij de kinderen mee in zijn wondere laboratorium. Een voorstelling boordevol bekende liedjes, humor, en proefjes die (meestal) precies goed uitpakken.
          </p>
          <p style="font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8;">
            De perfecte manier om het ijs te breken en iedereen alvast in opperbeste stemming te brengen voordat Sinterklaas arriveert.
          </p>
        </div>

        <!-- Foto grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 4rem;">
          <img src="/images/proefpiet_1.jpg" alt="Proefpiet experiment" style="width: 100%; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
          <img src="/images/proefpiet_3.jpg" alt="Proefpiet chemie" style="width: 100%; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
          <img src="/images/proefpiet_4.jpg" alt="Proefpiet glimlach" style="width: 100%; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
        </div>

        <div style="text-align: center; margin-bottom: 4rem;">
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Boek de Proefpiet Show</a>
          <br><br>
          <a href="/shows.html" class="btn btn-secondary" style="font-size: 1.1rem; padding: 1rem 2rem;">Terug naar alle Shows</a>
        </div>

      </div>
    </section>
  `;
}
