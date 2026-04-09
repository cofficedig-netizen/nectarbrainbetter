import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

export const useConteudo = (secao: string) => {
  const { idioma } = useLanguage();

  return useQuery({
    queryKey: ["conteudo", secao, idioma],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("conteudos")
        .select("chave, valor_texto, ativo")
        .eq("secao", secao)
        .eq("idioma", idioma);

      if (error) throw error;

      const isActive = data?.some((d) => d.ativo) ?? false;
      const map: Record<string, string> = {};
      data?.forEach((d) => {
        map[d.chave] = d.valor_texto;
      });

      return { conteudo: map, ativo: isActive };
    },
  });
};
