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
    imageCardStyle: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'black',
    },
    cardHeader: {
        width: 270,
        height: 25,
        backgroundColor: '#252525',
        borderTopRightRadius: 10,
    },
    cardBody: {
      width: 270,
      height: 25,
      backgroundColor: '#404040',
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomRightRadius: 10,
    },
    scrollView: {
      backgroundColor: 'transparent',
      width: '100%',
    },
    scrollViewItems: {
      alignItems: 'center'
    },
    listWrapper: {
      height: '90%',
      width: '100%',
      alignItems: 'center',
      marginTop: 70,
      backgroundColor: 'transparent',
    },
    cardView: {
      backgroundColor: 'transparent',
      width: 320,
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center'
    },
    cardHeaderText: {
        alignSelf: 'center',
        color: '#FFC629',
        fontSize: 16,
        fontWeight: 'bold'
    },
    cardBodyText: {
        color: '#FFC629',
        fontSize: 12,
        fontWeight: 'bold'
    }
});

export default styles;