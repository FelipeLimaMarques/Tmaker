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
import styles from './styles';
import BracketText from '../../components/BracketText'
import TeamInput from '../../components/TeamInput'
import FormButton from '../../components/FormButton'

export default function TelaTorneio({ navigation, route }) {
    const [tData, setTData] = useState([]);
    const [bracketToRender, setBracketToRender] = useState();
    const [editVisibility, setEditVisibility] = useState(false);
    const [teamsVisibility, setTeamsVisibility] = useState(false);

    // singleBracket states
    const [sText1, setSText1] = useState('')
    const [sText2, setSText2] = useState('')
    const [sText3, setSText3] = useState('')
    const [sText4, setSText4] = useState('')
    const [sText5, setSText5] = useState('')
    const [sText6, setSText6] = useState('')
    const [sTextW, setSTextW] = useState('')
    const [sPoint1, setSPoint1] = useState('')
    const [sPoint2, setSPoint2] = useState('')
    const [sPoint3, setSPoint3] = useState('')
    const [sPoint4, setSPoint4] = useState('')
    const [sPoint5, setSPoint5] = useState('')
    const [sPoint6, setSPoint6] = useState('')
    const [formSVisibility1, setFormSVisibility1] = useState(false);
    const [formSVisibility2, setFormSVisibility2] = useState(false);
    const [formSVisibility3, setFormSVisibility3] = useState(false);
    const [formSVisibilityW, setFormSVisibilityW] = useState(false);

    // doubleBracket states
    const [dText1, setDText1] = useState('')
    const [dText2, setDText2] = useState('')
    const [dText3, setDText3] = useState('')
    const [dText4, setDText4] = useState('')
    const [dText5, setDText5] = useState('')
    const [dText6, setDText6] = useState('')
    const [dText7, setDText7] = useState('')
    const [dText8, setDText8] = useState('')
    const [dText9, setDText9] = useState('')
    const [dText10, setDText10] = useState('')
    const [dTextW, setDTextW] = useState('')
    const [formDVisibility1, setFormDVisibility1] = useState(false);
    const [formDVisibility2, setFormDVisibility2] = useState(false);
    const [formDVisibility3, setFormDVisibility3] = useState(false);
    const [formDVisibility4, setFormDVisibility4] = useState(false);
    const [formDVisibility5, setFormDVisibility5] = useState(false);
    const [formDVisibilityW, setFormDVisibilityW] = useState(false);

    // roundBracket states
    const [rText1, setRText1] = useState('')
    const [rText2, setRText2] = useState('')
    const [rText3, setRText3] = useState('')
    const [rText4, setRText4] = useState('')
    const [rText5, setRText5] = useState('')
    const [rText6, setRText6] = useState('')
    const [rText7, setRText7] = useState('')
    const [formRVisibility1, setFormRVisibility1] = useState(false);
    const [formRVisibility2, setFormRVisibility2] = useState(false);
    const [formRVisibility3, setFormRVisibility3] = useState(false);
    const [formRVisibility4, setFormRVisibility4] = useState(false);

    useEffect(() => {
        let mounted = true;
        const { tArray } = route.params
        setTData(tArray);
        setBracketToRender(tArray.tBracket);
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
                                            <View style={{ width: '100%' }}>
                                                <Text style={styles.labelText}>Time 1:</Text>
                                                <TextInput
                                                    style={styles.inputBox}
                                                    onChangeText={value => setSText1(value)}
                                                    maxLength={4}
                                                    defaultValue=""
                                                />
                                            </View>
                                            <View style={{ width: '100%' }}>
                                                <Text style={styles.labelText}>Pontos:</Text>
                                                <TextInput
                                                    style={styles.inputBox}
                                                    onChangeText={value => setSPoint1(value)}
                                                    maxLength={4}
                                                    defaultValue=""
                                                />
                                            </View>
                                        </View>
                                        <Text style={styles.labelText}>Time 2:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSText2(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormSVisibility1(!formSVisibility1) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 2
                                formSVisibility2
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 3:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSText3(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 4:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSText4(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormSVisibility2(!formSVisibility2) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 3
                                formSVisibility3
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 5:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSText5(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 6:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSText6(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormSVisibility3(!formSVisibility3) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Vencedor
                                formSVisibilityW
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Vencedor:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setSTextW(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormSVisibilityW(!formSVisibilityW) }}
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
                                text={sText1}
                                points={1}
                            />
                            <BracketText
                                pos={'s2'}
                                text={sText2}
                            />
                            <BracketText
                                pos={'s3'}
                                text={sText3}
                            />
                            <BracketText
                                pos={'s4'}
                                text={sText4}
                            />
                            <BracketText
                                pos={'s5'}
                                text={sText5}
                            />
                            <BracketText
                                pos={'s6'}
                                text={sText6}
                            />
                            <BracketText
                                pos={'sW'}
                                text={sTextW}
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
                                    onPress={() => {
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
        case 'double': {
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
                                source={require('../../../assets/BracketDouble.png')}
                            />
                            {
                                // Partida 1
                                formDVisibility1
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 1:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText1(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 2:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText2(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibility1(!formDVisibility1) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 2
                                formDVisibility2
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 3:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText3(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 4:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText4(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibility2(!formDVisibility2) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 3
                                formDVisibility3
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 5:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText5(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 6:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText6(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibility3(!formDVisibility3) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 4
                                formDVisibility4
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Vencedor:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText7(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText8(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibility4(!formDVisibility4) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 5
                                formDVisibility5
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Vencedor:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText9(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDText10(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibility5(!formDVisibility5) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Vencedor
                                formDVisibilityW
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Vencedor:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setDTextW(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />

                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormDVisibilityW(!formDVisibilityW) }}
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
                                                setFormVisibility2(!formDVisibility2)
                                            }}
                                        >
                                            <Text />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            style={styles.doubleP3}
                                            onPress={() => {
                                                setFormVisibility3(!formDVisibility3)
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
                                text={dText1}
                            />
                            <BracketText
                                pos={'d2'}
                                text={dText2}
                            />
                            <BracketText
                                pos={'d3'}
                                text={dText3}
                            />
                            <BracketText
                                pos={'d4'}
                                text={dText4}
                            />
                            <BracketText
                                pos={'d5'}
                                text={dText5}
                            />
                            <BracketText
                                pos={'d6'}
                                text={dText6}
                            />
                            <BracketText
                                pos={'d7'}
                                text={dText7}
                            />
                            <BracketText
                                pos={'d8'}
                                text={dText8}
                            />
                            <BracketText
                                pos={'d9'}
                                text={dText9}
                            />
                            <BracketText
                                pos={'d10'}
                                text={dText10}
                            />
                            <BracketText
                                pos={'dW'}
                                text={dTextW}
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
                                    onPress={() => {
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
        case 'round': {
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
                                source={require('../../../assets/BracketRoundRobin.png')}
                            />
                            {
                                // Partida 1
                                formRVisibility1
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 1:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText1(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 2:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText2(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormRVisibility1(!formRVisibility1) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 2
                                formRVisibility2
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 3:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText3(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 4:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText4(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormRVisibility2(!formRVisibility2) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Partida 3
                                formRVisibility3
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Time 5:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText5(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <Text style={styles.labelText}>Time 6:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText6(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormRVisibility3(!formVisibility3) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Vencedor
                                formRVisibility4
                                    ? <View style={styles.formStyle}>
                                        <Text style={styles.labelText}>Vencedor:</Text>
                                        <TextInput
                                            style={styles.inputBox}
                                            onChangeText={value => setRText7(value)}
                                            maxLength={4}
                                            defaultValue=""
                                        />
                                        <FormButton
                                            text='Salvar'
                                            fontSize={24}
                                            width='normal'
                                            onPress={() => { setFormRVisibility4(!formVisibility4) }}
                                        />
                                    </View>
                                    : null
                            }
                            {
                                // Botão Editar
                                editVisibility
                                    ? <View style={{ position: 'absolute', left: 0 }}>
                                        <TouchableHighlight
                                            style={styles.partida1}
                                            onPress={() => {
                                                setFormRVisibility1(!formRVisibility1)
                                            }}
                                        >
                                            <Text />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            style={styles.partida2}
                                            onPress={() => {
                                                setFormRVisibility2(!formRVisibility2)
                                            }}
                                        >
                                            <Text />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            style={styles.partida3}
                                            onPress={() => {
                                                setFormRVisibility3(!formRVisibility3)
                                            }}
                                        >
                                            <Text />
                                        </TouchableHighlight>
                                        <TouchableHighlight
                                            style={styles.vencedor}
                                            onPress={() => {
                                                setFormRVisibility4(!formRVisibility4)
                                            }}
                                        >
                                            <Text />
                                        </TouchableHighlight>
                                    </View>
                                    : null
                            }

                            <BracketText
                                pos={1}
                                text={rText1}
                            />
                            <BracketText
                                pos={2}
                                text={rText2}
                            />
                            <BracketText
                                pos={3}
                                text={rText3}
                            />
                            <BracketText
                                pos={4}
                                text={rText4}
                            />
                            <BracketText
                                pos={5}
                                text={rText5}
                            />
                            <BracketText
                                pos={6}
                                text={rText6}
                            />
                            <BracketText
                                pos={7}
                                text={rText7}
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
                                    onPress={() => {
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
        default: return (<View><Text>Houve um erro.</Text></View>)
    }


}