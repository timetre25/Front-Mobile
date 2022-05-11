import React, {useEffect, useState} from "react";
import {Button, Image, StyleSheet, Text, View} from "react-native";
import {TouchableOpacity} from "react-native-web";
import axios from "../config/axios";

const DetailsCommandeScreen = ({navigation,route}) => {
    const commande = route.params;

    const etapeSuivante = async () => {
        try {
            const response = await axios.patch("/commande/"+commande.commande.idCommande, {"idStatut":commande.commande.idStatut.idStatut+1})
            const data = response.data;
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.postTitle}>Détail commande n° {commande.commande.idCommande} </Text>
            <Text>Table n° : {commande.commande.noTable}</Text>
            <Text>Employe :  {commande.commande.idEmploye.prenom}</Text>
            <Text>Date : {commande.commande.dateCommande}</Text>
            {commande.commande.idStatut.idStatut === 1 ? <View><Text style={styles.etat1}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                    onPress={() => etapeSuivante()}>
                    <Text style={styles.next}>Etape suivante</Text>
                </TouchableOpacity></View> :
                commande.commande.idStatut.idStatut === 2 ? <View><Text style={styles.etat2}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                        onPress={() => etapeSuivante()}>
                        <Text style={styles.next}>Etape suivante</Text>
                    </TouchableOpacity></View> :
                    commande.commande.idStatut.idStatut === 3 ? <View><Text style={styles.etat3}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                            onPress={() => etapeSuivante()}>
                            <Text style={styles.next}>Etape suivante</Text>
                        </TouchableOpacity></View> :
                        commande.commande.idStatut.idStatut === 4 ? <View><Text style={styles.etat4}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                                onPress={() => etapeSuivante()}>
                                <Text style={styles.next}>Etape suivante</Text>
                            </TouchableOpacity></View> :
                            commande.commande.idStatut.idStatut === 5 ? <View><Text style={styles.etat5}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                                    onPress={() => etapeSuivante()}>
                                    <Text style={styles.next}>Etape suivante</Text>
                                </TouchableOpacity></View> :
                                commande.commande.idStatut.idStatut === 6 ? <View><Text style={styles.etat6}>Etat : {commande.commande.idStatut.libelleStatut}</Text>            <TouchableOpacity
                                        onPress={() => etapeSuivante()}>
                                        <Text style={styles.next}>Etape suivante</Text>
                                    </TouchableOpacity></View> :
                                    <Text style={styles.etat7}>Etat : {commande.commande.idStatut.libelleStatut}</Text>}



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
    next:{
        fontSize:13,
        fontWeight:"bold",


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

export default DetailsCommandeScreen;