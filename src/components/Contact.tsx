<form
  action="https://formspree.io/f/xxxxxxxx" // ton endpoint Formspree
  method="POST"
  className="contact-form"
>
  {/* Champs cachés en premier */}
  <input
    type="hidden"
    name="_subject"
    value="Nouveau message depuis ton portfolio"
  />
  <input
    type="hidden"
    name="_next"
    value="https://maryam-portfolio-zeta.vercel.app/thank-you"
  />

  {/* Ensuite les champs visibles */}
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="firstName">First name</label>
      <input type="text" id="firstName" name="firstName" required />
    </div>
    {/* ... les autres champs ... */}
  </div>

  {/* Bouton à la fin */}
  <button type="submit" className="send-button">
    Send Message →
  </button>
</form>;
