export function setupHomeServices(element) {
  element.innerHTML = `
    <section id="home-services" class="section section-surface">
      <div class="container text-center">
        <h2 class="text-red" style="font-size: 2.5rem; margin-bottom: 1rem;">Onze Magische Diensten</h2>
        <p style="color: var(--color-text-light); max-width: 700px; margin: 0 auto 3.5rem auto; font-size: 1.1rem;">
          Van exclusieve bedrijfsbezoeken tot grootse showproducties. Ontdek hoe wij úw Sinterklaasfeest tot in de finesses verzorgen.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; text-align: left;">
          
          <!-- Card 1: Shows -->
          <div class="service-card">
            <div class="service-img" style="background-image: url('/images/sint_show_stage.jpg');">
            </div>
            <div class="service-content">
              <h3>Sinterklaas Shows</h3>
              <p>Laat uw publiek wegdromen bij onze impactvolle, hoogwaardige podiumproducties. Perfect getimede shows vol humor, zang en interactie.</p>
              <a href="/shows.html" class="service-link">Lees meer <span>&rarr;</span></a>
            </div>
          </div>
          
          <!-- Card 2: Meet & Greets -->
          <div class="service-card">
            <div class="service-img" style="background-image: url('/images/winkelcentrum_sint.jpg');">
            </div>
            <div class="service-content">
              <h3>Meet & Greets</h3>
              <p>Tover uw evenement, bedrijf of huiskamer om tot een magische ontmoetingsplek. Perfect voor zowel grootse evenementen als intieme, particuliere bezoeken.</p>
              <a href="/meet-en-greets.html" class="service-link">Lees meer <span>&rarr;</span></a>
            </div>
          </div>
          
          <!-- Card 3: Bedrijven -->
          <div class="service-card">
            <div class="service-img" style="background-image: url('/images/bedrijfsfeest_definitief.jpg');">
            </div>
            <div class="service-content">
              <h3>Bedrijfsfeesten</h3>
              <p>Een onvergetelijk feest voor collega's en hun families. Een warme, gezellige middag vol magie, strooigoed en blije gezichtjes.</p>
              <a href="/bedrijven.html" class="service-link">Lees meer <span>&rarr;</span></a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
