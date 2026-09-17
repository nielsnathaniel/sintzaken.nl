export function setupHero(element) {
  element.innerHTML = `
    <section class="section section-dark hero-section" style="min-height: 95vh; display: flex; align-items: center; position: relative; overflow: hidden; margin-top: 76px;">
      <div class="container" style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; text-align: left;">
        <h1 style="font-size: clamp(3rem, 8vw, 5.5rem); line-height: 1.1; margin-bottom: 1.5rem; max-width: 800px; color: var(--color-surface); text-shadow: 0 4px 20px rgba(0,0,0,0.6); font-weight: 700;">
          Beleef de Ultieme <br><span class="text-gold">Sinterklaas Magie</span>
        </h1>
        <p style="font-size: 1.4rem; font-family: var(--font-body); font-weight: 400; color: #f0f0f0; margin-bottom: 3rem; text-shadow: 0 2px 15px rgba(0,0,0,0.8); max-width: 600px; line-height: 1.6;">
          Voor exclusieve shows, magische bedrijfsbezoeken en onvergetelijke meet & greets. Wij verzorgen het tot in de finesses.
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: flex-start; flex-wrap: wrap;">
          <a href="/#home-contact-section" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3.5rem; letter-spacing: 1px;">Offerte Aanvragen</a>
          <a href="/mogelijkheden.html" class="btn btn-outline" style="font-size: 1.2rem; padding: 1.2rem 3rem; background-color: rgba(255,255,255,0.1); color: var(--color-surface); border-color: var(--color-surface); backdrop-filter: blur(5px);">Bekijk Diensten</a>
        </div>
      </div>
      
      <!-- Premium Background Image with Gradient Overlay -->
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
        <!-- Gradient deep red to black overlay, modified slightly to ensure text legibility on the left -->
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(90deg, rgba(30,0,10,0.9) 0%, rgba(80,0,32,0.6) 40%, rgba(0,0,0,0.1) 100%); z-index: 1;"></div>
        <img src="/images/hero_nieuwBreed.jpeg" alt="Vriendelijke Sinterklaas - Sint Zaken" style="width: 100%; height: 100%; object-fit: cover; object-position: center right;" onerror="this.style.display='none'">
      </div>
    </section>
  `;
}
