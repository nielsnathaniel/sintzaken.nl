export function setupHomeContact(element) {
  element.innerHTML = `
    <section id="contact" class="section section-light" style="background-color: var(--color-background);">
      <div class="container">
        <div style="max-width: 800px; margin: 0 auto; background-color: var(--color-surface); padding: 4rem 3rem; border-radius: 12px; box-shadow: 0 15px 40px rgba(0,0,0,0.08); border-top: 5px solid var(--color-details); text-align: center;">
          
          <h2 class="text-navy" style="font-size: 2.5rem; margin-bottom: 1.5rem; font-weight: 700;">Neem Contact Op</h2>
          
          <p style="color: var(--color-text-light); font-size: 1.2rem; margin-bottom: 2.5rem; line-height: 1.6;">
            Heeft u vragen, wilt u een voorstel aanvragen of de mogelijkheden bespreken? Wij helpen u graag verder. Neem direct contact op via onderstaande knop of stuur ons een e-mail.
          </p>
          
          <div style="margin-bottom: 3rem;">
            <a href="mailto:sint@sintzaken.nl" class="btn btn-primary" style="display: inline-block; padding: 1rem 2.5rem; font-size: 1.25rem; border-radius: 50px; text-decoration: none; font-weight: 600; box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3); transition: transform 0.3s ease, box-shadow 0.3s ease;">
              Mail naar sint@sintzaken.nl
            </a>
          </div>
          
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
}
