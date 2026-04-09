import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useCustomCss = () => {
  const [css, setCss] = useState("");

  useEffect(() => {
    supabase
      .from("configuracoes")
      .select("valor")
      .eq("chave", "css_custom")
      .maybeSingle()
      .then(({ data }) => {
        if (data?.valor) setCss(data.valor);
      });
  }, []);

  useEffect(() => {
    if (!css) return;
    const style = document.createElement("style");
    style.id = "custom-css";
    style.textContent = css;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, [css]);
};
