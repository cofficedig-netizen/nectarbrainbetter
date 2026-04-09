import SectionWrapper from "@/components/SectionWrapper";
import { AlertTriangle, ShieldCheck } from "lucide-react";

interface WarningBoxProps {
  title: string;
  text: string;
  variant?: "warning" | "info";
  delay?: number;
}

const WarningBox = ({ title, text, variant = "info", delay = 0 }: WarningBoxProps) => (
  <div
    className="opacity-0 animate-fade-in bg-card rounded-lg p-5 shadow-sm"
    style={{
      animationDelay: `${delay}s`,
      borderLeft: `4px solid ${variant === "warning" ? "hsl(15 60% 50%)" : "hsl(var(--secondary))"}`,
    }}
  >
    <h4 className="font-display font-semibold text-foreground text-lg mb-2">{title}</h4>
    <p className="font-body text-muted-foreground text-sm leading-relaxed">{text}</p>
  </div>
);

const WarningsSlide = () => (
  <SectionWrapper secao="slide7" className="py-20 bg-background">
    {(c) => (
      <div className="container mx-auto px-4">
        <h2 className="opacity-0 animate-fade-in text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
          {c.titulo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <WarningBox title={c.box1_titulo} text={c.box1_texto} variant="warning" delay={0.1} />
          <WarningBox title={c.box2_titulo} text={c.box2_texto} delay={0.2} />
          <WarningBox title={c.box3_titulo} text={c.box3_texto} delay={0.3} />
          <WarningBox title={c.box4_titulo} text={c.box4_texto} delay={0.4} />
        </div>

        {/* Medical Disclaimer */}
        <div
          className="opacity-0 animate-fade-in mt-10 max-w-3xl mx-auto bg-card border border-border rounded-lg p-6 shadow-sm"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-primary mt-0.5 shrink-0" />
            <div>
              <h4 className="font-display font-semibold text-foreground text-lg mb-2">
                {c.disclaimer_titulo}
              </h4>
              <p className="font-body text-muted-foreground text-sm leading-relaxed italic">
                {c.disclaimer_texto}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default WarningsSlide;
