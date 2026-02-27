// src/pages/ThankYou.tsx (ou dans App si one-page)
export default function ThankYou() {
  return (
    <section className="thank-you">
      <h2>Thank you!</h2>
      <p>Your message has been sent. I'll get back to you soon.</p>
      <a href="/" className="back-home">
        ← Back to home
      </a>
    </section>
  );
}
