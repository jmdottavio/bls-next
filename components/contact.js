import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [heardAbout, setHeardAbout] = useState("");
	const [note, setNote] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const [formError, setFormError] = useState();

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		setFormError("");

		if (!email && !phone) {
			setFormError("Please enter your phone or email so we can contact you back!");
			return;
		}

		emailjs
			.sendForm("service_3oooasd", "template_cpf5yzq", form.current, "user_iJX3Rw8J5glI5YvkPMFMO")
			.then(
				(result) => {
					setEmailSent(true);
				},
				(error) => {}
			);
	};

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
				{emailSent ? (
					<div className="contact_form background-white" style={{ minHeight: "400px" }}>
						Your request has been sent and we&apos;ll get back to you as soon as possible! Thank you
						for contacting us!
					</div>
				) : (
					<form className="contact_form background-white" ref={form} onSubmit={sendEmail}>
						<div className="contact_form_field" style={{ marginTop: "10px" }}>
							<div className="contact_form_field_label">Full Name</div>
							<div className="contact_form_field_input">
								<input
									type="text"
									name="name"
									id="name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_field">
							<div className="contact_form_field_label">Email</div>
							<div className="contact_form_field_input">
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_field">
							<div className="contact_form_field_label">Phone Number</div>
							<div className="contact_form_field_input">
								<input
									type="tel"
									name="phone"
									id="phone"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_field">
							<div className="contact_form_field_label">Service Address</div>
							<div className="contact_form_field_input">
								<input
									type="text"
									name="address"
									id="address"
									value={address}
									onChange={(e) => setAddress(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_field">
							<div className="contact_form_field_label">How did you hear about us?</div>
							<div className="contact_form_field_input">
								<input
									type="text"
									name="heard_about"
									id="heard_about"
									value={heardAbout}
									onChange={(e) => setHeardAbout(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_field">
							<div className="contact_form_field_label">Please provide details of your request</div>
							<div className="contact_form_field_input">
								<textarea
									name="note"
									id="note"
									rows="3"
									required
									value={note}
									onChange={(e) => setNote(e.target.value)}
								/>
							</div>
						</div>
						<div className="contact_form_error" style={{ color: "red", textAlign: "center" }}>
							{formError}
						</div>
						<div className="contact_form_submit">
							<div className="bls-button bls-button-dark">
								<button type="submit" className="font-white">
									Request A Quote
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</>
	);
};

export default ContactForm;
