import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    ScrollView,
    TextInput,
    TouchableHighlight,
    Text,
} from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FormButton from '../../components/FormButton'
import styles from './styles';

const readData = async (setTeams, key) => {
    try {
        let res = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })

        if (res !== null) {
            setTeams(res);
        }
    } catch (e) {
        alert(e.message)
    }
}

const saveNew = async (team, key) => {
    try {
        let existingTeams = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })
        if (existingTeams == null) {
            existingTeams = [];
        }
        existingTeams.push(team);
        await AsyncStorage.setItem(key, JSON.stringify(existingTeams));
    } catch (e) {
        alert(e.message);
    }
}

export default function CriarEquipe({ navigation, route }) {
    const [teamKey, setTeamKey] = useState('@placeholder');
    const [teamName, setTeamName] = useState('');
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        let mounted = true;

        const { tKey, tName } = route.params

        const auxKey = tKey
        const auxName = tName
        console.log(auxKey)
        console.log(auxName)
        setTeamName(auxName)
        setTeamKey(auxKey)

        readData(setTeams, auxKey);

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
                    teams: []
                }}
                onSubmit={values => {
                    saveNew(values.teams, teamKey)
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
                                    teams.map((team, index) => {
                                    return <TouchableHighlight
                                        key={index}
                                        style={styles.teamCard}
                                        onPress={() => {
                                            navigation.navigate('TelaEquipe', { teamRes: team})
                                        }}
                                    >
                                        <Text style={styles.teamCardText}>{team}</Text>
                                    </TouchableHighlight>
                                    })


                                }
                                <View style={styles.teamsWrapper}>
                                    <View style={{ width: '100%' }}>
                                        <TextInput
                                            style={styles.teamInput}
                                            onChangeText={handleChange('teams')}
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