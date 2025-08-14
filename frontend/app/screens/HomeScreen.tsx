import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Ionicons name="shield-checkmark" size={80} color="#1e88e5" />
          </View>
          <Text style={styles.title}>AI Act Check</Text>
          <Text style={styles.subtitle}>
            Évaluez la conformité de vos systèmes IA
          </Text>
        </View>

        {/* Main Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => navigation.navigate('Context')}
            activeOpacity={0.8}
          >
            <Text style={styles.startButtonText}>Commencer l'évaluation</Text>
            <Ionicons name="arrow-forward" size={24} color="#fff" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>

        {/* Info Section */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={24} color="#666" />
            <Text style={styles.infoText}>5 minutes</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="shield-outline" size={24} color="#666" />
            <Text style={styles.infoText}>100% confidentiel</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="download-outline" size={24} color="#666" />
            <Text style={styles.infoText}>Export inclus</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Eddy AZEBAZE - Je structure, sécurise et accélère vos projets IT.
        </Text>
        <View style={styles.contactInfo}>
          <TouchableOpacity style={styles.contactItem}>
            <Ionicons name="calendar-outline" size={16} color="#1e88e5" />
            <Text style={styles.contactText}>Réserver un appel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Ionicons name="mail-outline" size={16} color="#1e88e5" />
            <Text style={styles.contactText}>eddy.azebaze@proton.me</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#1e88e5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: width * 0.7,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  buttonIcon: {
    marginLeft: 8,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  infoItem: {
    alignItems: 'center',
    flex: 1,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 16,
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactText: {
    fontSize: 12,
    color: '#1e88e5',
  },
});