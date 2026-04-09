import Header from "@/components/Header";
import HeroSlide from "@/components/HeroSlide";
import ScienceSlide from "@/components/ScienceSlide";
import IngredientsSlide from "@/components/IngredientsSlide";
import BenefitsSlide from "@/components/BenefitsSlide";
import RecipeTimeline from "@/components/RecipeTimeline";
import ProtocolCard from "@/components/ProtocolCard";
import OffersBlock from "@/components/OffersBlock";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSlide />
    <ScienceSlide />
    <IngredientsSlide />
    <BenefitsSlide />
    <RecipeTimeline />
    <ProtocolCard />
    <OffersBlock />
  </div>
);

export default Index;
