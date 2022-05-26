import React, { Component } from 'react';
import { StatusBar, SafeAreaView, Image, Dimensions, View } from 'react-native';
import NavigationBar from 'react-native-navbar-color'

export default class MyComponent extends Component {

    componentDidMount() {
        NavigationBar.setColor('#000000')
        StatusBar.setHidden(true, "none");
    }
    componentWillUnmount() {
        StatusBar.setHidden(false, "slide");
    }
    render() {
        return (
            <SafeAreaView>
                <View
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                        backgroundColor: "#000",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../../assets/images/FYPLogo-NF3.png")}
                        style={{
                            width: Dimensions.get('window').width / 100 * 80,
                            height: Dimensions.get('window').height / 100 * 25
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
