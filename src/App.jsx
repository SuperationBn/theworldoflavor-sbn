import FooterSeection from "./components/Footer/FooterSeection";
import Hero from "./components/Hero/Hero";
import InfoSection from "./components/Info/InfoSection";
import OfertaSection from "./components/Oferta/OfertaSection";
import PLanesSection from "./components/Planes/PLanesSection";
import Platos from "./components/Platos/PlatosMustra";
import PromoFood from "./components/Promo/PromoFood";
import Slider from "./components/Slider/SliderSection";

function App() {
	return (
		<>
			<header>
				<Hero />
			</header>
			<main>
				<InfoSection />
				<Platos />
				<Slider />
				<PromoFood />
				<PLanesSection />
				<OfertaSection />
			</main>
			<FooterSeection />
		</>
	);
}

export default App;
