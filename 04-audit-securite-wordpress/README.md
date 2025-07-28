# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen) [🔗 Site Web](https://cybersecurite50.wordpress.com)

Réaliser un audit de sécurité d’un site WordPress public en utilisant des outils professionnels reconnus, dans une logique démonstrative et pédagogique.

---

## 📌 Contexte stratégique

**WordPress est le CMS le plus utilisé au monde**, donc également le plus ciblé par les attaques.  
Ce projet vise à démontrer :

- **La capacité à configurer un site de test** WordPress.  
- **La conduite d’un audit de sécurité** via des outils professionnels open-source.  
- **La synthèse claire et actionnable** des résultats pour des décideurs ou équipes projets.

---

## 🧠 Technologies / Outils

- [WordPress](https://wordpress.com/) (hébergement via wordpress.com)  
- [OWASP ZAP](https://www.zaproxy.org/) – scan de vulnérabilités  
- [Mozilla HTTP Observatory](https://observatory.mozilla.org/)  
- [SecurityHeaders.com](https://securityheaders.com/)

---

## 📦 Livrables

- Site WordPress configuré et accessible publiquement :  
  👉 [https://cybersecurite50.wordpress.com](https://cybersecurite50.wordpress.com)  
- Captures du scan OWASP ZAP et des tests tiers  
- Fichier [`security-summary.md`](./security-summary.md) avec synthèse des vulnérabilités  
- Rapport PDF des outils externes + export CSV ZAP (`/exports`)  
- Documentation GitHub complète avec démonstration, visualisations, et iframe intégré

---

## 🧭 Approche chef de projet

1. **Préparation du site** : installation WordPress, configuration minimale, mise en ligne  
2. **Scan automatique** avec 3 outils complémentaires (ZAP, Observatory, Headers)  
3. **Analyse croisée** des résultats et identification des correctifs à haute priorité  
4. **Structuration GitHub** pour un rendu clair, pro et pédagogique

---

## 🔍 Insights clés

- Les en-têtes de sécurité sont absentes ou faibles (ex. absence de `X-Frame-Options`, `Content-Security-Policy`, etc.)  
- OWASP ZAP révèle de nombreuses erreurs 403/404 sur des chemins plugin/wp-content  
- Scores faibles sur Mozilla Observatory et SecurityHeaders.com (notes F à C)  
- Actions correctives simples à fort ROI : en-têtes HTTP, configuration .htaccess, désactivation plugins inutiles, séparation comptes admin

---

## 🤖 Projection IA & extensions possibles

- Intégration automatique avec GitHub Actions pour scanner tout nouveau site pushé  
- Rapport enrichi avec scoring OWASP Top 10  
- Démonstrateur d’audit live pour formations ou ateliers

---

## 🎯 Cas d’usage

- Démonstration de compétences **CISM / GRC / Audit sécurité**  
- Support d’atelier ou bootcamp cybersécurité niveau débutant  
- Outil de **sensibilisation pour décideurs non-tech**

---

## 🧑‍💼 Public cible

- **DSI**, **RSSI**, **équipes GRC**, **PMO, développeurs, experts en cybersécurité**

---

## 📂 Arborescence simplifiée

```
04-audit-securite-wordpress/
│
├── README.md
├── demo.md
├── iframe.md
├── checklist-securite.md
├── security-summary.md
├── resources-outils-cyber.md
├── exports/
│   ├── Automated Scan_Zap.csv
│   ├── HTTP Observatory Report.pdf
│   └── Security Headers Report.pdf
├── screenshots/
│   └── *.png
```

---

📣 **Maintenu par Eddy AZEBAZE** - Projet démonstratif à but pédagogique dans le cadre d’une démarche cybersécurité orientée GRC & projets no-code.
