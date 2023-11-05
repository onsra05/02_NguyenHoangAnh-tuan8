import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from './view/Home2';
import Home1 from './view/Home1';
import Home3 from './view/Home3';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home1" screenOptions={{headerShown : false}}  >
      <Stack.Screen name="Home1" component={Home1} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Home3" component={Home3} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

