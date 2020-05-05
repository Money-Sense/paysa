import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

console.disableYellowBox = true;

import {Header} from './src/widgets/Header';
import {Entry} from './src/components/Entry';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator headerMode="none" initialRouteName={Entry}>
        <Stack.Screen name="Home" component={Entry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
