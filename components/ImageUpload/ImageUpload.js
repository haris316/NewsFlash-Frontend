import React, { useState, useEffect } from "react"
import { Button, SafeAreaView, Image,StyleSheet, Text, View } from 'react-native';
import { showImagePicker, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
// const m3o = require("m3o")("ZmYzMmRjZDQtNjgyOS00NjI3LThhODEtMTU2ZDdkMjg4NDZm");
// import ImagePicker from 'react-native-image-picker';

export default function ImageUpload() {


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
                    console.log(res);
                    setUrl(res);
                });
            }
        })
    }

    async function getUrlForImage() {
        axios.post('https://nf-backend.herokuapp.com/api/newsarticles/getImageURL', {
            base64: url,
        }).then((res) => {
            console.log("res");
            if (res.data.error) {
                console.log(res.data.message);
            } else {
                setUrl(res.data.data);
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <SafeAreaView>
            <Button title="Choose Photo" onPress={() => { handleChoosePhoto() }} />
            {/* <Button title="Test" onPress={() => { getUrlForImage() }} />
            <Image style={{width: 200, height: 200}} source={{uri: "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}} /> */}
        </SafeAreaView>
    );
}