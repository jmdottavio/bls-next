import Header from "../components/header";
import ServicesList from "../components/services-list";

export default function Services() {
	return (
		<>
			<Header currentPage="services" />
			<div className="page-header page-header-services">
				<div className="image_overlay"></div>
				<div className="page-header_title font-white font-serif">Our Core Services</div>
			</div>
			<ServicesList />
		</>
	);
}
