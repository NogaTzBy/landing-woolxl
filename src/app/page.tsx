import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import About from "@/components/About";
import NewArrivals from "@/components/NewArrivals";
import Bags from "@/components/Bags";
import InstagramFeed from "@/components/InstagramFeed";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedCollection />
      <About />
      <NewArrivals />
      <Bags />
      <InstagramFeed />
      <VisitUs />
      <Footer />
    </main>
  );
}
