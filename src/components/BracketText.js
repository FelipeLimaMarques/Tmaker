import React, { useState } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'

const BracketText = (props) => {
    const [value, onChangeText] = useState('');

    switch(props.pos) {
        // Single-Elimination
        case 's1': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s1]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}     {props.points}
                </Text>
            )

        }
        case 's2': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s2]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )
        }
        case 's3': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s3]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                {props.text}
                </Text>
            )

        }
        case 's4': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s4]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 's5': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s5]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 's6': {
            return (
                <Text
                    style={[styles.bracketInput, styles.s6]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'sW': {
            return (
                <Text
                    style={[styles.bracketInput, styles.sW]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        // Double-Elimination
        case 'd1': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d1]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd2': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d2]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd3': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d3]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd4': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d4]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd5': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d5]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd6': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d6]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd7': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d7]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd8': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d8]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd9': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d9]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'd10': {
            return (
                <Text
                    style={[styles.bracketInput, styles.d10]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }
        case 'dW': {
            return (
                <Text
                    style={[styles.bracketInput, styles.dW]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )

        }

        default: return (<Text>Something went Wrong</Text>)
    }


}

export default BracketText;

const styles = StyleSheet.create({
    bracketInput: {
        backgroundColor: 'transparent',
        color: '#FFC629',
        width: 60,
        height: 15,
        paddingLeft: 5,
        position: 'absolute'
    },

    // Single-Elimination
    s1: {
        marginTop: 52,
        left: 18,
    },
    s2: {
        marginTop: 83,
        left: 18,
    },
    s3: {
        marginTop: 155,
        left: 18,
    },
    s4: {
        marginTop: 185,
        left: 18,
    },
    s5: {
        marginTop: 67,
        left: 138,
    },
    s6: {
        marginTop: 170,
        left: 138,
    },
    sW: {
        marginTop: 120,
        left: 240,
    },

    // Double-Elimination
    d1: {
        marginTop: 55,
        left: 18,
    },
    d2: {
        marginTop: 85,
        left: 18,
    },
    d3: {
        marginTop: 158,
        left: 18,
    },
    d4: {
        marginTop: 187,
        left: 18,
    },
    d5: {
        marginTop: 71,
        left: 138,
    },
    d6: {
        marginTop: 173,
        left: 138,
    },
    d8: {
        marginTop: 173,
        left: 138,
    },
    d9: {
        marginTop: 173,
        left: 138,
    },
    d10: {
        marginTop: 173,
        left: 138,
    },
    dW: {
        marginTop: 124,
        left: 240,
    },
})