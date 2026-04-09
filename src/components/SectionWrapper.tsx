import { ReactNode } from "react";
import { useConteudo } from "@/hooks/useConteudo";
import { SkeletonBlock } from "@/components/SkeletonBlock";

interface SectionWrapperProps {
  secao: string;
  children: (conteudo: Record<string, string>) => ReactNode;
  className?: string;
}

const SectionWrapper = ({ secao, children, className }: SectionWrapperProps) => {
  const { data, isLoading } = useConteudo(secao);

  if (isLoading) return <SkeletonBlock />;
  if (!data?.ativo) return null;

  return <section className={className}>{children(data.conteudo)}</section>;
};

export default SectionWrapper;
