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

import Ellipsis from 'react-native-vector-icons/Ionicons';
import axios from "axios"
import { NavigationContainer } from "@react-navigation/native";
import { Center } from "native-base";


const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [allNews, setAllNews] = React.useState(null);

  React.useState(() => {
    axios.post('https://nf-backend.herokuapp.com/api/newsarticles/getall')
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
    if (allNews && allNews.length > 1) {
        // allNews.shift();
      return allNews.map((item) => {
        return <>
         
          <TouchableOpacity style={style.news} onPress={() => { navigation.push("Article", { "article": item }) }}>
            <Image style={style.newsImage} source={(item.media[0]) ? item.media[0].url : require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>{item.title}</Text>
              <Text style={style.time}>8 hours ago | US</Text>
            </View>

          </TouchableOpacity>
          {/* <Text>{item.summary}</Text> */}
        </>
      })
    }
    else return <Text>Loading...</Text>
  }

  function showFeatued(){
    if (allNews && allNews.length > 0){
      return <>
         <TouchableOpacity style={style.hBannerContainer} onPress={() => { navigation.push("Article", { "article": allNews[0] }) }}>
            <Image style={style.homeBanner} source={(allNews[0].media[0]) ? allNews[0].media[0].url : require("..//../assets/images/storm.jpg")} />
            <Text style={style.imageHeading}>{allNews[0].title}</Text>
          </TouchableOpacity>  
          </>
    }
  }

  return (
    <View style={style.container}>
      <View style={style.top}>

        <TouchableOpacity>
        <Image source={require('../../assets/icon-images/hamburger.png')} style = {{width: width/100 * 5, height: height /100 * 2.5}}  />
          
        </TouchableOpacity>

        <TouchableOpacity>
        <Ellipsis name="ellipsis-vertical" size={30} color="#045C5A" />
          
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
        {showFeatued()}
     
        <View style={style.newsContainer}>
          
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
    top: 10,
    width : width/100 *90,
    alignSelf: "center",
    alignItems: "center"
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

