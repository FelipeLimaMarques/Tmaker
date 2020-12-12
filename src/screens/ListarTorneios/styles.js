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
        height: 200,
        width: '100%',
        marginTop: 360,
        alignItems: 'center',
    },
    imageStyle: {
        width: 286,
        height: 150,
        marginTop: 95,
        position: 'absolute'

    },
    scrollView: {
        backgroundColor: 'transparent',
        width: '100%',
        marginTop: 200
      },
      scrollViewItems: {
        alignItems: 'center'
      },
    cardView: {
      backgroundColor: '#FFF',
      width: '100%',
      marginTop: 200,
      alignItems: 'center'
    },
    cardText: {
        color: '#FFC629'
    }
});

export default styles;