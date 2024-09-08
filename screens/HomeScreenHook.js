// This code implements navigation using the Hook method. The useNavigation hook is used to get the navigation prop. The navigation prop is used to navigate to the AboutScreen component when the button is pressed. The useNavigation hook is used to navigate between screens in the app.
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

export default function HomeScreenProp() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to About" 
      onPress={ () => navigation.navigate("About")} />
    </View>
  )
}

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
    },
})