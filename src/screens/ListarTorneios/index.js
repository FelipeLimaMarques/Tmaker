import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image } from 'react-native';

import styles from './styles';

export default function ListarTorneios ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle} 
                source={require('../../../assets/bg_logo.png')}
            />
            
        </View>
    )
}