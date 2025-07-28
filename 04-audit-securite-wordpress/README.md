# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen) [🔗 Site Web](https://cybersecurite50.wordpress.com)

## 🎯 Objectif
Réaliser un audit de sécurité d’un site WordPress public en utilisant des outils professionnels reconnus, dans une logique démonstrative et pédagogique.

## 📌 Contexte stratégique
**WordPress est le CMS le plus utilisé au monde**, donc également le plus ciblé par les attaques.  
Ce projet vise à démontrer :
- La **capacité à configurer un site de test** WordPress.
- La **conduite d’un audit de sécurité** via des outils professionnels open-source.
- La **synthèse claire et actionnable** des résultats pour des décideurs ou équipes projets.

## 🛠️ Technologies / Outils
- **WordPress** (hébergement via wordpress.com)
- **OWASP ZAP** (scan de vulnérabilités)
- **Mozilla HTTP Observatory**
- **SecurityHeaders.com**

## 📦 Livrables
- Site WordPress configuré et accessible publiquement
- Captures du scan OWASP ZAP et des tests tiers
- Fichier `security-summary.md` avec synthèse des vulnérabilités
- Rapport PDF des outils externes + CSV export ZAP (`/exports/`)
- Documentation GitHub complète avec démonstration, visualisations, et Iframe intégré

## 📐 Approche chef de projet
1. **Préparation du site** : installation WordPress, configuration minimale, mise en ligne
2. **Scan automatique** avec 3 outils complémentaires (ZAP, Observatory, Headers)
3. **Analyse croisée** des résultats et identification des correctifs à haute priorité
4. **Structuration GitHub** pour un rendu clair, pro et pédagogique

## 🧠 Insights clés
- Le score de sécurité peut varier fortement selon les headers HTTP configurés
- L’audit automatique détecte les faiblesses même sur des sites WordPress par défaut
- OWASP ZAP est idéal en complément des outils en ligne pour approfondir

## 🤖 Projection IA & extensions possibles
- **Intégration automatique avec GitHub Actions** pour scanner tout nouveau site pushé.
- **Rapport enrichi** avec scoring OWASP Top 10.
- **Démonstrateur d’audit live** pour formations ou ateliers cybersécurité.

## 🎯 Cas d’usage
- **Démonstration de compétences** CISM / GRC / audit sécurité.
- **Support d’atelier ou bootcamp** cybersécurité niveau débutant.
- **Outil de sensibilisation** pour décideurs non-tech.

## 🎯 Public cible
- **DSI, RSSI, équipes GRC**, développeurs, étudiants en cybersécurité.

## 📁 Arborescence du dossier
```
04-audit-wordpress-securite
│
├── README.md                  → Fichier principal
├── demo.md                   → Aperçu de l’audit et du site
├── iframe.md                 → Iframe intégrable du site WordPress
├── security-summary.md       → Résumé des résultats du scan
├── /pages-web/               → Captures des pages WordPress créées
├── /screenshots/             → Visuels du site, scans, résultats
├── /exports/                 → Rapports ZAP, PDF Observatory & Headers
├── resources-outils-audit.md → Liens vers les outils utilisés et références
```

## 📫 Contact
**Eddy AZEBAZE**  
Consultant GRC • PMP® • IA & Cybersécurité  
[www.linkedin.com/in/eddy-azebaze-034a20226](https://www.linkedin.com/in/eddy-azebaze-034a20226)

## 🧭 Citation finale
> "Ce n’est pas l’outil qui fait l’audit, mais la clarté stratégique qu’on en tire."
