import Header from "../../components/header";
import ServicesList from "../../components/services-list";
import Service from "../../components/service";

export default function MulchInstallation() {
	return (
		<>
			<Header currentPage="services" />
			<Service name="mulch" />
			<ServicesList />
		</>
	);
}
