import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminDashboard from "@/components/admin/AdminDashboard";

const AdminPanel = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("configuracoes")
      .select("valor")
      .eq("chave", "senha_painel")
      .maybeSingle();

    if (error || !data) {
      toast({ title: "Erro", description: "Erro ao verificar senha", variant: "destructive" });
      setLoading(false);
      return;
    }

    if (data.valor === password) {
      setAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
    } else {
      toast({ title: "Senha incorreta", description: "Tente novamente", variant: "destructive" });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") {
      setAuthenticated(true);
    }
  }, []);

  if (authenticated) return <AdminDashboard onLogout={() => { sessionStorage.removeItem("admin_auth"); setAuthenticated(false); }} />;

  return (
    <div className="dark min-h-screen flex items-center justify-center" style={{ background: "#1A1A1A" }}>
      <div className="w-full max-w-sm space-y-6 p-8 rounded-xl" style={{ background: "#2D2D2D" }}>
        <h1 className="text-2xl font-bold text-center" style={{ color: "#D4AF37" }}>
          Painel Neural Gold
        </h1>
        <p className="text-sm text-center" style={{ color: "#999" }}>Insira a senha de acesso</p>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          placeholder="Senha"
          className="bg-[#3A3A3A] border-[#555] text-white placeholder:text-[#777]"
        />
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full"
          style={{ background: "#D4AF37", color: "#1A1A1A" }}
        >
          {loading ? "Verificando..." : "Acessar Painel"}
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
