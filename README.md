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

#### Règles de contribution (branche `main`)

Un ruleset GitHub protège `main`, pour tout le monde (admin compris) :

- Autorisé : pousser normalement (`git push`), modifier / ajouter / supprimer des fichiers, créer d'autres branches, ouvrir et fusionner des pull requests.
- Bloqué : forcer un push (`git push --force` ou `--force-with-lease`) et supprimer la branche `main`.

Un push normal **ajoute** des commits à la suite de l'historique : rien n'est perdu, toute version précédente reste récupérable. Un push forcé **remplace** l'historique de GitHub par le sien et efface les commits des autres :

```
GitHub avant : A ── B ── C ── D
Mon PC :       A ── B ── X
Après --force: A ── B ── X        ← C et D perdus
```

Chaque push publie immédiatement le site (GitHub Pages) : vérifier en local avant de pousser.

**Si `git push` est refusé** (« rejected », « fetch first », « non-fast-forward ») : quelqu'un a poussé entre-temps. Ne pas forcer, récupérer d'abord ses commits :

```
git pull --rebase origin main
git push origin main
```

En cas de conflit pendant le rebase : corriger les fichiers indiqués, puis `git add <fichier>` et `git rebase --continue` (ou `git rebase --abort` pour tout annuler).

**Annuler une erreur déjà poussée** : `git revert <commit>` puis `git push` (crée un commit inverse, sans réécrire l'historique).
