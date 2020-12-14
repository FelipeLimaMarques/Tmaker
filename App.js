import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import CriarTorneio from './src/screens/CriarTorneio';
import ListarTorneios from './src/screens/ListarTorneios';
import TelaTorneio from './src/screens/TelaTorneio';

function HeaderViews(props) {
  return (
    <View style={styles.headerWrapper} >
      <Image
        style={styles.headerLogo}
        source={require('./assets/header_logo.png')}
      />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>

  )
}

const Stack = createStackNavigator();

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
          headerLeft: null,
        }}
      >
        <Stack.Screen name="Home"
          component={Home}
          options={{
            headerTitle: props => <HeaderViews title={'Tournament Maker'} />
          }}
        />
        <Stack.Screen name="CriarTorneio"
          component={CriarTorneio}
          options={{
            headerTitle: props => <HeaderViews title={'Criar Torneio'} />
          }}
        />
        <Stack.Screen name="ListarTorneios"
          component={ListarTorneios}
          options={{
            headerTitle: props => <HeaderViews title={'Torneios'} />
          }}
        />
        <Stack.Screen name="TelaTorneio"
          component={TelaTorneio}
          options={{
            headerTitle: props => <HeaderViews title={'Torneio'} />
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
    alignSelf: 'center',

  },
  headerTitle: {
    fontSize: 34,
    marginTop: 20,
    alignSelf: 'center',
    color: '#FFC629',
  },
  headerWrapper: {
    backgroundColor: '#303030',
    height: 73,
    marginTop: 70,
    justifyContent: 'space-around',
  },
});
