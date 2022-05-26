import React from "react";
import {
    Text,
    View,
    Alert,
    StyleSheet,
    Image,
    ScrollView,
    Dimensions,
    RefreshControl
    // FlatList,
    // Animated
} from "react-native";
import NewsSkeleton from "../Preloaders/Skeleton/NewsSkeleton"
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios"
import OneNewsSource from "./OneNewsSource";

const { width, height } = Dimensions.get('window');
const API_KEY = "719cdf3d02ff4fa59f47d2e5556e1106"

export default function News({ navigation }) {
    const [sources, setSources] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);

    React.useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=" + API_KEY)
            .then((res) => {
                if (res.status === "error") {
                    Alert.alert(res.message);
                } else {
                    let search_criteria = [
                        "the-lad-bible",
                        "buzzfeed",
                        "mtv-news",
                        "ign",
                        "al-jazeera-english",
                        "bleacher-report",
                        "business-insider",
                        "cnn",
                        "fox-news",
                        "google-news",
                        "national-geographic",
                        "time"
                    ]
                    let temp = []
                    res.data.sources.map((item) => {
                        if (search_criteria.indexOf(item.id) !== -1) {
                            temp.push(item)
                        }
                        return null;
                    })
                    // console.log(temp);
                    setRefresh(false);
                    setSources(temp);
                }
            })
            .catch((err) => {
                Alert.alert("An unexpect error occured.", "Please try again later", "Dismiss")
            })
    }, [refresh]);


    function showLoading() {
        return <>
            <NewsSkeleton />
        </>
    }


    function listSource() {
        if (sources && sources.length > 0) {
            return sources.map((item, key) => {
                return <View style={style.oneSource}>
                    <Text style={style.oneSourceHead}>{item.name}</Text>
                    <Text style={style.oneSourceText}>{item.description}</Text>
                    <View style={style.oneArticle}>
                        <OneNewsSource source={{ id: item.id, name: item.name, url: item.url, description: item.description }} navigation={navigation} />
                    </View>
                </View>
            })
        }
    }

    // if (false) return (
    if (sources && sources.length > 0) return (
        <View style={style.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => { setSources(null); setRefresh(true) }}
                        progressBackgroundColor="#045c5a"
                    />
                }
            >
                <View style={style.newsContainer}>
                    {listSource()}
                </View>
            </ScrollView>
        </View>
    )
    else return (
        <View style={style.loading_container}>
            {showLoading()}
        </View>
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
    newsContainer: {
        width: width / 100 * 96,
        alignSelf: "center",
    },
    oneSource: {
        marginTop: 10,
        padding: 5,
        borderColor: "#aaaaaa99",
        borderWidth: 1,
        borderRadius: 5,
    },
    oneSourceHead: {
        fontSize: 20,
        paddingRight: 5,
        paddingLeft: 5,
        color: "#045C5A"
    },
    oneSourceText: {
        padding: 5,
        fontSize: 12,
        color: "#045C5A",
        marginBottom: 10,
        borderColor: "#045C5A",
        borderBottomWidth: 1,
    },
    oneArticle: {
        margin: 2.5
    }
})

