import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, TextInput, Alert, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from "axios";
import MultipleSelectList from "../MultipleSelectList/MultipleSelectList"
import DynamicInputFields from '../DynamicInputFields/DynamicInputFields';
import ImageUpload from '../ImageUpload/ImageUpload';
import Button from '../Button/Button';
const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [summary, setSummary] = useState("");
    const [category, setCategory] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [media, setMedia] = useState([]);
    const [links, setLinks] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [keywords, setKeywords] = useState([]);


    React.useState(() => {
        axios.get('https://nf-backend.herokuapp.com/api/category/getall')
            .then((res) => {
                if (res.data.error) {
                    Alert.alert(res.data.message);
                } else {
                    setCategoryData(res.data.data);
                }
            })
            .catch((err) => {
                Alert.alert("ERROR!");
            });
    }, [])

    function validate() {
        if ((title == "") || (body == "") || (summary == "")) {
            callAlert();
        }
        else {
            NewArticleAPI();
        }
    }

    function callAlert() {
        Alert.alert(
            'Please enter the required details',
            '',
            [
                { text: 'Dismiss' },
            ]
        );
    }
    function callSuccessAlert() {
        Alert.alert(
            'Your article has been posted successfully',
            '',
            [
                { text: 'Okay' },
            ]
        );
    }

    function NewArticleAPI() {
        axios.post('https://nf-backend.herokuapp.com/api/newsarticles/addarticle',
            {
                title: title,
                body: body,
                summary: summary,
                categories: category,
                media: media,
                links: links,
                hashtags: hashtags,
                keywords: keywords,
                author_email: "huda@gmail.com",
                company_email: "geo@gmail.com",
            })
            .then((res) => {
                if (!res.data.success) {
                    Alert.alert(res.data.message);
                } else {
                    callSuccessAlert();
                }
            })
            .catch((err) => {
                Alert.alert("ERROR!");
            });
    }
    return (
        <>
            <ScrollView>
                <Text
                    style={{
                        color: "#045c5a",
                        fontSize: 18,
                        fontWeight: "600",
                        marginHorizontal: width / 100 * 5,
                        marginTop: width / 100 * 5,
                        marginBottom: width / 100 * 2,
                    }}
                >News Details</Text>
                <View
                    style={{
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: "#444444",
                        width: width / 100 * 90,
                        marginHorizontal: width / 100 * 5,
                        marginBottom: width / 100 * 5,
                        paddingVertical: width / 100 * 5,
                    }}
                >
                    <View>
                        <TextInput style={style.input}
                            multiline={true}
                            placeholder={'Title'}
                            value={title}
                            placeholderTextColor={'#045c5a'}
                            underlineColorAndroid='transparent'
                            onChangeText={setTitle}
                        />
                    </View>
                    <View style={style.body}>
                        <TextInput style={style.input}
                            multiline={true}
                            placeholder={'News Content'}
                            value={body}
                            placeholderTextColor={'#045c5a'}
                            underlineColorAndroid='transparent'
                            onChangeText={setBody}
                        />
                    </View>
                    <View>
                        <TextInput style={style.input}
                            placeholder={'Summary Text'}
                            value={summary}
                            multiline={true}
                            placeholderTextColor={'#045c5a'}
                            underlineColorAndroid='transparent'
                            onChangeText={setSummary}
                        />
                    </View>
                </View>
                <MultipleSelectList
                    data={categoryData}
                    element={category}
                    setElement={(item) => { setCategory(item) }}
                    name="Category"
                />
                <DynamicInputFields
                    name="Link"
                    element={links}
                    setElement={(item) => { setLinks(item) }}
                />
                <DynamicInputFields
                    name="Keyword"
                    element={keywords}
                    setElement={(item) => { setKeywords(item) }}
                />
                <DynamicInputFields
                    name="Hashtag"
                    element={hashtags}
                    setElement={(item) => { setHashtags(item) }}
                />
                <ImageUpload setmedia={(item) => {
                    setMedia([item])
                }} />
                <Button name="Post Article" onPress={() => { validate() }} width={width / 100 * 95} />
                <View style={{ marginBottom: 100 }}>
                </View>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    input: {
        width: width - 25,
        height: 40,
        borderRadius: 25,
        fontSize: 13,
        paddingLeft: 25,
        borderBottomWidth: 1,
        marginTop: width / 100 * 5,
        marginBottom: width / 100 * 5,
        borderBottomColor: "#aaaaaa",
        alignSelf: "center",
        color: "#444444"


    },
    // appName : {
    //     color : 'white',
    //     fontSize: 35,
    //     fontWeight: '500'

    // },
    inputIcon: {
        position: 'absolute',
        top: height / 100 * 21.4,
        left: 44
    },


    creds: {
        height: height / 100 * 8,
        marginTop: height / 100 * 17

    },


    signin:
    {
        width: width - 55,
        alignSelf: 'center',
        paddingLeft: 20,
        fontSize: 30,
        marginTop: width / 100 * 10,
        fontWeight: "700",
        color: 'black'
    },

    btneye: {
        position: 'absolute',
        top: height / 100 * 21.4,
        right: 44
    },

    signLine: {
        width: width / 100 * 70,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },

    login: {
        marginTop: width / 100 * 10,
        right: 10,
        top: 1

    },

    forgot: {
        width: width - 55,
        alignSelf: 'center',
        paddingLeft: 20,
        marginTop: 20,

    },
    dontHave: {
        flexDirection: 'row',
        width: width / 100 * 50,
        alignSelf: 'center',
        bottom: height / 100 * -12
    }

})