
-- Create imagens table
CREATE TABLE public.imagens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chave text NOT NULL UNIQUE,
  url text NOT NULL DEFAULT '',
  secao text NOT NULL DEFAULT '',
  descricao text NOT NULL DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.imagens ENABLE ROW LEVEL SECURITY;

-- Anyone can read
CREATE POLICY "Anyone can read imagens"
ON public.imagens FOR SELECT
TO public
USING (true);

-- Allow updates and inserts (admin panel uses anon key with password check in app)
CREATE POLICY "Anyone can update imagens"
ON public.imagens FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can insert imagens"
ON public.imagens FOR INSERT
TO public
WITH CHECK (true);

-- Insert placeholders
INSERT INTO public.imagens (chave, secao, descricao) VALUES
  ('hero_mel', 'slide1', 'Mel escorrendo colher dourada'),
  ('ingrediente_mel', 'slide3', 'Mel cru macro'),
  ('ingrediente_lionsmane', 'slide3', 'Lions Mane'),
  ('ingrediente_matcha', 'slide3', 'Matcha verde'),
  ('ingrediente_ginkgo', 'slide3', 'Ginkgo Biloba'),
  ('ingrediente_blueberries', 'slide3', 'Blueberries'),
  ('ingrediente_ashwagandha', 'slide3', 'Ashwagandha'),
  ('ingrediente_curcuma', 'slide3', 'Cúrcuma'),
  ('ingrediente_mct', 'slide3', 'MCT Oil'),
  ('frasco_final', 'slide8', 'Frasco âmbar produto');

-- Add config entries for panel password and custom CSS  
-- (allow updates on configuracoes for panel to work)
CREATE POLICY "Anyone can update configuracoes"
ON public.configuracoes FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can insert configuracoes"
ON public.configuracoes FOR INSERT
TO public
WITH CHECK (true);

-- Also allow updates on conteudos for text editor
CREATE POLICY "Anyone can update conteudos"
ON public.conteudos FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "Anyone can insert conteudos"
ON public.conteudos FOR INSERT
TO public
WITH CHECK (true);
