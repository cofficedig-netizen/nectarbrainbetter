import Header from "@/components/Header";
import HeroSlide from "@/components/HeroSlide";
import ScienceSlide from "@/components/ScienceSlide";
import IngredientsSlide from "@/components/IngredientsSlide";
import BenefitsSlide from "@/components/BenefitsSlide";
import RecipeTimeline from "@/components/RecipeTimeline";
import ProtocolCard from "@/components/ProtocolCard";
import WarningsSlide from "@/components/WarningsSlide";
import ClosingHero from "@/components/ClosingHero";
import OffersBlock from "@/components/OffersBlock";
import Footer from "@/components/Footer";
import { useCustomCss } from "@/hooks/useCustomCss";

const Index = () => {
  useCustomCss();
  return (
  <div className="min-h-screen">
    <Header />
    <HeroSlide />
    <ScienceSlide />
    <IngredientsSlide />
    <BenefitsSlide />
    <RecipeTimeline />
    <ProtocolCard />
    <WarningsSlide />
    <ClosingHero />
    <OffersBlock />
    <Footer />
  </div>
  );
};

export default Index;
