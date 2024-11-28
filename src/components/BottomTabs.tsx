import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/HomeScreen';
import HomeNavigator from './HomeNavigaton';
import Services from '../screens/servicesScreen';
import Trainings  from '../screens/TrainingsScreen';


const homeIcon=require("../../public/assets/HomeIcon.png");
const serviceIcon= require("../../public/assets/services.png");
const trainingIcon= require("../../public/assets/train.png");

export function BottomTabs(){
    const BottomTab= createBottomTabNavigator();
    return (
        <BottomTab.Navigator screenOptions={{   tabBarStyle: {
          backgroundColor: 'green', 
        },}}>
            <BottomTab.Screen name="Home" component={HomeNavigator} options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',

          tabBarIcon: ({ size }) => (
            <Image source={homeIcon} style={{ width: size, height: size }} />
          ),
        }} /> 
         <BottomTab.Screen name="Services" component={Services} options={{
          headerShown: true,
          headerStyle: { 
            backgroundColor: 'green',
          },
          headerTintColor: 'white',
         tabBarActiveTintColor: 'white',
          tabBarIcon: ({ size }) => (
            <Image source={serviceIcon} style={{ width: size, height: size }} />
          ),
        }} /> 
          <BottomTab.Screen name="Trainings" component={Trainings} options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({ size }) => (
            <Image source={trainingIcon} style={{ width: size, height: size }} />
          ),
        }} /> 
         
        </BottomTab.Navigator>
    )
}