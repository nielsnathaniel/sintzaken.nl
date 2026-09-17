export function setupHomeContact(element) {
  element.innerHTML = `
    <section id="contact" class="section section-light" style="background-color: var(--color-background);">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; background-color: var(--color-surface); padding: 4rem 3rem; border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-top: 5px solid var(--color-details); text-align: center;">
          
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 700;">Neem Contact Op</h2>
          
          <p style="color: var(--color-text-light); font-size: 1.2rem; margin-bottom: 2.5rem; line-height: 1.6;">
            Heeft u vragen, wilt u een voorstel aanvragen of de mogelijkheden bespreken? Vul het onderstaande formulier in en we komen er snel op terug.
          </p>
          
          <form id="contactForm" style="text-align: left; margin-bottom: 3rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
              <div>
                <label for="name" style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">Naam *</label>
                <input type="text" id="name" name="name" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
              </div>
              <div>
                <label for="email" style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">E-mailadres *</label>
                <input type="email" id="email" name="email" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
              </div>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <label for="phone" style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">Telefoonnummer</label>
              <input type="tel" id="phone" name="phone" style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body);">
            </div>
            
            <div style="margin-bottom: 1.5rem;">
              <label for="message" style="display: block; margin-bottom: 0.5rem; color: var(--color-text); font-weight: 500;">Uw bericht *</label>
              <textarea id="message" name="message" rows="5" required style="width: 100%; padding: 0.8rem; border: 1px solid #ccc; border-radius: 4px; font-family: var(--font-body); resize: vertical;"></textarea>
            </div>
            
            <button type="submit" id="submitBtn" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1.1rem; cursor: pointer; border: none;">Bericht Versturen</button>
            <div id="formStatus" style="margin-top: 1rem; padding: 1rem; border-radius: 4px; display: none; text-align: center;"></div>
          </form>
          
          <div style="padding-top: 2.5rem; border-top: 1px solid rgba(0,0,0,0.08);">
            <h3 style="font-size: 1.4rem; color: var(--color-navy); margin-bottom: 1rem; font-weight: 600;">Contactgegevens</h3>
            <p style="color: var(--color-text-light); font-size: 1.1rem; line-height: 1.8;">
              <strong>Email:</strong> <a href="mailto:sint@sintzaken.nl" style="color: var(--color-accent); text-decoration: none; font-weight: 500;">sint@sintzaken.nl</a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
  `;

  // Form submission logic
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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        const result = await response.json();
        
        statusDiv.style.display = 'block';
        if (result.status === 'success') {
          statusDiv.style.backgroundColor = '#d4edda';
          statusDiv.style.color = '#155724';
          statusDiv.textContent = result.message;
          form.reset();
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
        submitBtn.textContent = 'Bericht Versturen';
        submitBtn.disabled = false;
      }
    });
  }
}
