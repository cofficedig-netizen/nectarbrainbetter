import SectionWrapper from "@/components/SectionWrapper";
import SynergyWheel from "@/components/SynergyWheel";

const BenefitsSlide = () => (
  <SectionWrapper
    secao="slide4"
    className="relative py-24 md:py-32 overflow-hidden"
  >
    {(c) => (
      <div
        className="absolute inset-0"
        style={{ background: "hsl(150 33% 27% / 0.03)" }}
      >
        {/* Subtle craft-paper texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4">
          <h2 className="opacity-0 animate-fade-in text-3xl md:text-4xl font-display font-bold text-center text-secondary mb-16">
            {c.titulo}
          </h2>
          <div className="opacity-0 animate-fade-in-delay-1">
            <SynergyWheel
              centralLabel={c.legenda_central || ""}
              synergies={Array.from({ length: 6 }, (_, i) => ({
                label: c[`sinergia_${i + 1}`] || "",
              }))}
            />
          </div>
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default BenefitsSlide;
