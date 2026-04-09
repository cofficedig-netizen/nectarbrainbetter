import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const secoes = [
  { secao: "slide1", label: "Slide 1 – Hero" },
  { secao: "slide2", label: "Slide 2 – Filosofia" },
  { secao: "slide3", label: "Slide 3 – Ingredientes" },
  { secao: "slide4", label: "Slide 4 – Sinergias" },
  { secao: "slide5", label: "Slide 5 – Receita" },
  { secao: "slide6", label: "Slide 6 – Protocolo" },
  { secao: "slide7", label: "Slide 7 – Avisos" },
  { secao: "slide8", label: "Slide 8 – Fechamento" },
  { secao: "footer", label: "Footer" },
  { secao: "slide_ofertas", label: "Ofertas" },
];

const AdminSettings = () => {
  const [toggles, setToggles] = useState<Record<string, boolean>>({});
  const [idiomaPadrao, setIdiomaPadrao] = useState("pt");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      // Load toggle states
      const { data: rows } = await supabase
        .from("conteudos")
        .select("secao, ativo")
        .order("secao");
      if (rows) {
        const map: Record<string, boolean> = {};
        rows.forEach((r) => { map[r.secao] = r.ativo; });
        setToggles(map);
      }

      // Load idioma_padrao
      const { data: cfg } = await supabase.from("configuracoes").select("valor").eq("chave", "idioma_padrao").maybeSingle();
      if (cfg?.valor) setIdiomaPadrao(cfg.valor);

      setLoading(false);
    };
    load();
  }, []);

  const handleToggle = async (secao: string, checked: boolean) => {
    setToggles((p) => ({ ...p, [secao]: checked }));
    await supabase.from("conteudos").update({ ativo: checked }).eq("secao", secao);
    toast({ title: `${secao} ${checked ? "ativado" : "desativado"}` });
  };

  const handleIdioma = async (val: string) => {
    setIdiomaPadrao(val);
    await supabase.from("configuracoes").update({ valor: val }).eq("chave", "idioma_padrao");
    toast({ title: `Idioma padrão: ${val.toUpperCase()}` });
  };

  const handlePassword = async () => {
    if (newPassword.length < 4) {
      toast({ title: "Senha muito curta", variant: "destructive" });
      return;
    }
    await supabase.from("configuracoes").update({ valor: newPassword }).eq("chave", "senha_painel");
    toast({ title: "Senha atualizada!" });
    setNewPassword("");
  };

  if (loading) return <p style={{ color: "#999" }}>Carregando...</p>;

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold" style={{ color: "#D4AF37" }}>Configurações Gerais</h2>

      {/* Section toggles */}
      <div className="rounded-lg p-5 space-y-4" style={{ background: "#2D2D2D" }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>Ativação de Blocos</h3>
        {secoes.map(({ secao, label }) => (
          <div key={secao} className="flex items-center justify-between py-2 border-b" style={{ borderColor: "#3A3A3A" }}>
            <span className="text-sm" style={{ color: "#CCC" }}>{label}</span>
            <Switch
              checked={toggles[secao] ?? true}
              onCheckedChange={(checked) => handleToggle(secao, checked)}
            />
          </div>
        ))}
      </div>

      {/* Default language */}
      <div className="rounded-lg p-5" style={{ background: "#2D2D2D" }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>Idioma Padrão</h3>
        <div className="flex gap-2">
          {["pt", "en", "es"].map((lang) => (
            <button
              key={lang}
              onClick={() => handleIdioma(lang)}
              className="px-4 py-2 rounded text-sm font-medium"
              style={{
                background: idiomaPadrao === lang ? "#D4AF37" : "#3A3A3A",
                color: idiomaPadrao === lang ? "#1A1A1A" : "#999",
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Password */}
      <div className="rounded-lg p-5" style={{ background: "#2D2D2D" }}>
        <h3 className="text-sm font-semibold mb-3" style={{ color: "#D4AF37" }}>Alterar Senha do Painel</h3>
        <div className="flex gap-2">
          <Input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Nova senha"
            className="bg-[#3A3A3A] border-[#555] text-white text-sm flex-1"
          />
          <Button onClick={handlePassword} style={{ background: "#D4AF37", color: "#1A1A1A" }}>
            Alterar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
