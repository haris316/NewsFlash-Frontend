import React, { useState, useEffect } from "react"
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { showImagePicker, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import RNFS from 'react-native-fs';
// import ImagePicker from 'react-native-image-picker';

export default function ImageUpload() {
    function handleChoosePhoto() {
        const options = {
            noData: false
        };
        let path = null;
        launchImageLibrary(options, response => {
            path = response.assets[0].uri;
            // console.log(path);
            RNFS.readFile(path, 'base64').then(res => {
                console.log(res);
            });
            // console.log(response);
        })
    }
    // const m3o = require("m3o")("ZmYzMmRjZDQtNjgyOS00NjI3LThhODEtMTU2ZDdkMjg4NDZm");
    // async function getUrlForImage() {
    //     let res = await m3o.image.upload({
    //         base64:"data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAx0lEQVR4nOzaMaoDMQyE4ZHj+x82vVdhwQoTkzKQEcwP5r0ihT7sbjUTeAJ4HCegXQJYfOYefOyjDuBiz3yjwJBoCIl6QZOeUjTC1Ix1IxEJXF9+0KWsf2bD4bn37OO/c/wuQ9QyRC1D1DJELUPUMkQtQ9QyRC1D1DJELUPUMkQtQ9QyRC1D1DJELUPUMkQtQ9Sa/NG94Tf3j4WBdaxudMEkn4IM2rZBA0wBrvo7aOcpj2emXvLeVt0IGm0GVXUj91mvAAAA//+V2CZl+4AKXwAAAABJRU5ErkJggg==",
    //         name: "cat.jpeg",
    //     });
    //     console.log(res);
    // }

    return (
        <SafeAreaView>
            <Button title="Choose Photo" onPress={() => { handleChoosePhoto() }} />
        </SafeAreaView>
    );
}