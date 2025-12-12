import React from "react";
import "./Home.scss";
import LegalTraditionSection from "../../components/Legal Tradition/LegalTradition";
import OnlineConsultationSection from "../../components/Online Legal Consultation/OnlineConsultation";
import OurServices from "../../components/Our Services/Services";
import GallerySection from "../../components/Gallery Section/GallerySection";
import TestimonialsCarousel from "../../components/Clients reviews/ClientsSay";
import Newsletter from "../../components/Stay Updated/Latestupdates";
import FAQ from "../../components/Frequently Asked Questions/FAQ";
import PracticeAreasSection from "@/components/PracticeAreaSection/PracticeAreas";
import HomeHeroSection from "@/components/HomeHeroSection/HomeHeroSection";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HomeHeroSection />

      <PracticeAreasSection />

      <LegalTraditionSection />

      <OnlineConsultationSection />

      <OurServices />

      <GallerySection />

      <TestimonialsCarousel />

      <FAQ />

      <Newsletter />
    </div>
  );
};

export default Home;
