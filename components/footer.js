import Image from "next/image";

const Footer = () => {
	return (
		<footer className="background-dark-green font-white">
			<div className="footer_header">
				<div className="header_logo_text">
					<div className="header_logo_text_title font-serif">Bechard</div>
					<div className="header_logo_text_subtitle font-serif">Lawn Services, LLC</div>
				</div>
				<div className="header_cta_contact_phone font-numeric">
					<a href="tel:15185906551">
						<i className="fas fa-phone"></i>&nbsp;518-590-6551
					</a>
				</div>
			</div>
			<div className="footer_social">
				<div className="footer_social_icon">
					<a
						href="https://www.facebook.com/Bechard-Lawn-Services-LLC-194754461100609/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-facebook fa-2x"></i>
					</a>
				</div>
				<div className="footer_social_icon">
					<a href="https://g.page/r/CQ2LxUFLNKVlEAE/" target="_blank" rel="noreferrer">
						<i className="fab fa-google-plus fa-2x"></i>
					</a>
				</div>
				<div className="footer_social_icon">
					<a
						href="https://www.instagram.com/bechardlawnservicesllc/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-instagram fa-2x"></i>
					</a>
				</div>
				<div className="footer_social_icon" style={{ marginTop: "1px" }}>
					<a
						href="https://nextdoor.com/pages/bechard-lawn-services-city/"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/image/nextdoor-icon.png" width="30" height="30" alt="Nextdoor" />
					</a>
				</div>
			</div>
			<div className="footer_info">
				<div className="footer_info_email">
					<a href="mailto:bechardlawnservices@yahoo.com">bechardlawnservices@yahoo.com</a>
				</div>
				<div className="footer_info_address">
					<span className="font-numeric">1564</span> Green Island, NY,
					<span className="font-numeric">12183</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
