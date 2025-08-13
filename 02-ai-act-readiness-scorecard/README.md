# 🛡️ AI Act Readiness Scorecard  

**Auto-évaluation de conformité pour systèmes IA – Orientée DSI / CTO / Architectes**  

*100% statique • Zero dépendance • Bilingue FR/EN • Mode sombre • Prêt audit*

[![AI Act Ready](https://img.shields.io/badge/AI_Act_Ready-Compliant-brightgreen?logo=europen&logoColor=white&labelColor=1e88e5)](https://github.com/eddyazebaze/ai-act-readiness-scorecard)

![Interface du AI Act Readiness Scorecard - Mode clair et sombre](/assets/screenshot-responsive.png)

➡️ **[👉 Accéder à la démo interactive](https://eddyazebaze.github.io/ai-act-readiness-scorecard)**

> *"Un contrôle incomplet n’est pas un contrôle."*  
> Cet outil évalue la **maturité IT réelle** d’un système IA face à l’AI Act — pas seulement la compliance théorique.

---

## 🎯 Objectif du projet

Fournir aux **décideurs IT (DSI, CTO, architectes, DPO)** un outil **autonome, rapide et pragmatique** pour :

- 🔍 **Évaluer la maturité** d’un système IA face aux exigences de l’**AI Act**
- 🚨 **Détecter les écarts critiques** en gouvernance, sécurité, transparence et conformité
- 📌 **Prioriser les actions IT** (P1/P2/P3) selon le risque opérationnel
- 📄 **Générer des artefacts prêts pour l’audit** (PIA allégé, notice utilisateur, documentation technique, logs)
- 🌐 **Parler le langage du SI**, pas seulement celui du juridique

👉 **Public cible** : DSI, CTO, chefs de projet IA, DPO, auditeurs internes.

---

## 📋 Cahier des charges

| Champ | Détail |
|------|--------|
| **Nom du projet** | AI Act Readiness Scorecard |
| **Version** | 1.0 (bilingue FR/EN, mode sombre) |
| **Objectif** | Auto-évaluation de conformité IA pour décideurs IT |
| **Scope** | 8 axes clés de l’AI Act, scoring /24, plan d’action, export audit-ready |
| **Livrables** | - `index.html` autonome<br>- Score + badge + progression<br>- Plan d’action P1/P2/P3<br>- Dossier d’audit (TXT)<br>- Impression PDF |
| **Hors scope** | Intégration API, stockage cloud, authentification, multi-utilisateurs |
| **Contraintes techniques** | 100% statique, pas de dépendance externe, pas de stockage (no localStorage), fonctionne en sandbox |
| **Conformité ciblée** | AI Act (UE), GDPR, principe de "conformité par conception", DPIA |
| **Technologies** | HTML / CSS / JS inline uniquement - aucun framework, CDN ou bibliothèque externe |

---

## 🧩 Méthodologie de scoring

### 🔢 Échelle de notation
Chaque question est notée selon une **échelle de maturité IT** :

| Note | Signification |
|------|---------------|
| **0** | Absent - Pas de contrôle |
| **1** | Partiel / Non robuste - Démarré mais non opérationnel |
| **3** | Opérationnel et fiable - Automatisé, documenté, maintenu |

> ❗ Le **2 est volontairement omis** : il n’y a pas de "demi-mesure" en gouvernance IT.  
> Un contrôle incomplet est considéré comme **non effectif**.

### 📊 Calcul du score
- 8 questions × 3 points max = **/24**
- Niveaux :
  - **0 - 10** : ❌ Critique (risque élevé)
  - **11 - 20** : 🔶 Élevé (améliorations nécessaires)
  - **21 - 24** : ✅ Satisfaisant (bon niveau de maturité)

---

## 📄 Conformité AI Act - Couverture des exigences

| Exigence AI Act | Couverture | Livrable généré |
|------------------|------------|-----------------|
| Documentation technique (Art. 11) | ✅ via questionnaire + export | `Documentation technique` |
| Évaluation des biais (Art. 14) | ✅ via Q5 | `PIA allégé` |
| Surveillance en production (Art. 13) | ✅ via Q3/Q4 | `Monitoring MLOps` |
| Information utilisateur (Art. 52) | ✅ via export | `Notice utilisateur` |
| DPIA / PIA | ✅ via template inclus | `PIA allégé` |
| Traçabilité des décisions | ✅ via Q7 | `Exemple de journal d’audit` |
| Gouvernance IA | ✅ via Q2 | `Plan d’action P1/P2/P3` |

---

## 🧱 Structure du dépôt

ai-act-readiness-scorecard/
│
├── index.html → Application autonome (HTML/CSS/JS inline)
├── README.md → Documentation projet (ce fichier)
└── assets/ → Ressources visuelles et exemples
├── screenshot-responsive.png
├── snapshot-scoring-credit-clair.png
├── snapshot-scoring-credit-sombre.png
├── snapshot-tri-medical-clair.png
├── snapshot-tri-medical-sombre.png
├── snapshot-chatbot-rh-clair.png
├── snapshot-chatbot-rh-sombre.png
└── ai-act-scorecard-template.pdf

---

## 🚀 Fonctionnalités

| Fonction | Description |
|--------|-------------|
| **Bilingue FR/EN** | Bouton de bascule en haut à droite |
| **Mode sombre** | Améliore lisibilité et accessibilité |
| **Score en temps réel** | Calcul automatique sur 24 points |
| **Badge de maturité** | Critique / Élevé / Satisfaisant |
| **Barre de progression** | Visualisation du niveau de conformité |
| **Plan d’action P1/P2/P3** | Recommandations techniques priorisées |
| **Export TXT** | Téléchargement du plan d’action |
| **Génération d’audit pack** | PIA, notice, doc technique, logs (1 clic) |
| **Impression / PDF** | Compatible avec les rapports de comité |
| **Contenu brut** | Zone copier-coller si téléchargement bloqué |

---

## 📸 Exemples de cas d’usage

| Contexte | Score | Niveau | Snapshot |
|--------|------|--------|----------|
| **Scoring crédit (banque)** | 5/24 | ❌ Critique | ![Scoring crédit](/assets/snapshot-scoring-credit-clair.png) |
| **Tri médical (santé)** | 18/24 | 🔶 Élevé | ![Tri médical](/assets/snapshot-tri-medical-clair.png) |
| **Chatbot RH (entreprise)** | 22/24 | ✅ Satisfaisant | ![Chatbot RH](/assets/snapshot-chatbot-rh-clair.png) |

> 💡 *Ces snapshots illustrent des cas réels. Les versions en mode sombre sont disponibles dans `/assets`.*

---

## 🛠️ Mode d’emploi

1. **Remplir le contexte** : nom du projet, secteur, description
2. **Répondre aux 8 questions** (0, 1 ou 3)
3. **Cliquer sur "Calculer le risque IT"**
4. **Consulter les résultats** : score, niveau, recommandations
5. **Exporter** :
   - 📥 `Télécharger le plan (TXT)`
   - 📄 `Générer les documents d’audit`
   - 🖨️ `Imprimer / PDF` pour comité de pilotage

> ✅ Aucune donnée n’est stockée. L’outil fonctionne hors ligne.

---

## 📅 Roadmap

| Prochaine étape | Statut |
|----------------|--------|
| Version PDF signable (avec logo entreprise) | ⏳ En réflexion |
| Intégration avec outils MLOps (ex: Prometheus, Grafana) | 🔜 À étudier |
| Mode multi-projet (comparaison de maturité) | ❌ Hors scope actuel |
| API IA pour suggestions contextuelles | ⚠️ Optionnel - pas prioritaire |
| Bouton "Charger un exemple" (ex: banque, santé, RH) | 🚀 Prochaine amélioration |

---

## 📂 Recommandations d’utilisation

- ✅ **En amont d’un déploiement IA** : pour identifier les risques SI
- ✅ **Dans un comité de pilotage IT** : comme support de décision
- ✅ **Pour un audit interne** : preuve de conformité proactive
- ✅ **Formation DSI / DPO** : sensibilisation à l’IA responsable

---

## 🔗 Contact

Ce projet est conçu par **Eddy AZEBAZE** - Chef de projet IT stratégique, spécialisé en **IA responsable, GRC, Data, conformité (AI Act, GDPR) et transformation SI**.

📅 Tu veux adapter cet outil à ton SI ? Parlons-en :  
👉 [Réserver un appel (30 min)](https://calendly.com/eddyazebaze)  
📧 eddy.azebaze@proton.me  
🔗 [LinkedIn](https://linkedin.com/in/eddyazebaze)

---

> *"La conformité n’est pas un fardeau.  
> C’est une **condition de la performance durable** du système d’information."*  
> **Eddy AZEBAZE, 2025**
