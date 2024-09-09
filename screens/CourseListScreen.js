import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CourseListScreen = () => {
  return (
      <SafeAreaView style={styles.container}>

        <Ionicons name="home" size={42} color="black" />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Home </Text>
          <Text style={styles.address}>Sneha Nagar, Mhasrul, Nashik</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      margin: 20, // Adjust this margin as needed
      paddingLeft: 3,
      paddingTop: 15
    },
    textContainer: {
      marginLeft: 10, // Space between icon and text
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    address: {
      fontSize: 14,
      color: 'gray',
    },
  });
  
  export default CourseListScreen;


