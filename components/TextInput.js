import React from 'react'
import {Entypo as Icon} from "@expo/vector-icons";
import {View, Text, StyleSheet, TextInput as RNTextInput} from 'react-native';

const TextInput = ({icon, ...otherProps}) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Icon name={icon} size={18} color={'#223e4b'}/>
            </View>
            <View style={styles.input}>
                <RNTextInput {...otherProps} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection:"row",
        alignItems:"center",
        borderColor:"#223e4b",
        borderRadius:20,
        borderWidth:1
    },
    icon : {
        padding:10,
    },
    input : {
        flex:1
    }
})

export default TextInput;
