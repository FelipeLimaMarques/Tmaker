import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import AppButton from '../../components/AppButton'

export default function Home ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle} 
                source={require('../../../assets/bg_logo.png')}
            />
            <View style={styles.buttonView}>
                <AppButton 
                    text='Criar Torneio'
                    onPress={() => navigation.navigate('CriarTorneio')}
                />
                <AppButton 
                    text='Lista de Torneios'
                    onPress={() => navigation.navigate('ListarTorneios')}
                />
            </View>
        </View>
    )
}