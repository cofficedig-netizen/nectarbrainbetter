import SectionWrapper from "@/components/SectionWrapper";

const OffersBlock = () => (
  <SectionWrapper
    secao="slide_ofertas"
    className="py-20"
  >
    {(c) => (
      <div className="bg-honey-dark text-primary-foreground py-16 px-4 text-center rounded-lg mx-4 md:mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          {c.titulo}
        </h2>
        <p className="text-lg font-body opacity-90 max-w-2xl mx-auto">
          {c.descricao}
        </p>
      </div>
    )}
  </SectionWrapper>
);

export default OffersBlock;
