import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    ScrollView,
    Text,
    TouchableHighlight
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import FormButton from '../../components/FormButton'

const STORAGE_KEY = '@save_tournament';
const logoSfv = '../../../assets/sfv_logo.png';
const logoCsgo = '../../../assets/csgo.jpg';
const logoRb6 = '../../../assets/rb6.jpg';
const logoSkg = '../../../assets/skg.png';
const logoTk7 = '../../../assets/tekken7.png';
const logoDota2 = '../../../assets/dota2.jpg';
const logoMk11 = '../../../assets/mk11.jpg';
const logoLol = '../../../assets/lol.jpg';
const logoVal = '../../../assets/val.jpg';

const GetLogo = (tGame) => {
    if (tGame == 'sfv') return <Image style={styles.imageCardStyle}
        source={require(logoSfv)} />
    else
    if (tGame == 'mk11') return <Image style={styles.imageCardStyle}
        source={require(logoMk11)} />
    else
    if (tGame == 'tk7') return <Image style={styles.imageCardStyle}
        source={require(logoTk7)} />
    else
    if (tGame == 'skg') return <Image style={styles.imageCardStyle}
        source={require(logoSkg)} />
    else
    if (tGame == 'csgo') return <Image style={styles.imageCardStyle}
        source={require(logoCsgo)} />
    else
    if (tGame == 'val') return <Image style={styles.imageCardStyle}
        source={require(logoVal)} />
    else
    if (tGame == 'rb6') return <Image style={styles.imageCardStyle}
        source={require(logoRb6)} />
    else
    if (tGame == 'lol') return <Image style={styles.imageCardStyle}
        source={require(logoLol)} />
    else
    if (tGame == 'dota') return <Image style={styles.imageCardStyle}
        source={require(logoDota2)} />
}

const clearStorage = async () => {
    try {
        await AsyncStorage.clear()
        alert('Torneios deletados')
    } catch (e) {
        alert(e.message)
    }
}

const readData = async (setTData) => {
    try {
        let res = await AsyncStorage.getItem(STORAGE_KEY).
            then(res => {
                res = JSON.parse(res);
                return res;
            })

        if (res !== null) {
            setTData(res);
        }
    } catch (e) {
        alert(e.message)
    }
}

export default function ListarTorneios({ navigation }) {
    const [tData, setTData] = useState([]);

    useEffect(() => {
        let mounted = true;
        readData(setTData);
        return () => mounted = false;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <View style={styles.listWrapper}>
                <View style={styles.cardLine} />
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewItems}>
                    {
                        tData.map((item, index) => {
                            return (
                                <TouchableHighlight onPress={() => navigation.navigate('TelaTorneio', { tArray: item })}
                                    key={index}>
                                    <View>
                                        <View style={styles.cardView}>
                                            {
                                                GetLogo(item.tGame)
                                            }
                                            <View>
                                                <View style={styles.cardHeader}>
                                                    <Text style={styles.cardHeaderText}>{item.tName}</Text>
                                                </View>
                                                <View style={styles.cardBody}>
                                                    <Text style={styles.cardBodyText}>{item.tVictory}</Text>
                                                    <Text style={styles.cardBodyText}>{item.tDate}</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.cardLine} />
                                    </View>
                                </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
                <FormButton
                    text={'Apagar Tudo'}
                    fontSize={24}
                    width={'wide'}
                    onPress={() => {
                        clearStorage();
                        setTData([]);
                    }}
                />
            </View>
        </View>
    )
}