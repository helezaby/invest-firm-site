import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import PerformanceChart from "./components/PerformanceChart";
import Team from "./components/Team";
import BlogPreview from "./components/BlogPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-20">
        <About />
        <Services />
        <PerformanceChart />
        <Team />
        <BlogPreview />
        <Contact />
      </div>
      <Footer />
    </>
  );
}