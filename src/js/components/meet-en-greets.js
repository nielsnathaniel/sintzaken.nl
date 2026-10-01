export async function setupMeetEnGreets(element) {
  let data = {};
  try {
      const res = await fetch('/api/get_content.php?page=meet-greets');
      data = await res.json();
  } catch(e) {}

  const title = data.mg_title || 'Magische Meet & Greets';
  const subtitle = data.mg_subtitle || 'De mooiste één-op-één momentjes met Sinterklaas. Van grootschalige evenementen tot een exclusief, intiem bezoek gewoon bij u in de huiskamer.';
  const text1 = data.mg_text1 || 'Een meet & greet is de perfecte manier om kinderen persoonlijk in contact te brengen met Sinterklaas. Zonder de verplichting van een lange show, maar wel met de volledige aandacht van de Sint en zijn Pieten.';
  const text2 = data.mg_text2 || 'Onze Pieten delen pepernoten uit, maken grapjes en zorgen voor een ontspannen sfeer, terwijl Sinterklaas rustig de tijd neemt voor een praatje en een foto met elk kind.';
  const highlight = data.mg_highlight || '✓ Perfect voor winkelcentra, beurzen en openbare evenementen.';

  element.innerHTML = `
    <section class="section section-dark" style="min-height: 50vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 2rem;">
      <img src="/images/b2c_premium.png" alt="Sinterklaas Meet & Greets" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 20%; z-index: 0;" onerror="this.src='/images/winkelcentrum_sint.jpg'">
      <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(to top, rgba(30,0,10,0.9) 0%, rgba(80,0,32,0.4) 100%); z-index: 1;"></div>
      
      <div class="container" style="position: relative; z-index: 2; text-align: center; padding-top: 3rem; padding-bottom: 3rem;">
        <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); font-family: var(--font-heading); color: var(--color-surface); text-shadow: 0 4px 15px rgba(0,0,0,0.8); margin-bottom: 1rem; font-weight: 700;">
          <span class="cms-editable" data-page="meet-greets" data-key="mg_title">${title}</span>
        </h1>
        <p style="font-size: 1.2rem; color: #f0f0f0; max-width: 800px; margin: 0 auto; line-height: 1.6; text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
          <span class="cms-editable" data-page="meet-greets" data-key="mg_subtitle">${subtitle}</span>
        </p>
      </div>
    </section>

    <section id="meet-en-greets" class="section section-light">
      <div class="container">
        
        <div style="background: var(--color-surface); padding: 3rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(212, 175, 55, 0.2); border-left: 5px solid var(--color-gold); margin-bottom: 4rem;">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;">Waarom een Meet & Greet?</h2>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            <span class="cms-editable" data-page="meet-greets" data-key="mg_text1">${text1}</span>
          </p>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            <span class="cms-editable" data-page="meet-greets" data-key="mg_text2">${text2}</span>
          </p>
          <p style="font-size: 1.1rem; color: var(--color-red); font-weight: 600; margin-bottom: 0;">
            <span class="cms-editable" data-page="meet-greets" data-key="mg_highlight">${highlight}</span>
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-md); margin-bottom: 4rem;">
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Voor Particulieren</h3>
            <p style="color: var(--color-text-light);">Tover uw eigen huiskamer om tot een magische plek. Geen stress, maar een prachtig verzorgd huisbezoek.</p>
          </div>
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Voor Bedrijven</h3>
            <p style="color: var(--color-text-light);">Verras uw collega's en hun kinderen op de zaak. Een professionele meet & greet setting waar elk kind persoonlijk wordt aangesproken.</p>
          </div>
          <div style="background: var(--color-surface); padding: var(--spacing-md); border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border-top: 4px solid var(--color-accent);">
            <h3 class="text-red" style="font-size: 1.5rem; margin-bottom: 1rem;">Evenementen & Centra</h3>
            <p style="color: var(--color-text-light);">Creëer drommen blije gezichten op uw evenement of locatie met de perfecte doorstroom en beleving.</p>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 2rem;">
          <a href="/index.html#contact" class="btn btn-primary" style="font-size: 1.2rem; padding: 1.2rem 3rem;">Reserveer een Meet & Greet</a>
        </div>
      </div>
    </section>
  `;
}
