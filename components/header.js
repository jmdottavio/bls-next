import Image from "next/image";
import Link from "next/link";

const Header = ({ currentPage }) => {
	return (
		<>
			<header className="header background-dark-green">
				<div className="header_logo">
					<div className="header_logo_wrapper">
						<div className="header_logo_image">
							<Image
								src="/image/Bechard-Lawn-Services-Logo-Full-White.png"
								alt=""
								height="290"
								width="350"
							/>
						</div>
						<div className="header_logo_text">
							<div className="header_logo_text_title font-serif font-white">Bechard</div>
							<div className="header_logo_text_subtitle font-serif font-white">
								Lawn Services LLC
							</div>
						</div>
					</div>
				</div>
				<div className="header_content">
					<div className="header_menu">
						<div className="header_menu_item">
							<div className="header_cta_contact_text" style={{ left: "-3px" }}>
								Contact Us Today
							</div>
							<div className="header_cta_contact_phone font-numeric">
								<a href="tel:15185906551">
									<i className="fas fa-phone"></i>&nbsp;518-590-6551
								</a>
							</div>
							<div className="header_cta_contact_text" style={{ left: "-7px" }}>
								For A Free Quote
							</div>
						</div>
						<div className="header_menu_item" style={{ marginLeft: "20px" }}>
							<div>
								<Link href="/">home</Link>
							</div>
							{currentPage === "home" && (
								<div className="separator background-dark-green" style={{ marginTop: "5px" }}></div>
							)}
						</div>
						<div className="header_menu_item">
							<div>
								<Link href="/about">about</Link>
							</div>
							{currentPage === "about" && (
								<div className="separator background-dark-green" style={{ marginTop: "5px" }}></div>
							)}
						</div>
						<div className="header_menu_item">
							<div>
								<Link href="/services">services</Link>
							</div>
							{currentPage === "services" && (
								<div className="separator background-dark-green" style={{ marginTop: "5px" }}></div>
							)}
						</div>
						<div className="header_menu_item">
							<div className="header_cta_request-quote">
								<div className="bls-button bls-button-dark">Request A Quote</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header_mobile_contact_phone background-grey">
					<div className="header_cta_contact_text font-white" style={{ left: "5px" }}>
						Contact Us Today
					</div>
					<div className="header_cta_contact_phone font-numeric">
						<a href="tel:15185906551">
							<i className="fas fa-phone"></i>&nbsp;518-590-6551
						</a>
					</div>
					<div className="header_cta_contact_text font-white" style={{ left: "-1px" }}>
						For A Free Quote
					</div>
				</div>
				<div className="header_menu_icon">
					<div className="header_menu_icon_item background-grey"></div>
					<div className="header_menu_icon_item background-grey"></div>
					<div className="header_menu_icon_item background-grey"></div>
				</div>
			</header>
			<div className="separator background-dark-green"></div>
			<div className="separator background-grey"></div>
		</>
	);
};

export default Header;
