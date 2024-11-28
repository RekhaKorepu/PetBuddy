import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/HomeScreen";
import { IndividualPet } from "../screens/IndividualPetScreen";
import { PetGallery } from "../screens/petGalleryScreen";
import { Profile } from "../screens/ProfileScreen";
import { useGlobalState } from "../StateContext/UserContext";
import Remainders from "../screens/RemaindersScreen";

const Stack = createNativeStackNavigator();
function HomeNavigator(): React.JSX.Element {
  const {username}= useGlobalState();
 return (
    
      <Stack.Navigator >
        <Stack.Screen
          name="home"
          component={Home}
          options={{title: 'Home', headerShown: false}}
        />
         <Stack.Screen
          name="IndividualPet"
          component={IndividualPet}
          options={{title: 'Pet', headerShown: false}}
        />
          <Stack.Screen
          name="PetGallery"
          component={PetGallery}
          options={{title: 'Gallery', headerShown: false}}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: ` Hi, ${username}`, headerShown: true,
            headerStyle: {
              backgroundColor: 'green', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        
            headerBackTitle: 'Home'
           
          }}
          />

       <Stack.Screen
          name="Remainders"
          component={Remainders}
          options={{title: 'Remainders', headerShown: false}}
        />
      </Stack.Navigator>

    
  );
}
export default HomeNavigator;