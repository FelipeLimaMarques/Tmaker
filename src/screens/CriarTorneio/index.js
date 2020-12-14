import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    TextInput,
    Image,
    Text,
    ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import FormButton from '../../components/FormButton';

const STORAGE_KEY = '@save_tournament';

const saveNew = async (tournament) => {
    try {
        let existingTournaments = await AsyncStorage.getItem(STORAGE_KEY).
            then(res => {
                res = JSON.parse(res);
                return res;
            })
        if (existingTournaments == null) {
            existingTournaments = [];
        }
        existingTournaments.push(tournament);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existingTournaments));
        alert('Torneio criado');
    } catch (e) {
        alert(e.message);
    }
}

export default function CriarTorneio({ navigation }) {
    const [gameMode, setGameMode] = useState({ gameModeOption: 'fg' });
    const [game, setGame] = useState({ gameOption: 'sfv' });
    const [victory, setVictory] = useState({ victoryOption: 'best3' });
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;


    useEffect(() => {
        let mounted = true;
        return () => mounted = false;
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <Formik
                initialValues={{
                    tArray:
                    {
                        tName: '', tMode: '', tGame: '',
                        tVictory: '', tState: 'Oitavas de Finais',
                        tDate: ''
                    },
                }}
                onSubmit={values => {
                    console.log(
                        `Submitting:
                        Name: ${values.tArray.tName}
                        Mode: ${values.tArray.tMode}
                        Game: ${values.tArray.tGame}
                        Victory: ${values.tArray.tVictory}`
                    )
                    values.tArray.tDate = today;
                    console.log(values.tArray);
                    saveNew(values.tArray);
                    navigation.goBack();
                }}
            >
                {({ values, handleChange, handleSubmit, setFieldValue }) => (
                    <View style={styles.formWrapper}>
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={styles.scrollViewItems}
                        >
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Nome do Torneio:</Text>
                                <TextInput
                                    style={styles.inputBox}
                                    placeholderTextColor={'#FFC629'}
                                    placeholder={'Torneio Entre Amigos'}
                                    onChangeText={handleChange('tArray.tName')}
                                    defaultValue=""
                                />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Escolha o tipo de jogo:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={gameMode.gameModeOption}
                                        onValueChange={(itemValue, _) => {
                                            setGameMode({ gameModeOption: itemValue });
                                            setFieldValue('tArray.tMode', itemValue)
                                        }}
                                    >
                                        <Picker.Item label='Fighting Game (FG)' value='fg' />
                                        <Picker.Item label='Multiplayer Online Battle Arenas (MOBA)' value='moba' />
                                        <Picker.Item label='First Person Shooter (FPS)' value='fps' />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Escolha o jogo:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={game.gameOption}
                                        onValueChange={(itemValue, _) => {
                                            setGame({ gameOption: itemValue });
                                            setFieldValue('tArray.tGame', itemValue)
                                        }}
                                    >
                                        <Picker.Item label='Street Fighter V' value='sfv' />
                                        <Picker.Item label='Mortal Kombat 11' value='mk11' />
                                        <Picker.Item label='Tekken 7' value='tk7' />
                                        <Picker.Item label='Counter Strike: Global Offensive' value='csgo' />
                                        <Picker.Item label='Valorant' value='val' />
                                        <Picker.Item label='Rainbow Six: Siege' value='rb6' />
                                        <Picker.Item label='League of Legends' value='lol' />
                                        <Picker.Item label='Dota 2' value='dota' />
                                    </Picker>
                                </View>
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Condição de vitória:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={victory.victoryOption}
                                        onValueChange={(itemValue, _) => {
                                            setVictory({ victoryOption: itemValue });
                                            setFieldValue('tArray.tVictory', itemValue)
                                        }}
                                    >
                                        <Picker.Item label='Melhor de 3' value='best3' />
                                        <Picker.Item label='Melhor de 5' value='best5' />
                                        <Picker.Item label='Melhor de 7' value='best7' />
                                    </Picker>
                                </View>
                            </View>
                        </ScrollView>
                        <View style={styles.buttonWrapper}>
                            <FormButton
                                text="Criar"
                                fontSize={24}
                                width={'normal'}
                                onPress={handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}