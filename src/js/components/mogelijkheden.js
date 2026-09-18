export function setupMogelijkheden(element) {
  element.innerHTML = `
    <section id="mogelijkheden" class="section section-light" style="padding-top: 4rem;">
      <div class="container">
        
        <!-- Intro -->
        <div style="text-align: center; max-width: 800px; margin: 0 auto 4rem auto;">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;">Maatwerk voor Elk Moment</h2>
          <p style="font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8;">
            Elk Sinterklaasfeest is uniek. Of u nu een intiem bezoek in de huiskamer wenst, een grootschalig evenement organiseert in een winkelcentrum, of het personeel van uw bedrijf wilt verrassen: wij hebben de juiste setting in huis. Bekijk hieronder onze drie hoofdpijlers.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 4rem; margin-bottom: 4rem;">
          
          <!-- Shows -->
          <div style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center;">
            <div style="flex: 1; min-width: 300px;">
              <img src="/images/sint_show_stage.jpg" alt="Sinterklaas Shows" style="width: 100%; border-radius: 12px; box-shadow: 0 15px 30px rgba(0,0,0,0.1);">
            </div>
            <div style="flex: 1; min-width: 300px;">
              <h3 class="text-red" style="font-size: 2.2rem; margin-bottom: 1rem;">1. Sinterklaas Shows</h3>
              <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 1.5rem;">
                Volledige theathershows en podiumproducties die het dak eraf blazen. Van het spannende voorprogramma tot aan De Magische Koffer-show. Perfect getimed, boordevol energie en met een ongekend hoog interactiegehalte. Ideaal voor grote zalen en evenementen waar het publiek vermaakt moet worden vanaf het podium.
              </p>
              <a href="/shows.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">Alles over onze Shows</a>
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid rgba(0,0,0,0.05);">

          <!-- Meet & Greets -->
          <div style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center; flex-direction: row-reverse;">
            <div style="flex: 1; min-width: 300px;">
              <img src="/images/b2c_premium.png" alt="Sinterklaas Meet & Greets" style="width: 100%; border-radius: 12px; box-shadow: 0 15px 30px rgba(0,0,0,0.1);">
            </div>
            <div style="flex: 1; min-width: 300px;">
              <h3 class="text-red" style="font-size: 2.2rem; margin-bottom: 1rem;">2. Meet & Greets (B2B & B2C)</h3>
              <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 1.5rem;">
                De kracht van een één-op-één ontmoeting. Wij creëren magische ontmoetingsplekken met prachtige decors. Dit concept is eindeloos flexibel: we zetten het in als doorstroom-activiteit in winkelcentra en op evenementen, maar ook als intiem privé-bezoek bij u thuis in de woonkamer voor particulieren.
              </p>
              <a href="/meet-en-greets.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">Ontdek de Meet & Greets</a>
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid rgba(0,0,0,0.05);">

          <!-- Bedrijfsfeesten -->
          <div style="display: flex; flex-wrap: wrap; gap: 3rem; align-items: center;">
            <div style="flex: 1; min-width: 300px;">
              <img src="/images/bedrijfsfeest_definitief.jpg" alt="Sinterklaas Bedrijfsfeesten" style="width: 100%; border-radius: 12px; box-shadow: 0 15px 30px rgba(0,0,0,0.1);">
            </div>
            <div style="flex: 1; min-width: 300px;">
              <h3 class="text-red" style="font-size: 2.2rem; margin-bottom: 1rem;">3. Bedrijfsfeesten</h3>
              <p style="font-size: 1.15rem; color: var(--color-text-light); line-height: 1.8; margin-bottom: 1.5rem;">
                Een compleet verzorgd Sinterklaasfeest voor uw collega's en hun families. Wij nemen de organisatie volledig uit handen, zodat u samen met het team onbezorgd kunt genieten van de blije gezichtjes en een gezellige middag vol magie en strooigoed.
              </p>
              <a href="/bedrijven.html" class="btn btn-primary" style="font-size: 1.1rem; padding: 1rem 2rem;">Bekijk Bedrijfsfeesten</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
