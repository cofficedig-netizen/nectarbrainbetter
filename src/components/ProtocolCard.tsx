import SectionWrapper from "@/components/SectionWrapper";
import { Brain, Lightbulb, Pill } from "lucide-react";

const ProtocolCard = () => (
  <SectionWrapper secao="slide6" className="py-24 md:py-32">
    {(c) => (
      <div className="container mx-auto px-4">
        <div
          className="opacity-0 animate-fade-in max-w-2xl mx-auto rounded-xl border border-primary/30 bg-card shadow-lg overflow-hidden"
          style={{
            boxShadow: "0 8px 40px hsl(43 65% 52% / 0.12)",
          }}
        >
          {/* Header */}
          <div className="text-center py-8 px-6 border-b border-primary/20">
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary mx-auto mb-4 flex items-center justify-center">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">
              {c.titulo}
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              {c.subtitulo}
            </p>
          </div>

          {/* Dosage Section */}
          <div className="px-8 py-6 border-b border-primary/10">
            <div className="flex items-center gap-2 mb-3">
              <Pill className="w-5 h-5 text-primary" />
              <h3 className="font-display text-sm font-semibold text-secondary uppercase tracking-wider">
                {c.dose_titulo}
              </h3>
            </div>
            <p className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
              {c.dose_valor}
            </p>
            <p className="font-body text-sm text-muted-foreground">
              {c.dose_timing}
            </p>
          </div>

          {/* Cycle Section */}
          <div className="px-8 py-6 border-b border-primary/10">
            <h3 className="font-display text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              {c.ciclo_titulo}
            </h3>
            <p className="font-body text-base font-semibold text-foreground mb-3">
              {c.ciclo_valor}
            </p>

            {/* 21+7 visual */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {Array.from({ length: 21 }, (_, i) => (
                <div
                  key={`on-${i}`}
                  className="w-3 h-3 rounded-full bg-secondary"
                />
              ))}
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={`off-${i}`}
                  className="w-3 h-3 rounded-full border-2 border-primary bg-transparent"
                />
              ))}
            </div>

            <p className="font-body text-xs text-muted-foreground italic">
              {c.ciclo_desc}
            </p>
          </div>

          {/* Extra Tip */}
          <div className="px-8 py-6 border-b border-primary/10">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-display text-sm font-semibold text-secondary uppercase tracking-wider mb-1">
                  {c.extra_titulo}
                </h3>
                <p className="font-body text-sm text-muted-foreground italic leading-relaxed">
                  {c.extra_valor}
                </p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="px-8 py-5 text-center">
            <div className="w-24 h-px bg-primary/30 mx-auto mb-3" />
            <p className="font-display text-sm text-muted-foreground italic">
              {c.assinatura}
            </p>
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default ProtocolCard;
