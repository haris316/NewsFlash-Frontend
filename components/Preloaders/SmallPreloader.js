import React from "react"
import { View, Image, StyleSheet, Dimensions } from "react-native"
const Pulse = require('react-native-pulse').default;
const { width, height } = Dimensions.get('window');

export default function helloWorld() {
    return (<>
        <View style={styles.pulsecontainer}>
            <Pulse color='#045C5A' numPulses={5} diameter={120} speed={20} duration={2000} />
        </View>
    </>
    );
}

const styles = StyleSheet.create({
    pulsecontainer: {
        flex: 1,
        backgroundColor: 'transparent',
        height: height / 2,
        width: width,
    },
})