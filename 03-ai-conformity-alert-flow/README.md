# 📢 Automated Compliance & Incident Alert Flow

## 📝 Objectif
Ce projet démontre comment automatiser la **collecte**, la **transformation** et la **diffusion** d’alertes de conformité ou de sécurité en utilisant **Make** (ex-Integromat) comme plateforme d’orchestration, reliée à des connecteurs clés tels que **Slack** et **Google Sheets**.

Cette première version V0 montre un flux simple et fonctionnel, avec des pistes d’évolution vers des intégrations plus avancées (ITSM, GRC, SIEM...).

---

## 📊 Cas d’usage
- **Partage rapide** d’informations critiques à une équipe.
- **Archivage automatique** des alertes dans un Google Sheet pour suivi historique.
- **Notification en temps réel** dans Slack, Teams ou autre messagerie.

---

## ⚙️ Fonctionnement (V0)
1. **Webhook Make** reçoit des données d’entrée (JSON) simulant une alerte.
2. Les données sont **envoyées simultanément** vers :
   - **Google Sheets** → enregistrement horodaté pour archivage.
   - **Slack** → notification formatée pour l’équipe.
3. **Filtres** (optionnels) pour ne laisser passer que certains types de messages (par ex. criticité élevée).

---

## 🔮 Évolutions prévues (V1+)
- **Filtrage avancé** (par criticité, source, typologie d’alerte).
- **Intégration ITSM** (ServiceNow, Jira Service Management…) pour ouverture automatique de tickets.
- **Intégration GRC** (Archer, Aravo…) pour suivi de conformité réglementaire (RGPD, AI Act…).
- **Connexion SIEM/SOC** (Splunk, Microsoft Sentinel…) pour traitement automatisé des incidents de cybersécurité.
- **Transformation automatique** de formats (PDF/Excel → JSON).
- **Authentification sécurisée** sur le webhook.

---

## 📌 Valeur business
Cette automatisation permet :
- **Réduction du temps de réaction** face à une alerte.
- **Moins d’erreurs humaines** dans la transmission d’informations critiques.
- **Meilleure traçabilité** grâce à l’archivage structuré.
- **Scalabilité** pour traiter un volume important d’événements sans surcharge humaine.

---

## 🔗 Intégrations stratégiques
### 1. ITSM – *ServiceNow, Jira Service Management, Freshservice…*
- Cas d’usage : signalement d’incidents, ouverture automatique de tickets, escalade.

### 2. GRC – *Archer, Aravo, OneTrust…*
- Cas d’usage : notification de non-conformités, suivi d’audits, alertes réglementaires.

### 3. SIEM/SOC – *Splunk, Microsoft Sentinel, IBM QRadar…*
- Cas d’usage : transmission d’alertes de cybersécurité, déclenchement de playbooks.

---

## 🗂 Structure du dépôt
```
03-ai-conformity-alert-flow/
│
├── /docs/                 → Documentation technique & business
├── /screenshots/          → Captures du scénario et résultats
├── /bpmn/                 → Diagrammes BPMN
├── /make-scenario/        → Export JSON du scénario Make
├── /google-sheets-template/ → Modèle de suivi
└── README.md              → Présentation du projet
```

---

## 📈 Diagramme BPMN simplifié
![BPMN Simplifié](docs/bpmn_simplified.png)

---

## 📦 Livrables
- ✅ Diagramme BPMN complet
- ✅ Scénario Make actif et documenté
- ✅ Modèle Google Sheet pré-configuré
- ✅ Exemple de message formaté pour Slack
- ✅ Documentation d’intégration avec ITSM, GRC, SIEM

---

## 👤 Auteur
**Eddy AZEBAZE**  
Chef de projet IT stratégique – Expert GRC • IA • Data & Insights • Cybersécurité
📅 **Un projet à fort enjeu, un cadrage à lancer ?** Prenons 30 min ensemble : [Réserver un appel](https://calendly.com/eddy-azebaze-proton/30min)  
[LinkedIn](https://www.linkedin.com/in/eddy-azebaze-034a20226/)

---

## 🏷️ Tags

`Make.com` `Automation` `Compliance` `Incident Management` `ITSM` `GRC` `SIEM` `Slack` `Google Sheets` `Workflow Automation` `Business Process` `Alerts` `Risk Management` `Regulatory Compliance` `AI Act` `Incident Response`
