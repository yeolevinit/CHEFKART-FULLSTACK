import Hero from "./Hero";
import StatsSection from "./StatsSection";
import GallerySection from "./FounderCard";
import VideoGallery from "./Videogallery";
import Contacts from "./Contacts";
import SocialSection from "./SoicalButton";

// Renaming imports locally if you can't rename files yet (Clean Code tip)
// This helps other developers understand what "Lower3" actually is.
import HistorySection from "./Lowertwo"; // Was Lower4
import MissionSection from "./Lowerthree"; // Was Lower3

const About = () => {
  return (
    // <main> tells search engines this is the primary content of the page
    <main className="about-page">
      <Hero />

      {/* Wrap content sections for better structure */}
      <section className="content-stack">
        <HistorySection />
        <MissionSection />
      </section>

      <StatsSection />
      <GallerySection />
      <VideoGallery />

      <section className="contact-footer">
        <Contacts />
        <SocialSection />
      </section>
    </main>
  );
};

export default About;