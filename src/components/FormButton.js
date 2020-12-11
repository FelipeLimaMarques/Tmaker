import React from 'react'
import { Text, StyleSheet, TouchableHighlight} from 'react-native'

const FormButton = (props) => {
    return(
        <TouchableHighlight style={styles.buttonBox} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableHighlight>
    )
}

export default FormButton;

const styles = StyleSheet.create({
    buttonBox:{
        width: 111,
        height: 46,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        borderColor: '#FFC629',
        backgroundColor: '#FFC629',
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText:{
        color: '#303030',
        fontSize: 24,
    }
})