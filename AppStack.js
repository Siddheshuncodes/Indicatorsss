// Navigation is implemented via two methods : 1. Navigation using the Hook method 2. Navigation using the Prop method
// Use the Hook method when you want to navigate between screens in the app. Use the Prop method when you want to pass the navigation prop to the component.
// Its recommended to use navigation props for all screen components and use navigation hooks only when necessary
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenHook from './screens/HomeScreenHook';
import AboutScreen from './screens/AboutScreen';
import HomeScreenProp from './screens/HomeScreenProp';
import { Text, Pressable } from 'react-native';

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeWithProp' 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{color: "#fff", fontSize: 16}}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: "#e8e4f3",
        }
      }}>
        <Stack.Screen name="HomeWithProp" component={HomeScreenProp} options={{
          title: "Welcome Home",
          

        }}/>
        <Stack.Screen name="HomeWithHook" component={HomeScreenHook}/>
        <Stack.Screen name="About" component={AboutScreen} initialParams={{name: "Guest",}}
          // options={( { route} ) => ({      // This is the way to set the title of the screen dynamically via the route prop
          //   title: route.params.name,      // The prop 'name: "Vishwas" is passed to the HomeScreenProps component. The name prop is accessed via the route.params object. The title of the screen is set to the value of the name prop.
          // })}                                 
        />
      </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}

