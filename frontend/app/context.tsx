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
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

const sectors = [
  { label: 'Pharma/Health', value: 'pharma' },
  { label: 'Banque/Assurance', value: 'finance' },
  { label: 'Public', value: 'public' },
  { label: 'Industrie', value: 'industry' },
  { label: 'Retail', value: 'retail' },
];

export default function ContextScreen() {
  const router = useRouter();
  const [projectName, setProjectName] = useState('');
  const [sector, setSector] = useState('');
  const [description, setDescription] = useState('');
  const [showSectorModal, setShowSectorModal] = useState(false);

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

    router.push({
      pathname: '/questionnaire',
      params: { contextData: JSON.stringify(contextData) }
    });
  };

  const getSectorLabel = (value: string) => {
    const sector = sectors.find(s => s.value === value);
    return sector ? sector.label : 'Sélectionnez votre secteur...';
  };

  const selectSector = (value: string) => {
    setSector(value);
    setShowSectorModal(false);
  };

  const remainingChars = 280 - description.length;

  return (
    <>
      <Stack.Screen options={{ 
        title: 'Contexte du projet',
        headerStyle: { backgroundColor: '#1e88e5' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }} />
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
                  <TouchableOpacity
                    style={styles.pickerButton}
                    onPress={() => setShowSectorModal(true)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.pickerButtonText,
                      !sector && styles.pickerPlaceholder
                    ]}>
                      {getSectorLabel(sector)}
                    </Text>
                    <Ionicons name="chevron-down" size={24} color="#666" />
                  </TouchableOpacity>
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

        {/* Sector Modal */}
        <Modal
          visible={showSectorModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowSectorModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Sélectionnez votre secteur</Text>
                <TouchableOpacity
                  onPress={() => setShowSectorModal(false)}
                  style={styles.modalCloseButton}
                >
                  <Ionicons name="close" size={24} color="#666" />
                </TouchableOpacity>
              </View>
              
              <ScrollView style={styles.modalList}>
                {sectors.map((sectorOption) => (
                  <TouchableOpacity
                    key={sectorOption.value}
                    style={[
                      styles.modalItem,
                      sector === sectorOption.value && styles.modalItemSelected
                    ]}
                    onPress={() => selectSector(sectorOption.value)}
                    activeOpacity={0.7}
                  >
                    <Text style={[
                      styles.modalItemText,
                      sector === sectorOption.value && styles.modalItemTextSelected
                    ]}>
                      {sectorOption.label}
                    </Text>
                    {sector === sectorOption.value && (
                      <Ionicons name="checkmark" size={20} color="#1e88e5" />
                    )}
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </>
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
  pickerButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  pickerPlaceholder: {
    color: '#999',
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalList: {
    maxHeight: 300,
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalItemSelected: {
    backgroundColor: '#f0f8ff',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalItemTextSelected: {
    color: '#1e88e5',
    fontWeight: '600',
  },
});