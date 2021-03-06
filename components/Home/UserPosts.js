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
  RefreshControl
} from "react-native";
import HomeSkeleton from "../Preloaders/Skeleton/HomeSkeleton"
import { TouchableOpacity } from "react-native-gesture-handler";

import Ellipsis from 'react-native-vector-icons/Ionicons';
import axios from "axios"
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewArticleButton from "../Article/NewArticleButton";



const { width, height } = Dimensions.get('window');

export default function Home({ navigation }) {
  const [allNews, setAllNews] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  async function callProfile() {
    const value = await AsyncStorage.getItem('token');
    axios.post('https://nf-backend.herokuapp.com/api/users/getprofile', {
      token: value
    }).then((res) => {
      if (res.error) {
        Alert.alert(res.data.message)
      }
      else {
        setProfile(res.data.data)
      }
    }).catch((e) => {
      Alert.alert("ERROR!");
    })
  }

  React.useEffect(() => {
    callProfile();
    setRefresh(false)
  }, [refresh]);

  React.useEffect(() => {
    axios.post('https://nf-backend.herokuapp.com/api/newsarticles/getall')
      .then((res) => {
        if (res.data.error) {
          Alert.alert(res.data.message);
        } else {
          setAllNews(res.data.data);
        }
      })
      .catch((err) => {
        Alert.alert("ERROR!");
      });
  }, [refresh]);

  function showLoading() {
    return <>
      <HomeSkeleton />
    </>
  }


  function listNews() {
    if (allNews && allNews.length > 1) {
      // allNews.shift();
      return allNews.map((item, key) => {
        if (key !== 0) return <>
          <TouchableOpacity style={style.news}
            onPress={() => {
              if (profile) navigation.push("Article", { "article": item, "profile": profile, "navigation": navigation });
              else Alert.alert("It is taking a bit long fetching your profile.", "Please wait or try reloading")
            }}
          >
            <Image style={{ width: width / 100 * 30, height: 100, borderRadius: 5 }} source={(item.media[0]) ? { uri: item.media[0] } : require("..//../assets/images/storm.jpg")} />
            <View style={style.newsInfo}>
              <Text style={style.newsTextHeading}>{item.title}</Text>
              <Text style={style.time}>{item.author.name} | {item.createdDate.slice(0, 10).split("-").reverse().join("/")}</Text>
            </View>

          </TouchableOpacity>
        </>
      })
    }
  }

  function showFeatued() {
    if (allNews && allNews.length > 0) {
      return <>
        <TouchableOpacity style={style.hBannerContainer}
          onPress={() => {
            if (profile) navigation.push("Article", { "article": allNews[0], "profile": profile, "navigation": navigation });
            else Alert.alert("It is taking a bit long fetching your profile.", "Please wait or try reloading")
          }}
        >
          <Image
            style={{ height: 200, width: Dimensions.get('window').width, }}
            source={(allNews[0].media[0]) ? { uri: allNews[0].media[0] } : require("..//../assets/images/storm.jpg")}
          />
          <Text style={style.imageHeading}>{allNews[0].title}</Text>
          <Text style={style.Headtime}>{allNews[0].author.name} | {allNews[0].createdDate.slice(0, 10).split("-").reverse().join("/")}</Text>
        </TouchableOpacity>
      </>
    }
  }

  // if (false) return (
  if (profile && allNews && allNews.length > 0) return (
    <View style={style.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => { setAllNews(null); setRefresh(true) }}
            progressBackgroundColor="#045c5a"
          />
        }
      >
        {showFeatued()}
        <View style={style.newsContainer}>
          {listNews()}
        </View>
      </ScrollView>
      <NewArticleButton navigation={navigation} />
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

