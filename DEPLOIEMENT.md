# Guide de Déploiement Vercel pour VTPI

Félicitations, le code source du site est prêt ! Voici les étapes exactes (pas à pas) pour mettre votre site VTPI en ligne :

## Étape 1 : Pousser le code sur GitHub

1. Ouvre l'application **Terminal** sur ton Mac.
2. Déplace-toi dans le dossier du projet en tapant cette commande :
   ```bash
   cd Documents/IPTVWEBSITE/vtpi-site
   ```
3. Ajoute tous les fichiers créés :
   ```bash
   git add .
   ```
4. Fais ton premier commit (validation) :
   ```bash
   git commit -m "Initial commit VTPI web app avec intégration PayTeck"
   ```
5. Va sur [GitHub.com](https://github.com/) et connecte-toi avec ton compte (`serignecheikhahmettidianegueye@gmail.com`).
6. En haut à droite, clique sur le bouton **+** puis sur **New repository**.
7. Nomme-le `vtpi-site`. Ne coche rien d'autre (laisse-le public ou privé selon ton choix), puis clique sur **Create repository**.
8. Copie l'URL du dépôt qu'il te donne (ex: `https://github.com/ton-pseudo/vtpi-site.git`).
9. Retourne dans ton Terminal et tape :
   ```bash
   git remote add origin TON_URL_ICI
   git branch -M main
   git push -u origin main
   ```
*(Si on te demande de te connecter, utilise tes identifiants GitHub).*

---

## Étape 2 : Déployer sur Vercel

1. Va sur [Vercel.com](https://vercel.com) et connecte-toi (utilise "Continue with GitHub").
2. Sur ton Dashboard, clique sur le bouton noir **Add New...** puis sur **Project**.
3. Dans la liste de tes dépôts GitHub qui s'affiche, trouve `vtpi-site` et clique sur le bouton **Import**.
4. Laisse le "Framework Preset" sur **Next.js**.
5. Déroule la section **Environment Variables** (variables d'environnement).
6. Tu dois ajouter EXACTEMENT ces variables une par une (tu peux copier leurs valeurs depuis le fichier `.env.local` que j'ai créé) :

   - Name : `PAYTECK_API_KEY` | Value : `eccd08a2b7b4ee184...555f`
   - Name : `PAYTECK_API_SECRET` | Value : `aa832c882f8e98...79b8`
   - Name : `PAYTECK_IS_TEST_MODE` | Value : `true`
   - Name : `PAYTECK_IPN_URL` | Value : `https://vtpi-site.vercel.app/api/payteck/ipn`
   - Name : `PAYTECK_SUCCESS_URL` | Value : `https://vtpi-site.vercel.app/success`
   - Name : `PAYTECK_CANCEL_URL` | Value : `https://vtpi-site.vercel.app/cancel`

7. Clique sur **Add** pour chaque variable ajoutée.
8. Enfin, clique sur le bouton **Deploy**.

Laisse Vercel travailler environ une minute. Ton site sera en ligne et tu recevras un lien (sous la forme `vtpi-site.vercel.app`).

---

## Étape 3 : Checklist Finale ✅

- [ ] Je peux ouvrir le domaine Vercel sur mon navigateur mobile/ordinateur.
- [ ] Le design sombre "Liquid Glass" s'affiche avec le texte et les animations (les ronds colorés qui flottent).
- [ ] Quand je clique sur "Payer avec PayTeck", le modal de paiement s'ouvre.
- [ ] Quand j'entre mon numéro et valide, j'ai le statut de traitement et un message de confirmation (Mode Test).

Tout est configuré sans que tu n'aies touché au code ! Bon succès pour VTPI !
