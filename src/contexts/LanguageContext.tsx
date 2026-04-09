import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

type Idioma = "pt" | "en" | "es";

interface LanguageContextType {
  idioma: Idioma;
  setIdioma: (idioma: Idioma) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  idioma: "pt",
  setIdioma: () => {},
  isLoading: true,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [idioma, setIdioma] = useState<Idioma>("pt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("configuracoes")
      .select("valor")
      .eq("chave", "idioma_padrao")
      .maybeSingle()
      .then(({ data }) => {
        if (data?.valor) setIdioma(data.valor as Idioma);
        setIsLoading(false);
      });
  }, []);

  return (
    <LanguageContext.Provider value={{ idioma, setIdioma, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};
