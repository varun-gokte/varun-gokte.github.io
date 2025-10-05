import Footer from "./Footer";
import Navbar from "./Navbar";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
	return(
		<div className="bg-blue-100">
			<Navbar />
			<Hero />
			<Projects />
			<Experience />
			<Education />
			<Skills />
			<Footer />
		</div>
	)  
}

export default App;
