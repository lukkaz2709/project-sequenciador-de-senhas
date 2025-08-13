import React from "react";
import { View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Style";
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatButton } from "../../components/BatButton/batButton";


export default function Home() {
    return (
    <View style={styles.appContainer}>
        
        <View style={styles.LogoContainer}>
            <BatLogo/>
        </View>

        <View style={styles.inputContainer}>
            <BatButton/>
        </View>
       
         <StatusBar style="light" />
    </View>

    );
}

