import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    ScrollView,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableHighlight,
} from 'react-native';
import styles from './styles';
import BracketText from '../../components/BracketText'
import TeamInput from '../../components/TeamInput'
import FormButton from '../../components/FormButton'

const FormBracket = () => {
    return <View style={{ width: 200, height: 200, backgroundColor: 'white'}}>
        <TextInput
            style={styles.inputBox}
            onChangeText={ value => setBText1(value)}
            defaultValue=""
        />
    </View>
}

export default function TelaTorneio({ navigation, route }) {
    const [formVisibility1, setFormVisibility1] = useState(false);
    const [formVisibility2, setFormVisibility2] = useState(false);
    const [formVisibility3, setFormVisibility3] = useState(false);
    const [formVisibility4, setFormVisibility4] = useState(false);
    const [editVisibility, setEditVisibility] = useState(false);
    const [teamsVisibility, setTeamsVisibility] = useState(false);
    const [tData, setTData] = useState([]);
    const [bText1, setBText1] = useState('')
    const [bText2, setBText2] = useState('')
    const [bText3, setBText3] = useState('')
    const [bText4, setBText4] = useState('')
    const [bText5, setBText5] = useState('')
    const [bText6, setBText6] = useState('')
    const [bText7, setBText7] = useState('')

    useEffect(() => {
        let mounted = true;
        const { tArray } = route.params
        setTData(tArray);
        return () => mounted = false;
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#303030' />
            <Image
                style={styles.imageStyle}
                source={require('../../../assets/bg_logo.png')}
            />
            <KeyboardAvoidingView behavior={'height'}>
                <View style={styles.contentWrapper}>
                    <View style={styles.cardLine} />
                    <Text style={styles.headerText}>{tData.tName}</Text>
                    <View style={styles.cardLine} />
                    <Image
                        style={styles.imageStyleBracket}
                        source={require('../../../assets/Bracket.png')}
                    />
                    {
                        // Partida 1
                        formVisibility1
                            ? <View style={styles.formStyle}>
                            <Text style={styles.labelText}>Time 1:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText1(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <Text style={styles.labelText}>Time 2:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText2(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <FormButton
                                text='Salvar'
                                fontSize={24}
                                width='normal'
                                onPress={ () => {setFormVisibility1(!formVisibility1)}}
                            />
                        </View>
                            : null
                    }
                    {
                        // Partida 2
                        formVisibility2
                            ? <View style={styles.formStyle}>
                            <Text style={styles.labelText}>Time 3:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText3(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <Text style={styles.labelText}>Time 4:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText4(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <FormButton
                                text='Salvar'
                                fontSize={24}
                                width='normal'
                                onPress={ () => {setFormVisibility2(!formVisibility2)}}
                            />
                        </View>
                            : null
                    }
                    {
                        // Partida 3
                        formVisibility3
                            ? <View style={styles.formStyle}>
                            <Text style={styles.labelText}>Time 5:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText5(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <Text style={styles.labelText}>Time 6:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText6(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <FormButton
                                text='Salvar'
                                fontSize={24}
                                width='normal'
                                onPress={ () => {setFormVisibility3(!formVisibility3)}}
                            />
                        </View>
                            : null
                    }
                    {
                        // Vencedor
                        formVisibility4
                            ? <View style={styles.formStyle}>
                            <Text style={styles.labelText}>Vencedor:</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={ value => setBText7(value)}
                                maxLength={4}
                                defaultValue=""
                            />
                            <FormButton
                                text='Salvar'
                                fontSize={24}
                                width='normal'
                                onPress={ () => {setFormVisibility4(!formVisibility4)}}
                            />
                        </View>
                            : null
                    }
                    {
                        // Botão Editar
                        editVisibility
                            ? <View style={{ position: 'absolute', left: 0}}>
                                <TouchableHighlight
                                    style={styles.partida1}
                                    onPress={ () => {
                                        setFormVisibility1(!formVisibility1)
                                    }}
                                >
                                    <Text />
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.partida2}
                                    onPress={ () => {
                                        setFormVisibility2(!formVisibility2)
                                    }}
                                >
                                    <Text />
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.partida3}
                                    onPress={ () => {
                                        setFormVisibility3(!formVisibility3)
                                    }}
                                >
                                    <Text />
                                </TouchableHighlight>
                                <TouchableHighlight
                                    style={styles.vencedor}
                                    onPress={ () => {
                                        setFormVisibility4(!formVisibility4)
                                    }}
                                >
                                    <Text />
                                </TouchableHighlight>
                            </View>
                            : null
                    }

                    <BracketText
                        pos={1}
                        text={bText1}
                    />
                    <BracketText
                        pos={2}
                        text={bText2}
                    />
                    <BracketText
                        pos={3}
                        text={bText3}
                    />
                    <BracketText
                        pos={4}
                        text={bText4}
                    />
                    <BracketText
                        pos={5}
                        text={bText5}
                    />
                    <BracketText
                        pos={6}
                        text={bText6}
                    />
                    <BracketText
                        pos={7}
                        text={bText7}
                    />

                    <View style={styles.cardLine} />
                    <Text style={styles.headerText}>Equipes</Text>
                    <ScrollView styles={styles.scrollView}>
                        {
                            teamsVisibility
                                ? <TeamInput />
                                : null
                        }
                        
                    </ScrollView>
                    <View style={styles.buttonView}>
                        <FormButton
                            text='Editar'
                            fontSize={24}
                            width='normal'
                            onPress={ () => {
                                setEditVisibility(!editVisibility)
                                setTeamsVisibility(!teamsVisibility)
                            }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}