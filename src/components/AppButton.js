import React from 'react'
import { Text, StyleSheet, TouchableHighlight} from 'react-native'

const Button = (props) => {
    return(
        <TouchableHighlight style={styles.buttonBox} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableHighlight>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonBox:{
        width: 286,
        height: 46,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFC629',
        backgroundColor: '#303030',
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText:{
        color: '#FFC629',
        fontSize: 33,
    }
})