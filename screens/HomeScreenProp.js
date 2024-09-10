import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import React from 'react';

export default function CarbonFootprintScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Your Carbon Footprint</Text>
        <Text style={styles.subtitle}>Understand your environmental impact</Text>
      </View>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://justenergy.com/wp-content/uploads/2013/05/carbon-footprint-what-made-of-calculating.jpg' }}
          style={styles.image}
        />
      </View>

      {/* Explanation Text */}
      <View style={styles.textContainer}>
        <Text style={styles.sectionTitle}>What is Carbon Footprint?</Text>
        <Text style={styles.description}>
          Your carbon footprint is the amount of carbon dioxide (CO2) emissions produced by your daily activities, such as transportation, energy use, and waste generation. It is measured in tons of CO2 emitted per year.
        </Text>
        <Text style={styles.sectionTitle}>How is it Calculated?</Text>
        <Text style={styles.description}>
          We calculate your footprint based on the energy you use, the waste you generate, and the methods of transportation you use. This calculation includes emissions from your home, travel, and consumption habits.
        </Text>
        <Text style={styles.sectionTitle}>Why it Matters?</Text>
        <Text style={styles.description}>
          Reducing your carbon footprint helps mitigate climate change, improves air quality, and promotes sustainable living. Small changes in your lifestyle can significantly reduce your environmental impact.
        </Text>
      </View>

      {/* Placeholder for Further Actions */}
      <View style={styles.buttonContainer}>
        <Button
          title="Learn How to Reduce Your Footprint"
          onPress={() => alert('Feature coming soon!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d2d2d',
  },
  subtitle: {
    fontSize: 16,
    color: '#606060',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d2d2d',
    marginTop: 20,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#505050',
    lineHeight: 24,
    textAlign: 'left',
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
  },
});
