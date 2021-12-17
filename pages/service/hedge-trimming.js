import Header from "../../components/header";
import ServicesList from "../../components/services-list";
import Service from "../../components/service";

export default function HedgeTrimming() {
	return (
		<>
			<Header currentPage="services" />
			<Service name="trimming" />
			<ServicesList />
		</>
	);
}
