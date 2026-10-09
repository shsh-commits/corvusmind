### Corvus Mind — site OSINT (Jekyll / GitHub Pages)

1. Pousser ce dossier dans un repo GitHub → Settings › Pages › Deploy from branch `main` / root.
2. Si le repo n'est pas `<user>.github.io`, mettre `baseurl: "/nom-du-repo"` dans `_config.yml`.
3. Contact : créer un formulaire sur formspree.io (avec l'adresse mail voulue), coller l'ID dans `formspree_id`.
4. Contenu : `_data/palmares.yml` et `_data/membres.yml` (photos dans `assets/img/membres/`).
5. News : un fichier `_posts/AAAA-MM-JJ-titre.md` par article (modèle : `_posts/2026-10-08-lancement-du-site.md`). Les 4 plus récents s'affichent sur l'accueil, tous sur `/news/`.
6. Writeups (PDF) : déposer le fichier dans `assets/writeups/`, nommé d'après le `name` de la compétition dans `_data/palmares.yml` — minuscules, sans accents, espaces → tirets. Le bouton « Writeup » apparaît alors automatiquement sur la carte du palmarès.
   - « DeepThreats 2026 » → `assets/writeups/deepthreats-2026.pdf`
   - « Opération Culot - Bpifrance » → `assets/writeups/operation-culot-bpifrance.pdf`
   - Autre nom de fichier ou lien externe : ajouter `writeup: "fichier.pdf"` (ou `writeup: "https://…"`) à la compétition dans `palmares.yml`.

Local : `gem install jekyll && jekyll serve` → http://localhost:4000/corvusmind/
