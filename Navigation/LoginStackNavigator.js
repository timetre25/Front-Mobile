import React from "react"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screen/LoginScreen";
import MainTabNavigator from "./MainTabNavigator";
import DetailsCommandeScreen from "../screen/detailsCommandeScreen";

const Stack = createNativeStackNavigator()

const LoginStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName = "Login"
            screenOptions = { {
                headerShown : false
            }}
        >
            <Stack.Screen
                name={"Login"}
                component={LoginScreen}/>
                <Stack.Screen
                name={"DetailsCommandeScreen"}
                component={DetailsCommandeScreen}/>
            <Stack.Screen
                name={"MainTab"}
                component={MainTabNavigator}/>
        </Stack.Navigator>
    )
}

export default LoginStackNavigator;