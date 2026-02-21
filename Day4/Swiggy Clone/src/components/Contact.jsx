const Contact = () => {


  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2 id="contact-us">Contact Us</h2>
        <p className="subtitle">We'd love to hear from you</p>

        <form>
          <input id="c-btn"type="text" placeholder="Your Name" required />
          <input id="c-btn"type="email" placeholder="Your Email" required />
          <textarea id="c-btn" placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;