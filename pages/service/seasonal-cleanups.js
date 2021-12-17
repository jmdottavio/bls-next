import Header from "../../components/header";
import ServicesList from "../../components/services-list";
import Service from "../../components/service";

export default function SeasonalCleanups() {
	return (
		<>
			<Header currentPage="services" />
			<Service name="cleanup" />
			<ServicesList />
		</>
	);
}
