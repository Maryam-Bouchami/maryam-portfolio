// src/components/Contact.tsx
export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-header">
          <p className="say-hello">SAY HELLO</p>
          <h2 className="contact-title">Let's work together.</h2>
          <p className="contact-subtitle">
            Based in Tunis, open to new projects and collaborations. Feel free
            to reach out — I'd love to hear about what you're building.
          </p>
        </div>

        {/* Formulaire avec Formspree - envoi vers ton email */}
        <form
          action="https://formspree.io/f/mnjbrjlo" // ← Remplace par ton endpoint Formspree (voir étape 2)
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="Nouveau message depuis ton portfolio"
          />
          <input
            type="hidden"
            name="_next"
            value="https://ton-portfolio.vercel.app/thank-you"
          />{" "}
          {/* Optionnel : page merci après envoi */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} required></textarea>
          </div>
          <button type="submit" className="send-button">
            Send Message →
          </button>
          <input
            type="hidden"
            name="_next"
            value="https://maryam-portfolio-zeta.vercel.app/thank-you"
          />
        </form>

        <footer className="contact-footer">
          <p>
            Designed & Built with ♥ by Maryam Bouchami ©2025 •
            <a href="mailto:maryambouchami@gmail.com">
              maryambouchami@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
