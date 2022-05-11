import React from "react";
import {
    Text,
    View,
    Alert,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    FlatList,
    Animated
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios"


const { width, height } = Dimensions.get('window');

export default function Article(props, { navigation }) {
    const [article] = React.useState(props.route.params.article);

    function paragraphBody(item) {
        if (item && item.length > 0) {
            return item.map((para) => {
                return <>
                    <Text>{para}{"\n"}{"\n"}</Text>
                </>
            })
        }
        else return <Text>No text in this article</Text>
    }

    return (
        <ScrollView style={style.onearticle}>
            <TouchableOpacity style={style.articleBannerContainer} >
                <Image style={style.articleBanner} source={(article.media[0] && article.media[0].type === "image") ? { uri: article.media[0].url } : require("..//../assets/images/storm.jpg")} />
                <Text style={style.articleHeading}>{article.title}</Text>
            </TouchableOpacity>
            <Text style={style.articleSubHeading}>{article.summary}</Text>
            <Text style={style.articleText}>{paragraphBody(article.body)}</Text>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    onearticle:{
        marginBottom:Dimensions.get('window').height*0.05
    },
    articleBannerContainer: {
        alignSelf: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
    },
    articleBanner: {
        height: 200,
        width: Dimensions.get('window').width,
    },
    articleHeading: {
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        fontSize: 19,
        margin: Dimensions.get('window').width / 100 * 3,
        color: "black"
    },
    articleSubHeading:{
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        margin: Dimensions.get('window').width / 100 * 3,
        color: "black"
    },
    articleText:{
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        margin: Dimensions.get('window').width / 100 * 3,
    },
})

