import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import axios from "../config/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../api";
import {TouchableOpacity} from "react-native-web";

const CommandesScreen = ({navigation}) => {


    const [commandes, setCommandes] = useState([])


    const fetchCommande = async () => {
        try {
            const response = await axios.get("getCommandes")
            const data = response.data;
            setCommandes(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCommande()
    },[]);
    console.log(commandes)

    return (
        <View style={styles.container}>
            <FlatList
                data={commandes} renderItem={({item}) => (
                <TouchableOpacity
                    onPress={()=>navigation.navigate("DetailsCommande", {
                        commande: item
                    })}
                >

                    <Text style={styles.postTitle}>Commande n°{item.idCommande}</Text>
                    <Text style={styles.postContent}>Statut : {item?.idStatut?.libelleStatut}</Text>
                    <Text style={styles.postContent}>N°Table : {item?.noTable}</Text>
                </TouchableOpacity>

            )}
                keyExtractor={(item) => item.idCommande}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    postTitle:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        paddingVertical:5,
    },
    postContent:{
        textAlign:"center",
        fontSize:16,
    },
    post:{
        borderWidth:2,
        borderRadius:40,
        marginVertical:4,
        padding:10,
    },
    postAuteur:{
        fontStyle:"italic",
    }
})

export default CommandesScreen;