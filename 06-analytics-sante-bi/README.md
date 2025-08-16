# 📊 Analyse Dépenses Santé - OMS (2012–2022)

![Project Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge&logo=github)

Ce projet propose une **analyse stratégique** des dépenses de santé en France sur **10 ans**, à partir des **données officielles de l’OMS** (Global Health Expenditure Database). Il vise à démontrer la capacité à extraire des **insights utiles pour les décideurs publics**, les **DSI**, les **CDO**, les **RSSI** et les **responsables financiers**.

---

## 🚀 Objectif

Explorer, visualiser et interpréter les **données de santé publique** pour :

- Mettre en lumière **l’évolution budgétaire santé en % du PIB et par habitant**
- Évaluer **la stabilité du modèle de financement** (public/privé)
- Formuler des **recommandations concrètes** pour les décideurs **IT/Data**

---

## 🧠 Contexte stratégique

Dans un contexte de **tensions budgétaires post-COVID** et d’exigences croissantes en matière de **pilotage data-driven**, les décideurs ont besoin d’outils simples pour interpréter la trajectoire des dépenses de santé et guider leurs choix d’investissement.

Les **données disponibles** couvrent la période **2012 à 2022**, selon les dernières publications de l’OMS.  
**L’objectif initial** était de construire une analyse sur **10 ans** afin d’observer l’évolution macro-budgétaire et les impacts de la crise sanitaire.

Ce projet permet d’illustrer :

- **L’importance de la résilience budgétaire**
- **La nécessité d’une veille prédictive** des tendances santé
- **Le rôle clé des dashboards BI/IA** dans la transformation des systèmes de santé

---

## 🔧 Technologies / Outils utilisés

- **Données OMS** (WHO GHED) : [Global Health Expenditure Database](https://apps.who.int/nha/database)
- **Power BI** pour la visualisation
- **MS Excel**  pour le nettoyage
- **Structuration GitHub** + documentation complète

📂 **Données nettoyées disponibles :**  [📥 Télécharger - Données nettoyées GHED (XLSX)](https://drive.google.com/file/d/1ThbxSTJ_AZGdsFAoW6tD0f9WdM6ngGWd/view)

---

## 📋 Livrables

🔢 **4 fichiers `.pbix` interactifs** :
- `graphique1-pib-sante.pbix`
- `graphique2-depenses-par-habitant.pbix`
- `graphique3-repartition-public-prive.pbix`
- `graphique4-evolution-depenses-sante-historique-vs-projection.pbix`

📸 **Captures des dashboards** dans `/screenshots`

📄 **README.md** commenté  
📄 **executive_summary.pdf** (disponible dans `/reporting`)  
📄 **Analyse détaillée** (disponible dans : `Analyse_Depenses_Sante_France_2012-2022_Eddy_AZEBAZE.docx`)

---

## 🧩 Approche chef de projet

En tant que **PMP®**, ma méthode suit un cycle rigoureux :

1. **Diagnostic** : cadrage du problème
2. **Cadrage** : choix des données et des outils
3. **Delivery** : visualisation et interprétation
4. **Résultats** : recommandations, ROI, usage terrain

---

## 🧠 Insights clés (2012–2022)

### Évolution des dépenses de santé / PIB
- **De 11,3 % (2012) à 11,9 % (2022)**  
- **Pic à 12,3 % en 2021** (COVID)
- **Stabilisation rapide dès 2022**

### Dépenses par habitant (USD courants)
- **+17 % sur 10 ans** (de 4 150 $ à 4 865 $)
- Même pic en 2021, puis retour à la normale

### Répartition public / privé
- **75 % public / 25 % privé constants**
- **Modèle de financement résilient** sur 10 ans

---

## 🔮 Projection 2023–2027 (bonus)

Sur la base des **tendances historiques**, une projection linéaire a été réalisée entre 2023 et 2027.  
Elle repose sur une hypothèse de **croissance budgétaire maîtrisée** après la période COVID.

📈 **Résultat** : une trajectoire ascendante du ratio **Dépenses santé / PIB** :
- **2023 : 12,1 %**
- **2024 : 12,2 %**
- **2025 : 12,3 %**
- **2026 : 12,4 %**
- **2027 : 12,5 %**

⚠️ Ces projections illustrent une **pression accrue sur les budgets IT/Data**, nécessitant :
- Des outils prédictifs
- Une automatisation de la veille
- Un pilotage agile des ressources santé

---

## 🧭 Cas d’usage

Ce projet peut servir de **base décisionnelle** pour :

- Identifier les **pics de dépenses** liés aux crises (ex : COVID)
- **Justifier un investissement BI / data visualisation** en hôpital ou administration
- **Appuyer un appel à projets santé / data / IA**
- **Préparer une stratégie IA Act / RGPD / gouvernance**

---

## ✅ Public cible

Ce projet est destiné aux :

- **DSI** – gouvernance data & IT
- **CDO** – stratégie data-driven & valorisation des insights
- **PMO / Chefs de projet** – pilotage stratégique
- **Responsables financiers / transformation** – analyse ROI / dépenses publiques
- **RSSI / Responsables conformité** – traçabilité des dashboards santé
- **Jury / Enseignants / mentors** – étude de cas ou support pédagogique

---

## 🗂 Arborescence du dossier

```
06-analytics-sante-bi/
├── /data/                         # Données brutes et nettoyées
│   ├── ghed_data.xlsx
│   └── ghed_data_clean.xlsx
├── /outputs/                      # Fichiers Power BI
│   ├── graphique1-pib-sante.pbix
│   ├── graphique2-depenses-par-habitant.pbix
│   ├── graphique3-repartition-public-prive.pbix
│   └── graphique4-evolution-depenses-sante-historique-vs-projection.pbix
├── /screenshots/                 # Captures d'écran
│   ├── graphique1-pib-sante.png
│   ├── graphique2-depenses-par-habitant.png
│   ├── graphique3-repartition-public-prive.png
│   └── graphique4-evolution-depenses-sante-historique-vs-projection.png
├── /reporting/                   # Résumés exécutifs
│   ├── executive_summary.pdf
│   └── Analyse_Depenses_Sante_France_2012-2022_Eddy_AZEBAZE.docx
├── /resources/                   # Ressources complémentaires
│   └── powerbi-resources-francais.md
├── COMPLETED.flag                # Indicateur de projet finalisé
└── README.md
```

---

## 📬 Contact

**Eddy AZEBAZE**  
📧 eddy.azebaze@proton.me  
🔗 [linkedin.com/in/eddy-azebaze-034a20226](https://www.linkedin.com/in/eddy-azebaze-034a20226)

🛠️ **Formateur certifié PMP®** (PMI ATP) | **Expert IA, GRC, Cyber & IT Strategy**  
🎯 Votre **Co-pilote** pour garantir la réussite de vos projets IT à fort enjeu

> “On ne livre pas un projet. On construit un **actif stratégique** : durable, traçable et auditable.”
