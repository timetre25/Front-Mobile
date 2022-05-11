import React, {useEffect, useState} from "react";
import {Button, FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import axios from "axios";

const CountriesScreen = ({navigation}) => {


    const [countries,setCountries] = useState([]);

    const fetchCountries = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/subregion/europe");
        setCountries(response.data);
    }

    useEffect(() => {
        fetchCountries();
    },[])


    return (
        <View style={styles.container}>
            <FlatList data={countries} renderItem={({item}) => (
                <TouchableOpacity
                    onPress={()=>navigation.navigate("DetailsCommande", {
                        pays: item
                    })}
                >
                <Text>{item.translations.fra["common"]}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name.common}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:10,
        padding:20
    }
})

export default CountriesScreen;