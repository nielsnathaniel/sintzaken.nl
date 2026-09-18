export function setupShows(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/sint_show_stage.jpg" alt="Sinterklaas Shows" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0;" onerror="this.src='/images/shows_nieuw.png'">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.4) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-gold); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1.5rem; font-weight: 700;">
          Shows & Entertainment
        </h1>
        <p style="font-size: 1.3rem; color: #f0f0f0; max-width: 900px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Stel de show samen die bij jullie past, van een gezellig voorprogramma tot een mooi Sinterklaasdecor.
        </p>
      </div>
    </section>

    <section id="shows" class="section section-light" style="padding-top: 2rem;">
      <div class="container">
        
        <!-- Voorshows -->
        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">1. Het Voorprogramma</h2>
          <p style="font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8; margin-top: 1rem; margin-bottom: 2rem;">
            Kom alvast in de stemming voordat Sinterklaas arriveert. Kies voor de vrolijke Proefpiet show, of stel zelf iets leuks samen met onze Entertainment Pieten.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background: var(--color-surface); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--color-accent); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
              <h4 class="text-navy" style="font-size: 1.4rem; margin-bottom: 0.5rem;">De Proefpiet Show</h4>
              <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.6; margin-bottom: 0;">
                Een muzikale voorstelling vol bekende liedjes en trucjes. Een leuke opwarmer voordat Sinterklaas binnenkomt.
              </p>
            </div>

            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 1rem;">Onze Entertainment Pieten:</h4>
              <ul style="list-style: none; padding: 0; margin: 0; color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8;">
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Saxophone Piet:</strong> Brengt gezellige live muziek.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>DJ Piet:</strong> Draait alle Sinterklaashits.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Liedjes Piet:</strong> Zingt samen met de kinderen.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Schmink Pieten:</strong> Voor mooie gezichtsschilderingen.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Knutsel Piet:</strong> Lekker creatief aan de slag.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hoofdshow -->
        <div style="margin-bottom: 4rem; background: var(--color-surface); padding: 3rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(212, 175, 55, 0.2); border-left: 5px solid var(--color-gold);">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;">2. De Hoofdshow: De Magische Koffer</h2>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            Zodra de Sinterklaaskoffer op het podium staat, begint het avontuur. De meter op de koffer moet naar de 100% voordat Sinterklaas kan verschijnen. De kinderen helpen actief mee door samen liedjes te zingen.
          </p>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            Wanneer de meter vol is, maakt Sinterklaas zijn entree. Een gezellig en interactief programma dat leuk is voor alle leeftijden.
          </p>
          <p style="font-size: 1.1rem; color: var(--color-red); font-weight: 600; margin-bottom: 0;">
            ✓ Te boeken voor 30, 45 of 60 minuten.
          </p>
        </div>

        <!-- Losse Opties -->
        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">3. Decor, Techniek & Opties</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 1rem;">
            
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Decor</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                We kleden de ruimte sfeervol aan met een mooie troon, openhaard, cadeautjes en een bijpassende achtergrond.
              </p>
            </div>
            
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Licht & Geluid</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                Wij verzorgen het geluid (inclusief microfoons) en de verlichting tijdens de show, zodat u daar geen omkijken naar heeft.
              </p>
            </div>

            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Extra's</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                Maak de dag compleet met bijvoorbeeld een fotograaf, een knutselhoek of een ballonnen-piet.
              </p>
            </div>

          </div>
        </div>

        <div style="text-align: center; margin-top: 3rem; margin-bottom: 2rem;">
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Stel uw show samen</a>
        </div>

      </div>
    </section>
  `;
}
