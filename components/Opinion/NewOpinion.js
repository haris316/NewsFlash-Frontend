import React from 'react';
import { ScrollView, View, Image, Text, TextInput, Alert, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from "axios";
import Button from '../Button/Button';
const { width, height } = Dimensions.get('window');

export default function Opinion(props, { navigation }) {

    const [textBody, setTextBody] = useState("");

    function NewOpinionAPI() {
        axios.post('https://nf-backend.herokuapp.com/api/user/addtoopinion',
            {
                textBody: textBody,
                user: props.route.params.profile,
                article: props.route.params.article,
            })
            .then((res) => {
                if (!res.data.success) {
                    Alert.alert(res.data.message);
                } else {
                    Alert.alert("Opinion Published");
                }
            })
            .catch((err) => {
                Alert.alert("ERROR!");
            });
    }
    return (
        <>
            <ScrollView>
                <View>
                    <TextInput style={style.input}
                        placeholder={'Tell us what do you think'}
                        value={textBody}
                        placeholderTextColor={'#045c5a'}
                        underlineColorAndroid='transparent'
                        onChangeText={setTextBody}
                    />
                </View>
                <ScrollView style={style.articleBox}>
                    <Image style={style.articleImage} source={(props.route.params.article.media[0]) ? { uri: props.route.params.article.media[0] } : require("..//../assets/images/storm.jpg")} />
                    <Text style={style.articleHeading}>{props.route.params.article.title}</Text>
                    <Text style={style.articleSubHeading}>{props.route.params.article.summary}</Text>
                </ScrollView>
                <Button name="SHARE" onPress={() => { console.log("pressed") }} width={width/100*60} marginTop={10} />
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    input: {
        width: width - 25,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 25,
        borderBottomWidth: 1,
        marginTop: width / 100 * 10,
        alignSelf: "center",
    },
    articleBox: {
        width: width / 100 * 90,
        height: height / 100 * 45,
        marginRight: width / 100 * 5,
        marginLeft: width / 100 * 5,
        marginTop: 20,
        borderColor: "",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#045c5a22",
        padding: width / 100 * 2.5,
    },
    articleImage: {
        width: width / 100 * 85,
        height: height / 100 * 30,
        borderRadius: 5,
    },
    articleHeading: {
        marginTop: 10,
        fontSize: 15
    },
    articleSubHeading: {
        marginTop: 10,
        marginBottom: 20,
        fontSize: 12
    }
})