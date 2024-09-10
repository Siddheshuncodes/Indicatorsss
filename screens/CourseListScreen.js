import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';

const CourseListScreen = () => {
  const [activeRoute, setActiveRoute] = useState(null);

  const handleRoutePress = (route) => {
    setActiveRoute(route); // Set the active route
    console.log(`Pressed ${route}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
        {/* Home Icon and Address */}
        <View style={styles.headerContainer}>
          <Ionicons name="home" size={42} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.address}>Sneha Nagar, Mhasrul, Nashik</Text>
          </View>
        </View>

        {/* Current Weather */}
        <View style={styles.weatherContainer}>
          <Ionicons name="cloud-outline" size={30} color="gray" />
          <View style={styles.weatherTextContainer}>
            <Text style={styles.weatherText}>25°C, Clear</Text>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Static Map Image */}
        <View style={styles.mapContainer}>
          <Image 
            source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*qYUvh-EtES8dtgKiBRiLsA.png' }}
            style={styles.mapImage}
          />
        </View>

        {/* Kilometers Traveled Section */}
        <View style={styles.kmContainer}>
          <Text style={styles.kmTitle}>Kilometers Traveled Today</Text>
          <Text style={styles.kmValue}>25.4 km</Text>
        </View>

        {/* Recent Routes - Beautified */}
        <View style={styles.routesContainer}>
          <Text style={styles.sectionTitle}>Recent Routes</Text>

          <TouchableOpacity 
            style={[styles.routeBox, activeRoute === 'Route 1' && styles.activeRoute]} 
            onPress={() => handleRoutePress('Route 1')}
          >
            <Ionicons name="location-outline" size={24} color="black" />
            <View style={styles.routeTextContainer}>
              <Text style={styles.routeTitle}>Route 1</Text>
              <Text style={styles.routeDescription}>Home to Market</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.routeBox, activeRoute === 'Route 2' && styles.activeRoute]} 
            onPress={() => handleRoutePress('Route 2')}
          >
            <Ionicons name="location-outline" size={24} color="black" />
            <View style={styles.routeTextContainer}>
              <Text style={styles.routeTitle}>Route 2</Text>
              <Text style={styles.routeDescription}>Office to Home</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.routeBox, activeRoute === 'Route 3' && styles.activeRoute]} 
            onPress={() => handleRoutePress('Route 3')}
          >
            <Ionicons name="location-outline" size={24} color="black" />
            <View style={styles.routeTextContainer}>
              <Text style={styles.routeTitle}>Route 3</Text>
              <Text style={styles.routeDescription}>Park to Gym</Text>
            </View>
          </TouchableOpacity>

        </View>

        {/* Connect to Maps Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect to Maps</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollViewContent: {
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
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
  weatherTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Take up remaining space
  },
  weatherText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  searchButton: {
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 10,
    position: 'absolute', // Positioning relative to weatherContainer
    right: 0, // Align to right side
    top: '50%', // Center vertically
    transform: [{ translateY: -22 }], // Adjust for exact vertical center
  },
  mapContainer: {
    backgroundColor: '#e0e0e0',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  kmContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  kmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  kmValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
  },
  routesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  routeBox: {
    backgroundColor: '#fff',
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
  activeRoute: {
    backgroundColor: '#E0F7FA', // Light blue color
  },
  routeTextContainer: {
    marginLeft: 10,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
