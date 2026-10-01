export async function setupHero(element) {
  let data = {};
  try {
      const res = await fetch('/api/get_content.php?page=home');
      data = await res.json();
  } catch(e) {}

  const title = data.home_hero_title || 'En dan wordt er ineens op de deur geklopt...';
  const subtitle = data.home_hero_subtitle || 'Je weet als volwassene precies wie er voor de deur staat. De kinderen niet. Dát is de magie van Sinterklaas. Wij zorgen dat alles vlekkeloos verloopt, inclusief de pepernoten.';
  const btn = data.home_hero_button || 'Stel jullie feest samen';
  
  // Format the title to make Sinterklaas Magie gold if it exists in the string (optional, but keeps the old look)
  let formattedTitle = title;
  if(formattedTitle.includes("Sinterklaas Magie")) {
      formattedTitle = formattedTitle.replace("Sinterklaas Magie", '<br><span class="text-gold">Sinterklaas Magie</span>');
  }

  // Calculate nights until Sinterklaas (Dec 5th)
  function getNachtjesSlapen() {
      const now = new Date();
      const currentYear = now.getFullYear();
      let pakjesavond = new Date(currentYear, 11, 5); // Month is 0-indexed, so 11 = Dec
      if (now.getTime() > pakjesavond.getTime() + (24 * 60 * 60 * 1000)) {
          // If past Dec 5th this year, look at next year
          pakjesavond = new Date(currentYear + 1, 11, 5);
      }
      
      const diffTime = pakjesavond - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 0) return "Vanavond is het Pakjesavond! 🎁";
      if (diffDays === 1) return "Nog 1 nachtje slapen tot Sinterklaas... 🎁";
      if (diffDays <= 15) return `Nog maar ${diffDays} nachtjes. Sint's agenda stroomt vol... 🎁`;
      if (diffDays <= 40) return `Nog ${diffDays} nachtjes... Hebben jullie Sint al geregeld? 🎁`;
      return `Nog ${diffDays} nachtjes slapen tot Sinterklaas... 🎁`;
  }
  
  const nachtjesText = getNachtjesSlapen();

  element.innerHTML = `
    <section class="section section-dark hero-section" style="min-height: 95vh; display: flex; align-items: center; position: relative; overflow: hidden; margin-top: 76px;">
      <div class="container" style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: flex-start; text-align: left;">
        
        <div style="background: rgba(212, 175, 55, 0.2); border: 1px solid var(--color-gold); padding: 0.5rem 1.5rem; border-radius: 50px; margin-bottom: 2rem; backdrop-filter: blur(5px);">
            <span style="color: var(--color-gold); font-weight: 600; font-size: 1.1rem; letter-spacing: 0.5px;">${nachtjesText}</span>
        </div>

        <h1 style="font-size: clamp(3rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; max-width: 800px; color: var(--color-surface); text-shadow: 0 4px 20px rgba(0,0,0,0.6); font-weight: 700; font-family: var(--font-heading);">
          ${formattedTitle}
        </h1>
        <p style="font-size: 1.3rem; font-family: var(--font-body); font-weight: 400; color: #f0f0f0; margin-bottom: 3rem; text-shadow: 0 2px 15px rgba(0,0,0,0.8); max-width: 600px; line-height: 1.6;">
          ${subtitle}
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: flex-start; flex-wrap: wrap;">
          <a href="/#home-contact-section" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3.5rem; letter-spacing: 1px; box-shadow: 0 10px 20px rgba(138,21,56,0.3); transition: transform 0.2s;">${btn}</a>
          <a href="/mogelijkheden.html" class="btn btn-outline" style="font-size: 1.2rem; padding: 1.2rem 3rem; background-color: rgba(255,255,255,0.1); color: var(--color-surface); border-color: var(--color-surface); backdrop-filter: blur(5px);">Wat we allemaal doen</a>
        </div>
      </div>
      
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;">
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(90deg, rgba(30,0,10,0.9) 0%, rgba(80,0,32,0.6) 40%, rgba(0,0,0,0.1) 100%); z-index: 1;"></div>
        <img src="/images/hero_nieuwBreed.jpeg" alt="Vriendelijke Sinterklaas - Sint Zaken" style="width: 100%; height: 100%; object-fit: cover; object-position: center right;" onerror="this.style.display='none'">
      </div>
    </section>
  `;
}
