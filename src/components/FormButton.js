import React from 'react'
import {
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

const FormButton = (props) => {
    if (props.width == 'normal') {
        return (
            <TouchableHighlight
                style={styles.buttonNormal}
                onPress={props.onPress}
            >
                <Text
                    style={
                        styles.buttonText,
                        [{ fontSize: props.fontSize }]
                    }
                >
                    {props.text}
                </Text>
            </TouchableHighlight>
        )
    }
    else if (props.width == 'wide') {
        return (
            <TouchableHighlight
                style={styles.buttonWide}
                onPress={props.onPress}
            >
                <Text
                    style={
                        styles.buttonText,
                        [{ fontSize: props.fontSize }]
                    }
                >
                    {props.text}
                </Text>
            </TouchableHighlight>
        )
    }

}

export default FormButton;

const styles = StyleSheet.create({
    buttonNormal: {
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
    buttonWide: {
        width: 160,
        height: 46,
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
        borderColor: '#FFC629',
        backgroundColor: '#FFC629',
        alignItems: 'center',
        marginVertical: 15
    },
    buttonText: {
        color: '#303030',
    }
})