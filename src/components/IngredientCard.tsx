import { Badge } from "@/components/ui/badge";

interface IngredientCardProps {
  nome: string;
  funcao: string;
  descricao: string;
  emoji: string;
  index: number;
}

const IngredientCard = ({ nome, funcao, descricao, emoji, index }: IngredientCardProps) => (
  <div
    className="opacity-0 animate-fade-in group rounded-xl border border-primary/20 bg-card p-5 shadow-sm hover:shadow-lg hover:shadow-primary/10 hover:border-primary/40 transition-all duration-300 hover:scale-[1.03]"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors">
      {emoji}
    </div>
    <h3 className="font-display text-lg font-semibold text-foreground text-center mb-2">
      {nome}
    </h3>
    <div className="flex justify-center mb-3">
      <Badge className="bg-secondary/90 text-secondary-foreground text-xs px-3 py-0.5">
        {funcao}
      </Badge>
    </div>
    <p className="font-body text-sm text-muted-foreground text-center leading-relaxed">
      {descricao}
    </p>
  </div>
);

export default IngredientCard;
