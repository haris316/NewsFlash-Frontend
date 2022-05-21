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
import SmallPreloader from "../Preloaders/SmallPreloader"
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios"

const imgArr = [
    "../../assets/images/storm5.jpg",
    "../../assets/images/storm.jpg",
    "../../assets/images/storm2.jpg",
    "../../assets/images/storm3.jpg",
    "../../assets/images/storm4.jpg"
]
const { width, height } = Dimensions.get('window');
const API_KEY = "719cdf3d02ff4fa59f47d2e5556e1106"

export default function OneNewsSource({ navigation, source, name }) {
    const imgPath = imgArr[Math.floor(Math.random() * imgArr.length)];
    const [article, setArticles] = React.useState(null);
    const [imgErr, setImgErr] = React.useState(false);

    React.useEffect(() => {
        let URL = "https://newsapi.org/v2/top-headlines?pageSize=5&page=1" + "&sources=" + source.id + "&apiKey=" + API_KEY
        // console.log(URL)
        axios.get(URL)
            .then((res) => {
                if (res.status === "error") {
                    Alert.alert(res.message)
                }
                else {
                    setArticles(res.data.articles)
                }
                // setSources(temp);
            })
            .catch((err) => {
                Alert.alert("An unexpect error occured.", "Please try again later", "Dismiss")
            })
    }, []);


    // function showLoading() {
    //     return <>
    //         <HomeSkeleton />
    //     </>
    // }


    function showArticle() {
        if (article && article.length > 1) {
            return article.map((item, key) => {
                console.log(imgPath)
                return <>
                    <TouchableOpacity style={style.news}
                    // onPress={() => {
                    //     navigation.push("ExternalNewsArticle", { "article": item, "navigation": navigation });
                    // }}
                    >
                        <Image style={{ width: width / 100 * 30, height: 100, borderRadius: 5 }} source={(item.urlToImage && !imgErr) ? { uri: item.urlToImage } : require("../../assets/images/storm4.jpg")} onError={() => { setImgErr(true) }} />
                        <View style={style.newsInfo}>
                            <Text style={style.newsTextHeading}>{item.title}</Text>
                            <Text style={style.time}>{item.author} | {item.publishedAt.slice(0, 10).split("-").reverse().join("/")}</Text>
                        </View>
                    </TouchableOpacity>
                </>
            })
        }
        return <Text>{source.name}</Text>
    }


    return (
        <>
            {showArticle()}
        </>
    )
}

const style = StyleSheet.create({

    loading_container: {
        flex: 1,
        backgroundColor: '#fff',
        width: width,
        height: height,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Alegreya Sans',
        height: height,
        paddingBottom: height / 100 * 10
    },

    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 10
    },
    headingTab: {
        flexDirection: "row",
        padding: 25,
        justifyContent: "space-around",
    },
    headingText: {
        fontSize: 19,
        color: "black"
    },
    hBannerContainer: {
        alignSelf: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 100 * 45,
        marginTop: 10
    },
    homeBanner: {
        height: 200,
        width: Dimensions.get('window').width,
    },
    imageHeading: {
        alignSelf: "flex-start",
        fontFamily: "Alegreya Sans",
        fontSize: 19,
        marginLeft: Dimensions.get('window').width / 100 * 3,
        marginRight: Dimensions.get('window').width / 100 * 3,
        marginTop: Dimensions.get('window').width / 100 * 3,
        marginBottom: Dimensions.get('window').width / 100 * 1,
        color: "black"
    },
    newsContainer: {
        width: width / 100 * 94,
        height: height,
        alignSelf: "center",
    },

    news: {
        marginBottom: 5,
        flexDirection: "row",
    },

    newsImage: {
        width: width / 100 * 30,
        height: 100
    },
    newsInfo: {
        justifyContent: "space-between",
        margin: width / 100 * 2,
        width: width / 100 * 60,
    },
    newsTextHeading: {
        color: "black"
    },
    Headtime: {
        width: Dimensions.get('window').width,
        marginLeft: Dimensions.get('window').width / 100 * 7,
        textAlign: "left",
        fontSize: 12,
        marginBottom: -7,
        color: "black"
    },
    time: {
        fontSize: 12,
        marginBottom: -7,
        color: "black"
    }
})

