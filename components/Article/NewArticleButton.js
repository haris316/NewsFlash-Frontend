import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import NewArticle from 'react-native-vector-icons/Ionicons'


export default function NewArticleButton({ navigation }) {

    return (
        <TouchableOpacity style={style.container} onPress={() => { navigation.push("New Article") }}>
            <NewArticle style={style.icon} name="add" size={45} color={'#fff'} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 80,
        right: 20,
        borderRadius: 5,
        backgroundColor: '#045C5A',

        alignItems: 'center'
    },

    icon: {
        alignSelf: 'center',
    }
})