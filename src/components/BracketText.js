import React, { useState } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'

const BracketText = (props) => {
    const [value, onChangeText] = useState('');

    if (props.pos == 1) {
        return (
            <Text
                style={[styles.bracketInput, styles.pos1]}
                onChangeText={text => onChangeText(text)}
                maxLength={4}
                defaultValue=""
            >
                {props.text}
            </Text>
        )
    } else
        if (props.pos == 2) {
            return (
                <Text
                    style={[styles.bracketInput, styles.pos2]}
                    onChangeText={text => onChangeText(text)}
                    maxLength={4}
                    defaultValue=""
                >
                    {props.text}
                </Text>
            )
        } else
            if (props.pos == 3) {
                return (
                    <Text
                        style={[styles.bracketInput, styles.pos3]}
                        onChangeText={text => onChangeText(text)}
                        maxLength={4}
                        defaultValue=""
                    >
                    {props.text}
                    </Text>
                )
            } else
                if (props.pos == 4) {
                    return (
                        <Text
                            style={[styles.bracketInput, styles.pos4]}
                            onChangeText={text => onChangeText(text)}
                            maxLength={4}
                            defaultValue=""
                        >
                            {props.text}
                        </Text>
                    )
                } else
                    if (props.pos == 5) {
                        return (
                            <Text
                                style={[styles.bracketInput, styles.pos5]}
                                onChangeText={text => onChangeText(text)}
                                maxLength={4}
                                defaultValue=""
                            >
                                {props.text}
                            </Text>
                        )
                    } else
                        if (props.pos == 6) {
                            return (
                                <Text
                                    style={[styles.bracketInput, styles.pos6]}
                                    onChangeText={text => onChangeText(text)}
                                    maxLength={4}
                                    defaultValue=""
                                >
                                    {props.text}
                                </Text>
                            )
                        } else
                            if (props.pos == 7) {
                                return (
                                    <Text
                                        style={[styles.bracketInput, styles.pos7]}
                                        onChangeText={text => onChangeText(text)}
                                        maxLength={4}
                                        defaultValue=""
                                    >
                                        {props.text}
                                    </Text>
                                )
                            }


}

export default BracketText;

const styles = StyleSheet.create({
    bracketInput: {
        backgroundColor: 'transparent',
        color: '#FFC629',
        width: 60,
        height: 15,
        paddingHorizontal: 5,
        position: 'absolute'
    },
    pos1: {
        marginTop: 55,
        left: 18,
    },
    pos2: {
        marginTop: 85,
        left: 18,
    },
    pos3: {
        marginTop: 158,
        left: 18,
    },
    pos4: {
        marginTop: 187,
        left: 18,
    },
    pos5: {
        marginTop: 71,
        left: 138,
    },
    pos6: {
        marginTop: 173,
        left: 138,
    },
    pos7: {
        marginTop: 124,
        left: 240,
    },
})