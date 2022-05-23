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

const { width, height } = Dimensions.get('window');
const API_KEY = "719cdf3d02ff4fa59f47d2e5556e1106"

export default function OneNewsSource({ navigation, source }) {
    const imgNum = Math.floor(Math.random() * 4);
    const [article, setArticles] = React.useState(null);
    const [imgErr, setImgErr] = React.useState([false, false, false, false, false]);

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
            })
            .catch((err) => {
                Alert.alert("An unexpect error occured.", "Please try again later", "Dismiss")
            })
    }, []);


    function showLoading() {
        return <>
            <SmallPreloader width={width / 100 * 90} height={250} />
        </>
    }


    function showArticle() {
        if (article && article.length > 1) {
            return article.map((item, key) => {
                if (key !== 0) return <>
                    <TouchableOpacity style={style.news}
                        onPress={() => { navigation.push("ExternalArticle", { "article": item, "source": source, "navigation": navigation }) }}
                    >
                        <Image
                            style={{ width: width / 100 * 30, height: 100, borderRadius: 5 }}
                            source={(item.urlToImage && !imgErr[key]) ?
                                { uri: item.urlToImage }
                                :
                                (imgNum === 0) ? require("../../assets/images/storm.jpg")
                                    :
                                    (imgNum === 1) ? require("../../assets/images/storm1.jpg")
                                        :
                                        (imgNum === 2) ? require("../../assets/images/storm5.jpg")
                                            :
                                            require("../../assets/images/storm4.jpg")
                            }
                            onError={() => {
                                const list = [...imgErr];
                                list[key] = true;
                                setImgErr(list);
                            }}
                        // onLoadStart={() => {
                        //     const list = [...imgErr];
                        //     list[0] = true;
                        //     setImgErr(list);
                        // }}
                        />
                        <View style={style.newsInfo}>
                            <Text style={style.newsTextHeading}>{item.title}</Text>
                            <Text style={style.time}>{(item.author) ? item.author : "Anonymous"} | {item.publishedAt.slice(0, 10).split("-").reverse().join("/")}</Text>
                        </View>
                    </TouchableOpacity>
                </>
            })
        }
    }

    function showFeaturedArticle() {
        if (article && article.length > 0) {
            // console.log(article[0])
            return <>
                <TouchableOpacity style={style.featnews}
                    onPress={() => {
                        navigation.push("ExternalArticle", { "article": article[0], "source": source, "navigation": navigation });
                    }}
                >
                    <Image
                        style={{ width: width / 100 * 95, height: 200, borderRadius: 0 }}
                        source={(article[0].urlToImage && !imgErr[0]) ?
                            { uri: article[0].urlToImage }
                            :
                            (imgNum === 0) ? require("../../assets/images/storm.jpg")
                                :
                                (imgNum === 1) ? require("../../assets/images/storm1.jpg")
                                    :
                                    (imgNum === 2) ? require("../../assets/images/storm4.jpg")
                                        :
                                        require("../../assets/images/storm5.jpg")
                        }
                        // onLoadStart={() => {
                        //     const list = [...imgErr];
                        //     list[0] = true;
                        //     setImgErr(list);
                        // }}
                        // onLoadEnd={() => {
                        //     const list = [...imgErr];
                        //     list[0] = false;
                        //     setImgErr(list);
                        // }}
                        onError={() => {
                            const list = [...imgErr];
                            list[0] = true;
                            setImgErr(list);
                        }}
                    />
                    <View style={style.featnewsInfo}>
                        <Text style={style.newsTextHeading}>{article[0].title}</Text>
                        <Text style={style.featnewsTextDesc}>{article[0].description}</Text>
                        <Text style={style.feattime}>{article[0].author} | {article[0].publishedAt.slice(0, 10).split("-").reverse().join("/")}</Text>
                    </View>
                </TouchableOpacity>
            </>
        }
    }


    if (article && article.length > 1) return (
        // if (false) return (
        <>
            {showFeaturedArticle()}
            {showArticle()}
        </>
    )
    else return (
        <>
            {showLoading()}
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
    featnews: {
        marginBottom: 5,
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
    featnewsInfo: {
        justifyContent: "space-between",
        marginLeft: width / 100 * 1,
        marginRight: width / 100 * 1,
        marginTop: 12,
        marginBottom: 12,
        width: width / 100 * 96,
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
    featnewsTextDesc: {
        color: "black",
        fontSize: 12,
        marginTop: 5
    },
    time: {
        fontSize: 12,
        marginBottom: -7,
        color: "#666"
    },
    feattime: {
        fontSize: 12,
        marginTop: 5,
        color: "#666"
    }
})

