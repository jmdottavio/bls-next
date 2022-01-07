import Header from "../components/header";
import Image from "next/image";

export default function About({ menuOpen, setMenuOpen }) {
	return (
		<>
			<Header currentPage="about" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<main className="main about-page">
				<div className="page-header page-header-about">
					<div className="image_overlay"></div>
					<div className="page-header_title font-white font-serif">About Us</div>
				</div>
				<div className="main_about">
					<div className="main_about_content">
						<div className="main_about_content_text">
							Bechard Lawn Services was officially established in 2018. With a passion for lawn and
							landscape maintenance and a desire to help others, owner Christopher Bechard had the
							idea of creating a company that would provide its valued clients and community with
							quality services and solutions while bringing professionalism to the industry.
							<br />
							<br />
							Today, Bechard Lawn Services proceeds to thrive on delivering the highest quality of
							service while also continuing to build lasting customer relationships. Our client
							focused values and willingness to listen and respond to feedback has helped us to
							create a very positive reputation and is what truly sets us apart. Our committed team
							members thrive on customer satisfaction and always aim to go above and beyond.
							<br />
							<br />
							We proudly service Ballston Lake, Clifton Park, Mechanicville, Halfmoon, Waterford,
							Cohoes, Watervliet, Troy and Latham.
						</div>
					</div>
					<div className="main_about_image border-radius">
						<Image src="/image/Extra.jfif" alt="" width="800" height="600" />
					</div>
					<div className="main_about_mission_vision">
						<div className="main_about_mission">
							<div className="main_about_mission_title font-dark-green font-serif">Our Mission</div>
							<div className="main_about_mission_text">
								We strive to provide our valued clients with the best possible experience and
								high-quality services.
							</div>
						</div>
						<div className="main_about_vision">
							<div className="main_about_vision_title font-dark-green font-serif">Our Vision</div>
							<div className="main_about_vision_text">
								To be recognized as a green industry leader within our community by continuing to
								deliver excellent customer service and adapting our processes to match our
								client&apos;s needs.
							</div>
						</div>
					</div>
				</div>
				<div className="about_values background-dark-green font-white">
					<div className="about_values_title font-serif">Our Core Values</div>
					<div className="about_values_content">
						<div className="about_value about_value_first about_value_first_col">
							<div className="about_value_title font-serif">Integrity</div>
							<div className="about_value_text">
								We strive to perform with integrity in everyday circumstances
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
						<div className="about_value">
							<div className="about_value_title font-serif">Professionalism</div>
							<div className="about_value_text">
								We always conduct ourselves in a professional manner
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
						<div className="about_value about_value_last_col">
							<div className="about_value_title font-serif">Dependability</div>
							<div className="about_value_text">
								We live up to our promises and you can count on us
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
					</div>
					<div className="about_values_content">
						<div className="about_value about_value_first_col">
							<div className="about_value_title font-serif">Pride</div>
							<div className="about_value_text">
								We take great pride in ensuring that our clients are provided with an amazing
								experience and high-quality services
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
						<div className="about_value">
							<div className="about_value_title font-serif">Safety</div>
							<div className="about_value_text">
								We believe safety must be at the forefront of all our decision-making
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
						<div className="about_value about_value_last_col">
							<div className="about_value_title font-serif">Client Focus</div>
							<div className="about_value_text">
								Our clients are the center of who we are, and we are committed to listen and provide
								innovative solutions to the client’s needs.
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
					</div>
					<div className="about_values_content about_value_third_row">
						<div className="about_value about_value_third_row about_value_first_col">
							<div className="about_value_title font-serif">Growth</div>
							<div className="about_value_text">
								We learn from our mistakes and aim to improve every day. We proactively share ideas
								and support each other to grow and develop. We work to expand the value in the
								services we provide to our clients
							</div>
						</div>
						<div className="about_values_mobile_separator"></div>
						<div className="about_value about_value_third_row about_value_last_col">
							<div className="about_value_title font-serif">Our Team</div>
							<div className="about_value_text">
								Our employees are vitally important to our success. Our team makes a difference in
								everything we do, and we shall recognize and celebrate in their growth and success.
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
