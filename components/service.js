import Image from "next/image";

const serviceContent = [];

serviceContent["lawn"] = {};
serviceContent["lawn"].title = "Lawn Mowing";
serviceContent["lawn"].description = (
	<div>
		<p>
			Our team of experienced professionals takes great pride in maintaining our clients’ lawns on a
			weekly basis. Our team pays very close attention to detail and is very meticulous, ensuring
			that our clients lawns look their absolute best each week.
		</p>
		<p>
			Please note that Weekly Lawn Mowing Services are only available in Waterford, Halfmoon &amp;
			Clifton Park Areas
		</p>
	</div>
);
serviceContent["lawn"].singleImageSrc = "/image/Lawn_Mowing_Service_2.jpg";
serviceContent["lawn"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Lawn_Mowing_Service_3.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Lawn_Mowing_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Lawn_Mowing_Service_5.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["lawn"].expect = (
	<div>
		<p>
			Each week, typically on the same day of the week (weather permitting) two of our team members
			will arrive and will begin with mowing and string trimming of the lawn areas. Every other week
			our team will change the direction in which they mow in order to help maintain a
			well-manicured and healthy appearance, as well as to create a uniform pattern and to prevent
			from creating ruts in our client’s lawn. String trimming will include trimming grass around
			all obstructions (street signs, fire hydrants, lamp posts, mailboxes etc.). Our team will then
			edge along driveways and walkways using a stick edger and or string trimmer in order to
			maintain a well-manicured appearance. Finally, our team will complete the service by blowing
			off grass clippings from all hard services to ensure our clients property looks its absolute
			best.
		</p>
		<p>
			Services will be completed in a safe, efficient, and professional manner while using well
			maintained commercial grade equipment.
		</p>
	</div>
);

serviceContent["mulch"] = {};
serviceContent["mulch"].title = "Mulch Installation";
serviceContent["mulch"].singleImageSrc = "/image/Mulch_Installation_Service_2.jpg";
serviceContent["mulch"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Mulch_Installation_Service_3.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Mulch_Installation_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["mulch"].description = (
	<div>
		<p>
			Mulch is a great way to provide your landscape with the aesthetic appeal and health
			improvements it deserves!
		</p>
		<p>Benefits of mulch:</p>
		<p>
			<ul>
				<li> Reduces the need for watering </li>
				<li> Retains moisture </li>
				<li> Suppresses weed growth </li>
				<li> Moderates soil temperatures </li>
				<li> Improves plant growth </li>
				<li> Improves soil structure and the availability of nutrients for plants </li>
				<li> Improves soil by adding organic material </li>
				<li> Encourages growth of worms and other soil organism</li>
			</ul>
		</p>
	</div>
);
serviceContent["mulch"].expect = (
	<div>
		<p>
			Upon arrival two to three of our trusted and professional team members will begin by prepping
			the area(s) that the mulch will be applied to. Preparation varies depending on the scope of
			work. For existing landscape beds preparation will include removal of existing mulch (if
			necessary, depending on the age, condition, and depth), weeding of the area(s), creating a two
			to three inch defined natural edge to separate the lawn areas and landscape as well as to
			retain the mulch and thoroughly raking the beds clean of any debris.
		</p>
		<p>
			Once the preparation work is complete, our team will then begin installing a 2-3 inch layer of
			mulch, making sure to evenly spread throughout providing a beautifully aesthetic appeal.
		</p>
		<p>
			After the mulch installation has been completed our team will then begin to clean up the work
			area(s) by raking and or blowing off any debris.
		</p>
		<p>
			Finally, our team will do a walk through with the client to ensure that everything has been
			completed to their satisfaction.
		</p>
		<p>
			Services will be completed in a safe, efficient, and professional manner while using well
			maintained commercial grade equipment.
		</p>
	</div>
);

serviceContent["cleanup"] = {};
serviceContent["cleanup"].title = "Seasonal Cleanups";
serviceContent["cleanup"].singleImageSrc = "/image/Seasonal_Cleanups_Service_2.jpg";
serviceContent["cleanup"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Seasonal_Cleanups_Service_3.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Seasonal_Cleanups_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Seasonal_Cleanups_Service_6.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["cleanup"].description = (
	<div>
		<p>
			Performing a seasonal cleanup does not only improve the appearance of a property, it is also
			extremely important in order to keep lawn and landscape areas healthy year round by reducing
			the risk of pests, insects and diseases.
		</p>
		<p>
			A spring cleanup is a crucial step in reviving and preparing your yard for the upcoming
			growing season and provides a great start to promoting a healthy lawn and landscape.
		</p>
	</div>
);
serviceContent["cleanup"].expect = (
	<div>
		<p>
			Upon arrival two to three of our team members will begin by doing a walkthrough of the
			property to get a better understanding of what needs to be done
		</p>
		<p>
			Once our team has completed the walkthrough, we will first start with cutting back perennials
			(if applicable).
		</p>
		<hr />
		<p>
			<b>Spring Cleanup</b>
		</p>
		<p>
			From here our team will then begin to blow out and rake the landscape areas removing any
			debris such as leaves and sticks. Our team will then focus their attention on the lawn areas
			removing any debris. After the lawn and landscape areas have been cleaned up of debris, the
			lawn areas are now ready to be gone over, using a tine rake dethatcher which is attached to
			the front of our mower. This process loosens the soil and helps to remove thatch as well as
			embedded leaves and debris
		</p>
		<p>
			Finally, our team will then mow the lawn areas making sure to bag up any debris, trim around
			any obstructions, edge along driveways and walkways and then blow off all hard surfaces
			ensuring everything is cleaned up and looking it’s best.
		</p>
		<hr />
		<p>
			<b>Fall Cleanup</b>
		</p>
		<p>
			The landscape areas will then be blown out removing any debris such as leaves, sticks and
			clippings from perennials. Once the landscape areas have been blown out, we will then begin to
			blow any debris from the lawn areas to the street where we will then suck everything up using
			our debris loader and loaded into our leaf box and hauled away.
		</p>
		<p>
			A final winterizing mowing service will then be completed. The grass will be cut at a height
			of 3 inches to help prevent snow mold and other diseases due to tall, matted grass. Clippings
			and any remaining debris will be bagged, we will trim around all obstructions and all hard
			surfaces will be blown off for a nice clean-cut finish.
		</p>
		<p>
			At this time our team will do a final walk through making sure all debris has been cleaned up
			to the best of their ability. Please keep in mind that in some cases due freezing temperatures
			some debris may be frozen to the ground and unable to be cleaned up
		</p>
		<hr />
		<p>
			Services will be completed in a safe, efficient, and professional manner while using well
			maintained commercial grade equipment.
		</p>
	</div>
);

serviceContent["trimming"] = {};
serviceContent["trimming"].title = "Shrub & Hedge Trimming";
serviceContent["trimming"].singleImageSrc = "/image/Shrub_Hedge_Trimming_Service_2.jpg";
serviceContent["trimming"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Shrub_Hedge_Trimming_Service_3.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Shrub_Hedge_Trimming_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["trimming"].description = (
	<div>
		<p>
			Too often, plant maintenance is overlooked. There are many benefits to a well-maintained
			landscape aside from aesthetic purposes. While a well-maintained landscape will leave your
			property looking neat and tidy, pruning and trimming of shrubs and hedges also allow for
			proper plant growth and also help to control insects and diseases.
		</p>
		<p>
			The terms pruning and trimming are often used interchangeably however there is a difference
			between the two. Pruning consists of removing dead, loose, and diseased branches or stems
			while trimming consists of cutting back overgrown plants to help maintain the plants size and
			shape.
		</p>
	</div>
);
serviceContent["trimming"].expect = (
	<div>
		<p>
			Upon arrival two to three of our team members will begin by doing a walk through ensuring they
			have a better understanding of our client needs
		</p>
		<p>
			After we have done a walk through, we will begin to prune, trim and shape all essential
			shrubbery and hedges.
		</p>
		<p>
			Once all trimming and pruning has been completed our team will then begin cleaning up any
			clippings and debris.
		</p>
		<p>
			A final walk through will be done at this time to ensure that nothing was missed and that
			everything looks it’s best.
		</p>
		<p>
			Services will be completed in a safe, efficient, and professional manner while using well
			maintained commercial grade equipment.
		</p>
	</div>
);

serviceContent["snow"] = {};
serviceContent["snow"].title = "Snow Removal";
serviceContent["snow"].singleImageSrc = "/image/Snow_Removal_Service_2.jpg";
serviceContent["snow"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Snow_Removal_Service_3.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Snow_Removal_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["snow"].description = (
	<div>
		<p>
			Winter in Upstate New York can be a very disfavored time of year for many of us, especially
			when the snow begins to fall.
		</p>
		<p>
			We here at Bechard Lawn Services are here to help and are happy to provide our valued clients
			with solutions all year round
		</p>
		<p>
			Our top-notch customer communication, dependability and quality services are what set us apart
			from our competitors.
		</p>
		<p>
			Please note that Snow Removal is only available in Waterford, Halfmoon &amp; Clifton Park
			Areas
		</p>
	</div>
);
serviceContent["snow"].expect = (
	<div>
		<p>Services shall commence once accumulations have reached 3 inches, or more</p>
		<p>
			Upon arrival two of our experienced team members will begin by removing snow from the driveway
			and main entrance walkway.
		</p>
		<p>
			Once the driveway and walkway are clear, the mailbox will then be cleared to ensure that our
			client and the mail carrier has access. If there are any fire hydrants located on the
			property, they will be cleared as well to ensure there is complete access in the event of an
			emergency.
		</p>
		<p>
			Services will be completed diligently and in good, professional, and first-class manner, while
			using well-maintained, professional grade equipment and workmanship to complete services in a
			safe and timely manner.
		</p>
		<p>We are licensed and FULLY insured.</p>
	</div>
);

serviceContent["aeration"] = {};
serviceContent["aeration"].title = "Core Aeration & Lawn Overseeding";
serviceContent["aeration"].singleImageSrc = "/image/Core_Aeration_Lawn_Overseeding_Service_2.jpg";
serviceContent["aeration"].gallery = (
	<div>
		<div>
			<Image
				src="/image/Core_Aeration_Lawn_Overseeding_Service_3.jpg"
				alt=""
				width="800"
				height="900"
				className="border-radius"
			/>
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image
				src="/image/Core_Aeration_Lawn_Overseeding_Service_4.jpg"
				alt=""
				width="800"
				height="600"
				className="border-radius"
			/>
		</div>
	</div>
);
serviceContent["aeration"].description = (
	<div>
		<p>
			One of the most beneficial treatments you can provide your lawn is core aeration. Core
			aeration is the process of removing 2-4 inch plugs of soil, depositing them on the surface of
			the turf. This technique reduces soil compaction and manages thatch while also improving
			infiltration of air flow and water into the lawn to promote root growth.
		</p>
		<p>
			The optimal time to aerate in Upstate New York is in the fall as this is when the top growth
			slows down, and the root growth increases
		</p>
		<p>
			Alternately, core aeration can be done in the spring when rapid growth provides quick
			recovery.
		</p>
		<p>
			Core Aeration sets the Optimal Foundation for Overseeding which is a process for improving
			your yard by adding fresh grass seed to your existing lawn to thicken and revitalize
			turfgrass. The same tiny holes created from pulling 2-4 inch plugs that allow air, water and
			nutrients to circulate also allow for better seed to soil contact as well as a safe space
			where grass seed can germinate.
		</p>
		<p>
			The optimal time to overseed your lawn in Upstate New York is in the fall when conditions are
			most favorable for seed germination.
		</p>
	</div>
);
serviceContent["aeration"].expect = (
	<div>
		<p>
			During core aerations and overseeding it is typical for our clients to see only one of our
			trusted team members performing the service.
		</p>
		<p>
			Upon arrival an inspection of the lawn areas will be completed to ensure that our client has
			removed all loose objects from the lawn areas as well as to make sure that any invisible
			fencing and sprinklers (should there be any) are marked in order to prevent from any damage
			being done.
		</p>
		<p>
			Once the inspection has been completed our team member will then begin to aerate the lawn
			areas using a stand on or walk behind aerating machine. This machine uses a row of hollow
			tines to penetrate the soil in order to pull 2-4 inches plugs. Two passes will be made
			(opposite directions) over the lawn in order to create the appropriate number of holes per
			square foot to ensure the best results.
		</p>
		<p>
			After the aeration has been completed it is now time to begin overseeding the lawn areas using
			a broadcast seed spreader. We use the best quality seed products for our clients’ lawns for
			the best result
		</p>
		<p>
			Our team member will complete the service by lightly blowing any seed that may have been
			spread onto any hard surfaces such as driveways, walkways, and patios.
		</p>
		<p>
			Services will be completed in a safe, efficient, and professional manner while using well
			maintained commercial grade equipment.
		</p>
	</div>
);

const defaultImgSrc = "/image/Extra.jfif";

const defaultImgSet = (
	<div>
		<div>
			<Image src={defaultImgSrc} alt="" width="800" height="600" className="border-radius" />
		</div>
		<div style={{ marginTop: "10px" }}>
			<Image src={defaultImgSrc} alt="" width="800" height="600" className="border-radius" />
		</div>
	</div>
);

const Service = ({ name }) => {
	const title = serviceContent[name].title;
	const description = serviceContent[name].description;
	const expect = serviceContent[name].expect;
	const singleImageSrc = serviceContent[name].singleImageSrc;
	const gallery = serviceContent[name].gallery;
	const headerClassNames = `page-header page-header-services page-header-service-${name}`;

	return (
		<>
			<div className={headerClassNames}>
				<div className="image_overlay"></div>
				<div className="page-header_title font-white font-serif">{title}</div>
			</div>
			<div className="service_description">
				<div className="service_description_text">{description}</div>
				<div className="service_description_image">
					<Image
						src={singleImageSrc || defaultImgSrc}
						alt={title}
						width="800"
						height="600"
						className="border-radius"
					/>
				</div>
			</div>
			<div className="service_expect background-dark-green font-white">
				<div className="service_expect_image">{gallery || defaultImgSet}</div>
				<div className="service_expect_text">
					<div className="service_expect_title font-serif">What Our Clients Can Expect</div>
					{expect}
				</div>
			</div>
		</>
	);
};

export default Service;
