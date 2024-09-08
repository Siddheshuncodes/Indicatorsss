// This code implements navigation using the Prop method. The HomeScreenProp component is passed a prop called navigation. This prop is used to navigate to the AboutScreen component when the button is pressed. The navigation prop is used to navigate between screens in the app.
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function HomeScreenProp({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>

      <Button title="Go to About" 
      onPress={ () => navigation.navigate("About", {name: "Vishwas"},)} />
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