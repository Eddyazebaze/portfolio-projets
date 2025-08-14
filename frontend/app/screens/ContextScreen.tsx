import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

interface ContextScreenProps {
  navigation: any;
}

const sectors = [
  { label: 'Pharma/Health', value: 'pharma' },
  { label: 'Banque/Assurance', value: 'finance' },
  { label: 'Public', value: 'public' },
  { label: 'Industrie', value: 'industry' },
  { label: 'Retail', value: 'retail' },
];

export default function ContextScreen({ navigation }: ContextScreenProps) {
  const [projectName, setProjectName] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    if (!projectName.trim()) {
      Alert.alert('Erreur', 'Veuillez saisir le nom du projet');
      return;
    }
    if (!sector) {
      Alert.alert('Erreur', 'Veuillez sélectionner un secteur');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Erreur', 'Veuillez saisir une description');
      return;
    }

    const contextData = {
      projectName: projectName.trim(),
      sector,
      description: description.trim(),
    };

    navigation.navigate('Questionnaire', { contextData });
  };

  const remainingChars = 280 - description.length;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flex}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Header */}
            <View style={styles.header}>
              <Ionicons name="document-text-outline" size={48} color="#1e88e5" />
              <Text style={styles.title}>Contexte du projet</Text>
              <Text style={styles.subtitle}>
                Commençons par quelques informations sur votre système IA
              </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Project Name */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Nom du projet *</Text>
                <TextInput
                  style={styles.textInput}
                  value={projectName}
                  onChangeText={setProjectName}
                  placeholder="Ex: Système de recommandation produits"
                  placeholderTextColor="#999"
                />
              </View>

              {/* Sector */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Secteur d'activité *</Text>
                <View style={styles.pickerContainer}>
                  <RNPickerSelect
                    onValueChange={(value) => setSector(value)}
                    items={sectors}
                    style={pickerSelectStyles}
                    placeholder={{
                      label: 'Sélectionnez votre secteur...',
                      value: null,
                      color: '#999',
                    }}
                    value={sector}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                      return <Ionicons name="chevron-down" size={24} color="#666" />;
                    }}
                  />
                </View>
              </View>

              {/* Description */}
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Description du système IA *</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={description}
                  onChangeText={setDescription}
                  placeholder="Décrivez brièvement votre système IA, son objectif et son fonctionnement..."
                  placeholderTextColor="#999"
                  multiline
                  numberOfLines={4}
                  maxLength={280}
                  textAlignVertical="top"
                />
                <Text style={[
                  styles.charCount,
                  remainingChars < 0 ? styles.charCountError : {}
                ]}>
                  {remainingChars} caractères restants
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
            activeOpacity={0.8}
          >
            <Text style={styles.continueButtonText}>Continuer</Text>
            <Ionicons name="arrow-forward" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  flex: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  form: {
    gap: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  charCount: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  charCountError: {
    color: '#e74c3c',
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  continueButton: {
    backgroundColor: '#1e88e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    gap: 8,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    color: '#333',
    paddingRight: 40,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: '#333',
    paddingRight: 40,
  },
  iconContainer: {
    top: 20,
    right: 12,
  },
});