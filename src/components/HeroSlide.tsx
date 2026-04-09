import SectionWrapper from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";

const HeroSlide = () => (
  <SectionWrapper secao="slide1" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {(c) => (
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, hsl(47 77% 95%) 0%, hsl(43 65% 52% / 0.08) 100%)",
        }}
      >
        {/* Honeycomb pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0 34L0 84V50l28-16 28 16v34L28 100z' fill='%23D4AF37' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "56px 100px",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center pt-24">
          <h1 className="opacity-0 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary tracking-wider">
            {c.titulo}
          </h1>
          <p className="opacity-0 animate-fade-in-delay-1 mt-4 text-xl md:text-2xl font-display text-secondary">
            {c.subtitulo}
          </p>

          {/* Image placeholder */}
          <div className="opacity-0 animate-fade-in-delay-2 mx-auto mt-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <span className="text-5xl">🍯</span>
          </div>

          <p className="opacity-0 animate-fade-in-delay-3 mt-8 text-base md:text-lg text-muted-foreground font-body max-w-xl mx-auto">
            {c.descricao}
          </p>

          <div className="opacity-0 animate-fade-in-delay-3 flex flex-wrap justify-center gap-3 mt-6">
            {c.tags?.split("+").map((tag: string) => (
              <Badge
                key={tag.trim()}
                className="bg-primary/15 text-primary border border-primary/30 font-body text-sm px-4 py-1.5 rounded-full"
              >
                {tag.trim()}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default HeroSlide;
