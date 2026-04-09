import { useState } from "react";
import { FileText, Image, Palette, Settings, Eye, LogOut } from "lucide-react";
import AdminTextEditor from "./AdminTextEditor";
import AdminImageEditor from "./AdminImageEditor";
import AdminCssEditor from "./AdminCssEditor";
import AdminSettings from "./AdminSettings";

const menuItems = [
  { key: "textos", label: "Editor de Textos", icon: FileText },
  { key: "imagens", label: "Editor de Imagens", icon: Image },
  { key: "css", label: "CSS Customizado", icon: Palette },
  { key: "config", label: "Configurações", icon: Settings },
];

interface Props {
  onLogout: () => void;
}

const AdminDashboard = ({ onLogout }: Props) => {
  const [section, setSection] = useState("textos");

  const openPreview = () => window.open("/", "_blank");

  return (
    <div className="dark min-h-screen flex" style={{ background: "#1A1A1A", color: "#F5F5DC" }}>
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 flex flex-col border-r" style={{ background: "#222", borderColor: "#333" }}>
        <div className="p-5 border-b" style={{ borderColor: "#333" }}>
          <h2 className="text-lg font-bold" style={{ color: "#D4AF37" }}>Painel Neural Gold</h2>
        </div>
        <nav className="flex-1 py-4 space-y-1">
          {menuItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setSection(key)}
              className="w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors"
              style={{
                color: section === key ? "#D4AF37" : "#999",
                background: section === key ? "#2D2D2D" : "transparent",
              }}
            >
              <Icon size={18} /> {label}
            </button>
          ))}
          <button
            onClick={openPreview}
            className="w-full flex items-center gap-3 px-5 py-3 text-sm"
            style={{ color: "#999" }}
          >
            <Eye size={18} /> Preview do Site
          </button>
        </nav>
        <div className="p-4 border-t" style={{ borderColor: "#333" }}>
          <button onClick={onLogout} className="flex items-center gap-2 text-sm" style={{ color: "#C75B39" }}>
            <LogOut size={16} /> Sair
          </button>
          <p className="text-xs mt-3" style={{ color: "#555" }}>Modo Free - Créditos otimizados</p>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto p-6">
        {section === "textos" && <AdminTextEditor />}
        {section === "imagens" && <AdminImageEditor />}
        {section === "css" && <AdminCssEditor />}
        {section === "config" && <AdminSettings />}
      </main>
    </div>
  );
};

export default AdminDashboard;
