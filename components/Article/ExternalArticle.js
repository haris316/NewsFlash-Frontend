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
    Animated,
    Linking
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('window');

export default function Article(props, { navigation }) {
    const article = props.route.params.article;
    const source = props.route.params.source;
    const [imgErr, setImgErr] = React.useState(false);
    // console.log(article)
    if (article && source) return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.onearticle}>
                <View style={style.articleBannerContainer} >



                    <Image
                        style={style.articleBanner}
                        source={(article.urlToImage && !imgErr) ?
                            { uri: article.urlToImage }
                            :
                            require("../../assets/images/storm4.jpg")
                        }
                        onError={() => {
                            setImgErr(true);
                        }}
                    />



                    <Text style={style.articleHeading}>{article.title}</Text>
                </View>
                <View style={style.line}></View>
                <Text style={style.articleSubHeading}>{article.description}</Text>
                <Text style={style.articleText}>{article.content}</Text>
                <TouchableOpacity style={style.articleLink} onPress={() => { Linking.openURL(article.url) }}><Text style={style.articleLinkText}>Click to follow link to original article</Text></TouchableOpacity>
                <View style={style.sourcecontainer}>
                    <Text style={style.sourcehead}>Source</Text>
                    <Text style={style.sourcepublish}>Publisher : {source.name}</Text>
                    <View style={style.sourcewebcontainer}>
                        <Text style={style.sourcewebtext}>Web Page Link : </Text>
                        <TouchableOpacity style={style.sourceweblink} onPress={() => { Linking.openURL(source.url) }}>
                            <Text style={style.articleLinkText}>{source.url}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height / 100 * 20 }} />
            </ScrollView>
            <View style={style.bottomContainer}>
                <View style={style.bottomContent}>
                    <View style={style.bottomLeftContent}>
                        <Image source={require('../../assets/icon-images/profileFinal.png')} style={style.profilePic} />
                        <View style={style.User}>
                            <Text style={{ color: '#045c5a', fontWeight: '500' }}>{(article.author) ? article.author : "Anonymous"}</Text>
                            <Text>Reporter at {source.name}</Text>
                        </View>
                    </View>
                    <View style={style.bottomRightContent}>
                    </View>
                </View>
            </View>
        </View>
    )
    else return null
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    onearticle: {
        width: Dimensions.get('window').width - 40,
        alignSelf: "center",
    },
    articleBannerContainer: {
        alignSelf: "center",
        alignItems: "center",
        width: Dimensions.get('window').width - 40,
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
    line: {
        borderWidth: 1,
        width: Dimensions.get('window').width - 30,
        alignSelf: "center",
        borderColor: '#045c5a'
    }
    ,
    articleSubHeading: {
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        margin: Dimensions.get('window').width / 100 * 3,
        color: "black"
    },
    articleText: {
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        marginLeft: Dimensions.get('window').width / 100 * 3,
        marginRight: Dimensions.get('window').width / 100 * 3,
        textAlign: "justify"
    },
    articleLinkText: {
        textDecorationLine: 'underline',
        color: "#045c5a"
    },
    articleLink: {
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        margin: Dimensions.get('window').width / 100 * 3,
        textAlign: "justify"
    },
    bottomContainer: {
        overflow: "hidden",
        height: height / 11,
        position: "absolute",
        bottom: 54,
        backgroundColor: "#fff",
        width: width,
        justifyContent: "center"
        // borderWidth : 1
    },
    bottomContent: {
        backgroundColor: "#8885",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: Dimensions.get('window').width / 100 * 5,
        paddingHorizontal: Dimensions.get('window').width / 100 * 8,

    },
    bottomLeftContent: {
        flexDirection: "row",

    },
    bottomRightContent: {
        flexDirection: "row",
        justifyContent: "center"

    },
    User: {
        marginLeft: 10
    },
    profilePic: {
        width: width / 100 * 10,
        height: width / 100 * 10,
        borderRadius: 50,
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: 1,
        padding: 2
    },
    menuBox: {
        position: "absolute",
        backgroundColor: "#eee",
        width: width / 100 * 50,
        height: height / 100 * 20,
        transform: [{ translateY: -(height / 100 * 20) }, { translateX: -(width / 100 * 10) }],
        borderRadius: 7.5,
        borderColor: "#000",
        borderWidth: 1,
        padding: 10,
    },
    sourcecontainer: {
        width: width / 100 * 82,
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        marginTop: 30,
        marginRight: Dimensions.get('window').width / 100 * 3,
        marginLeft: Dimensions.get('window').width / 100 * 3,
        borderColor: "#888",
        borderTopWidth: 1,
        textAlign: "justify",
        paddingVertical: 10
    },
    sourcehead: {
        color: "#045c5a",
        fontSize: 17,
        fontWeight: "600",
    },
    sourcewebcontainer: {
        flexDirection: "row"
    },
})

