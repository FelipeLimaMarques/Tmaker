import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text} from 'react-native';

import styles from './styles';

export default function ListarTorneios ({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle} 
                source={require('../../../assets/bg_logo.png')}
            />
            <ScrollView style={styles.scrollView} contentContainerStyle = {styles.scrollViewItems}>    
                <View style ={styles.cardView}>
                    
                </View>
            </ScrollView>
        </View>
    )
}