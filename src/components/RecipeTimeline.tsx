import SectionWrapper from "@/components/SectionWrapper";
import { Flame, Clock, Brain, Droplets, FlaskConical, Hand } from "lucide-react";

const stepIcons = [Flame, FlaskConical, Droplets, Clock, Brain, Hand];

const RecipeTimeline = () => (
  <SectionWrapper secao="slide5" className="py-24 md:py-32">
    {(c) => (
      <div
        className="min-h-[60vh]"
        style={{
          background:
            "linear-gradient(180deg, hsl(43 65% 52% / 0.04) 0%, hsl(47 77% 95%) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="opacity-0 animate-fade-in text-3xl md:text-4xl font-display font-bold text-center text-secondary mb-16">
            {c.titulo}
          </h2>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/30" />

            {Array.from({ length: 6 }, (_, i) => {
              const n = i + 1;
              const Icon = stepIcons[i];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={n}
                  className="opacity-0 animate-fade-in relative flex items-start mb-12 last:mb-0"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  {/* Desktop layout: alternating sides */}
                  <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] w-full items-start">
                    {/* Left content */}
                    <div className={isLeft ? "pr-8 text-right" : ""}>
                      {isLeft && (
                        <StepCard
                          numero={c[`passo_${n}_numero`]}
                          titulo={c[`passo_${n}_titulo`]}
                          desc={c[`passo_${n}_desc`]}
                          align="right"
                        />
                      )}
                    </div>

                    {/* Center node */}
                    <div className="flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 bg-background">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Right content */}
                    <div className={!isLeft ? "pl-8" : ""}>
                      {!isLeft && (
                        <StepCard
                          numero={c[`passo_${n}_numero`]}
                          titulo={c[`passo_${n}_titulo`]}
                          desc={c[`passo_${n}_desc`]}
                          align="left"
                        />
                      )}
                    </div>
                  </div>

                  {/* Mobile layout: left-aligned */}
                  <div className="md:hidden flex items-start gap-4 w-full">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10 bg-background">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <StepCard
                        numero={c[`passo_${n}_numero`]}
                        titulo={c[`passo_${n}_titulo`]}
                        desc={c[`passo_${n}_desc`]}
                        align="left"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

const StepCard = ({
  numero,
  titulo,
  desc,
  align,
}: {
  numero: string;
  titulo: string;
  desc: string;
  align: "left" | "right";
}) => (
  <div
    className={`relative p-5 rounded-lg border border-primary/20 bg-card shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 ${
      align === "right" ? "text-right" : "text-left"
    }`}
  >
    <span className="absolute top-3 text-4xl font-display font-bold text-primary/15 leading-none"
      style={{ [align === "right" ? "left" : "right"]: "12px" }}
    >
      {numero}
    </span>
    <h3 className="font-display text-lg font-semibold text-secondary mb-2">
      {titulo}
    </h3>
    <p className="font-body text-sm text-muted-foreground leading-relaxed">
      {desc}
    </p>
  </div>
);

export default RecipeTimeline;
