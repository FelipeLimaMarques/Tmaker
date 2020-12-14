import React, { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

import FormButton from './FormButton';

const TeamInput = (props) => {
    const [teams, setTeams] = useState([{ name: '' }]);

    return <View>
        {
            teams.map((team, index) =>
                <View key={index} style={{ width: '100%' }}>
                    <TextInput style={styles.teamInput} />
                </View>
            )}
        <View style={styles.buttonView}>

            <FormButton
                width={'normal'}
                text={'Criar'}
                fontSize={24}
                onPress={() => {
                    const old = [...teams];
                    setTeams(state => [...old, { name: '' }])
                }}
            />
            <View style={{ width: 10 }} />
            <FormButton
                width={'normal'}
                text={'Deletar'}
                fontSize={24}
                onPress={() => {
                    const old = [...teams];
                    old.pop();
                    setTeams(state => [...old]);
                }}
            />
        </View>
    </View>

}

export default TeamInput;

const styles = StyleSheet.create({
    teamInput: {
        backgroundColor: 'transparent',
        color: '#FFC629',
        fontSize: 24,
        borderColor: '#FFC629',
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        width: '100%',
    },
    buttonView: {
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
    },
})