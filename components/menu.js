import Link from "next/link";

const Menu = ({ menuOpen, setMenuOpen }) => {
	console.log("set menu open", setMenuOpen);

	return (
		<>
			{!menuOpen ? (
				<></>
			) : (
				<div className="menu">
					<div className="menu_content">
						<div className="menu_content_item">
							<div onClick={() => setMenuOpen(false)}>
								<Link href="/">home</Link>
							</div>
						</div>
						<div className="menu_content_item">
							<div onClick={() => setMenuOpen(false)}>
								<Link href="/about">about</Link>
							</div>
						</div>
						<div className="menu_content_item">
							<div onClick={() => setMenuOpen(false)}>
								<Link href="/services">services</Link>
							</div>
						</div>
						<div className="menu_content_item menu_content_item_request">
							<div>
								<div
									className="bls-button bls-button-dark"
									onClick={() => {
										setMenuOpen(false);
										window.scrollTo({
											left: 0,
											top: document.body.offsetHeight - 1200,
											behavior: "smooth",
										});
									}}
								>
									Request A Quote
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Menu;
