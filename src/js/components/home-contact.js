export function setupHomeContact(element) {
  element.innerHTML = `
    <section id="contact" class="section section-light" style="background-color: var(--color-background);">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; background-color: var(--color-surface); padding: 4rem 3rem; border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-top: 5px solid var(--color-details); text-align: center;" id="configurator-container">
          
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1rem; font-weight: 700;">Stel je Sinterklaasfeest samen 🎁</h2>
          <p style="color: var(--color-text-light); font-size: 1.1rem; margin-bottom: 2.5rem;">Beantwoord een paar korte vragen, dan kijken wij (en ChatG-Piet) direct met je mee.</p>
          
          <!-- Progress Bar -->
          <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 3rem;" id="config-progress">
             <div class="step-dot active" style="width: 12px; height: 12px; border-radius: 50%; background: var(--color-details);"></div>
             <div class="step-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
             <div class="step-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
             <div class="step-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
             <div class="step-dot" style="width: 12px; height: 12px; border-radius: 50%; background: #e2e8f0;"></div>
          </div>

          <!-- Step 1 -->
          <div class="config-step" id="step-1" style="display: block;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-navy);">1. Wat gaan we organiseren?</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1rem;">
                <button class="config-opt btn-outline" data-key="type" data-val="Bedrijfsfeest" style="padding: 1rem; font-size: 1rem; border-radius: 8px;">🏢 Bedrijfsfeest</button>
                <button class="config-opt btn-outline" data-key="type" data-val="Winkelcentrum" style="padding: 1rem; font-size: 1rem; border-radius: 8px;">🛍️ Winkelcentrum</button>
                <button class="config-opt btn-outline" data-key="type" data-val="School / Vereniging" style="padding: 1rem; font-size: 1rem; border-radius: 8px;">🏫 School / Club</button>
                <button class="config-opt btn-outline" data-key="type" data-val="Privé / Huisbezoek" style="padding: 1rem; font-size: 1rem; border-radius: 8px;">🏠 Privé Huisbezoek</button>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="config-step" id="step-2" style="display: none;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-navy);">2. Voor hoeveel mensen ongeveer?</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
                <button class="config-opt btn-outline" data-key="size" data-val="Minder dan 25" style="padding: 1rem; border-radius: 8px;">Minder dan 25</button>
                <button class="config-opt btn-outline" data-key="size" data-val="25 tot 50" style="padding: 1rem; border-radius: 8px;">25 tot 50</button>
                <button class="config-opt btn-outline" data-key="size" data-val="50 tot 100" style="padding: 1rem; border-radius: 8px;">50 tot 100</button>
                <button class="config-opt btn-outline" data-key="size" data-val="100 tot 250" style="padding: 1rem; border-radius: 8px;">100 tot 250</button>
                <button class="config-opt btn-outline" data-key="size" data-val="Meer dan 250" style="padding: 1rem; border-radius: 8px;">Meer dan 250</button>
            </div>
            <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                <button class="btn-back" data-target="1" style="background: none; border: none; color: #64748b; font-weight: bold; cursor: pointer; text-decoration: underline;">← Terug</button>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="config-step" id="step-3" style="display: none;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-navy);">3. Waar ben je specifiek naar op zoek?</h3>
            <p style="font-size: 0.9rem; color: #64748b; margin-bottom: 1.5rem;">(Meerdere antwoorden mogelijk)</p>
            <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; text-align: left; max-width: 400px; margin: 0 auto;">
                <label style="padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                    <input type="checkbox" class="multi-opt" data-key="interest" value="Sinterklaasshow (Compleet programma)" style="width: 20px; height: 20px;"> 
                    <span>Sinterklaasshow (Compleet programma)</span>
                </label>
                <label style="padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                    <input type="checkbox" class="multi-opt" data-key="interest" value="Meet & Greet (Rondlopend / Handjes schudden)" style="width: 20px; height: 20px;"> 
                    <span>Meet & Greet (Handjes schudden)</span>
                </label>
                <label style="padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 1rem;">
                    <input type="checkbox" class="multi-opt" data-key="interest" value="Klassiek Sinterklaasbezoek (Zonder grote show)" style="width: 20px; height: 20px;"> 
                    <span>Klassiek Sinterklaasbezoek</span>
                </label>
            </div>
            <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                <button class="btn-back" data-target="2" style="background: none; border: none; color: #64748b; font-weight: bold; cursor: pointer; text-decoration: underline;">← Terug</button>
                <button class="btn btn-primary btn-next" data-target="4" style="padding: 0.8rem 2rem;">Volgende →</button>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="config-step" id="step-4" style="display: none;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-navy);">4. Wanneer en waar is het?</h3>
            <div style="text-align: left; max-width: 500px; margin: 0 auto;">
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Voorkeursdatum (of periode)</label>
                  <input type="text" id="conf-date" placeholder="Bijv. Vrijdag 3 december of 'eerste weekend dec'" style="width: 100%; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 1.5rem;">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Plaats / Locatie</label>
                  <input type="text" id="conf-loc" placeholder="Bijv. Amsterdam, of 'op ons kantoor'" style="width: 100%; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem;">
                </div>
            </div>
            <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
                <button class="btn-back" data-target="3" style="background: none; border: none; color: #64748b; font-weight: bold; cursor: pointer; text-decoration: underline;">← Terug</button>
                <button class="btn btn-primary btn-next" data-target="5" style="padding: 0.8rem 2rem;">Bijna klaar →</button>
            </div>
          </div>

          <!-- Step 5 -->
          <div class="config-step" id="step-5" style="display: none;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--color-navy);">5. Hoe kunnen we je bereiken?</h3>
            <p style="color: var(--color-text-light); margin-bottom: 2rem;">Je aanvraag staat klaar in het Grote Boek. Waar mogen we het voorstel naartoe sturen?</p>
            <form id="contactForm" style="text-align: left; max-width: 500px; margin: 0 auto;">
                <div style="margin-bottom: 1.2rem;">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Naam *</label>
                  <input type="text" id="name" name="name" required style="width: 100%; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 1.2rem;">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">E-mailadres *</label>
                  <input type="email" id="email" name="email" required style="width: 100%; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem;">
                </div>
                <div style="margin-bottom: 1.2rem;">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Telefoonnummer</label>
                  <input type="tel" id="phone" name="phone" style="width: 100%; padding: 1rem; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 1rem;">
                </div>
                
                <!-- Hidden compiled message -->
                <textarea id="message" name="message" style="display: none;"></textarea>
                
                <div style="margin-top: 2.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <button type="button" class="btn-back" data-target="4" style="background: none; border: none; color: #64748b; font-weight: bold; cursor: pointer; text-decoration: underline;">← Terug</button>
                    <button type="submit" id="submitBtn" class="btn btn-primary" style="padding: 1rem 2rem; font-size: 1.1rem; border: none; cursor: pointer; background-color: var(--color-details);">🚀 Naar het Grote Boek</button>
                </div>
                <div id="formStatus" style="margin-top: 1rem; padding: 1rem; border-radius: 8px; display: none; text-align: center;"></div>
            </form>
          </div>

        </div>
      </div>
      <style>
        .config-opt:hover { background-color: rgba(138, 21, 56, 0.05) !important; border-color: var(--color-details) !important; color: var(--color-details) !important; cursor: pointer; }
      </style>
    </section>
  `;

  // --- Logic ---
  let selections = {
      type: '',
      size: '',
      interests: [],
      date: '',
      location: ''
  };

  const steps = [
      document.getElementById('step-1'),
      document.getElementById('step-2'),
      document.getElementById('step-3'),
      document.getElementById('step-4'),
      document.getElementById('step-5')
  ];
  const dots = document.querySelectorAll('.step-dot');

  function goToStep(stepNum) {
      steps.forEach((s, i) => {
          s.style.display = (i + 1 === stepNum) ? 'block' : 'none';
          dots[i].style.background = (i + 1 <= stepNum) ? 'var(--color-details)' : '#e2e8f0';
      });
  }

  // Handle single choice buttons (Step 1 & 2)
  document.querySelectorAll('.config-opt').forEach(btn => {
      btn.addEventListener('click', (e) => {
          const key = e.target.getAttribute('data-key');
          const val = e.target.getAttribute('data-val');
          selections[key] = val;
          
          if(key === 'type') goToStep(2);
          if(key === 'size') goToStep(3);
      });
  });

  // Handle back buttons
  document.querySelectorAll('.btn-back').forEach(btn => {
      btn.addEventListener('click', (e) => {
          goToStep(parseInt(e.target.getAttribute('data-target')));
      });
  });

  // Handle next buttons
  document.querySelectorAll('.btn-next').forEach(btn => {
      btn.addEventListener('click', (e) => {
          const target = parseInt(e.target.getAttribute('data-target'));
          if (target === 4) {
              // Gather step 3 checkboxes
              const cbs = document.querySelectorAll('.multi-opt:checked');
              selections.interests = Array.from(cbs).map(cb => cb.value);
          }
          if (target === 5) {
              // Gather step 4 texts
              selections.date = document.getElementById('conf-date').value;
              selections.location = document.getElementById('conf-loc').value;
              
              // Compile message
              let msg = `Nieuwe aanvraag via Sinterklaas Configurator:\n\n`;
              msg += `Type: ${selections.type || 'Niet ingevuld'}\n`;
              msg += `Aantal personen: ${selections.size || 'Niet ingevuld'}\n`;
              msg += `Interesse in: ${selections.interests.join(', ') || 'Niet ingevuld'}\n`;
              msg += `Datum: ${selections.date || 'Niet ingevuld'}\n`;
              msg += `Locatie: ${selections.location || 'Niet ingevuld'}\n`;
              document.getElementById('message').value = msg;
          }
          goToStep(target);
      });
  });

  // Form Submission
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      submitBtn.textContent = 'Verzenden...';
      submitBtn.disabled = true;
      
      try {
        const response = await fetch('/contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        statusDiv.style.display = 'block';
        if (result.status === 'success') {
          statusDiv.style.backgroundColor = '#dcfce7';
          statusDiv.style.color = '#166534';
          statusDiv.style.border = '1px solid #bbf7d0';
          statusDiv.innerHTML = '<strong>Staat genoteerd in het Grote Boek! 🎁</strong><br>Wij kijken naar de mogelijkheden en nemen contact met je op.';
          form.reset();
          setTimeout(() => goToStep(1), 5000);
        } else {
          statusDiv.style.backgroundColor = '#f8d7da';
          statusDiv.style.color = '#721c24';
          statusDiv.textContent = result.message || 'Er ging iets mis. Probeer het later opnieuw.';
        }
      } catch (error) {
        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = '#f8d7da';
        statusDiv.style.color = '#721c24';
        statusDiv.textContent = 'Netwerkfout. Controleer uw verbinding en probeer het opnieuw.';
      } finally {
        submitBtn.textContent = '🚀 Naar het Grote Boek';
        submitBtn.disabled = false;
      }
    });
  }
}
