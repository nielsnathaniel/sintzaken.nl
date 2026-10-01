export async function setupShows(element) {
  let data = {};
  try {
      const res = await fetch('/api/get_content.php?page=shows');
      data = await res.json();
  } catch(e) {}

  const m_title = data.shows_main_title || '2. De Hoofdshow: De Magische Koffer';
  const m_text1 = data.shows_main_text1 || 'Zodra de Sinterklaaskoffer op het podium staat, begint het avontuur. De meter op de koffer moet naar de 100% voordat Sinterklaas kan verschijnen. De kinderen helpen actief mee door samen liedjes te zingen.';
  const m_text2 = data.shows_main_text2 || 'Wanneer de meter vol is, maakt Sinterklaas zijn entree. Een gezellig en interactief programma dat leuk is voor alle leeftijden.';
  const m_usp   = data.shows_main_usp || '✓ Te boeken voor 30, 45 of 60 minuten.';

  element.innerHTML = `
    <section class="section section-surface" style="padding-top: 120px;">
      <div class="container">
        
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <h1 class="text-navy" style="font-size: 3rem; margin-bottom: 1rem;">Complete Sinterklaasshows</h1>
          <p style="font-size: 1.2rem; color: var(--color-text-light); max-width: 800px; margin: 0 auto;">
            Maak uw bedrijfsfeest of evenement onvergetelijk met onze volledig verzorgde, professionele Sinterklaasshows.
          </p>
        </div>

        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">1. Het Voorprogramma</h2>
          
          <div style="display: flex; flex-direction: column; md-flex-direction: row; gap: 2rem; margin-bottom: 2rem; background: rgba(0,0,0,0.02); padding: 2rem; border-radius: 8px;">
            <div style="flex: 1;">
              <h3 class="text-navy" style="font-size: 1.8rem; margin-bottom: 1rem;">De Proefpiet Show</h3>
              <p style="color: var(--color-text-light); line-height: 1.6; font-size: 1.05rem;">
                Voordat de échte Sint arriveert, warmt onze bekende <strong>Proefpiet</strong> (en/of andere entertainment pieten) het publiek op. Een doldwaze interactieve voorstelling vol grappen, grollen en liedjes waarbij de kinderen actief worden betrokken.
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

            <a href="/circus-pieten.html" style="text-decoration: none; display: block;">
              <div style="background: rgba(0,0,0,0.03); padding: 1.5rem 1rem; border-radius: 8px; text-align: center; border: 1px solid rgba(0,0,0,0.05); height: 100%; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎪</div>
                <strong class="text-navy" style="display: block; font-size: 1.05rem; margin-bottom: 0.5rem;">Circus Pieten</strong>
                <p style="color: var(--color-text-light); font-size: 0.9rem; margin: 0; line-height: 1.4;">Acrobatiek & parade</p>
              </div>
            </a>

          </div>
        </div>

        <div style="margin-bottom: 4rem; background: var(--color-surface); padding: 3rem; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(212, 175, 55, 0.2); border-left: 5px solid var(--color-gold);">
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem;"><span class="cms-editable" data-page="shows" data-key="shows_main_title">${m_title}</span></h2>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            <span class="cms-editable" data-page="shows" data-key="shows_main_text1">${m_text1}</span>
          </p>
          <p style="font-size: 1.15rem; color: var(--color-text-light); margin-bottom: 1.5rem; line-height: 1.8;">
            <span class="cms-editable" data-page="shows" data-key="shows_main_text2">${m_text2}</span>
          </p>
          <p style="font-size: 1.1rem; color: var(--color-red); font-weight: 600; margin-bottom: 0;">
            <span class="cms-editable" data-page="shows" data-key="shows_main_usp">${m_usp}</span>
          </p>
        </div>

        <div style="margin-bottom: 4rem;">
          <h2 class="text-gold" style="font-size: 2.2rem; margin-bottom: 1.5rem; border-bottom: 2px solid var(--color-accent); padding-bottom: 0.5rem; display: inline-block;">3. Decor, Techniek & Opties</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 1rem;">
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Decor</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">We kleden de ruimte sfeervol aan met een mooie troon, openhaard, cadeautjes en een bijpassende achtergrond.</p>
            </div>
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Licht & Geluid</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">Wij verzorgen het geluid (inclusief microfoons) en de verlichting tijdens de show, zodat u daar geen omkijken naar heeft.</p>
            </div>
            <div style="background: rgba(0,0,0,0.03); padding: 2rem; border-radius: 8px;">
              <h4 class="text-navy" style="font-size: 1.3rem; margin-bottom: 0.5rem;">Extra's</h4>
              <p style="color: var(--color-text-light); font-size: 1rem; line-height: 1.6;">Maak de dag compleet met bijvoorbeeld een fotograaf, een knutselhoek of een ballonnen-piet.</p>
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
