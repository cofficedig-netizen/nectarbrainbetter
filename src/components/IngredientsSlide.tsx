import SectionWrapper from "@/components/SectionWrapper";
import IngredientCard from "@/components/IngredientCard";

const emojis = ["🍯", "🦁", "🍵", "🌿", "🫐", "🧘", "🟡", "🥥"];

const IngredientsSlide = () => (
  <SectionWrapper secao="slide3" className="py-24 md:py-32">
    {(c) => (
      <div className="container mx-auto px-4">
        <h2 className="opacity-0 animate-fade-in text-3xl md:text-4xl font-display font-bold text-center text-secondary mb-16">
          {c.titulo_principal}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, i) => {
            const n = i + 1;
            return (
              <IngredientCard
                key={n}
                nome={c[`item_${n}_nome`] || ""}
                funcao={c[`item_${n}_funcao`] || ""}
                descricao={c[`item_${n}_desc`] || ""}
                emoji={emojis[i]}
                index={i}
              />
            );
          })}
        </div>
      </div>
    )}
  </SectionWrapper>
);

export default IngredientsSlide;
