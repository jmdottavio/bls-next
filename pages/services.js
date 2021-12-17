import Header from "../components/header";
import ServicesList from "../components/services-list";

export default function Services() {
	return (
		<>
			<Header currentPage="services" />
			<ServicesList />
		</>
	);
}
