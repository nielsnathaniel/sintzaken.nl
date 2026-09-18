export function setupShows(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/sint_show_stage.jpg" alt="De Ultieme Sinterklaas Show" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0;" onerror="this.src='/images/shows_nieuw.png'">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(10,25,47,0.9) 0%, rgba(10,25,47,0.4) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-gold); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1.5rem; font-weight: 700;">
          Shows & Entertainment
        </h1>
        <p style="font-size: 1.3rem; color: #f0f0f0; max-width: 900px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Bouw uw eigen ideale Sinterklaasfeest op met ons flexibele aanbod: van een spetterende voorshow tot adembenemende decors.
        </p>
      </div>
    </section>

    <section id="shows" class="section section-light" style="padding-top: 2rem;">
      <div class="container">
        
        <!-- Voorshows -->
        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">1. Het Voorprogramma</h2>
          <p style="font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8; margin-top: 1rem; margin-bottom: 2rem;">
            Breng de zaal alvast helemaal in de stemming voordat de Sint arriveert! Kies voor de waanzinnige Proefpiet show, of bouw zelf een feestelijk voorprogramma met onze gespecialiseerde Entertainment Pieten.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;">
            <div style="background: var(--color-surface); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--color-accent); box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
              <h4 class="text-navy" style="font-size: 1.4rem; margin-bottom: 0.5rem;">De Proefpiet Show</h4>
              <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.6; margin-bottom: 0;">
                Een interactief meezing-spektakel vol humor, goocheltrucs en herkenbare hits. De perfecte, energieke opwarmer voor het grote bezoek!
              </p>
            </div>

            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 1rem;">Onze Entertainment Pieten:</h4>
              <ul style="list-style: none; padding: 0; margin: 0; color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8;">
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Saxophone Piet:</strong> Voor heerlijke live muziek.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>DJ Piet:</strong> Draait de allerbeste Sinterklaashits.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Liedjes Piet:</strong> Zingt samen met de kinderen.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Schmink Pieten:</strong> Voor de prachtigste creaties.</li>
                <li><span style="color: var(--color-accent); margin-right: 8px;">★</span> <strong>Knutsel Piet:</strong> Lekker creatief aan de slag.</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hoofdshow -->
        <div style="margin-bottom: 4rem; background: var(--color-surface); padding: 3rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(212, 175, 55, 0.2); border-left: 5px solid var(--color-gold);">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;">2. De Hoofdshow: De Magische Koffer</h2>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            Voel de spanning stijgen! Zodra de mysterieuze Sinterklaaskoffer op het podium staat, begint de absolute magie. De knipperende volumemeter op de koffer móét naar de 100% voordat de Sint verschijnt. Wat volgt is één gigantische explosie van energie. Stilzitten is er simpelweg niet bij.
          </p>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            De kinderen springen massaal op, zingen uit volle borst mee en dansen de sterren van de hemel om die meter handmatig omhoog te jagen. De spanning schiet naar een ongekend kookpunt. Wanneer de 100% ein-de-lijk wordt geraakt en Sinterklaas zijn overrompelende entree maakt, gaat het dak er volledig af!
          </p>
          <p style="font-size: 1.1rem; color: var(--color-red); font-weight: 600; margin-bottom: 0;">
            ✓ Verkrijgbaar in dynamische sets van 30, 45 of 60 minuten.
          </p>
        </div>

        <!-- Losse Opties -->
        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">3. Decor, Techniek & Opties</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 1rem;">
            
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Professioneel Decor</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                Tover de kale ruimte om tot een warme, magische Sinterklaaskamer met onze prachtige troon, openhaard, pakjes en sfeervolle achtergronden.
              </p>
            </div>
            
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Licht & Geluid</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                Geen omkijken naar de techniek. Wij leveren kraakhelder geluid (inclusief microfoons) en sfeervolle verlichting die perfect is afgestemd op de show.
              </p>
            </div>

            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Fotografie & Extra's</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">
                Boek een professionele Sinterklaasfotograaf, een knutselhoek of een ballonnen-piet om het feest compleet te maken.
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
