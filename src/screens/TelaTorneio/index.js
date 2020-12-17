import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import BracketText from '../../components/BracketText'
import FormButton from '../../components/FormButton'

const storeData = async (value, key) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        alert(e.message)
    }
}

const saveNew = async (team, key) => {
    try {
        let existingTeams = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })
        if (existingTeams == null) {
            existingTeams = [];
        }
        existingTeams.push(team);
        await AsyncStorage.setItem(key, JSON.stringify(existingTeams));
    } catch (e) {
        alert(e.message);
    }
}

const readData = async (setSBData, key) => {
    try {
        let res = await AsyncStorage.getItem(key).
            then(res => {
                res = JSON.parse(res);
                return res;
            })
        if (res !== null) {

            setSBData(res);
        }
    } catch (e) {
        alert(e.message)
    }
}

export default function TelaTorneio({ navigation, route }) {
    const [tData, setTData] = useState([]);
    const [bracketToRender, setBracketToRender] = useState();
    const [editVisibility, setEditVisibility] = useState(false);
    const [teamsVisibility, setTeamsVisibility] = useState(false);
    const [teamsArr, setTeamsArr] = useState([]);
    const [storageKey, setStorageKey] = useState('@placeholder');
    const [teamsStorageKey, setTeamsStorageKey] = useState('@placeholder_teams')

    // singleBracket states
    const [sBData, setSBData] = useState({
        st1: '', st2: '', st3: '', st4: '', st5: '', st6: '', stw: '',
        sp1: '', sp2: '', sp3: '', sp4: '', sp5: '', sp6: '', spw: '',
    })
    const [formSVisibility1, setFormSVisibility1] = useState(false);
    const [formSVisibility2, setFormSVisibility2] = useState(false);
    const [formSVisibility3, setFormSVisibility3] = useState(false);
    const [formSVisibilityW, setFormSVisibilityW] = useState(false);

    // doubleBracket states
    const [dBData, setDBData] = useState({
        dt1: '', dt2: '', dt3: '', dt4: '', dt5: '', dt6: '', dt7: '',
        dt8: '', dt9: '', dt10: '', dtw: '',
        dp1: '', dp2: '', dp3: '', dp4: '', dp5: '', dp6: '', dp7: '',
        dp8: '', dp9: '', dp10: '', dpw: '',
    })
    const [formDVisibility1, setFormDVisibility1] = useState(false);
    const [formDVisibility2, setFormDVisibility2] = useState(false);
    const [formDVisibility3, setFormDVisibility3] = useState(false);
    const [formDVisibility4, setFormDVisibility4] = useState(false);
    const [formDVisibility5, setFormDVisibility5] = useState(false);
    const [formDVisibilityW, setFormDVisibilityW] = useState(false);

    // roundBracket states
    const [rBData, setRBData] = useState({
        rt1: '', rt2: '', rt3: '', rt4: '', rt5: '', rt6: '', rt7: '',
        rt8: '', rtw: '',
        rp1: '', rp2: '', rp3: '', rp4: '', rp5: '', rp6: '', rp7: '',
        rp8: '', rpw: '',
    })
    const [formRVisibility1, setFormRVisibility1] = useState(false);
    const [formRVisibility2, setFormRVisibility2] = useState(false);
    const [formRVisibility3, setFormRVisibility3] = useState(false);
    const [formRVisibility4, setFormRVisibility4] = useState(false);
    const [formRVisibilityW, setFormRVisibilityW] = useState(false);


    useEffect(() => {
        let mounted = true;

        const { tArray } = route.params

        setTData(tArray);
        setBracketToRender(tArray.tBracket);
        const auxKey = '@' + tArray.tName.replace(/\s/g, '_')
        const auxTeamKey = '@' + tArray.tName.replace(/\s/g, '_') + '_teams'
        setStorageKey(auxKey)
        setTeamsStorageKey(auxTeamKey)
        if (tArray.tBracket == 'single') {
            readData(setSBData, auxKey)
            readData(setTeamsArr, auxTeamKey)
        }
        if (tArray.tBracket == 'double') readData(setDBData, auxKey)
        if (tArray.tBracket == 'round') readData(setRBData, auxKey)


        return () => mounted = false;
    }, []);

    switch (bracketToRender) {
        case 'single': {
            return (
                <View style={styles.container}>
                    <StatusBar style='light' backgroundColor='#303030' />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../../assets/bg_logo.png')}
                    />
                    <KeyboardAvoidingView behavior={'height'}>
                        <Formik
                            initialValues={{
                                sObj: {
                                    st1: '', st2: '', st3: '', st4: '', st5: '',
                                    st6: '', stw: '', sp1: '', sp2: '', sp3: '',
                                    sp4: '', sp5: '', sp6: '', spw: '',
                                },
                                sTeams: [],
                            }}
                            onSubmit={values => {
                                storeData(values.sObj, storageKey);
                                saveNew(values.sTeams, teamsStorageKey)
                                alert('Alterações salvas')
                                readData(setSBData, storageKey)
                                readData(setTeamsArr, teamsStorageKey)
                                if (formSVisibility1 == true) setFormSVisibility1(false)
                                if (formSVisibility2 == true) setFormSVisibility2(false)
                                if (formSVisibility3 == true) setFormSVisibility3(false)
                                if (formSVisibilityW == true) setFormSVisibilityW(false)
                            }}
                        >
                            {({ values, handleChange, handleSubmit, setFieldValue }) => (

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
                                        formSVisibility1
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 1:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st1')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp1')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 2:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st2')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp2')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 2
                                        formSVisibility2
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 3:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st3')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp3')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 4:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st4')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp4')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 3
                                        formSVisibility3
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 5:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st5')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp5')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 6:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.st6')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.sp6')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Vencedor
                                        formSVisibilityW
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Vencedor:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.stw')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('sObj.spw')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Botão Editar
                                        editVisibility
                                            ? <View style={{ position: 'absolute', left: 0 }}>
                                                <TouchableHighlight
                                                    style={styles.singleP1}
                                                    onPress={() => {
                                                        setFormSVisibility1(!formSVisibility1)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.singleP2}
                                                    onPress={() => {
                                                        setFormSVisibility2(!formSVisibility2)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.singleP3}
                                                    onPress={() => {
                                                        setFormSVisibility3(!formSVisibility3)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.singlePW}
                                                    onPress={() => {
                                                        setFormSVisibilityW(!formSVisibilityW)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                            </View>
                                            : null
                                    }

                                    <BracketText
                                        pos={'s1'}
                                        text={sBData.st1}
                                        points={sBData.sp1}
                                    />
                                    <BracketText
                                        pos={'s2'}
                                        text={sBData.st2}
                                        points={sBData.sp2}
                                    />
                                    <BracketText
                                        pos={'s3'}
                                        text={sBData.st3}
                                        points={sBData.sp3}
                                    />
                                    <BracketText
                                        pos={'s4'}
                                        text={sBData.st4}
                                        points={sBData.sp4}
                                    />
                                    <BracketText
                                        pos={'s5'}
                                        text={sBData.st5}
                                        points={sBData.sp5}
                                    />
                                    <BracketText
                                        pos={'s6'}
                                        text={sBData.st6}
                                        points={sBData.sp6}
                                    />
                                    <BracketText
                                        pos={'sW'}
                                        text={sBData.stw}
                                        points={sBData.spw}
                                    />

                                    <View style={styles.cardLine} />
                                    <Text style={styles.headerText}>Equipes</Text>
                                    <ScrollView styles={styles.scrollView}>
                                        {
                                            teamsVisibility
                                                ? <View style={styles.teamsWrapper}>
                                                    <View style={{ width: '100%' }}>
                                                        <TextInput
                                                            style={styles.teamInput}
                                                            onChangeText={handleChange('sTeams')}
                                                        />
                                                    </View>
                                                    <View style={styles.buttonInputView}>
                                                        <FormButton
                                                            width={'normal'}
                                                            text={'Criar'}
                                                            fontSize={24}
                                                            onPress={handleSubmit}
                                                        />
                                                        <View style={{ width: 10 }} />
                                                    </View>
                                                </View>
                                                : teamsArr.map((team, index) => {
                                                    return <TouchableHighlight
                                                        key={index}
                                                        style={styles.teamCard}
                                                        onPress={() => { alert('Pressed') }}
                                                    >
                                                        <Text style={styles.teamCardText}>{team}</Text>
                                                    </TouchableHighlight>
                                                })
                                        }

                                    </ScrollView>
                                    <View style={styles.buttonView}>
                                        <FormButton
                                            text='Editar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => {
                                                setEditVisibility(!editVisibility)
                                                setTeamsVisibility(!teamsVisibility)
                                            }}
                                        />
                                    </View>
                                </View>
                            )}</Formik>
                    </KeyboardAvoidingView>
                </View>
            )
        }
        case 'double': {
            return (
                <View style={styles.container}>
                    <StatusBar style='light' backgroundColor='#303030' />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../../assets/bg_logo.png')}
                    />
                    <KeyboardAvoidingView behavior={'height'}>
                        <Formik
                            initialValues={{
                                dObj: {
                                    dt1: '', dt2: '', dt3: '', dt4: '', dt5: '', dt6: '', dt7: '',
                                    dt8: '', dt9: '', dt10: '', dtw: '',
                                    dp1: '', dp2: '', dp3: '', dp4: '', dp5: '', dp6: '', dp7: '',
                                    dp8: '', dp9: '', dp10: '', dpw: '',
                                },
                                dTeams: [],
                            }}
                            onSubmit={values => {
                                storeData(values.dObj, storageKey);
                                saveNew(values.dTeams, teamsStorageKey)
                                alert('Alterações salvas')
                                readData(setTeamsArr, teamsStorageKey)
                                readData(setDBData, storageKey)
                                if (formDVisibility1 == true) setFormDVisibility1(false)
                                if (formDVisibility2 == true) setFormDVisibility2(false)
                                if (formDVisibility3 == true) setFormDVisibility3(false)
                                if (formDVisibility4 == true) setFormDVisibility4(false)
                                if (formDVisibility5 == true) setFormDVisibility5(false)
                                if (formDVisibilityW == true) setFormDVisibilityW(false)
                            }}
                        >
                            {({ values, handleChange, handleSubmit, setFieldValue }) => (
                                <View style={styles.contentWrapper}>
                                    <View style={styles.cardLine} />
                                    <Text style={styles.headerText}>{tData.tName}</Text>
                                    <View style={styles.cardLine} />
                                    <Image
                                        style={styles.imageStyleBracket}
                                        source={require('../../../assets/BracketDouble.png')}
                                    />
                                    {
                                        // Partida 1
                                        formDVisibility1
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 1:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt1')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp1')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 2:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt2')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp2')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 2
                                        formDVisibility2
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 3:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt3')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp3')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 4:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt4')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp4')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 3
                                        formDVisibility3
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 5:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt5')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp5')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 6:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt6')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp6')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 4
                                        formDVisibility4
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 7:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt7')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp7')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 8:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt8')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp8')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 5
                                        formDVisibility5
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 9:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt9')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp9')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 10:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dt10')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dp10')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Vencedor
                                        formDVisibilityW
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Vencedor:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dtw')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('dObj.dpw')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Botão Editar
                                        editVisibility
                                            ? <View style={{ position: 'absolute', left: 0 }}>
                                                <TouchableHighlight
                                                    style={styles.doubleP1}
                                                    onPress={() => {
                                                        setFormDVisibility1(!formDVisibility1)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.doubleP2}
                                                    onPress={() => {
                                                        setFormDVisibility2(!formDVisibility2)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.doubleP3}
                                                    onPress={() => {
                                                        setFormDVisibility3(!formDVisibility3)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.doubleP4}
                                                    onPress={() => {
                                                        setFormDVisibility4(!formDVisibility4)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.doubleP5}
                                                    onPress={() => {
                                                        setFormDVisibility5(!formDVisibility5)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.doublePW}
                                                    onPress={() => {
                                                        setFormDVisibilityW(!formDVisibilityW)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                            </View>
                                            : null
                                    }

                                    <BracketText
                                        pos={'d1'}
                                        text={dBData.dt1}
                                        points={dBData.dp1}
                                    />
                                    <BracketText
                                        pos={'d2'}
                                        text={dBData.dt2}
                                        points={dBData.dp2}
                                    />
                                    <BracketText
                                        pos={'d3'}
                                        text={dBData.dt3}
                                        points={dBData.dp3}
                                    />
                                    <BracketText
                                        pos={'d4'}
                                        text={dBData.dt4}
                                        points={dBData.dp4}
                                    />
                                    <BracketText
                                        pos={'d5'}
                                        text={dBData.dt5}
                                        points={dBData.dp5}
                                    />
                                    <BracketText
                                        pos={'d6'}
                                        text={dBData.dt6}
                                        points={dBData.dp6}
                                    />
                                    <BracketText
                                        pos={'d7'}
                                        text={dBData.dt7}
                                        points={dBData.dp7}
                                    />
                                    <BracketText
                                        pos={'d8'}
                                        text={dBData.dt8}
                                        points={dBData.dp8}
                                    />
                                    <BracketText
                                        pos={'d9'}
                                        text={dBData.dt9}
                                        points={dBData.dp9}
                                    />
                                    <BracketText
                                        pos={'d10'}
                                        text={dBData.dt10}
                                        points={dBData.dp10}
                                    />
                                    <BracketText
                                        pos={'dW'}
                                        text={dBData.dtw}
                                        points={dBData.dpw}
                                    />

                                    <View style={styles.cardLine} />
                                    <Text style={styles.headerText}>Equipes</Text>
                                    <ScrollView styles={styles.scrollView}>
                                    {
                                            teamsVisibility
                                                ? <View style={styles.teamsWrapper}>
                                                    <View style={{ width: '100%' }}>
                                                        <TextInput
                                                            style={styles.teamInput}
                                                            onChangeText={handleChange('dTeams')}
                                                        />
                                                    </View>
                                                    <View style={styles.buttonInputView}>
                                                        <FormButton
                                                            width={'normal'}
                                                            text={'Criar'}
                                                            fontSize={24}
                                                            onPress={handleSubmit}
                                                        />
                                                        <View style={{ width: 10 }} />
                                                    </View>
                                                </View>
                                                : teamsArr.map((team, index) => {
                                                    return <TouchableHighlight
                                                        key={index}
                                                        style={styles.teamCard}
                                                        onPress={() => { alert('Pressed') }}
                                                    >
                                                        <Text style={styles.teamCardText}>{team}</Text>
                                                    </TouchableHighlight>
                                                })
                                        }

                                    </ScrollView>
                                    <View style={styles.buttonView}>
                                        <FormButton
                                            text='Editar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => {
                                                setEditVisibility(!editVisibility)
                                                setTeamsVisibility(!teamsVisibility)
                                            }}
                                        />
                                    </View>
                                </View>
                            )}</Formik>
                    </KeyboardAvoidingView>
                </View>


            )
        }
        case 'round': {
            return (
                <View style={styles.container}>
                    <StatusBar style='light' backgroundColor='#303030' />
                    <Image
                        style={styles.imageStyle}
                        source={require('../../../assets/bg_logo.png')}
                    />
                    <KeyboardAvoidingView behavior={'height'}>
                        <Formik
                            initialValues={{
                                rObj: {
                                    rt1: '', rt2: '', rt3: '', rt4: '', rt5: '', rt6: '', rt7: '',
                                    rt8: '', rtw: '',
                                    rp1: '', rp2: '', rp3: '', rp4: '', rp5: '', rp6: '', rp7: '',
                                    rp8: '', rpw: '',
                                },
                                rTeams: [],
                            }}
                            onSubmit={values => {
                                storeData(values.rObj, storageKey);
                                saveNew(values.rTeams, teamsStorageKey)
                                alert('Alterações salvas')
                                readData(setTeamsArr, teamsStorageKey)
                                readData(setRBData, storageKey)
                                if (formRVisibility1 == true) setFormRVisibility1(false)
                                if (formRVisibility2 == true) setFormRVisibility2(false)
                                if (formRVisibility3 == true) setFormRVisibility3(false)
                                if (formRVisibility4 == true) setFormRVisibility4(false)
                                if (formRVisibilityW == true) setFormRVisibilityW(false)
                            }}
                        >
                            {({ values, handleChange, handleSubmit, setFieldValue }) => (
                                <View style={styles.contentWrapper}>
                                    <View style={styles.cardLine} />
                                    <Text style={styles.headerText}>{tData.tName}</Text>
                                    <View style={styles.cardLine} />
                                    <Image
                                        style={styles.imageStyleBracket}
                                        source={require('../../../assets/BracketRoundRobin.png')}
                                    />
                                    {
                                        // Partida 1
                                        formRVisibility1
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 1:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt1')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp1')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 2:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt2')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp2')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 2
                                        formRVisibility2
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 3:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt3')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp3')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 4:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt4')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp4')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 3
                                        formRVisibility3
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 5:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt5')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp5')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 6:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt6')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp6')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Partida 4
                                        formRVisibility4
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 7:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt7')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp7')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Time 8:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rt8')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rp8')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Vencedor
                                        formRVisibilityW
                                            ? <View style={styles.formStyle}>
                                                <View style={styles.inputHorizontal}>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Vencedor:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rtw')}
                                                            maxLength={4}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                    <View style={{ width: '50%' }}>
                                                        <Text style={styles.labelText}>Pontos:</Text>
                                                        <TextInput
                                                            style={styles.inputBox}
                                                            onChangeText={handleChange('rObj.rpw')}
                                                            keyboardType={'numeric'}
                                                            maxLength={1}
                                                            defaultValue=""
                                                        />
                                                    </View>
                                                </View>
                                                <FormButton
                                                    text='Salvar'
                                                    fontSize={24}
                                                    width='normal'
                                                    onPress={handleSubmit}
                                                />
                                            </View>
                                            : null
                                    }
                                    {
                                        // Botão Editar
                                        editVisibility
                                            ? <View style={{ position: 'absolute', left: 0 }}>
                                                <TouchableHighlight
                                                    style={styles.roundP1}
                                                    onPress={() => {
                                                        setFormRVisibility1(!formRVisibility1)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.roundP2}
                                                    onPress={() => {
                                                        setFormRVisibility2(!formRVisibility2)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.roundP3}
                                                    onPress={() => {
                                                        setFormRVisibility3(!formRVisibility3)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.roundP4}
                                                    onPress={() => {
                                                        setFormRVisibility4(!formRVisibility4)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                                <TouchableHighlight
                                                    style={styles.roundPW}
                                                    onPress={() => {
                                                        setFormRVisibilityW(!formRVisibilityW)
                                                    }}
                                                >
                                                    <Text />
                                                </TouchableHighlight>
                                            </View>
                                            : null
                                    }

                                    <BracketText
                                        pos={'r1'}
                                        text={rBData.rt1}
                                        points={rBData.rp1}
                                    />
                                    <BracketText
                                        pos={'r2'}
                                        text={rBData.rt2}
                                        points={rBData.rp2}
                                    />
                                    <BracketText
                                        pos={'r3'}
                                        text={rBData.rt3}
                                        points={rBData.rp3}
                                    />
                                    <BracketText
                                        pos={'r4'}
                                        text={rBData.rt4}
                                        points={rBData.rp4}
                                    />
                                    <BracketText
                                        pos={'r5'}
                                        text={rBData.rt5}
                                        points={rBData.rp5}
                                    />
                                    <BracketText
                                        pos={'r6'}
                                        text={rBData.rt6}
                                        points={rBData.rp6}
                                    />
                                    <BracketText
                                        pos={'r7'}
                                        text={rBData.rt7}
                                        points={rBData.rp7}
                                    />
                                    <BracketText
                                        pos={'r8'}
                                        text={rBData.rt8}
                                        points={rBData.rp8}
                                    />
                                    <BracketText
                                        pos={'rW'}
                                        text={rBData.rtw}
                                        points={rBData.rpw}
                                    />

                                    <View style={styles.cardLine} />
                                    <Text style={styles.headerText}>Equipes</Text>
                                    <ScrollView styles={styles.scrollView}>
                                    {
                                            teamsVisibility
                                                ? <View style={styles.teamsWrapper}>
                                                    <View style={{ width: '100%' }}>
                                                        <TextInput
                                                            style={styles.teamInput}
                                                            onChangeText={handleChange('rTeams')}
                                                        />
                                                    </View>
                                                    <View style={styles.buttonInputView}>
                                                        <FormButton
                                                            width={'normal'}
                                                            text={'Criar'}
                                                            fontSize={24}
                                                            onPress={handleSubmit}
                                                        />
                                                        <View style={{ width: 10 }} />
                                                    </View>
                                                </View>
                                                : teamsArr.map((team, index) => {
                                                    return <TouchableHighlight
                                                        key={index}
                                                        style={styles.teamCard}
                                                        onPress={() => { alert('Pressed') }}
                                                    >
                                                        <Text style={styles.teamCardText}>{team}</Text>
                                                    </TouchableHighlight>
                                                })
                                        }

                                    </ScrollView>
                                    <View style={styles.buttonView}>
                                        <FormButton
                                            text='Editar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => {
                                                setEditVisibility(!editVisibility)
                                                setTeamsVisibility(!teamsVisibility)
                                            }}
                                        />
                                    </View>
                                </View>
                            )}</Formik>
                    </KeyboardAvoidingView>
                </View>

            )
        }
        default: return (<View><Text>Houve um erro.</Text></View>)
    }
}