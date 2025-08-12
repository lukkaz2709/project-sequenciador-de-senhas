import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';
 

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>
        Bat Pass Generator
      </Text>
      <Image source={require('../../../assets/bat-logo.png')} 
             style={{ 
              resizeMode: 'contain', 
              height: 300, 
              }}
      />
    </>
  );
}