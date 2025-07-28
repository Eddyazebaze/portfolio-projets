export const calculateProjectValue = (project) => {
  // Base scores calculation
  const priorityScores = { basse: 30, moyenne: 60, haute: 90 };
  const impactScores = { faible: 20, modéré: 50, fort: 80 };
  const booleanScores = { Non: 0, Oui: 100 };
  
  // Project type multipliers
  const typeMultipliers = {
    SI: { business: 1.0, user: 0.8, regulatory: 0.3, strategic: 0.7, operational: 1.2 },
    IA: { business: 1.1, user: 0.9, regulatory: 0.4, strategic: 1.0, operational: 0.8 },
    Data: { business: 0.9, user: 0.7, regulatory: 0.8, strategic: 0.8, operational: 1.0 },
    Réglementaire: { business: 0.6, user: 0.3, regulatory: 1.5, strategic: 0.5, operational: 0.9 },
    Produit: { business: 1.2, user: 1.3, regulatory: 0.5, strategic: 1.1, operational: 0.7 },
    Autre: { business: 0.8, user: 0.8, regulatory: 0.6, strategic: 0.6, operational: 0.8 }
  };

  const multiplier = typeMultipliers[project.type] || typeMultipliers.Autre;
  
  // Calculate value matrix
  const valueMatrix = {
    "Valeur Business 💼": Math.min(100, Math.round(
      (priorityScores[project.priority] * 0.6 + 
       impactScores[project.userImpact] * 0.4) * multiplier.business
    )),
    "Valeur Utilisateur 👤": Math.min(100, Math.round(
      (impactScores[project.userImpact] * 0.8 + 
       priorityScores[project.priority] * 0.2) * multiplier.user
    )),
    "Valeur Réglementaire ⚖️": Math.min(100, Math.round(
      (booleanScores[project.regulatory] * 0.7 + 
       priorityScores[project.priority] * 0.3) * multiplier.regulatory
    )),
    "Valeur Stratégique 🎯": Math.min(100, Math.round(
      (booleanScores[project.strategic] * 0.6 + 
       priorityScores[project.priority] * 0.4) * multiplier.strategic
    )),
    "Valeur Opérationnelle ⚙️": Math.min(100, Math.round(
      (priorityScores[project.priority] * 0.5 + 
       impactScores[project.userImpact] * 0.3 + 
       (booleanScores[project.regulatory] + booleanScores[project.strategic]) * 0.1) * multiplier.operational
    ))
  };

  // Calculate global score
  const averageScore = Object.values(valueMatrix).reduce((sum, val) => sum + val, 0) / 5;
  const globalScore = averageScore >= 70 ? "Élevée" : averageScore >= 40 ? "Moyenne" : "Faible";

  // Determine positioning
  let positioning;
  if (averageScore >= 80) {
    positioning = "Projet stratégique";
  } else if (averageScore >= 60) {
    positioning = "Projet à prioriser";
  } else if (averageScore >= 40) {
    positioning = "Projet à arbitrer";
  } else {
    positioning = "Projet à requalifier";
  }

  // Generate recommendation
  const recommendations = {
    "Projet stratégique": "Ce projet présente une valeur stratégique élevée et devrait être priorisé dans le portefeuille projets. Allouez les ressources nécessaires et assurez un suivi rapproché.",
    "Projet à prioriser": "Ce projet présente un bon potentiel de valeur. Évaluez sa place dans la roadmap et les ressources disponibles pour son lancement.",
    "Projet à arbitrer": "Ce projet nécessite une analyse approfondie des bénéfices par rapport aux coûts. Considérez l'optimisation du périmètre ou des modalités de réalisation.",
    "Projet à requalifier": "Ce projet présente une valeur limitée dans sa forme actuelle. Reconsidérez les objectifs, le périmètre ou reportez sa réalisation."
  };

  return {
    valueMatrix,
    globalScore,
    positioning,
    recommendation: recommendations[positioning]
  };
};