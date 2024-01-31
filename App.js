
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import BoxScreen from './src/screens/BoxScreen';
import TrySomething from './src/screens/TrySomething';
import ChangeBoxColor from './src/screens/ChangeBoxColor';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignScreen from './src/screens/DesignScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen
          name="Courses Information"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Random Box App" component={BoxScreen} />
        <Stack.Screen name="Change Color Box" component={ChangeBoxColor} />
        <Stack.Screen name="Try Something" component={TrySomething} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Design" component={DesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
