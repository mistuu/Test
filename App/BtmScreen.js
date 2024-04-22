import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavoritSc from './BottomScreen/FavoritSc';
import Home from './BottomScreen/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from './common/AppColor';

const Tab = createMaterialBottomTabNavigator();

function BottomScreen() {
  return (
     <Tab.Navigator
     initialRouteName="Home"
     activeColor="#e91e63"
     barStyle={{ backgroundColor:AppColors.colorPrimary }}
   >
     <Tab.Screen
       name="Home"
       component={Home}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="home" color={color} size={26} />
         ),
       }}
     />
     <Tab.Screen
       name="Favorite"
       component={FavoritSc}
       options={{
         tabBarLabel: 'Favorite',
         tabBarIcon: ({ color }) => (
           <MaterialCommunityIcons name="star" color={color} size={26} />
         ),
       }}
     />
   </Tab.Navigator>
  );
}
export default BottomScreen