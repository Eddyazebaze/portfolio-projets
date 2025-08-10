# 🔒 Audit Sécurité WordPress | OWASP • GRC • CISM

![Statut](https://img.shields.io/badge/statut-finalisé-brightgreen)
![Score Mozilla](https://img.shields.io/badge/Score_Mozilla-F-red)
![Security Headers](https://img.shields.io/badge/Security_Headers-D-orange)
![Objectif](https://img.shields.io/badge/Objectif-B%2B-blue)

## 📌 Objectif du projet
Ce projet présente un audit de sécurité complet réalisé sur un site WordPress de démonstration.  
L’approche suit la méthode **GRC** (Gouvernance, Risques, Conformité) et les bonnes pratiques **OWASP**, avec une restitution claire et actionnable pour décideurs et équipes techniques.

---

## 🗂 Cas d’usage réaliste
Audit de sécurité **pré-mise en ligne** pour un site institutionnel de démonstration, créé spécifiquement dans le cadre d’un projet de sensibilisation à la cybersécurité.  
Objectif : identifier et corriger les vulnérabilités critiques avant publication, renforcer la conformité RGPD et démontrer une méthodologie reproductible.

**Contexte métier :**
- **Qui ?** Équipe projet IT/GRC + formateurs cybersécurité.
- **Pourquoi ?** Simuler un audit complet avant déploiement réel.
- **Impact ?** Réduction des risques de compromission, montée en compétence des équipes, conformité renforcée.

---

## 🛠 Technologies & outils utilisés

| Outil | Utilisation principale | Lien |
|-------|------------------------|------|
| OWASP ZAP | Scan de vulnérabilités automatisé | [🔗 Lien](https://www.zaproxy.org/) |
| Mozilla Observatory | Analyse des en-têtes HTTP | [🔗 Lien](https://observatory.mozilla.org/) |
| Security Headers | Vérification des headers de sécurité | [🔗 Lien](https://securityheaders.com/) |
| WordPress.com | Plateforme cible de l’audit | [🔗 Lien](https://wordpress.com/) |
| Markdown | Documentation & synthèse | — |

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

## 📦 Livrables
| Type | Lien |
|------|------|
| Site WordPress configuré et testé | [cybersecurite50.wordpress.com](https://cybersecurite50.wordpress.com) |
| Synthèse complète | [security-summary.md](./exports/security-summary.md) |
| Checklist sécurité | [checklist-securite.md](./checklist-securite.md) |
| Captures visuelles | [/screenshots/](./screenshots) |
| Données brutes | [/exports/](./exports) |
| Démonstration visuelle | [demo.md](./demo.md) |
| Outils & ressources | [resources-outils-cyber.md](./resources-outils-cyber.md) |
| Intégration iframe | [iframe.md](./iframe.md) |

## 🧪 Résultats clés
| Indicateur                       | Valeur / Information |
|-----------------------------------|----------------------|
| Nombre total d’alertes critiques | 1 critique + 2 moyennes + 1 faible (via OWASP ZAP) |
| Headers manquants                 | CSP, HSTS, X-Frame-Options (via Mozilla Observatory) |
| Score Mozilla Observatory initial | F / 100 |
| Score Security Headers            | D |
| Recommandations proposées         | HTTPS forcé, plugins headers, durcissement cookies |

## ✅ Plan d'action priorisé
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

---

## 🚀 Projection stratégique / Scalabilité

1. **Intégrer OWASP ZAP dans un pipeline CI/CD** pour automatiser les scans à chaque mise à jour.
2. **Générer automatiquement les rapports** en Markdown et PDF après chaque test.
3. **Connecter les alertes de sécurité** à Teams/Jira pour un suivi instantané.
4. **Programmer des tests récurrents** (mensuels ou à chaque ajout de plugin).
5. **Industrialiser la méthode** sur plusieurs sites ou environnements.

---

## 💬 Témoignage fictif RSSI

> *« Grâce à cet audit, nous avons identifié et corrigé des failles critiques avant le lancement.  
> La méthodologie GRC appliquée nous donne une vision claire des priorités et un plan d’action concret. »*  
> — **RSSI fictif - Projet de démonstration**

---

## 🎯 Cas d’usage réalistes
- **RSSI dans une PME** : évaluer rapidement l’exposition d’un site institutionnel avant un audit externe
- **Chef de projet digital** : intégrer un audit sécurité dans la phase de recette pour sécuriser un déploiement
- **Consultant conformité RGPD/NIS2/DORA** : démontrer la capacité à documenter et prouver la conformité technique
- **Formateur cybersécurité** : illustrer un cas pratique complet OWASP + GRC avec livrables exploitables

---

## 📈 KPIs stratégiques
- **Conformité RGPD** : +30 % après remédiation.
- **Temps moyen de résolution** : < 48h pour failles critiques.
- **Taux de sécurité perçu** (enquête interne) : +45 %.
- **Réduction du risque d’exploitation** : > 60 %.

---

## 👥 Public cible
- **RSSI / CISO** souhaitant intégrer la cybersécurité dès la phase projet.
- **Chefs de projet IT** voulant prouver la conformité et la robustesse technique.
- **Formateurs** et **étudiants** cherchant un cas concret d’audit WordPress.
- **Équipes projet web / DevSecOps**

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

---

## 📜 Licence
Ce projet est proposé à titre démonstratif et pédagogique.  
Toute réutilisation doit mentionner la source.

---

© 2025 - Réalisé par **Eddy AZEBAZE** | PMP®, CISM - Chef de projet IT, Data, GRC & Cybersécurité
