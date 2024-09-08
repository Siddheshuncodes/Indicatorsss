import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

const DashboardScreen = ({ navigation }) => // Here, we've added a navigation prop to the DashboardScreen component in order implement the toggleDrawer functionality in the Button component i.e. "Toggle Drawer".
{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DashboardScreen</Text>
      <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button style={styles.text} title="Settings" onPress={() => navigation.jumpTo("Settings") } />
    </View>
  );
};

export default DashboardScreen;

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
            alignItems: "center",
            justifyContent: "center",
        }
    })


