import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutScreen = ({navigation}) => {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.replace("Login")
    }

    useEffect(() => {
        handleLogout()
    },[]);
    return (
        <View style={styles.container}>
            <Text>Logout</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default LogoutScreen;