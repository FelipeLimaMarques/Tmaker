import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    ScrollView,
    Text,
    KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import BracketInput from '../../components/BracketInput'
import TeamInput from '../../components/TeamInput'

export default function TelaTorneio({ navigation, route }) {
    const [tData, setTData] = useState([]);

    useEffect(() => {
        let mounted = true;
        const { tArray } = route.params
        setTData(tArray);
        return () => mounted = false;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <KeyboardAvoidingView behavior={'height'}>
                <View style={styles.contentWrapper}>
                    <View style={styles.cardLine} />
                    <Text style={styles.headerText}>{tData.tName}</Text>
                    <View style={styles.cardLine} />
                    <Image
                        style={styles.imageStyleBracket}
                        source={require('../../../assets/Bracket.png')}
                    />

                    <BracketInput
                        pos={1}
                    />
                    <BracketInput
                        pos={2}
                    />
                    <BracketInput
                        pos={3}
                    />
                    <BracketInput
                        pos={4}
                    />
                    <BracketInput
                        pos={5}
                    />
                    <BracketInput
                        pos={6}
                    />
                    <BracketInput
                        pos={7}
                    />

                    <View style={styles.cardLine} />
                    <Text style={styles.headerText}>Equipes</Text>
                    <ScrollView styles={styles.scrollView}>
                        {
                            <TeamInput />
                        }
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}