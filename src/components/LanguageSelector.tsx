import { useLanguage } from "@/contexts/LanguageContext";

type Idioma = "pt" | "en" | "es";

const langs: { code: Idioma; flag: string; label: string }[] = [
  { code: "pt", flag: "🇧🇷", label: "BR" },
  { code: "en", flag: "🇺🇸", label: "US" },
  { code: "es", flag: "🇪🇸", label: "ES" },
];

const LanguageSelector = () => {
  const { idioma, setIdioma } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setIdioma(l.code)}
          className={`px-2.5 py-1.5 rounded-md text-sm font-body transition-all duration-200 hover-scale ${
            idioma === l.code
              ? "bg-primary/20 ring-1 ring-primary font-bold"
              : "hover:bg-primary/10 opacity-70 hover:opacity-100"
          }`}
        >
          <span className="mr-1">{l.flag}</span>
          <span className="hidden sm:inline">{l.label}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
