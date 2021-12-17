import Link from "next/link";

const ServicesList = () => {
	return (
		<>
			<div className="services">
				<Link href="/service/lawn-mowing" alt="Lawn Mowing">
					<div className="services_item service_lawn border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">
							<a>Lawn Mowing</a>
						</div>
					</div>
				</Link>
				<Link href="/service/mulch-installation" alt="Much Installation">
					<div className="services_item service_mulch border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">Mulch Installation</div>
					</div>
				</Link>
				<Link href="/service/seasonal-cleanups" alt="Seasonal Cleanups">
					<div className="services_item service_cleanup border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">Seasonal Cleanups</div>
					</div>
				</Link>
				<Link href="/service/hedge-trimming" alt="Shrub &amp; Hedge Trimming">
					<div className="services_item service_trimming border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">Shrub &amp; Hedge Trimming</div>
					</div>
				</Link>
				<Link href="/service/snow-removal" alt="Snow Removal">
					<div className="services_item service_snow border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">Snow Removal</div>
					</div>
				</Link>
				<Link href="/service/aeration" alt="Core Aeration &amp; Lawn Overseeding">
					<div className="services_item service_aeration border-radius font-white">
						<div className="image_overlay"></div>
						<div className="services_item_content">Core Aeration &amp; Lawn Overseeding</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default ServicesList;
