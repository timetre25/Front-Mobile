import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CountriesScreen from "../screen/countriesScreen";
import DetailsCommandeScreen from "../screen/detailsCommandeScreen";
import CommandesScreen from "../screen/CommandesScreen";

// Créer le stack navigator
const Stack = createNativeStackNavigator();

// Paramétrer le stack
const MyStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Commandes"
            screenOptions = {{
                headerStyle : {
                    backgroundColor : "coral"
                },
                headerTitleAlign : "center",
                headerTitleStyle : {
                    fontSize : 24,
                    fontWeight : "bold"
                },
                headerTintColor : "#FFF"
            }}
        >
            <Stack.Screen
                name="Commandes"
                component={CommandesScreen}
                options={{
                    title: "Liste des commandes"
                }}
            />
            <Stack.Screen
                name="DetailsCommande"
                component={DetailsCommandeScreen}
                options={{
                    title: "Détails de la commande"
                }}
            />

            />
        </Stack.Navigator>
    )
}

export default MyStackNavigator