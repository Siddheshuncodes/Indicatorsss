import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'; // Its recommended to use useLayoutEffect instead of useEffect when you want to update the UI immediately after the screen is rendered
import React from 'react'

export default function AboutScreen( {route, navigation} ) {
  const { name } = route.params;
    // const navigation = useNavigation() // This is the hook method of navigation. Use either this or the navigation prop method where we've passes 'navigation' as a parameter to AboutScreen() function
  
  
    useLayoutEffect(() => { // useLayoutEffect is recommended to use instead of useEffect, to update the UI immediately after the screen is rendered
      navigation.setOptions({
        title: name,
      })
    }, [navigation, name]);
  
    return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button 
        title="Update the name"   
        onPress={ () => navigation.setParams({
          name: "Divyesh",
        })
        } 
      />
      
      {/* <Button
        title= "Go back with data"
        onPress={() => navigation.navigate("Home", {result: "Data from about"})}
      /> */}
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