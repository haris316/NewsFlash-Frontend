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
import { max } from "react-native-reanimated";
import Ellipsis from 'react-native-vector-icons/Ionicons';
import axios from "axios"
import { NavigationContainer } from "@react-navigation/native";


const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [allNews, setAllNews] = React.useState(null);

  React.useState(() => {
    axios.post('http://192.168.10.16:7000/api/newsarticles/getall')
      .then((res) => {
        console.log("res");
        if (res.data.error) {
          console.log(res.data.message);
        } else {
          setAllNews(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  function listNews() {
    if (allNews && allNews.length > 0) {
      return allNews.map((item) => {
        return <>
          <TouchableOpacity style={style.hBannerContainer} onPress={() => { navigation.push("Article", { "article": item }) }}>
            <Image style={style.homeBanner} source={(item.media[0]) ? item.media[0].url : require("..//../assets/images/storm.jpg")} />
            <Text style={style.imageHeading}>{item.title}</Text>
          </TouchableOpacity>
          <Text>{item.summary}</Text>
        </>
      })
    }
    else return <Text>Loading...</Text>
  }

  return (
    <View style={style.container}>
      <View style={style.top}>

        <TouchableOpacity>
          <Ellipsis name="ellipsis-vertical" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ellipsis name="ellipsis-vertical" size={30} />
        </TouchableOpacity>

      </View>
      <View style={style.headingTab}>
        <TouchableOpacity>
          <Text style={style.headingText}>
            Latest News
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={style.headingText}>
            Top Stories
          </Text>
        </TouchableOpacity>

      </View>
      <ScrollView>
        {/* <TouchableOpacity style={style.hBannerContainer}>
          <Image style={style.homeBanner} source={require("..//../assets/images/storm.jpg")} />
          <Text style={style.imageHeading}>
            Many migrants heading for UK die after boat sinks
          </Text>
        </TouchableOpacity> */}
        <View style={style.newsContainer}>
          {/* <TouchableOpacity style={style.news}>
            <Image style={style.newsImage} source={require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>Many migrants heading for UK die after boat sinks</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.news}>
            <Image style={style.newsImage} source={require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>Many migrants heading for UK die after boat sinks</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.news}>
            <Image style={style.newsImage} source={require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>Many migrants heading for UK die after boat sinks</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.news}>
            <Image style={style.newsImage} source={require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>Many migrants heading for UK die after boat sinks</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity>
          <TouchableOpacity style={style.news}>
            <Image style={style.newsImage} source={require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>Many migrants heading for UK die after boat sinks</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity> */}
          {listNews()}
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Alegreya Sans',


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


  },

  homeBanner: {
    height: 200,
    width: Dimensions.get('window').width,



  },


  imageHeading: {
    alignSelf: "flex-start",
    fontFamily: "Alegreya Sans",
    fontSize: 19,

    margin: Dimensions.get('window').width / 100 * 3,

    color: "black"



  },
  newsContainer: {
    width: width / 100 * 94,
    alignSelf: "center"

  },

  news: {

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

  time: {
    fontSize: 12,
    marginBottom: -7,
    color: "black"
  }




})

