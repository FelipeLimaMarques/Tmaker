import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Image, Text, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
// https://react-hook-form.com/get-started
import AsyncStorage from '@react-native-async-storage/async-storage';
// https://react-native-async-storage.github.io/async-storage/docs/usage

import styles from './styles';

import FormButton from '../../components/FormButton'

const STORAGE_KEY = '@save_tournament'

const saveData = async (tournament) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tournament))
        alert('Data successfully saved')
    } catch (e) {
        alert('Failed to save the data to the storage')
    }
}

const readData = async () => {
    try {
        const tournamentData = await AsyncStorage.getItem(STORAGE_KEY).then( item => {
            const data = JSON.parse(item);
            return data;
        })

        if (tournamentData !== null) {
            console.log(tournamentData);
            // setState(tournamentData);
        }
        
    } catch (e) {
        alert('Failed to fetch the data from storage')
    }
}

const saveNew = async (tournament) => {
    try {
        const existingTournaments = await AsyncStorage.getItem(STORAGE_KEY);

        const newTournament = JSON.parse(existingTournaments);
        console.log(newTournament);
        if( !newTournament ){
            newTournament = [];
        }

        newTournament.push( tournament );

        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTournament))
    } catch (e) {
        alert('Failed to save the data to the storage')
    }
}

const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
        alert('Storage successfully cleared!')
    } catch (e) {
        alert('Failed to clear the async storage.')
    }
}

export default function CriarTorneio({ navigation }) {
    const { control, handleSubmit, errors } = useForm();
    const [gameMode, setGameMode] = useState({ gameModeOption: 'fg' });
    const [game, setGame] = useState({ gameOption: 'sfv' });
    const [bracket, setBracket] = useState({ bracketOption: 'single8' });
    const [victory, setVictory] = useState({ victoryOption: 'best3' });
    const [tournament, setTournament] = useState([]);
    
    const onSubmit = data => {
        setTournament(data);
        saveNew(tournament);
    }

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <View style={styles.formWrapper}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewItems}
                >
                    <Controller
                        control={control}
                        render={({ onChange, onBlur, value }) => (
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Nome do Torneio:</Text>
                                <TextInput
                                    style={styles.inputBox}
                                    placeholderTextColor={'#FFC629'}
                                    placeholder={'Torneio Entre Amigos'}
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="tournamentName"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    {errors.firstName && <Text>This is required.</Text>}

                    <Controller
                        control={control}
                        render={({ onBlur }) => (
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Escolha o tipo de jogo:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={gameMode.gameModeOption}
                                        onBlur={onBlur}
                                        onValueChange={(itemValue, _) =>
                                            setGameMode({ gameModeOption: itemValue })
                                        }
                                    >
                                        <Picker.Item label='Fighting Game (FG)' value='fg' />
                                        <Picker.Item label='Multiplayer Online Battle Arenas (MOBA)' value='moba' />
                                        <Picker.Item label='First Person Shooter (FPS)' value='fps' />
                                    </Picker>
                                </View>

                            </View>
                        )}
                        name="tournamentGameMode"
                        defaultValue="fg"
                    />

                    <Controller
                        control={control}
                        render={({ onBlur }) => (
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Escolha o jogo:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={game.gameOption}
                                        onBlur={onBlur}
                                        onValueChange={(itemValue, _) =>
                                            setGame({ gameOption: itemValue })
                                        }
                                    >
                                        <Picker.Item label='Street Fighter V' value='sfv' />
                                        <Picker.Item label='Mortal Kombat 11' value='mk11' />
                                        <Picker.Item label='Tekken 7' value='tk7' />
                                    </Picker>
                                </View>

                            </View>
                        )}
                        name="tournamentGame"
                        defaultValue="sfv"
                    />

                    <Controller
                        control={control}
                        render={({ onBlur }) => (
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Escolha o chaveamento:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={bracket.bracketOption}
                                        onBlur={onBlur}
                                        onValueChange={(itemValue, _) =>
                                            setBracket({ bracketOption: itemValue })
                                        }
                                    >
                                        <Picker.Item label='Eliminação Única / 8 jogadores' value='single8' />
                                        <Picker.Item label='Eliminação Dupla / 16 jogadores' value='double16' />
                                        <Picker.Item label='Round Robin / 16 jogadores' value='round16' />
                                    </Picker>
                                </View>

                            </View>
                        )}
                        name="tournamentBracket"
                        defaultValue="single8"
                    />

                    <Controller
                        control={control}
                        render={({ onBlur }) => (
                            <View style={styles.inputWrapper}>
                                <Text style={styles.labelText}>Condição de vitória:</Text>
                                <View style={styles.pickerWrapper}>
                                    <Picker
                                        style={styles.picker}
                                        mode={'dropdown'}
                                        selectedValue={victory.victoryOption}
                                        onBlur={onBlur}
                                        onValueChange={(itemValue, _) =>
                                            setVictory({ victoryOption: itemValue })
                                        }
                                    >
                                        <Picker.Item label='Melhor de 3' value='best3' />
                                        <Picker.Item label='Melhor de 5' value='best5' />
                                        <Picker.Item label='Melhor de 7' value='best7' />
                                    </Picker>
                                </View>

                            </View>
                        )}
                        name="tournamentBracket"
                        defaultValue="best3"
                    />
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <FormButton
                        text="Criar"
                        onPress={handleSubmit(onSubmit)}
                    // onPress={() => navigation.goBack()}
                    />
                </View>
            </View>
        </View>
    )
}