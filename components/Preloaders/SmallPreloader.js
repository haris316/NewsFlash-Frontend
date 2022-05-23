import React from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"
const Pulse = require('react-native-pulse').default;

export default function helloWorld({ width, height }) {
    return (<>
        <View style={{
            flex: 1,
            backgroundColor: 'transparent',
            height: (height) ? height : Dimensions.get('window').height / 2,
            width: (width) ? width : Dimensions.get('window').width,
        }}>
            <Pulse color='#045C5A' numPulses={5} diameter={80} speed={20} duration={2000} />
        </View>
    </>
    );
}