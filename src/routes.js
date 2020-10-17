import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Usuários',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              flex: 1,
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: 'Diego',
            headerStyle: {
              backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              flex: 1,
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
