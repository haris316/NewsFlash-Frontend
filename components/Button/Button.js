import React from "react"
import { Dimensions, TouchableOpacity, Text } from "react-native"

export default function Button({ name, onPress, width, height, marginBottom, marginTop }) {

    return <>
        <TouchableOpacity style={{
            width: (width) ? width : Dimensions.get('window').width / 100 * 50,
            height: (height) ? height : Dimensions.get('window').height / 100 * 5,
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 1,
            padding: 5,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: (width) ? (Dimensions.get('window').width - width) / 2 : Dimensions.get('window').width / 100 * 25,
            marginRight: (width) ? (Dimensions.get('window').width - width) / 2 : Dimensions.get('window').width / 100 * 25,
            marginTop: (marginTop) ? marginTop : 5,
            marginBottom: (marginBottom) ? marginBottom : 5,
            backgroundColor: "#045c5a"
        }} onPress={() => { onPress() }}>
            <Text style={{ color: "white" }}>{name}</Text>
        </TouchableOpacity>
    </>
}