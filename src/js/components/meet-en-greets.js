export function setupMeetEnGreets(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Background Image -->
      <img src="/images/b2c_premium.png" alt="Sinterklaas Meet & Greets" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; z-index: 0;" onerror="this.src='/images/winkelcentrum_sint.jpg'">
      <!-- Overlay Gradient -->
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(30,0,10,0.9) 0%, rgba(80,0,32,0.4) 100%); z-index: 1;"></div>
      
      <!-- Text Content -->
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-surface); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          Magische Meet & Greets
        </h1>
        <p style="font-size: 1.2rem; color: #f0f0f0; max-width: 800px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          De mooiste één-op-één momentjes met Sinterklaas. Van grootschalige evenementen tot een exclusief, intiem bezoek gewoon bij u in de huiskamer.
        </p>
      </div>
    </section>

    <section id="meet-en-greets" class="section section-light">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md); margin-bottom: 4rem;">
          
          <!-- Pillar 1 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Voor Particulieren</h3>
            <p style="color: var(--color-text-light);">
              Tover uw eigen huiskamer om tot een magische plek. Geen stress, maar een prachtig verzorgd huisbezoek van Sinterklaas en zijn Pieten. Volledige aandacht voor uw gezin, prachtige kostuums en een moment om nooit te vergeten.
            </p>
          </div>
          
          <!-- Pillar 2 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Voor Bedrijven</h3>
            <p style="color: var(--color-text-light);">
              Verras uw collega's en hun kinderen op de zaak. Een professionele meet & greet setting waar elk kind persoonlijk wordt aangesproken. Feilloze organisatie, zodat u zelf rustig achterover kunt leunen.
            </p>
          </div>
          
          <!-- Pillar 3 -->
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Evenementen & Centra</h3>
            <p style="color: var(--color-text-light);">
              Creëer drommen blije gezichten op uw evenement of locatie. Een sfeervolle en doordachte ontmoetingsplek die zorgt voor de perfecte doorstroom en een onvergetelijke beleving voor iedere bezoeker.
            </p>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 2rem;">
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Reserveer een Meet & Greet</a>
        </div>
      </div>
    </section>
  `;
}
