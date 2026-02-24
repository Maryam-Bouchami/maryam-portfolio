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

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" placeholder="Maryam" required />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Bouchami"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="send-button">
            Send Message →
          </button>
        </form>

        <footer className="contact-footer">
          <p>
            Designed & Built with ♥ by Maryam Bouchami ©2026 •
            <a href="mailto:maryambouchami@gmail.com">
              maryambouchami@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
