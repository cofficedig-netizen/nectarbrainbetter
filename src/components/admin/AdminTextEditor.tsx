import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Idioma = "pt" | "en" | "es";

const slides = [
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

interface Row {
  id: string;
  chave: string;
  valor_texto: string;
  secao: string;
}

const AdminTextEditor = () => {
  const [idioma, setIdioma] = useState<Idioma>("pt");
  const [data, setData] = useState<Row[]>([]);
  const [edited, setEdited] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    const { data: rows } = await supabase
      .from("conteudos")
      .select("id, chave, valor_texto, secao")
      .eq("idioma", idioma)
      .order("secao")
      .order("chave");
    if (rows) setData(rows);
  };

  useEffect(() => {
    fetchData();
    setEdited({});
  }, [idioma]);

  const handleChange = (id: string, value: string) => {
    setEdited((p) => ({ ...p, [id]: value }));
  };

  const saveAll = async () => {
    setSaving(true);
    const entries = Object.entries(edited);
    for (const [id, valor_texto] of entries) {
      await supabase.from("conteudos").update({ valor_texto }).eq("id", id);
    }
    toast({ title: "Salvo!", description: `${entries.length} campo(s) atualizado(s)` });
    setEdited({});
    fetchData();
    setSaving(false);
  };

  const rowsBySecao = (secao: string) => data.filter((r) => r.secao === secao);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold" style={{ color: "#D4AF37" }}>Editor de Textos</h2>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {(["pt", "en", "es"] as Idioma[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setIdioma(lang)}
                className="px-3 py-1 rounded text-sm font-medium transition-colors"
                style={{
                  background: idioma === lang ? "#D4AF37" : "#2D2D2D",
                  color: idioma === lang ? "#1A1A1A" : "#999",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          {Object.keys(edited).length > 0 && (
            <Button
              onClick={saveAll}
              disabled={saving}
              style={{ background: "#D4AF37", color: "#1A1A1A" }}
            >
              {saving ? "Salvando..." : `Salvar (${Object.keys(edited).length})`}
            </Button>
          )}
        </div>
      </div>

      <Accordion type="multiple" className="space-y-2">
        {slides.map(({ secao, label }) => {
          const rows = rowsBySecao(secao);
          if (rows.length === 0) return null;
          return (
            <AccordionItem key={secao} value={secao} className="rounded-lg border-0" style={{ background: "#2D2D2D" }}>
              <AccordionTrigger className="px-4 text-sm hover:no-underline" style={{ color: "#F5F5DC" }}>
                {label} ({rows.length})
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 space-y-3">
                {rows.map((row) => {
                  const val = edited[row.id] ?? row.valor_texto;
                  const isLong = val.length > 80;
                  return (
                    <div key={row.id}>
                      <label className="text-xs mb-1 block" style={{ color: "#999" }}>{row.chave}</label>
                      {isLong ? (
                        <Textarea
                          value={val}
                          onChange={(e) => handleChange(row.id, e.target.value)}
                          className="bg-[#3A3A3A] border-[#555] text-white text-sm"
                          rows={3}
                        />
                      ) : (
                        <Input
                          value={val}
                          onChange={(e) => handleChange(row.id, e.target.value)}
                          className="bg-[#3A3A3A] border-[#555] text-white text-sm"
                        />
                      )}
                    </div>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AdminTextEditor;
