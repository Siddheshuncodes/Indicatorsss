import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

const CourseListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* Home Icon and Address */}
      <View style={styles.headerContainer}>
        <Ionicons name="home" size={42} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Home </Text>
          <Text style={styles.address}>  Sneha Nagar, Mhasrul, Nashik</Text>
        </View>
      </View>

      {/* Current Weather */}
      <View style={styles.weatherContainer}>
        <Ionicons name="cloud-outline" size={30} color="gray" />
        <Text style={styles.weatherText}>25°C, Clear</Text>
      </View>

      {/* Static Map Image */}
      <View style={styles.mapContainer}>
        <Image 
          source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png' }}
          style={styles.mapImage}
        />
      </View>

      {/* Recent Routes - Beautified */}
      <View style={styles.routesContainer}>
        <Text style={styles.sectionTitle}>Recent Routes</Text>

        <View style={styles.routeBox}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.routeTextContainer}>
            <Text style={styles.routeTitle}>Route 1</Text>
            <Text style={styles.routeDescription}>Home to Market</Text>
          </View>
        </View>

        <View style={styles.routeBox}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.routeTextContainer}>
            <Text style={styles.routeTitle}>Route 2</Text>
            <Text style={styles.routeDescription}>Office to Home</Text>
          </View>
        </View>

        <View style={styles.routeBox}>
          <Ionicons name="location-outline" size={24} color="black" />
          <View style={styles.routeTextContainer}>
            <Text style={styles.routeTitle}>Route 3</Text>
            <Text style={styles.routeDescription}>Park to Gym</Text>
          </View>
        </View>

      </View>

      {/* Connect to Maps Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect to Maps</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
    color: 'gray',
  },
  weatherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'gray',
  },
  mapContainer: {
    backgroundColor: '#e0e0e0',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden', // Ensures that the image fits inside the container with rounded corners
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  routesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  routeBox: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  routeTextContainer: {
    marginLeft: 10,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  routeDescription: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CourseListScreen;
