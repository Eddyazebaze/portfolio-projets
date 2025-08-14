import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

interface ResultsScreenProps {
  navigation: any;
  route: any;
}

export default function ResultsScreen({ navigation, route }: ResultsScreenProps) {
  const { evaluationData } = route.params;
  const { contextData, totalScore, questions, answers } = evaluationData;

  // Determine level and color based on score
  const getScoreLevel = (score: number) => {
    if (score <= 10) return { level: 'Insuffisant', color: '#e74c3c', risk: 'Risque élevé : actions urgentes nécessaires' };
    if (score <= 20) return { level: 'Moyen', color: '#f39c12', risk: 'Risque modéré : améliorations recommandées' };
    return { level: 'Bon', color: '#27ae60', risk: 'Risque faible : maintenir les bonnes pratiques' };
  };

  const scoreData = getScoreLevel(totalScore);
  const progressPercentage = (totalScore / 24) * 100;

  // Generate action plan based on answers
  const generateActionPlan = () => {
    const actions: Array<{priority: string, text: string, category: string}> = [];

    answers.forEach((answer, index) => {
      const question = questions[index];
      if (answer === 0) {
        // Missing completely - P1 (urgent)
        actions.push({
          priority: 'P1',
          text: getActionForQuestion(question.id, 'missing'),
          category: question.category
        });
      } else if (answer === 1) {
        // Partial - P2 (important)
        actions.push({
          priority: 'P2', 
          text: getActionForQuestion(question.id, 'partial'),
          category: question.category
        });
      }
    });

    // Add general P3 improvements if score is good
    if (totalScore > 20) {
      actions.push({
        priority: 'P3',
        text: 'Effectuer une revue annuelle du cadre de gouvernance IA',
        category: 'Amélioration continue'
      });
      actions.push({
        priority: 'P3',
        text: 'Organiser des formations régulières sur l\'IA responsable',
        category: 'Formation'
      });
    }

    return actions.sort((a, b) => {
      const priorityOrder = { 'P1': 1, 'P2': 2, 'P3': 3 };
      return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
    });
  };

  const getActionForQuestion = (questionId: number, type: 'missing' | 'partial') => {
    const actions = {
      1: {
        missing: 'Mettre en place un cadre de gouvernance IA formalisé avec politiques et procédures',
        partial: 'Finaliser et documenter complètement le cadre de gouvernance IA existant'
      },
      2: {
        missing: 'Créer un comité d\'éthique IA avec représentants techniques et métier',
        partial: 'Renforcer les responsabilités et processus du comité d\'éthique IA'
      },
      3: {
        missing: 'Documenter l\'architecture, algorithmes et données du système IA',
        partial: 'Compléter la documentation technique manquante du système IA'
      },
      4: {
        missing: 'Informer clairement les utilisateurs de l\'usage de l\'IA dans le système',
        partial: 'Améliorer la transparence envers les utilisateurs sur le fonctionnement IA'
      },
      5: {
        missing: 'Effectuer des tests de robustesse, sécurité et performance du système IA',
        partial: 'Compléter et systématiser les tests de robustesse et sécurité'
      },
      6: {
        missing: 'Mettre en place un monitoring continu des performances en production',
        partial: 'Améliorer le système de surveillance des performances IA'
      },
      7: {
        missing: 'Réaliser une évaluation complète des biais algorithmiques',
        partial: 'Approfondir l\'évaluation des biais et mettre en place des correctifs'
      },
      8: {
        missing: 'Garantir le respect des droits fondamentaux et protection des données',
        partial: 'Renforcer les mesures de protection des droits fondamentaux'
      }
    };

    return actions[questionId as keyof typeof actions]?.[type] || 'Action à définir';
  };

  const actionPlan = generateActionPlan();

  const generateReport = () => {
    const sectorLabels = {
      pharma: 'Pharma/Health',
      finance: 'Banque/Assurance', 
      public: 'Public',
      industry: 'Industrie',
      retail: 'Retail'
    };

    return `AI ACT READINESS SCORECARD - RAPPORT D'ÉVALUATION

==========================================
INFORMATIONS PROJET
==========================================
Nom du projet: ${contextData.projectName}
Secteur: ${sectorLabels[contextData.sector as keyof typeof sectorLabels]}
Description: ${contextData.description}

==========================================
RÉSULTATS D'ÉVALUATION
==========================================
Score total: ${totalScore}/24
Niveau: ${scoreData.level}
Évaluation des risques: ${scoreData.risk}

==========================================
DÉTAIL DES RÉPONSES
==========================================
${questions.map((q, i) => {
  const answerLabels = ['Non', 'Partiellement', 'Oui'];
  return `${i + 1}. ${q.text}
   Réponse: ${answerLabels[answers[i]] || 'Non répondu'} (${answers[i]} point${answers[i] > 1 ? 's' : ''})
   Catégorie: ${q.category}`;
}).join('\n\n')}

==========================================
PLAN D'ACTION PRIORISÉ
==========================================
${actionPlan.map((action, i) => 
  `${i + 1}. [${action.priority}] ${action.text}
   Catégorie: ${action.category}`
).join('\n\n')}

==========================================
LÉGENDE DES PRIORITÉS
==========================================
P1 (Urgent): Actions critiques à implémenter immédiatement
P2 (Important): Actions importantes à planifier sous 3-6 mois  
P3 (Amélioration): Actions d'amélioration continue

==========================================
À PROPOS
==========================================
Rapport généré par AI Act Check
© 2025 Eddy AZEBAZE - Je structure, sécurise et accélère vos projets IT.
📅 Réserver un appel: https://calendly.com/eddy-azebaze-proton/30min
📧 Contact: eddy.azebaze@proton.me

Date de génération: ${new Date().toLocaleDateString('fr-FR')}
`;
  };

  const handleExportTXT = async () => {
    try {
      const report = generateReport();
      const fileName = `AI_Act_Check_${contextData.projectName.replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.txt`;
      const fileUri = FileSystem.documentDirectory + fileName;

      await FileSystem.writeAsStringAsync(fileUri, report);
      
      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(fileUri);
      } else {
        Alert.alert('Succès', `Rapport sauvegardé: ${fileName}`);
      }
    } catch (error) {
      console.error('Export error:', error);
      Alert.alert('Erreur', 'Impossible d\'exporter le rapport');
    }
  };

  const handleShare = async () => {
    try {
      const report = generateReport();
      await Share.share({
        message: report,
        title: 'AI Act Readiness Scorecard - Rapport'
      });
    } catch (error) {
      console.error('Share error:', error);
      Alert.alert('Erreur', 'Impossible de partager le rapport');
    }
  };

  const handleNewEvaluation = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreHeader}>
            <Ionicons name="analytics" size={48} color={scoreData.color} />
            <Text style={styles.scoreTitle}>Votre Score AI Act</Text>
          </View>
          
          <Text style={[styles.scoreValue, { color: scoreData.color }]}>
            {totalScore}/24
          </Text>
          
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar}>
              <View style={[
                styles.progressFill,
                { width: `${progressPercentage}%`, backgroundColor: scoreData.color }
              ]} />
            </View>
          </View>
          
          <Text style={[styles.scoreLevel, { color: scoreData.color }]}>
            {scoreData.level}
          </Text>
          <Text style={styles.riskText}>{scoreData.risk}</Text>
        </View>

        {/* Project Info */}
        <View style={styles.infoCard}>
          <Text style={styles.cardTitle}>Informations du projet</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Projet:</Text>
            <Text style={styles.infoValue}>{contextData.projectName}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Secteur:</Text>
            <Text style={styles.infoValue}>{contextData.sector}</Text>
          </View>
        </View>

        {/* Action Plan */}
        <View style={styles.actionCard}>
          <Text style={styles.cardTitle}>Plan d'action priorisé</Text>
          {actionPlan.length > 0 ? (
            actionPlan.slice(0, 7).map((action, index) => (
              <View key={index} style={styles.actionItem}>
                <View style={[
                  styles.priorityBadge,
                  { backgroundColor: action.priority === 'P1' ? '#e74c3c' : action.priority === 'P2' ? '#f39c12' : '#3498db' }
                ]}>
                  <Text style={styles.priorityText}>{action.priority}</Text>
                </View>
                <View style={styles.actionContent}>
                  <Text style={styles.actionText}>{action.text}</Text>
                  <Text style={styles.actionCategory}>{action.category}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noActionsText}>
              Excellent ! Votre système IA présente une bonne maturité face à l'AI Act.
            </Text>
          )}
        </View>

        {/* Legend */}
        <View style={styles.legendCard}>
          <Text style={styles.cardTitle}>Légende des priorités</Text>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#e74c3c' }]} />
            <Text style={styles.legendText}>P1 (Urgent): Actions critiques immédiates</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#f39c12' }]} />
            <Text style={styles.legendText}>P2 (Important): À planifier sous 3-6 mois</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#3498db' }]} />
            <Text style={styles.legendText}>P3 (Amélioration): Amélioration continue</Text>
          </View>
        </View>
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.exportButton} onPress={handleExportTXT}>
          <Ionicons name="download-outline" size={20} color="#1e88e5" />
          <Text style={styles.exportButtonText}>Télécharger TXT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Ionicons name="share-outline" size={20} color="#fff" />
          <Text style={styles.shareButtonText}>Partager</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.newEvalButton} onPress={handleNewEvaluation}>
        <Text style={styles.newEvalButtonText}>Nouvelle évaluation</Text>
        <Ionicons name="refresh" size={20} color="#1e88e5" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  scoreCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  scoreHeader: {
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressBarContainer: {
    width: '100%',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  scoreLevel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  riskText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
    width: 80,
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    fontWeight: '500',
  },
  actionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  actionItem: {
    flexDirection: 'row',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 12,
    height: 24,
    justifyContent: 'center',
  },
  priorityText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionContent: {
    flex: 1,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
    marginBottom: 4,
  },
  actionCategory: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  noActionsText: {
    fontSize: 14,
    color: '#27ae60',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  legendCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  legendText: {
    fontSize: 12,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 12,
  },
  exportButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1e88e5',
    gap: 8,
  },
  exportButtonText: {
    color: '#1e88e5',
    fontSize: 14,
    fontWeight: '500',
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#1e88e5',
    gap: 8,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  newEvalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginTop: 8,
    gap: 8,
  },
  newEvalButtonText: {
    color: '#1e88e5',
    fontSize: 16,
    fontWeight: '500',
  },
});