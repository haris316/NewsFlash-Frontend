import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, TextInput, Alert, Dimensions, StyleSheet } from 'react-native';
import { useState } from 'react';
import axios from "axios";
import MultipleSelectList from "../MultipleSelectList/MultipleSelectList"
import DynamicInputFields from '../DynamicInputFields/DynamicInputFields';
const { width, height } = Dimensions.get('window');

export default function Login({ navigation }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [summary, setSummary] = useState("");
    const [category, setCategory] = useState([]);
    const [media, setMedia] = useState([]);
    const [links, setLinks] = useState([]);
    const [hashtags, setHashtags] = useState([]);
    const [keywords, setKeywords] = useState([]);

    function validate() {
        if ((title == "") || (body == "") || (summary == "")) {
            callAlert();
        }
        else {
            console.log("we good");
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
        console.log({
            title: title,
            body: body,
            summary: summary,
            categories: category,
            media: media,
            links: links,
            hashtags: hashtags,
            keywords: keywords,
            author_email: "huda@gmail.com",
            company_email: "test_company@gmail.com",
        })
        // axios.post('https://nf-backend.herokuapp.com/api/newsarticles/addarticle',
        //     {
        //         title: title,
        //         body: body,
        //         summary: summary,
        //         categories: category,
        //         media: media,
        //         links: links,
        //         hashtags: hashtags,
        //         keywords: keywords,
        //         author_email: "huda@gmail.com",
        //         company_email: "test_company@gmail.com",
        //     })
        //     .then((res) => {
        //         console.log(res)
        //         if (!res.data.success) {
        //             Alert.alert(res.data.message);
        //         } else {
        //             callSuccessAlert();
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }
    return (
        <>
            <ScrollView>
                <View>
                    <TextInput
                        placeholder={'Title'}
                        value={title}
                        placeholderTextColor={'#045c5a'}
                        underlineColorAndroid='transparent'
                        onChangeText={setTitle}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder={'body'}
                        value={body}
                        placeholderTextColor={'#045c5a'}
                        underlineColorAndroid='transparent'
                        onChangeText={setBody}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder={'summary'}
                        value={summary}
                        placeholderTextColor={'#045c5a'}
                        underlineColorAndroid='transparent'
                        onChangeText={setSummary}
                    />
                </View>
                <MultipleSelectList
                    data={[
                        { name: 'Category #1' },
                        { name: 'Category #2' },
                        { name: 'Category #3' },
                        { name: 'Category #4' },
                        { name: 'Category #5' },
                        { name: 'Category #6' },
                        { name: 'Category #7' },
                        { name: 'Category #8' },
                        { name: 'Category #9' },
                        { name: 'Category #10' },
                    ]}
                    element={category}
                    setElement={(item) => { setCategory(item) }}
                    name="Category"
                />
                <View>
                    {/* <TextInput
                        placeholder={'media'}
                        value={media}
                        placeholderTextColor={'#045c5a'}
                        underlineColorAndroid='transparent'
                        onChangeText={setMedia}
                    /> */}
                </View>
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
                <TouchableOpacity onPress={() => { validate() }}>
                    <Text>Post Article</Text>
                </TouchableOpacity>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    input: {
        width: width - 55,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 55,
        borderBottomWidth: 1,
        marginTop: width / 100 * 40,

        alignSelf: "center",


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