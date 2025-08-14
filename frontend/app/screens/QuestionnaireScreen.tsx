import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuestionnaireScreenProps {
  navigation: any;
  route: any;
}

const questions = [
  {
    id: 1,
    text: "Existence d'un cadre de gouvernance IA formalisé ?",
    category: "Gouvernance",
    icon: "business-outline"
  },
  {
    id: 2,
    text: "Mise en place d'un comité d'éthique ou de conformité IA ?",
    category: "Gouvernance", 
    icon: "people-outline"
  },
  {
    id: 3,
    text: "Documentation technique complète du système IA ?",
    category: "Transparence",
    icon: "document-text-outline"
  },
  {
    id: 4,
    text: "Transparence vis-à-vis des utilisateurs (information sur l'usage de l'IA) ?",
    category: "Transparence",
    icon: "eye-outline"
  },
  {
    id: 5,
    text: "Tests de robustesse et de sécurité effectués ?",
    category: "Sécurité",
    icon: "shield-checkmark-outline"
  },
  {
    id: 6,
    text: "Surveillance continue des performances en production ?",
    category: "Sécurité",
    icon: "analytics-outline"
  },
  {
    id: 7,
    text: "Évaluation des biais (genre, origine, etc.) ?",
    category: "Droits fondamentaux",
    icon: "scale-outline"
  },
  {
    id: 8,
    text: "Respect des droits fondamentaux (protection des données, non-discrimination) ?",
    category: "Droits fondamentaux",
    icon: "shield-outline"
  }
];

const answerOptions = [
  { value: 0, label: "Non", color: "#e74c3c" },
  { value: 1, label: "Partiellement", color: "#f39c12" },
  { value: 3, label: "Oui", color: "#27ae60" }
];

export default function QuestionnaireScreen({ navigation, route }: QuestionnaireScreenProps) {
  const { contextData } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    // Auto-advance to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToNext = () => {
    if (answers[currentQuestion] === -1) {
      Alert.alert('Réponse requise', 'Veuillez répondre à cette question avant de continuer.');
      return;
    }
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    const unansweredQuestions = answers.filter(answer => answer === -1);
    if (unansweredQuestions.length > 0) {
      Alert.alert(
        'Questions non répondues',
        `Il reste ${unansweredQuestions.length} question(s) sans réponse. Veuillez compléter le questionnaire.`
      );
      return;
    }

    const evaluationData = {
      contextData,
      answers,
      questions,
      totalScore: answers.reduce((sum, answer) => sum + answer, 0),
    };

    navigation.navigate('Results', { evaluationData });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  return (
    <SafeAreaView style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {currentQuestion + 1} / {questions.length}
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name={question.icon as any} size={32} color="#1e88e5" />
            </View>
            <Text style={styles.category}>{question.category}</Text>
          </View>
          
          <Text style={styles.questionText}>{question.text}</Text>
        </View>

        {/* Answer Options */}
        <View style={styles.answersContainer}>
          {answerOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.answerOption,
                currentAnswer === option.value && styles.answerOptionSelected,
                { borderColor: option.color }
              ]}
              onPress={() => handleAnswer(option.value)}
              activeOpacity={0.7}
            >
              <View style={[
                styles.answerCircle,
                currentAnswer === option.value && { backgroundColor: option.color }
              ]}>
                {currentAnswer === option.value && (
                  <Ionicons name="checkmark" size={16} color="#fff" />
                )}
              </View>
              <Text style={[
                styles.answerText,
                currentAnswer === option.value && { color: option.color, fontWeight: '600' }
              ]}>
                {option.label}
              </Text>
              <Text style={styles.answerPoints}>
                {option.value} {option.value <= 1 ? 'point' : 'points'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Navigation */}
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[styles.navButton, currentQuestion === 0 && styles.navButtonDisabled]}
          onPress={goToPrevious}
          disabled={currentQuestion === 0}
        >
          <Ionicons 
            name="arrow-back" 
            size={20} 
            color={currentQuestion === 0 ? "#ccc" : "#1e88e5"} 
          />
          <Text style={[
            styles.navButtonText,
            currentQuestion === 0 && styles.navButtonTextDisabled
          ]}>
            Précédent
          </Text>
        </TouchableOpacity>

        {currentQuestion < questions.length - 1 ? (
          <TouchableOpacity
            style={[
              styles.navButton,
              styles.nextButton,
              currentAnswer === -1 && styles.nextButtonDisabled
            ]}
            onPress={goToNext}
            disabled={currentAnswer === -1}
          >
            <Text style={[
              styles.navButtonText,
              styles.nextButtonText,
              currentAnswer === -1 && styles.nextButtonTextDisabled
            ]}>
              Suivant
            </Text>
            <Ionicons 
              name="arrow-forward" 
              size={20} 
              color={currentAnswer === -1 ? "#ccc" : "#fff"} 
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.navButton, styles.finishButton]}
            onPress={handleFinish}
          >
            <Text style={[styles.navButtonText, styles.finishButtonText]}>
              Terminer
            </Text>
            <Ionicons name="checkmark" size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  progressContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1e88e5',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    marginRight: 12,
  },
  category: {
    fontSize: 14,
    color: '#1e88e5',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  questionText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24,
    fontWeight: '500',
  },
  answersContainer: {
    gap: 12,
  },
  answerOption: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e0e0e0',
  },
  answerOptionSelected: {
    borderWidth: 2,
  },
  answerCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  answerPoints: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  navButtonDisabled: {
    opacity: 0.5,
  },
  nextButton: {
    backgroundColor: '#1e88e5',
  },
  nextButtonDisabled: {
    backgroundColor: '#ccc',
  },
  finishButton: {
    backgroundColor: '#27ae60',
  },
  navButtonText: {
    fontSize: 16,
    color: '#1e88e5',
    fontWeight: '500',
  },
  navButtonTextDisabled: {
    color: '#ccc',
  },
  nextButtonText: {
    color: '#fff',
  },
  nextButtonTextDisabled: {
    color: '#999',
  },
  finishButtonText: {
    color: '#fff',
  },
});