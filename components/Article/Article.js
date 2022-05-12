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
import Icon from 'react-native-vector-icons/EvilIcons'


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
        <View style = {style.container}>
        <ScrollView showsVerticalScrollIndicator = {false} style={style.onearticle}>
            <TouchableOpacity style={style.articleBannerContainer} >
                <Image style={style.articleBanner} source={(article.media[0]) ? { uri: article.media[0] } : require("..//../assets/images/storm.jpg")} />
                <Text style={style.articleHeading}>{article.title}</Text>
            </TouchableOpacity>
            <View style = {style.line}></View>
            <Text style={style.articleSubHeading}>{article.summary}</Text>
            <Text style={style.articleText}>{paragraphBody(article.body)}</Text>
           
        </ScrollView>
        <View style = {style.bottomStrip}>
            <Image />
            <Text>Name</Text>
            <Text>Reporter</Text>
            <Icon name = 'like' />
            <Icon name = 'like' />
            <Icon />
        </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : "#fff"
    },
    onearticle:{
        marginBottom:Dimensions.get('window').height*0.05,
        width: Dimensions.get('window').width -40,
        alignSelf : "center",
        
        
    },
    articleBannerContainer: {
        alignSelf: "center",
        alignItems: "center",
        width: Dimensions.get('window').width -40,
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
    line : {
        borderWidth: 1,  
        width: Dimensions.get('window').width -30, 
        alignSelf : "center",
        borderColor : '#045c5a'
    }
    ,
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
        textAlign: "justify"
    },
})

