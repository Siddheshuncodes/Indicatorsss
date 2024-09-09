import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={{uri: 'https://media.licdn.com/dms/image/v2/D5603AQGRnP_ufI1cgQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718187365293?e=1731542400&v=beta&t=ZW1Rl1hKvuryJcC3xRhpbiV6nXaAFkHBymttRDObVZc'}} // Placeholder profile image
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mehul Pardeshi</Text>
        <Text style={styles.profileEmail}>mehulpardeshi@gmail.com </Text>
      </View>

      {/* Vehicles Connected Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Vehicles Connected</Text>
        <View style={styles.vehiclesContainer}>
          <View style={styles.vehicleBox}>
            <Image 
              source={{uri: 'https://imgs.search.brave.com/Cj9XtTVGdIO7LoNvdBnIZ9Zw0MNebqChqrTn6igaeiw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE3L05ld19Ib25k/YV9BY3RpdmFfU2Nv/b3Rlcl9hdF9Lb21t/YWRpLkpQRw'}} // Placeholder vehicle image
              style={styles.vehicleImage}
            />
            <Text style={styles.vehicleText}>Honda Activa</Text>
          </View>
          <View style={styles.vehicleBox}>
            <Image 
              source={{uri: 'https://imgs.search.brave.com/6-v7c1qTETG2UIQwjFOcvz9oK0E3SExCP1IGShmsfDA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9odGNt/cy1wcm9kLWltYWdl/cy5zMy5hcC1zb3V0/aC0xLmFtYXpvbmF3/cy5jb20vaHRtb2Jp/bGUxL3lhbWFoYV9m/engvaW1hZ2VzL2V4/dGVyaW9yX3lhbWFo/YS1menhfZnJvbnQt/cmlnaHQtdmlld182/MDB4NDAwLmpwZyZ3/PTM4NDAmcT03NQ.jpeg'}} // Placeholder vehicle image
              style={styles.vehicleImage}
            />
            <Text style={styles.vehicleText}>Yamaha FZ</Text>
          </View>
        </View>
      </View>

      {/* Saved Locations Section */}
      <View style={styles.sectionContainer}>
  <Text style={styles.sectionTitle}>Saved Locations</Text>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
    <View style={styles.locationsContainer}>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>College</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>Movie Max</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>College Road</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>Pineapple Juice Center</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationBox}>
        <Text style={styles.locationText}>Her House</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
</View>

    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F0F0F0', // Light gray background for the entire screen
  },
  profileContainer: {
    alignItems: 'center',
    padding: 30,
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10, // Adds shadow for Android devices
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#3498db', // Border around profile image
  },
  profileName: {
    fontSize: 26,
    fontWeight: '700',
    color: '#34495e', // Darker shade for name
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#7f8c8d', // Subtle gray for email
    fontStyle: 'italic',
  },
  sectionContainer: {
    padding: 25,
    marginBottom: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50', // Stronger text color for titles
    marginBottom: 20,
  },
  vehiclesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleBox: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#ECF0F1', // Subtle background for vehicle containers
    borderRadius: 15,
    width: '48%',
    borderWidth: 1,
    borderColor: '#dcdde1',
    shadowColor: '#7f8c8d',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  vehicleImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginBottom: 10,
  },
  vehicleText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2980b9', // Blue for vehicle names
  },
  locationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationsContainer: {
    flexDirection: 'row',
    // no 'justifyContent' to allow free scrolling
  },
  locationBox: {
    padding: 15,
    marginRight: 10,  // Adds space between locations
    backgroundColor: '#ECF0F1',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dcdde1',
    shadowColor: '#7f8c8d',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8e44ad',  // Purple for location names
  },
});