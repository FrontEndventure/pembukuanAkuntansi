import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Jurnal, Splash} from '../pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Jurnal"
        component={Jurnal}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
