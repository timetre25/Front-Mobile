import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import TextInput from "../components/TextInput";
import axios from "../config/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () =>  {
        try {
            const response = await axios.post("/connexion", {
                "email": email,
                "password": password
            })
            const token = response.data.token;
            console.log(token)
            // Stocker le token
            await AsyncStorage.setItem('token',token)
            navigation.replace("MainTab")
        }catch (error){
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text>
                Connexion
            </Text>
            <View style={styles.input}>
                <TextInput
                    icon="mail"
                    placeholder="Entrer votre email"
                    keyboardType="email-adress"
                    onChangeText={value => setEmail(value)}
                    value={email}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    icon="key"
                    placeholder="Entrer votre mot de passe"
                    secureTextEntry
                    onChangeText={value => setPassword(value)}
                    value={password}
                />
            </View>
            <Button title={"Valider"} onPress={handleLogin}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        color : "#223e4b",
        fontSize: 28,
        fontWeight:"bold",
        marginBottom : 40
    },
    input : {
        width:'100%',
        marginBottom : 25,
        paddingHorizontal: 15,
    }
})

export default LoginScreen;
