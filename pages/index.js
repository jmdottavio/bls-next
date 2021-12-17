import Image from "next/image";
import ServicesList from "../components/services-list";
import Header from "../components/header";

export default function Home() {
	return (
		<>
			<Header currentPage="home" />
			<main className="main">
				<div className="main_image">
					<div className="main_image_overlay"></div>
					<div className="main_image_content">
						<div className="main_image_content_text">Your Satisfaction Is Our Motivation.</div>
						<div className="bls-button main_image_content_cta">Contact Us</div>
					</div>
				</div>
				<div className="main_about">
					<div className="main_about_content">
						<div className="main_about_content_title font-serif">Quality Landscaping Services</div>
						<div className="main_about_content_subtitle font-dark-green">
							Lawn Mowing, Mulch Installation, Snow Removal &amp; More...
						</div>
						<div className="main_about_content_text">
							With the goal of becoming the most trusted and preferred lawn and landscape
							maintenance service provider in our community, Bechard Lawn Services provides clients
							with the best possible experience and high-quality services and solutions, while
							bringing professionalism to the industry.
							<br />
							<br />
							Our client-focused values and willingness to listen and respond to feedback has helped
							us to create a very positive reputation and is what truly sets us apart. Our committed
							team members thrive on customer satisfaction and always aim to go above and beyond.
						</div>
						<div className="main_about_content_learn-more">
							<div className="bls-button bls-button-outline bls-button-small">
								Learn More About Us
							</div>
						</div>
					</div>
					<div className="main_about_image border-radius">
						<Image src="/image/Extra.jfif" alt="" width="800" height="600" />
					</div>
					<div className="main_about_testimonials">
						<div className="main_about_testimonials_content border-radius background-dark-green font-white">
							<div className="main_about_testimonials_content_text">
								&quot;Our yard was the worst on the street, seemed like every leaf in the
								neighborhood ended up in our yard! But Chris and his team did a crazy transformation
								in less than four hours - our yard became the best! This is the second time
								we&apos;ve used Bechard Lawn Services for a fall clean up (last year was the first)
								and as usual, they did not disappoint! If you need an overhaul, and for it to be
								affordable, trust Chris and his team - it is worth it! He also does snow
								plowing!&quot;
							</div>
							<div className="main_about_testimonials_content_name">Danielle B.</div>
						</div>
						<div className="main_about_testimonials_content border-radius background-dark-green font-white">
							<div className="main_about_testimonials_content_text">
								&quot;We had Bechard Lawn Services LLC at our house this week and they did a
								fantastic job! Our flower beds and hedges needed a lot of work, we hadn&apos;t
								mulched or weeded in years - but you&apos;d never know that now! Chris got back to
								me immediately with a reasonable quote, was able to start work soon thereafter, and
								spent two full days working diligently to get the job done. I&apos;m very impressed
								- I&apos;ll definitely be using their services again and I&apos;d highly recommend
								them to anyone else in the Clifton Park area who needs a quality landscaper!&quot;
							</div>
							<div className="main_about_testimonials_content_name">Lauren A.</div>
						</div>
						<div className="main_about_testimonials_content border-radius background-dark-green font-white">
							<div className="main_about_testimonials_content_text">
								&quot;We hired Bechard Lawn Services to aerate and dethatch our lawn and they
								exceeded our expectations. Not only is their work impeccable, but they 1. Respond to
								your inquiry timely 2. Offer fair pricing 3. Keep in communcation with you about
								scheduling 4. Do an excellent job 5. And best of all - the owner Christopher is a
								really nice guy who is hard working and you&apos;ll be happy to do business
								with!&quot;
							</div>
							<div className="main_about_testimonials_content_name">Lisa C.</div>
						</div>
					</div>
				</div>
				<ServicesList />
			</main>
		</>
	);
}
