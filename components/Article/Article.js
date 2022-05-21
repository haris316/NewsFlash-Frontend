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
import ShareOps from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'


const { width, height } = Dimensions.get('window');

export default function Article(props, { navigation }) {
    // console.log(props.route.params.navigation)
    const [article] = React.useState(props.route.params.article);
    const [profile] = React.useState(props.route.params.profile);
    const [upVote, setUpVote] = React.useState((props.route.params.profile && props.route.params.article.upvote && props.route.params.article.upvote.indexOf(props.route.params.profile._id) !== -1) ? true : false);
    const [downVote, setDownVote] = React.useState((props.route.params.profile && props.route.params.article.downvote && props.route.params.article.downvote.indexOf(props.route.params.profile._id) !== -1) ? true : false);
    const [showMenu, setShowMenu] = React.useState(false);
    const [pinned, setPinned] = React.useState((props.route.params.profile && props.route.params.profile.pins.indexOf(article) === -1) ? false : true);
    const [loading, setLoading] = React.useState(false);

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
    function callPin() {
        if (loading) { Alert.alert("Please wait...") }
        else {
            if (!pinned) {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/addtopins', {
                    email: profile.email,
                    article: article
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.profile.pins.push(article)
                        setPinned(true);
                        Alert.alert("Article Pinned")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
            else {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/removefrompins', {
                    email: profile.email,
                    article: article
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.profile.pins.splice(props.route.params.profile.pins.indexOf(article), 1)
                        setPinned(false);
                        Alert.alert("Article Removed from Pins")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
        }
    }

    function callUpVote() {
        if (loading) { Alert.alert("Please wait...") }
        else {
            if (!upVote) {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/upvote', {
                    profileid: profile._id,
                    articleid: article._id
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.article.upvote.push(props.route.params.profile._id)
                        console.log("upvoted")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
            else {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/removefromupvote', {
                    id: profile._id,
                    article: article._id
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.article.upvote.splice(props.route.params.article.upvote.indexOf(props.route.params.profile._id), 1)
                        console.log("Removed from upvote")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
        }
    }

    function callDownVote() {
        if (loading) { Alert.alert("Please wait...") }
        else {
            if (!downVote) {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/downvote', {
                    email: profile.email,
                    article: article
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.article.downvote.push(props.route.params.profile._id)
                        console.log("downvoted")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
            else {
                setLoading(true)
                axios.post('https://nf-backend.herokuapp.com/api/users/removefromdownvote', {
                    email: profile.email,
                    article: article
                }).then((res) => {
                    setLoading(false);
                    if (res.error) {
                        Alert.alert(res.data.message)
                    }
                    else {
                        props.route.params.article.downvote.splice(props.route.params.article.downvote.indexOf(props.route.params.profile._id), 1)
                        console.log("Removed from upvote")
                    }
                }).catch((e) => {
                    Alert.alert("ERROR!");
                })
            }
        }
    }

    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.onearticle}>
                <TouchableOpacity style={style.articleBannerContainer} >
                    <Image style={style.articleBanner} source={(article.media[0]) ? { uri: article.media[0] } : require("..//../assets/images/storm.jpg")} />
                    <Text style={style.articleHeading}>{article.title}</Text>
                </TouchableOpacity>
                <View style={style.line}></View>
                <Text style={style.articleSubHeading}>{article.summary}</Text>
                <Text style={style.articleText}>{paragraphBody(article.body)}</Text>

            </ScrollView>
            <View style={style.bottomContainer}>
                <View style={style.bottomContent}>
                    <TouchableOpacity style={style.bottomLeftContent}>
                        <Image source={require('../../assets/images/blacktemp.jpg')} style={style.profilePic} />
                        <View style={style.User}>
                            <Text style={{ color: 'black', fontWeight: '500' }}>Name</Text>
                            <Text>Reporter</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={style.bottomRightContent}>
                        <TouchableOpacity onPress={() => { setUpVote(!upVote); callUpVote(); }}>
                            {(upVote) ? <AntDesign name="like1" size={30} color="black" /> : <AntDesign name="like2" size={30} color="black" />}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setDownVote(!downVote); callDownVote(); }} style={{ marginLeft: 5, marginRight: 5, transform: [{ scaleX: -1 }, { translateY: 7.5 }], color: "black" }}>
                            {(downVote) ? <AntDesign name="dislike1" size={30} color="black" /> : <AntDesign name="dislike2" size={30} color="black" />}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setShowMenu(!showMenu) }}>
                            <ShareOps name="ellipsis-horizontal" size={35} style={{ marginLeft: 5 }} color="black" />
                        </TouchableOpacity>
                        {(showMenu) ? <View style={style.menuBox}>
                            <TouchableOpacity onPress={() => { props.route.params.navigation.push("Opinion", { "article": article, "profile": profile }) }}><Text>Share as Opinion</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => { callPin() }}><Text>Pin Article</Text></TouchableOpacity>
                        </View> : null}
                    </View>

                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    onearticle: {
        // marginBottom:Dimensions.get('window').height*0.05,
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
        margin: Dimensions.get('window').width / 100 * 3,
        // marginBottom : 0,
        textAlign: "justify"
    },
    bottomContainer: {
        height: height / 11,
        position: "absolute",
        bottom: 54,
        backgroundColor: "#fff",
        width: width,
        justifyContent: "center"
        // borderWidth : 1
    },
    bottomContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: Dimensions.get('window').width / 100 * 8,

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
        width: width / 10,
        height: height / 20,
        borderRadius: 50
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
    }
})

