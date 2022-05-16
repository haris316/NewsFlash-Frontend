import React, { useState, useEffect } from "react"
import { Button, SafeAreaView, Image, StyleSheet, Text, View } from 'react-native';
import { showImagePicker, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';

export default function ImageUpload({ setmedia }) {


    const [url, setUrl] = React.useState("Nothing here");

    function handleChoosePhoto() {
        const options = {
            noData: false
        };
        let path = null;
        launchImageLibrary(options, response => {
            if (response.assets[0] && response.assets[0].uri !== undefined) {
                path = response.assets[0].uri;
                RNFS.readFile(path, 'base64').then(res => {
                    setUrl("data:image/png;base64," + res);
                    setmedia("data:image/png;base64," + res)
                });
            }
        })
    }
    return (
        <SafeAreaView>
            <Button title="Choose Photo" onPress={() => { handleChoosePhoto() }} />
            <Image style={{ width: 200, height: 200 }} source={{ uri: `${url}` }} />
        </SafeAreaView>
    );
}