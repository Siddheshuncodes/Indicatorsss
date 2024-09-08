import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default CourseListScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },

        text: {
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 16,
        }
    })


