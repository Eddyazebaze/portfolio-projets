# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen)
![Score Initial](https://img.shields.io/badge/Score_Mozilla-F-red)
![Objectif](https://img.shields.io/badge/Objectif-B%2B-blue)

> Ce projet met en œuvre un audit de sécurité complet d’un site WordPress, en mobilisant les bonnes pratiques OWASP, des outils de scan reconnus, une approche GRC, et une restitution exploitable pour RSSI, PMO ou décideur IT.

---

## 📌 Contexte stratégique

**WordPress est le CMS le plus utilisé au monde**, donc également le plus ciblé par les attaques.  
Ce projet démontre :

- La capacité à configurer un site WordPress de test.
- La conduite d’un audit de sécurité outillé et structuré.
- Une synthèse claire orientée gouvernance sécurité.

---

## 🎯 Objectif

Effectuer un **audit technique de sécurité** sur un site WordPress en production pour :

- Identifier les vulnérabilités critiques (OWASP, HTTP headers…)
- Évaluer les failles de configuration et de surface d’attaque
- Structurer un plan d’action priorisé accessible à tout niveau
- Fournir des livrables clairs et actionnables à destination des décideurs

---

## 🧱 Cadre d'analyse GRC

- **Normes & conformité** : RGPD, NIS2, ISO 27001
- **Stack analysée** : CMS WordPress hébergé sur wordpress.com
- **Positionnement** : documentation remédiable, traçable, auditable
- **Finalité** : produire des livrables compréhensibles, même pour un public non technique

---

## 🛠️ Technologies & outils utilisés

| Outil                  | Utilisation principale                            | Lien |
|------------------------|---------------------------------------------------|------|
| `OWASP ZAP`            | Scan de vulnérabilités automatisé                 | [🔗](https://www.zaproxy.org/) |
| `Mozilla Observatory`  | Analyse des entêtes HTTP                         | [🔗](https://observatory.mozilla.org/) |
| `Security Headers`     | Vérification des headers de sécurité              | [🔗](https://securityheaders.com/) |
| `WordPress`            | Plateforme cible de l’audit                       | [🔗](https://wordpress.com/) |
| `Markdown`             | Documentation et synthèse structurée             | —    |

---

## 📦 Livrables

| Type                      | Lien                                                                 |
|---------------------------|----------------------------------------------------------------------|
| 📄 Synthèse complète       | [`security-summary.md`](./exports/security-summary.md)               |
| 📋 Checklist sécurité     | [`checklist-securite.md`](./checklist-securite.md)                   |
| 🖼️ Captures visuelles     | [`/screenshots/`](./screenshots/)                                    |
| 🌐 Version en ligne       | [cybersecurite50.wordpress.com](https://cybersecurite50.wordpress.com) |
| 📁 Données brutes         | [`exports/`](./exports/)                                             |

---

## 🧪 Résultats clés

| Indicateur                          | Valeur / Information                                       |
|------------------------------------|-------------------------------------------------------------|
| Nombre total d’alertes critiques   | 1 critique + 2 moyennes + 1 faible (via OWASP ZAP)          |
| Headers manquants                  | CSP, HSTS, X-Frame-Options (via Mozilla Observatory)        |
| Score Mozilla Observatory initial  | F / 100                                                     |
| Score Security Headers             | D                                                           |
| Remédiations proposées             | HTTPS forcé, ajout entêtes via plugins                      |

---

## ✅ Plan d'action priorisé (niveau débutant)

| Priorité | Action                                                    | Outil / plugin             |
|----------|-----------------------------------------------------------|----------------------------|
| 🔴 Critique | Forcer HTTPS et supprimer le contenu mixte               | Plugin Really Simple SSL   |
| 🟠 Moyen    | Ajouter CSP, HSTS, X-Frame-Options                       | Plugin HTTP Headers        |
| 🟡 Faible   | Ajouter une politique de cache et X-XSS-Protection       | Plugin WP Cerber           |

---

## 📌 Méthodologie

1. Scan initial via OWASP ZAP, Security Headers et Mozilla Observatory
2. Lecture des entêtes HTTP et analyse des cookies & protocoles
3. Synthèse Markdown + visuels & export .csv des résultats
4. Plan d’action basé sur criticité OWASP + conformité GRC (RGPD/NIS2)
5. Structuration GitHub et documentation versionée

---

## 🧠 Insights Clés

| Insight                            | Détail                                                                |
|------------------------------------|-----------------------------------------------------------------------|
| 🚨 Sécurité HTTP                   | Headers critiques absents ou mal configurés                          |
| 🔐 Cookies                         | Non marqués `HttpOnly`, `Secure` ou `SameSite`                       |
| 🧱 OWASP ZAP                       | Vulnérabilités exposant des infos sur le serveur                     |
| 🧭 GRC                             | Documentation formalisée pour RSSI / conformité                      |

---

## 🚀 Projection IA / automatisation

- Intégration d’un pipeline CI/CD + scans réguliers avec ZAP
- Génération automatique de rapports Markdown ou Notion
- Suivi de conformité RGPD/NIS2/DORA

---

## 🎯 Cas d’usage

- **RSSI / DSI / Décideurs sécurité** : audit initial + plan d’action rapide
- **Chefs de projet** : intégration sécurité dès la phase de design
- **Consultants conformité** : démonstration RGPD-ready & support client

---

## 👥 Public cible

- RSSI / DSI / PMO / Responsable conformité
- Étudiants & formateurs en cybersécurité ou GRC
- Équipes projets web / DevOps

---

## 📂 Arborescence du projet

```
04-audit-securite-wordpress/
├── README.md
├── checklist-securite.md
├── demo.md
├── iframe.md
├── resources-outils-cyber.md
│
├── exports/
│   ├── security-summary.md
│   ├── Automated Scan_Zap.csv
│   └── ...
│
├── screenshots/
│   ├── observatory-result.png
│   └── ...
```

---

## 📬 Contact

👤 **Eddy AZEBAZE**  
📧 [eddy.azebaze@proton.me](mailto:eddy.azebaze@proton.me?subject=Audit%20WP&body=Bonjour%20Eddy%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20audit%20WordPress...)  
📅 [Réserver un appel stratégique](https://calendly.com/eddy-azebaze-proton/30min)  
🔗 [LinkedIn](https://www.linkedin.com/in/eddy-azebaze-034a20226)

> 🧠 “On ne livre pas un projet. On construit un actif stratégique : durable, traçable, auditable.”
