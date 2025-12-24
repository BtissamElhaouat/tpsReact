import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function CardItem({ title, description, image, url }) {
  const openUrl = () => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        {/* Bouton d'ouverture */}
        <TouchableOpacity style={styles.button} onPress={openUrl}>
          <Text style={styles.buttonText}>En savoir plus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555', marginBottom: 8 },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
