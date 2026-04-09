import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";

const ClosingHero = () => (
  <SectionWrapper secao="slide8" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    {(c) => (
      <div className="absolute inset-0 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--secondary) / 0.85) 50%, hsl(var(--primary) / 0.2) 100%)",
        }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.4) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2
            className="opacity-0 animate-fade-in text-2xl md:text-4xl lg:text-5xl font-display font-bold leading-tight max-w-3xl mx-auto"
            style={{ color: "hsl(var(--off-white))", animationDuration: "1s" }}
          >
            {c.titulo}
          </h2>

          <div
            className="opacity-0 animate-fade-in-delay-1 flex items-center justify-center gap-3 mt-8 font-mono text-sm"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span>{c.hashtag1}</span>
            <span>•</span>
            <span>{c.hashtag2}</span>
            <span>•</span>
            <span>{c.hashtag3}</span>
          </div>

          <p
            className="opacity-0 animate-fade-in-delay-2 mt-6 font-body text-lg"
            style={{ color: "hsl(var(--off-white) / 0.8)" }}
          >
            {c.cta_texto}
          </p>

          <Button
            className="opacity-0 animate-fade-in-delay-3 mt-6 bg-primary text-primary-foreground hover:bg-primary/90 font-body text-lg px-10 py-6 rounded-full hover-scale"
          >
            {c.cta_botao}
          </Button>

          <p
            className="opacity-0 animate-fade-in-delay-3 mt-12 font-body text-xs tracking-widest uppercase"
            style={{ color: "hsl(var(--off-white) / 0.5)" }}
          >
            {c.assinatura}
          </p>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default ClosingHero;
