import { useState } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import SectionWrapper from "@/components/SectionWrapper";

const PDFDownloadButton = () => {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async (conteudo: Record<string, string>) => {
    if (generating) return;
    setGenerating(true);

    try {
      // Wait for any lazy images to finish
      await new Promise((r) => setTimeout(r, 500));

      const { default: html2canvas } = await import("html2canvas");
      const { jsPDF } = await import("jspdf");

      const target = document.getElementById("main-content");
      if (!target) throw new Error("Content not found");

      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#F5F5DC",
        logging: false,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/jpeg", 0.92);
      const pdfWidth = 190;
      const pdfPageHeight = 277;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let position = 10;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, "JPEG", 10, position, pdfWidth, imgHeight);
      heightLeft -= pdfPageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 10, position, pdfWidth, imgHeight);
        heightLeft -= pdfPageHeight;
      }

      pdf.save("nectar-neural-gold-receita.pdf");
      toast.success(conteudo.sucesso_texto);
    } catch (err) {
      console.error("PDF generation error:", err);
      toast.error("Erro ao gerar PDF");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <SectionWrapper secao="pdf_download" className="py-8">
      {(c) => (
        <div className="flex justify-center">
          <button
            onClick={() => handleDownload(c)}
            disabled={generating}
            className="group flex items-center gap-3 border-2 rounded-full px-8 py-4 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: "hsl(var(--primary))",
              background: generating ? "hsl(var(--primary) / 0.1)" : "transparent",
              color: "hsl(var(--primary))",
            }}
            onMouseEnter={(e) => {
              if (!generating) {
                e.currentTarget.style.background = "hsl(var(--primary))";
                e.currentTarget.style.color = "hsl(var(--primary-foreground))";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = generating ? "hsl(var(--primary) / 0.1)" : "transparent";
              e.currentTarget.style.color = "hsl(var(--primary))";
            }}
          >
            {generating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <FileDown className="w-5 h-5" />
            )}
            <div className="text-left">
              <p className="font-display text-lg font-semibold">
                {generating ? c.gerando_texto : c.botao_texto}
              </p>
              {!generating && (
                <p className="text-sm opacity-70 font-body">{c.botao_subtitulo}</p>
              )}
            </div>
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default PDFDownloadButton;
