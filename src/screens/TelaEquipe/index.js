import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    ScrollView,
    TextInput,
    Text,
} from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormButton from '../../components/FormButton'
import styles from './styles';

const readData = async (setTeamsPlayers, key) => {
    try {
        let res = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })

        if (res !== null) {
            setTeamsPlayers(res);
        }
    } catch (e) {
        alert(e.message)
    }
}

const saveNew = async (player, key) => {
    try {
        let existingPlayers = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })
        if (existingPlayers == null) {
            existingPlayers = [];
        }
        existingPlayers.push(player);
        await AsyncStorage.setItem(key, JSON.stringify(existingPlayers));
    } catch (e) {
        alert(e.message);
    }
}

export default function TelaEquipe({ navigation, route }) {
    const [teamKey, setTeamKey] = useState('@placeholder');
    const [teamName, setTeamName] = useState('')
    const [teamsPlayers, setTeamsPlayers] = useState([]);

    useEffect(() => {
        let mounted = true;

        const { teamRes } = route.params

        const auxKey = '@' + teamRes.replace(/\s/g, '_') + '_players'
        setTeamName(teamRes)
        setTeamKey(auxKey)

        readData(setTeamsPlayers, auxKey);

        return () => mounted = false;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <Formik
                initialValues={{
                    players: []
                }}
                onSubmit={values => {
                    saveNew(values.players, teamKey)
                    alert('Alterações salvas')
                    navigation.goBack()
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => (

                    <View style={styles.contentWrapper}>
                        <View style={styles.cardLine} />
                        <Text style={styles.headerText}>{teamName}</Text>
                        <View style={styles.cardLine} />
                            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewItems}>
                                {
                                    teamsPlayers.map((team, index) => {
                                        return <View
                                            key={index}
                                            style={styles.teamCard}
                                        >
                                            <Text style={styles.teamCardText}>{team}</Text>
                                        </View>
                                    })


                                }
                                <View style={styles.teamsWrapper}>
                                    <View style={{ width: '100%' }}>
                                        <TextInput
                                            style={styles.teamInput}
                                            onChangeText={handleChange('players')}
                                        />
                                    </View>
                                    <View style={styles.buttonInputView}>
                                        <FormButton
                                            width={'normal'}
                                            text={'Criar'}
                                            fontSize={24}
                                            onPress={handleSubmit}
                                        />
                                        <View style={{ width: 10 }} />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    
                )}</Formik>
        </View>
    )
}