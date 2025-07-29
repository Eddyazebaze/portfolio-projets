
# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen)
![Score Mozilla](https://img.shields.io/badge/Score_Mozilla-F-red)
![Security Headers](https://img.shields.io/badge/Security_Headers-D-orange)
![Objectif](https://img.shields.io/badge/Objectif-B%2B-blue)

> Ce projet met en œuvre un audit de sécurité complet d’un site WordPress, en mobilisant les bonnes pratiques OWASP, des outils de scan reconnus, une approche GRC, et une restitution exploitable pour RSSI, PMO ou décideur IT.

---

## 📌 Contexte stratégique

**WordPress est le CMS le plus utilisé au monde**, donc également le plus ciblé par les attaques.

Ce projet démontre :

- La capacité à configurer un site WordPress public pour un test d’audit.
- La conduite d’un audit de sécurité structuré et outillé.
- Une restitution compréhensible pour un public technique ou non-technique.
- Une approche orientée GRC pour garantir traçabilité, conformité et impact.

---

## 🎯 Objectif

Effectuer un **audit technique et stratégique de sécurité** sur un site WordPress pour :

- Identifier les vulnérabilités critiques (OWASP, HTTP headers…)
- Proposer des recommandations concrètes, classées par priorité
- Fournir un plan d’action accessible à tous (développeur, DSI, RSSI, chef de projet…)
- Générer des livrables actionnables, traçables et auditables

---

## 🧱 Cahier des charges

| Élément             | Détail                                                                 |
|---------------------|------------------------------------------------------------------------|
| 🧪 Périmètre         | Site WordPress déployé sur wordpress.com                               |
| 🎯 Objectif          | Démontrer un audit GRC-ready accessible aux parties prenantes          |
| 🧰 Contraintes       | Outils gratuits / open source                                          |
| 📊 Public cible      | Décideurs sécurité, chefs de projet, consultants GRC                   |
| 🧠 Résultat attendu  | Score > B+ Mozilla Observatory, restitution actionnable, site traçable |

---

## 🛠️ Technologies & outils utilisés

| Outil                  | Utilisation principale                            | Lien |
|------------------------|---------------------------------------------------|------|
| `OWASP ZAP`            | Scan de vulnérabilités automatisé                 | [🔗](https://www.zaproxy.org/) |
| `Mozilla Observatory`  | Analyse des entêtes HTTP                         | [🔗](https://observatory.mozilla.org/) |
| `Security Headers`     | Vérification des headers de sécurité              | [🔗](https://securityheaders.com/) |
| `WordPress.com`        | Plateforme cible de l’audit                       | [🔗](https://wordpress.com/) |
| `Markdown`             | Documentation & synthèse                          | —    |

---

## 📦 Livrables

| Type                        | Lien                                                                 |
|-----------------------------|----------------------------------------------------------------------|
| 🌐 Site WordPress configuré et testé     | [cybersecurite50.wordpress.com](https://cybersecurite50.wordpress.com) |
| 📄 Synthèse complète        | [`security-summary.md`](./exports/security-summary.md)               |
| 📋 Checklist sécurité       | [`checklist-securite.md`](./checklist-securite.md)                   |
| 🖼️ Captures visuelles       | [`/screenshots/`](./screenshots/)                                    |
| 📁 Données brutes           | [`exports/`](./exports/)                                             |
| 🎥 Démonstration visuelle   | [`demo.md`](./demo.md)                                               |
| 🧰 Outils & ressources       | [`resources-outils-cyber.md`](./resources-outils-cyber.md)           |
| 🌍 Intégration iframe       | [`iframe.md`](./iframe.md)                                           |

---

## 🧪 Résultats clés

| Indicateur                          | Valeur / Information                                       |
|------------------------------------|-------------------------------------------------------------|
| Nombre total d’alertes critiques   | 1 critique + 2 moyennes + 1 faible (via OWASP ZAP)          |
| Headers manquants                  | CSP, HSTS, X-Frame-Options (via Mozilla Observatory)        |
| Score Mozilla Observatory initial  | F / 100                                                     |
| Score Security Headers             | D                                                           |
| Recommandations proposées          | HTTPS forcé, plugins headers, durcissement cookies          |

---

## ✅ Plan d'action priorisé (niveau débutant)

| Priorité | Action                                                    | Outil / plugin             |
|----------|-----------------------------------------------------------|----------------------------|
| 🔴 Critique | Forcer HTTPS et supprimer le contenu mixte               | Plugin Really Simple SSL   |
| 🟠 Moyen    | Ajouter CSP, HSTS, X-Frame-Options                       | Plugin HTTP Headers        |
| 🟡 Faible   | Ajouter une politique de cache et X-XSS-Protection       | Plugin WP Cerber           |

---

## 📌 Méthodologie

1. Déploiement & configuration du site WordPress public
2. Scan via OWASP ZAP, Security Headers et Mozilla Observatory
3. Lecture des entêtes HTTP et analyse des cookies & protocoles
4. Synthèse Markdown + export CSV + visuels
5. Plan d’action GRC-ready et documentation versionée sur GitHub

---

## 🧠 Insights Clés

| Insight                            | Détail                                                                |
|------------------------------------|-----------------------------------------------------------------------|
| 🚨 Sécurité HTTP                   | Headers critiques absents ou mal configurés                          |
| 🔐 Cookies                         | Non marqués `HttpOnly`, `Secure` ou `SameSite`                       |
| 🧱 OWASP ZAP                       | Vulnérabilités exposant des infos sur le serveur                     |
| 🧭 GRC                             | Documentation orientée conformité, traçabilité, et priorisation      |

---

## 🚀 Projection IA / Automatisation

- Intégration dans un pipeline CI/CD avec scans automatisés
- Génération automatique de rapports Markdown / Notion
- Suivi de conformité RGPD / NIS2 / DORA

---

## 🎯 Cas d’usage

- **RSSI / DSI / Décideurs sécurité** : audit initial + roadmap actionnable
- **Chefs de projet** : démonstration sécurité dès la phase de design
- **Consultants conformité** : preuve RGPD-ready et support d'évaluation client

---

## 👥 Public cible

- RSSI / DSI / PMO / Responsable conformité
- Étudiants et formateurs en cybersécurité ou GRC
- Équipes projet web / DevSecOps

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
