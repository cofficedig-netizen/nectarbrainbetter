import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ImageRow {
  id: string;
  chave: string;
  url: string;
  secao: string;
  descricao: string;
}

const AdminImageEditor = () => {
  const [images, setImages] = useState<ImageRow[]>([]);
  const [urls, setUrls] = useState<Record<string, string>>({});

  const fetchImages = async () => {
    const { data } = await supabase.from("imagens").select("*").order("secao").order("chave");
    if (data) setImages(data as ImageRow[]);
  };

  useEffect(() => { fetchImages(); }, []);

  const handleSave = async (id: string) => {
    const newUrl = urls[id];
    if (!newUrl) return;
    const { error } = await supabase.from("imagens").update({ url: newUrl, updated_at: new Date().toISOString() }).eq("id", id);
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Imagem atualizada!" });
      setUrls((p) => { const n = { ...p }; delete n[id]; return n; });
      fetchImages();
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6" style={{ color: "#D4AF37" }}>Editor de Imagens</h2>
      <div className="space-y-4">
        {images.map((img) => (
          <div key={img.id} className="flex items-start gap-4 p-4 rounded-lg" style={{ background: "#2D2D2D" }}>
            <div className="w-24 h-24 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden" style={{ background: "#3A3A3A" }}>
              {(urls[img.id] || img.url) ? (
                <img src={urls[img.id] || img.url} alt={img.descricao} className="w-full h-full object-cover" />
              ) : (
                <span className="text-3xl">🖼️</span>
              )}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium" style={{ color: "#D4AF37" }}>{img.chave}</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "#2E5C43", color: "#F5F5DC" }}>{img.secao}</span>
              </div>
              <p className="text-xs" style={{ color: "#777" }}>{img.descricao}</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Cole a URL da imagem"
                  value={urls[img.id] ?? img.url}
                  onChange={(e) => setUrls((p) => ({ ...p, [img.id]: e.target.value }))}
                  className="bg-[#3A3A3A] border-[#555] text-white text-sm flex-1"
                />
                {urls[img.id] !== undefined && (
                  <Button onClick={() => handleSave(img.id)} size="sm" style={{ background: "#D4AF37", color: "#1A1A1A" }}>
                    Salvar
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminImageEditor;
