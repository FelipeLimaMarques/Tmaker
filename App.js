import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


// Screens
import Home from './src/screens/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
              height: 73,
              backgroundColor: '#303030',
              shadowOpacity: 0,
              elevation: 0,
            },
            headerTintColor: '#FFC629',
            headerTitleStyle: {
              fontSize: 34,
              marginTop: 20,
              position: 'absolute',
              marginLeft: -34,
            },
            headerLeft: () => (
              <Image 
                style={styles.headerLogo}
                source={require('./assets/header_logo.png')}
              />
            ),
        }}
      >
        <Stack.Screen name="Home"
          component={Home}
          options={{
            title: 'Tournament Maker',

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 76,
    height: 40,
    marginBottom: 20,
    marginLeft: 140,
    marginTop: 40,

  }
});
