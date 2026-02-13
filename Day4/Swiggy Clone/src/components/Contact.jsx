export function Contact(){
	return (
		<div class="contact-container">
    <h2>Contact Us</h2>

    <form>
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label>Message</label>
        <textarea placeholder="Type your message..." required></textarea>
      </div>

      <button class="contact-btn">Send Message</button>
    </form>

    <div class="contact-info">
      📧 support@example.com <br/>
      📞 +91 12345 67890
    </div>
  </div>
	);
}
