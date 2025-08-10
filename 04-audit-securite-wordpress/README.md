
# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen)
![Score Mozilla](https://img.shields.io/badge/Score_Mozilla-F-red)
![Security Headers](https://img.shields.io/badge/Security_Headers-D-orange)
![Objectif](https://img.shields.io/badge/Objectif-B%2B-blue)

## 📌 Contexte stratégique
WordPress est le CMS le plus utilisé au monde, donc également le plus ciblé par les attaques.

Ce projet démontre :
- La capacité à configurer un site WordPress public pour un test d’audit.
- La conduite d’un audit de sécurité structuré et outillé.
- Une restitution compréhensible pour un public technique ou non-technique.
- Une approche orientée GRC pour garantir traçabilité, conformité et impact.

## 🎯 Objectif
Effectuer un audit technique et stratégique de sécurité sur un site WordPress pour :
- Identifier les vulnérabilités critiques (OWASP, HTTP headers…)
- Proposer des recommandations concrètes, classées par priorité
- Fournir un plan d’action accessible à tous (développeur, DSI, RSSI, chef de projet…)
- Générer des livrables actionnables, traçables et auditables

## 🧱 Cahier des charges
| Élément        | Détail |
|----------------|--------|
| 🧪 Périmètre   | Site WordPress déployé sur wordpress.com |
| 🎯 Objectif   | Démontrer un audit GRC-ready accessible aux parties prenantes |
| 🧰 Contraintes| Outils gratuits / open source |
| 📊 Public cible| Décideurs sécurité, chefs de projet, consultants GRC |
| 🧠 Résultat attendu | Score > B+ Mozilla Observatory, restitution actionnable, site traçable |

## 🛠️ Technologies & outils utilisés
| Outil             | Utilisation principale                  | Lien |
|-------------------|-----------------------------------------|------|
| OWASP ZAP         | Scan de vulnérabilités automatisé       | 🔗   |
| Mozilla Observatory| Analyse des entêtes HTTP               | 🔗   |
| Security Headers  | Vérification des headers de sécurité    | 🔗   |
| WordPress.com     | Plateforme cible de l’audit             | 🔗   |
| Markdown          | Documentation & synthèse                | —    |

## 📦 Livrables
| Type                 | Lien |
|----------------------|------|
| 🌐 Site WordPress configuré et testé | [cybersecurite50.wordpress.com](https://cybersecurite50.wordpress.com) |
| 📄 Synthèse complète | `security-summary.md` |
| 📋 Checklist sécurité | `checklist-securite.md` |
| 🖼️ Captures visuelles | `/screenshots/` |
| 📁 Données brutes | `/exports/` |
| 🎥 Démonstration visuelle | `demo.md` |
| 🧰 Outils & ressources | `resources-outils-cyber.md` |
| 🌍 Intégration iframe | `iframe.md` |

## 🧪 Résultats clés
| Indicateur                       | Valeur / Information |
|-----------------------------------|----------------------|
| Nombre total d’alertes critiques | 1 critique + 2 moyennes + 1 faible (via OWASP ZAP) |
| Headers manquants                 | CSP, HSTS, X-Frame-Options (via Mozilla Observatory) |
| Score Mozilla Observatory initial | F / 100 |
| Score Security Headers            | D |
| Recommandations proposées         | HTTPS forcé, plugins headers, durcissement cookies |

## ✅ Plan d'action priorisé (niveau débutant)
| Priorité | Action | Outil / plugin |
|----------|--------|---------------|
| 🔴 Critique | Forcer HTTPS et supprimer le contenu mixte | Plugin Really Simple SSL |
| 🟠 Moyen | Ajouter CSP, HSTS, X-Frame-Options | Plugin HTTP Headers |
| 🟡 Faible | Ajouter une politique de cache et X-XSS-Protection | Plugin WP Cerber |

## 📌 Méthodologie
1. Déploiement & configuration du site WordPress public
2. Scan via OWASP ZAP, Security Headers et Mozilla Observatory
3. Lecture des entêtes HTTP et analyse des cookies & protocoles
4. Synthèse Markdown + export CSV + visuels
5. Plan d’action GRC-ready et documentation versionée sur GitHub

## 🧠 Insights Clés
| Insight        | Détail |
|----------------|--------|
| 🚨 Sécurité HTTP | Headers critiques absents ou mal configurés |
| 🔐 Cookies       | Non marqués HttpOnly, Secure ou SameSite |
| 🧱 OWASP ZAP     | Vulnérabilités exposant des infos sur le serveur |
| 🧭 GRC           | Documentation orientée conformité, traçabilité, et priorisation |

## 🚀 Projection business & automatisation
- **Intégrer OWASP ZAP dans pipeline CI/CD** pour analyser chaque build
- **Automatiser la génération du rapport Markdown/PDF** à chaque exécution
- **Connecter les alertes de sécurité à Teams/Jira** pour réactivité immédiate
- **Rejouer le test après chaque mise à jour** WordPress ou plugin critique

## 🎯 Cas d’usage réalistes
- **RSSI dans une PME** : évaluer rapidement l’exposition d’un site institutionnel avant un audit externe
- **Chef de projet digital** : intégrer un audit sécurité dans la phase de recette pour sécuriser un déploiement
- **Consultant conformité RGPD/NIS2/DORA** : démontrer la capacité à documenter et prouver la conformité technique
- **Formateur cybersécurité** : illustrer un cas pratique complet OWASP + GRC avec livrables exploitables

## 📊 KPIs de suivi
- Score Mozilla Observatory après remédiation : **A ou supérieur**
- Réduction du nombre d’alertes critiques : **-100%**
- Temps moyen de correction : **< 5 jours ouvrés**
- Taux d’implémentation des recommandations prioritaires : **≥ 90%**

## 👥 Public cible
- RSSI / DSI / PMO / Responsable conformité
- Étudiants et formateurs en cybersécurité ou GRC
- Équipes projet web / DevSecOps

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
│   └── Audit-de-securite-WordPress-Analyse-pre-mise-en-production.pdf
│
├── screenshots/
│   ├── observatory-result.png
│   └── ...
```

## 📬 Contact
👤 Eddy AZEBAZE  
📧 eddy.azebaze@proton.me  
📅 [Réserver un appel stratégique](https://calendly.com/eddy-azebaze-proton/30min)  
🔗 [LinkedIn](https://www.linkedin.com/in/eddy-azebaze-034a20226)

> 🧠 “On ne livre pas un projet. On construit un actif stratégique : durable, traçable, auditable.”
