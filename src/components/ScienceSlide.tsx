import SectionWrapper from "@/components/SectionWrapper";
import { Brain, Leaf, Zap } from "lucide-react";

const icons = [
  { Icon: Brain, label: "Neuroplasticity" },
  { Icon: Zap, label: "BDNF" },
  { Icon: Leaf, label: "Natural" },
];

const ScienceSlide = () => (
  <SectionWrapper
    secao="slide2"
    className="relative py-24 md:py-32 overflow-hidden"
  >
    {(c) => (
      <div
        className="absolute inset-0"
        style={{ background: "hsl(150 33% 27% / 0.03)" }}
      >
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Text - 60% */}
            <div className="md:col-span-3 opacity-0 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-8">
                {c.titulo}
              </h2>

              <div className="flex gap-6 mb-8">
                {icons.map(({ Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 hover-scale">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-xs font-body text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>

              <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed mb-8">
                {c.texto_ciencia}
              </p>

              {/* NIH Citation */}
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
                <p className="text-sm md:text-base font-body italic text-foreground/70 leading-relaxed">
                  "{c.citacao_nih}"
                </p>
              </blockquote>
            </div>

            {/* Decorative - 40% */}
            <div className="md:col-span-2 hidden md:flex flex-col items-center justify-center gap-8 opacity-0 animate-fade-in-delay-2">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                <Brain className="w-20 h-20 text-primary/40" />
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full" />
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-secondary/10 to-primary/20 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-secondary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default ScienceSlide;
