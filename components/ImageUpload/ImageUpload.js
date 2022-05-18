import React, { useState, useEffect } from "react"
import { SafeAreaView, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { showImagePicker, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from "../Button/Button";
import RNFS from 'react-native-fs';

export default function ImageUpload({ setmedia }) {


    const [url, setUrl] = React.useState(null);

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
            <Button name="Upload Image" onPress={() => { handleChoosePhoto() }} width={Dimensions.get('window').width / 100 * 95} height={40} />
            {(url) ? <Image style={{ width: 200, height: 200 }} source={{ uri: `${url}` }} /> : null}
        </SafeAreaView>
    );
}