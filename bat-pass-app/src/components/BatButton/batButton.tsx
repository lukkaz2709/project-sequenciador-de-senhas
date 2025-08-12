import React, {useState} from 'react';
import { Button, View, Text, Pressable } from 'react-native';
import { styles } from './batButtonStyles';
import { BatTextInput } from '../BatTextInput/batTextInput';
import GeneratePass from '../../services/passwordService';

export function BatButton() {
    const [pass, setPass] = useState('');

    function handleGenerateButton(){
        let generateToken = GeneratePass();
        setPass(generateToken);
    }

     return (
    <>

    <BatTextInput pass={pass}/>
    
        <Pressable 
            onPress={handleGenerateButton}
            style={styles.button}
            >
            <Text style={styles.text}>⚡ GENERATE</Text>
        </Pressable>

        <Pressable 
            onPress={() => {console.log('Fui pressionado!')}}
            style={styles.button}
            >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>
    </>
  );
}