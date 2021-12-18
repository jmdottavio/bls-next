import "../styles/globals.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import Head from "next/head";
import Footer from "../components/footer";
import ServiceArea from "../components/service-area";
import ContactForm from "../components/contact";
import { useCallback, useState } from "react";
import Menu from "../components/menu";

function MyApp({ Component, pageProps }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Raleway:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Oswald:wght@600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<ServiceArea />
			<ContactForm />
			<Footer />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
		</>
	);
}

export default MyApp;
