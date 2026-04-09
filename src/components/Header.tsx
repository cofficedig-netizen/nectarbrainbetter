import LanguageSelector from "@/components/LanguageSelector";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
    <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <span className="font-display text-lg font-bold tracking-wider text-primary">
        NECTAR NEURAL GOLD
      </span>
      <LanguageSelector />
    </div>
  </header>
);

export default Header;
