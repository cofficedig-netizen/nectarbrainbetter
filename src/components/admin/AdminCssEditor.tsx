import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const AdminCssEditor = () => {
  const [css, setCss] = useState("");
  const [original, setOriginal] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from("configuracoes").select("valor").eq("chave", "css_custom").maybeSingle().then(({ data }) => {
      const val = data?.valor ?? "";
      setCss(val);
      setOriginal(val);
      setLoading(false);
    });
  }, []);

  const handleSave = async () => {
    const { error } = await supabase.from("configuracoes").update({ valor: css }).eq("chave", "css_custom");
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "CSS aplicado!" });
      setOriginal(css);
    }
  };

  if (loading) return <p style={{ color: "#999" }}>Carregando...</p>;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold" style={{ color: "#D4AF37" }}>CSS Customizado</h2>
        {css !== original && (
          <Button onClick={handleSave} style={{ background: "#D4AF37", color: "#1A1A1A" }}>
            Aplicar CSS
          </Button>
        )}
      </div>
      <Textarea
        value={css}
        onChange={(e) => setCss(e.target.value)}
        className="bg-[#2D2D2D] border-[#555] text-green-400 font-mono text-sm min-h-[400px]"
        placeholder="/* Insira seu CSS personalizado aqui - será aplicado globalmente */"
      />
    </div>
  );
};

export default AdminCssEditor;
