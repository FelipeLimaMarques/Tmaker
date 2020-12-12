import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, ScrollView, Text, TouchableHighlight } from 'react-native';

import styles from './styles';

function ListComponent (props) {
        return props.arr.map((item, index) => {
            return(
                <TouchableHighlight onPress={() => navigation.goBack()} key={index}>
                        <View style ={styles.cardView}>
                            <Image style={styles.imageCardStyle} source={require('../../../assets/bg_logo.png')} />
                            <View>
                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardHeaderText}>{item}</Text>
                                </View>
                                <View style={styles.cardBody}>
                                    <Text style={styles.cardBodyText}>Quartas de Final</Text>
                                    <Text style={styles.cardBodyText}>20/10/2020</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
            )
        })
}

export default function ListarTorneios ({ navigation }) {
    const arr = ['Calango Championship', 'Torneio do Vitor', 'Sua mãe']

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle} 
                source={require('../../../assets/bg_logo.png')}
            />
            <View style={styles.listWrapper}>
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewItems}>    
                    <ListComponent arr={arr}/>
                </ScrollView>
            </View>
        </View>
    )
}