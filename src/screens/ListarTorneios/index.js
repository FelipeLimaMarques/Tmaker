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
                                            <Image style={styles.imageCardStyle} source={require('../../../assets/bg_logo.png')} />
                                            <View>
                                                <View style={styles.cardHeader}>
                                                    <Text style={styles.cardHeaderText}>{item.tName}</Text>
                                                </View>
                                                <View style={styles.cardBody}>
                                                    <Text style={styles.cardBodyText}>{item.tState}</Text>
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