import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonView: {
      height: 70,
      flexDirection: 'row-reverse',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 380,
      right: 0,
    },
    imageStyle: {
        width: 286,
        height: 150,
        marginTop: 95,
        position: 'absolute'

    },
    labelText: {
      color: '#FFC629',
    },
    formStyle: {
      width: 200,
      padding: 10,
      height: 230,
      backgroundColor: '#303030',
      position: 'absolute',
      top: 55,
      zIndex: 1,
      
    },
    inputBox: {
      width: '100%',
      height: 46,
      color: '#FFC629',
      fontSize: 16,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#FFC629',
      padding: 8,
      backgroundColor: 'transparent',
      alignItems: 'center',
      marginVertical: 5
    },
    imageStyle: {
      width: 286,
      height: 150,
      marginTop: 95,
      position: 'absolute',
      marginBottom: 95,
  },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFC629'
    },
    scrollView: {
      width: '100%',
      backgroundColor: 'white',
      height: 60,
    },
    scrollViewItems: {
      alignItems: 'center',
    },
    contentWrapper: {
      height: 483,
      width: 320,
      alignItems: 'center',
      marginTop: 70,
      backgroundColor: 'transparent',
    },
    cardLine:{
      height: 0,
      marginVertical: 5,
      borderBottomWidth: 1,
      borderColor:'#FFC629',
      width: 320,
      backgroundColor: '#FFC629'
    },
    partida1: {
      backgroundColor: 'white',
      width: 90,
      height: 50,
      position: 'absolute',
      top: 52,
      left: 20,
    },
    partida1: {
      backgroundColor: 'white',
      opacity: 0.1,
      width: 90,
      height: 50,
      position: 'absolute',
      top: 52,
      left: 18,
    },
    partida2: {
      backgroundColor: 'white',
      opacity: 0.1,
      width: 90,
      height: 50,
      position: 'absolute',
      top: 154,
      left: 18,
    },
    partida3: {
      backgroundColor: 'white',
      opacity: 0.1,
      width: 80,
      height: 120,
      position: 'absolute',
      top: 68,
      left: 138,
    },
    vencedor: {
      backgroundColor: 'white',
      opacity: 0.1,
      width: 62,
      height: 50,
      position: 'absolute',
      top: 105,
      left: 240,
    },
});

export default styles;