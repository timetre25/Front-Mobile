import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CommandesScreen from "../screen/CommandesScreen";
import ContactScreen from "../screen/ContactScreen";
import LogoutScreen from "../screen/LogoutScreen";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DetailsCommandeScreen from "../screen/detailsCommandeScreen";
import setStatusBarHidden from "expo-status-bar/build/setStatusBarHidden";

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({navigation}) => {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.replace("Login")
    }

    return (
        <Tab.Navigator
            initialRouteName = "Commandes"
            screenOptions = { {
                headerStyle : {
                    backgroundColor : "#2E4057"
                },
                headerTitleStyle : {
                    color : "#FFF",
                    fontWeight : "bold"
                },
                headerTitleAlign : "center",
                tabBarStyle: {
                    backgroundColor : "#2E4057",
                    borderRadius : 15,
                    fontWeight: "bold",
                    marginBottom : 10,
                    marginHorizontal : 10
                },
                tabBarActiveTintColor: "#F18F01",
                tabBarInactiveTintColor: "#FFF"
            }}
        >
            <Tab.Screen
                name="Commandes"
                component={CommandesScreen}
                options={ {
                    headerTitle : "Liste des commandes",
                    tabBarLabel : "Commandes",
                    tabBarIcon : ({focused,color}) =>
                        <MaterialCommunityIcons name="post-outline" size={focused ? 28 : 20} color={color} />
                }}
            />
            <Tab.Screen
                name="DetailsCommande"
                component={DetailsCommandeScreen}
                options={ {
                    headerTitle : "Détails de la commande",
                    tabBarLabel : setStatusBarHidden,
                    tabBarIcon : setStatusBarHidden
                }}
            />

            <Tab.Screen
                name="Logout"
                component={LogoutScreen}
                options={ {
                    headerTitle : "Déconnexion",
                    tabBarLabel : "Déconnexion",
                    tabBarIcon : ({focused,color}) =>
                        <SimpleLineIcons name="logout" size={focused ? 28 : 20} color={color} />
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator;