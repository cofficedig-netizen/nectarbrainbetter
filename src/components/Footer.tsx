import SectionWrapper from "@/components/SectionWrapper";

const Footer = () => (
  <SectionWrapper secao="footer" className="">
    {(c) => (
      <footer className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          {/* Gold separator line */}
          <div className="h-px bg-primary/30 mb-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-body text-sm" style={{ color: "hsl(var(--off-white) / 0.7)" }}>
              {c.copyright}
            </p>
            <p className="font-body text-sm" style={{ color: "hsl(var(--off-white) / 0.5)" }}>
              {c.links}
            </p>
          </div>
        </div>
      </footer>
    )}
  </SectionWrapper>
);

export default Footer;
