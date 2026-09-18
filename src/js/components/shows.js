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
          
          <!-- Proefpiet Show -->
          <div style="background: var(--color-surface); padding: 2rem; border-radius: 8px; border-left: 4px solid var(--color-accent); box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin-bottom: 2.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem;">
            <div>
              <h4 class="text-navy" style="font-size: 1.4rem; margin-bottom: 0.5rem;">De Proefpiet Show</h4>
              <p style="color: var(--color-text-light); font-size: 1.05rem; line-height: 1.6; margin-bottom: 0; max-width: 600px;">
                Een muzikale voorstelling vol bekende liedjes en trucjes. Een leuke opwarmer voordat Sinterklaas binnenkomt.
              </p>
            </div>
            <a href="/proefpiet.html" class="btn btn-secondary btn-sm" style="white-space: nowrap;">Lees meer & bekijk foto's</a>
          </div>

          <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 1.5rem;">Onze Entertainment Pieten:</h4>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem;">
            
            <a href="/saxophone-piet.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎷</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">Saxophone Piet</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Gezellige live muziek</p>
              </div>
            </a>

            <a href="/dj-piet.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎧</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">DJ Piet</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Draait de hits</p>
              </div>
            </a>

            <a href="/liedjes-piet.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎤</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">Liedjes Piet</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Samen zingen</p>
              </div>
            </a>

            <a href="/schmink-piet.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎨</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">Schmink Pieten</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Gezichtsschilderingen</p>
              </div>
            </a>

            <a href="/knutsel-piet.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">✂️</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">Knutsel Piet</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Creatief aan de slag</p>
              </div>
            </a>

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
