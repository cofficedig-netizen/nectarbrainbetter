
-- Create enum types
CREATE TYPE public.idioma_tipo AS ENUM ('pt', 'en', 'es');
CREATE TYPE public.conteudo_tipo AS ENUM ('texto', 'html');

-- Create conteudos table
CREATE TABLE public.conteudos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  secao TEXT NOT NULL,
  chave TEXT NOT NULL,
  idioma idioma_tipo NOT NULL,
  valor_texto TEXT NOT NULL DEFAULT '',
  ativo BOOLEAN NOT NULL DEFAULT true,
  tipo conteudo_tipo NOT NULL DEFAULT 'texto',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create configuracoes table
CREATE TABLE public.configuracoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  chave TEXT NOT NULL UNIQUE,
  valor TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.conteudos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Anyone can read conteudos" ON public.conteudos FOR SELECT USING (true);
CREATE POLICY "Anyone can read configuracoes" ON public.configuracoes FOR SELECT USING (true);

-- Index for fast lookups
CREATE INDEX idx_conteudos_secao_idioma ON public.conteudos (secao, idioma, ativo);
CREATE INDEX idx_conteudos_chave ON public.conteudos (secao, chave, idioma);

-- Slide 1 - PT
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide1', 'titulo', 'pt', 'NECTAR NEURAL GOLD', true, 'texto'),
('slide1', 'subtitulo', 'pt', 'Reformulação Neural Natural', true, 'texto'),
('slide1', 'descricao', 'pt', 'Uma receita ancestral potencializada pela ciência moderna', true, 'texto'),
('slide1', 'tags', 'pt', 'Raw Honey + Adaptogens + Nootropics', true, 'texto');

-- Slide 1 - EN
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide1', 'titulo', 'en', 'NECTAR NEURAL GOLD', true, 'texto'),
('slide1', 'subtitulo', 'en', 'Natural Neural Reformulation', true, 'texto'),
('slide1', 'descricao', 'en', 'An ancestral recipe empowered by modern science', true, 'texto'),
('slide1', 'tags', 'en', 'Raw Honey + Adaptogens + Nootropics', true, 'texto');

-- Slide 1 - ES
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide1', 'titulo', 'es', 'NECTAR NEURAL GOLD', true, 'texto'),
('slide1', 'subtitulo', 'es', 'Reformulación Neural Natural', true, 'texto'),
('slide1', 'descricao', 'es', 'Una receta ancestral potenciada por la ciencia moderna', true, 'texto'),
('slide1', 'tags', 'es', 'Raw Honey + Adaptogens + Nootropics', true, 'texto');

-- Slide 2 - PT
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide2', 'titulo', 'pt', 'A Ciência do Mel Nootrópico', true, 'texto'),
('slide2', 'texto_ciencia', 'pt', 'O mel cru contém polifenóis que atravessam a barreira hematoencefálica, estimulando a produção de BDNF (Brain-Derived Neurotrophic Factor) — a proteína responsável pela neuroplasticidade e formação de novas conexões neurais. Combinado com adaptógenos selecionados, o Nectar Neural Gold potencializa as vias colinérgicas e dopaminérgicas do cérebro.', true, 'texto'),
('slide2', 'citacao_nih', 'pt', 'Raw honey possesses nootropic effects, such as memory-enhancing effects, as well as neuropharmacological activities. — National Institutes of Health (NIH)', true, 'texto');

-- Slide 2 - EN
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide2', 'titulo', 'en', 'The Science of Nootropic Honey', true, 'texto'),
('slide2', 'texto_ciencia', 'en', 'Raw honey contains polyphenols that cross the blood-brain barrier, stimulating BDNF (Brain-Derived Neurotrophic Factor) production — the protein responsible for neuroplasticity and forming new neural connections. Combined with selected adaptogens, Nectar Neural Gold enhances the brain''s cholinergic and dopaminergic pathways.', true, 'texto'),
('slide2', 'citacao_nih', 'en', 'Raw honey possesses nootropic effects, such as memory-enhancing effects, as well as neuropharmacological activities. — National Institutes of Health (NIH)', true, 'texto');

-- Slide 2 - ES
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide2', 'titulo', 'es', 'La Ciencia de la Miel Nootrópica', true, 'texto'),
('slide2', 'texto_ciencia', 'es', 'La miel cruda contiene polifenoles que cruzan la barrera hematoencefálica, estimulando la producción de BDNF (Factor Neurotrófico Derivado del Cerebro) — la proteína responsable de la neuroplasticidad y la formación de nuevas conexiones neuronales. Combinado con adaptógenos seleccionados, Nectar Neural Gold potencia las vías colinérgicas y dopaminérgicas del cerebro.', true, 'texto'),
('slide2', 'citacao_nih', 'es', 'Raw honey possesses nootropic effects, such as memory-enhancing effects, as well as neuropharmacological activities. — National Institutes of Health (NIH)', true, 'texto');

-- Slide Ofertas (DESATIVADO)
INSERT INTO public.conteudos (secao, chave, idioma, valor_texto, ativo, tipo) VALUES
('slide_ofertas', 'titulo', 'pt', 'Oferta Especial - Nectar Neural Gold Kit Completo', false, 'texto'),
('slide_ofertas', 'descricao', 'pt', 'Aproveite nossa oferta exclusiva por tempo limitado. Transforme sua performance cognitiva com ingredientes naturais de altíssima qualidade.', false, 'texto'),
('slide_ofertas', 'titulo', 'en', 'Special Offer - Nectar Neural Gold Complete Kit', false, 'texto'),
('slide_ofertas', 'descricao', 'en', 'Take advantage of our exclusive limited-time offer. Transform your cognitive performance with premium natural ingredients.', false, 'texto'),
('slide_ofertas', 'titulo', 'es', 'Oferta Especial - Kit Completo Nectar Neural Gold', false, 'texto'),
('slide_ofertas', 'descricao', 'es', 'Aprovecha nuestra oferta exclusiva por tiempo limitado. Transforma tu rendimiento cognitivo con ingredientes naturales de altísima calidad.', false, 'texto');

-- Configuracoes
INSERT INTO public.configuracoes (chave, valor) VALUES
('idioma_padrao', 'pt'),
('css_custom', '');
