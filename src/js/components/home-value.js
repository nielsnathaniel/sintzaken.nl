export function setupHomeValue(element) {
  element.innerHTML = `
    <section id="home-value" class="usp-bar">
      <div class="container usp-container">
        
        <div class="usp-item">
          <div class="usp-icon">✦</div>
          <span>Tv-waardige Kostuums</span>
        </div>
        
        <div class="usp-item">
          <div class="usp-icon">✦</div>
          <span>Professionele Acteurs</span>
        </div>
        
        <div class="usp-item">
          <div class="usp-icon">✦</div>
          <span>100% Ontzorging</span>
        </div>
        
        <div class="usp-item">
          <div class="usp-icon">✦</div>
          <span>Jarenlange Ervaring</span>
        </div>

      </div>
      
      <div class="container" style="margin-top: 3rem; text-align: center;">
        <h3 style="color: var(--color-gold); font-size: 1.8rem; margin-bottom: 1.5rem;">Onze Acteurs: Vakmanschap in elke Pose</h3>
        <div style="max-width: 900px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <img src="/images/sint_poses.jpg" alt="Sinterklaas Casting Poses" style="width: 100%; height: auto; display: block;">
        </div>
      </div>
    </section>
  `;
}
