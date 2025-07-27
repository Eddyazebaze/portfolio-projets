# 🔐 Audit Sécurité **WordPress** | Projet CyberSécurité50

![Statut](https://img.shields.io/badge/statut-complet-brightgreen)  
📅 Juillet 2025 • 💼 Projet personnel • 🛡️ Cybersécurité Web

---

## 🎯 Objectif

Mettre en œuvre un audit de sécurité sur un site **WordPress** basique déployé publiquement, afin d’évaluer les **vulnérabilités** communes, sensibiliser à la sécurisation des CMS, et documenter un processus reproductible par des équipes projets, cybersécurité ou IT GRC.

---

## 🧩 Contexte stratégique

**WordPress** est le CMS le plus utilisé au monde, donc également le plus ciblé par les attaques.  
Ce projet vise à démontrer :
- La capacité à configurer un site de test.
- La conduite d’un audit de sécurité via des outils professionnels open-source.
- La synthèse claire et actionnable des résultats pour des décideurs ou équipes projets.

---

## 🛠️ Technologies & Outils

- **CMS** : **WordPress**.com (version gratuite)
- **Audit** :
  - **OWASP ZAP** (scan automatisé et manuel)
  - [SecurityHeaders.com](https://securityheaders.com)
  - [Mozilla Observatory](https://observatory.mozilla.org)
- **Documentation** : Markdown + GitHub
- **Design & contenu** : visuels générés, pages simulées, rapport synthétique

---

## 📦 Livrables

| Type | Emplacement |
|------|-------------|
| 🔍 Rapport ZAP | `/exports/zap/` |
| 🧾 Rapports Mozilla & SecurityHeaders | `/exports/` |
| 📷 Captures **WordPress** & scans | `/screenshots/` |
| 🧠 Synthèse stratégique | `security-summary.md` |
| 🌐 Pages site **WordPress** | `pages-web/` |
| 📄 README, démo, iframe, ressources | racine du projet |

---

## 🚀 Approche chef de projet

1. **Création du site **WordPress****
   - Design épuré, contenu structuré : home, pages audit, résultats, méthodologie
2. **Lancement des audits**
   - **OWASP ZAP** + sites en ligne
3. **Documentation et structuration GitHub**
   - Screenshots, exports, README, synthèse
4. **Analyse croisée & publication**

---

## 🧠 Insights clés

- 🔴 Headers de sécurité manquants sur **WordPress**.com (limité en configuration)
- 🟡 Vulnérabilités HTML révélées (par exemple X-Frame-Options)
- 🟢 ZAP montre une surface d’attaque minimale grâce à l’absence de plugin tiers

⚠️ Attention : version gratuite **WordPress** = faible personnalisation possible, mais bon environnement de test

---

## 🤖 Projection IA & extensions possibles

- Intégration automatique avec GitHub Actions pour scanner tout nouveau site pushé.
- Rapport enrichi avec scoring OWASP Top 10.
- Démonstrateur d’audit live pour formations ou ateliers.

---

## 🎯 Cas d’usage

- Démonstration de compétences CISM / GRC / Audit sécurité
- Support d’atelier ou bootcamp cybersécurité niveau débutant
- Outil de sensibilisation pour décideurs non-tech

---

## 🎯 Public cible

- **DSI**, **RSSI**, équipes GRC, développeurs, étudiants en cybersécurité

---

## 🗂️ Arborescence du projet

```
04-audit-securite-wordpress/
├── README.md
├── demo.md
├── iframe.md
├── resources-outils-cyber.md
├── /exports/
│   ├── security-summary.md
│   ├── observatory-mdn.pdf
│   ├── securityheaders-com.pdf
│   └── /zap/
│       ├── Automated Scan_Zap.csv
│       └── zap-result.md
├── /screenshots/
├── /pages-web/
```

---

## 📬 Contact

Eddy AZEBAZE - Consultant GRC / IA / PMP®  
📧 eddy.azebaze@proton.me • [LinkedIn](https://www.linkedin.com/in/eddy-azebaze-034a20226)

---

> “L’audit n’est pas une contrainte, c’est un miroir de maturité.”  
