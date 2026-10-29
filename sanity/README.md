# Painel do blog e dos cases (Sanity)

O painel abre dentro do próprio site, em **`/studio`** (ex.: `http://localhost:3000/studio` e `https://seu-site.com/studio`).
Lá você escreve artigos, cadastra cases, sobe imagens e publica — sem mexer em código.

## Configuração (uma vez só)

1. **Instale as dependências do painel** (na pasta do projeto):
   ```bash
   npm install next-sanity sanity styled-components
   ```
2. **Crie o projeto no Sanity** (gratuito): entre em <https://www.sanity.io/manage> → *Create new project*
   → nome "Guri Digital", dataset `production`. Copie o **Project ID**.
3. **Crie o arquivo `.env.local`** na raiz do projeto (use `.env.example` como modelo):
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=cole_o_project_id_aqui
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. **Libere os endereços do site** em Sanity manage → seu projeto → *API* → *CORS origins* → *Add CORS origin*
   (marque "Allow credentials"):
   - `http://localhost:3000`
   - o endereço do site na Vercel (e o domínio final, quando tiver)
5. **Reinicie o site** (`npm run dev`) e abra `/studio`. Entre com Google ou GitHub.
6. **Na Vercel**, cadastre as mesmas variáveis (*Settings → Environment Variables*) e faça um novo deploy.

## Trazer os cases que já existem no site

Crie um token em Sanity manage → *API* → *Tokens* → *Add API token* (permissão **Editor**) e rode:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id SANITY_API_TOKEN=seu_token node scripts/import-cases.mjs
```

Isso cria os 7 cases no painel, já com todas as imagens. Pode rodar de novo sem duplicar.
(Não salve o token em nenhum arquivo do projeto.)

## Como usar no dia a dia

- **Artigos do blog**: *Create* → preencha título, resumo, capa e texto → *Publish*.
  A data de publicação pode ser no futuro: o artigo só aparece quando a data chegar.
- **Cases**: preencha as informações e as imagens. A primeira imagem da galeria aparece em largura total.
  O campo *Ordem na lista* define quem aparece primeiro (menor número = primeiro). A Home mostra os 6 primeiros.
- Depois de clicar em **Publish**, o site atualiza sozinho em até 1 minuto.
- Enquanto o painel não estiver conectado, o site usa os cases e o artigo de exemplo que estão no código.
