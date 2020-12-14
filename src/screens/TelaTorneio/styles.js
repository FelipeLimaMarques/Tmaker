import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageStyle: {
        width: 286,
        height: 150,
        marginTop: 95,
        position: 'absolute'

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
      backgroundColor: 'transparent',
      width: '100%',
    },
    scrollViewItems: {
      alignItems: 'center'
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
});

export default styles;