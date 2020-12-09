import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import AppButton from '../../components/AppButton'

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle} 
                source={require('../../../assets/bg_logo.png')} />
            <View style={styles.buttonView}>
                <AppButton 
                    text='Criar Torneio'
                    onPress={()=>''}
                />
                <AppButton 
                    text='Lista de Torneios'
                    onPress={()=>''}
                />
            </View>
        </View>
    )
}

export default Home;