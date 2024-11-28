import { SafeAreaView } from "react-native";
import { Welcome } from "./src/screens/WelcomeScreen";
import Register from "./src/screens/RegisterScreen";
import Login from "./src/screens/LogInScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { BottomTabs } from "./src/components/BottomTabs";
import { StateProvider } from "./src/StateContext/UserContext";

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
 return (
//   <SafeAreaView>
    <StateProvider>
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{title: 'Welcome', headerShown: false}}
        />
       <Stack.Screen name="Login" component={Login} options={{title: 'Login', headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{title: 'Register', headerShown: false}}/>
        <Stack.Screen name="tabs" component={BottomTabs} options={{title: 'tabs', headerShown: false}}/>
     
      </Stack.Navigator>
    </NavigationContainer>
    </StateProvider>
//  </SafeAreaView>
    
  );
}

export default App;
