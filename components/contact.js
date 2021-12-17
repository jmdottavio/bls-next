const ContactForm = () => {
	return (
		<>
			<div className="contact" id="contact">
				<div className="contact_image background-dark-green">
					<div className="contact_image_overlay"></div>
					<div className="contact_image_title font-serif font-white">
						<a href="#contact">Request A Quote</a>
					</div>
					<div className="contact_image_text font-white">
						Please enter your info and we will call or email you back within 24 hours of receiving
						your request. <br />
						<br /> Thank you and have a great day!
					</div>
				</div>
				<div className="contact_form background-white">
					<div className="contact_form_field" style={{ marginTop: "10px" }}>
						<div className="contact_form_field_label">Full Name</div>
						<div className="contact_form_field_input">
							<input type="text" name="name" id="name" />
						</div>
					</div>
					<div className="contact_form_field">
						<div className="contact_form_field_label">Email</div>
						<div className="contact_form_field_input">
							<input type="email" name="email" id="email" />
						</div>
					</div>
					<div className="contact_form_field">
						<div className="contact_form_field_label">Phone Number</div>
						<div className="contact_form_field_input">
							<input type="tel" name="phone" id="phone" />
						</div>
					</div>
					<div className="contact_form_field">
						<div className="contact_form_field_label">Service Address</div>
						<div className="contact_form_field_input">
							<input type="text" name="address" id="address" />
						</div>
					</div>
					<div className="contact_form_field">
						<div className="contact_form_field_label">How did you hear about us?</div>
						<div className="contact_form_field_input">
							<input type="text" name="address" id="address" />
						</div>
					</div>
					<div className="contact_form_field">
						<div className="contact_form_field_label">Please provide details of your request</div>
						<div className="contact_form_field_input">
							<textarea name="note" id="note" rows="3"></textarea>
						</div>
					</div>
					<div className="contact_form_submit">
						<div className="bls-button bls-button-dark">Request A Quote</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactForm;
