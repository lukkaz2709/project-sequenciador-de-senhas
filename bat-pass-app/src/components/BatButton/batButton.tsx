import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './batButtonStyles';
import { BatTextInput } from '../BatTextInput/batTextInput';
import GeneratePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('')

  function handleGenerateButton() {
    let generateToken  = GeneratePass()
    setPass(generateToken)
  }

  async function handleCopyButton(){
  if (!pass) return;
  await Clipboard.setStringAsync(pass);
  alert('Senha copiada para a área de transferência!');
}


  return (
    <>
      <BatTextInput pass={pass}/>
      
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

    </>
  );
}