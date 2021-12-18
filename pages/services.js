import Header from "../components/header";
import ServicesList from "../components/services-list";

export default function Services({ menuOpen, setMenuOpen }) {
	return (
		<>
			<Header currentPage="services" menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<main>
				<div className="page-header page-header-services">
					<div className="image_overlay"></div>
					<div className="page-header_title font-white font-serif">Our Core Services</div>
				</div>
				<ServicesList />
			</main>
		</>
	);
}
