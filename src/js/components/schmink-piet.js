export function setupSchminkPiet(element) {
  element.innerHTML = `
    <section class="section section-dark" style="min-height: 40vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <!-- Placeholder Background Image -->
      <img src="/images/sint_show_stage.jpg" alt="Schmink Pieten" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; z-index: 0; filter: blur(5px) brightness(0.5);">
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(10,25,47,0.95) 0%, rgba(10,25,47,0.4) 100%); z-index: 1;"></div>
      
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-gold); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          Schmink Pieten
        </h1>
        <p style="font-size: 1.3rem; color: #f0f0f0; max-width: 900px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          Prachtige creaties en blije gezichtjes
        </p>
      </div>
    </section>

    <section id="schmink-piet" class="section section-light" style="padding-top: 2rem;">
      <div class="container">
        
        <div style="max-width: 800px; margin: 0 auto 4rem auto; text-align: center; font-size: 1.2rem; color: var(--color-text-light); line-height: 1.8;">
          <p>Onze getalenteerde Schmink Pieten betoveren de kinderen door ze om te toveren tot kleine hulppietjes, vlinders, of andere mooie creaties. Met een paar vrolijke pietenvegen of een compleet kunstwerk maken ze elk kind blij.</p><p>Het schminken is een heerlijk, ontspannen rustmomentje voor de kinderen in de vaak spannende Sinterklaastijd. Bovendien levert het prachtige plaatjes op voor later!</p>
        </div>

        <div style="text-align: center; margin-bottom: 4rem;">
          
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Deze Piet boeken</a>
          <br><br>
          <a href="/shows.html" class="btn btn-secondary" style="font-size: 1.1rem; padding: 1rem 2rem; margin-top: 1rem;">Terug naar overzicht</a>
        </div>

      </div>
    </section>
  `;
}
