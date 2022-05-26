import React from "react";
import { 
  Text, 
  View, 
  Alert, 
  StyleSheet, 
  Dimensions, 
  TextInput , 
  ScrollView, 
  TouchableOpacity,
  Image
} from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./tempData";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/AntDesign'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call } from "react-native-reanimated";
import OneNewsSource from "../Home/OneNewsSource";



const {width, height} = Dimensions.get('window');
const API_KEY = "719cdf3d02ff4fa59f47d2e5556e1106";




export default function Explore({navigation}) {

  const [categories, setCategories] = React.useState(null);
  const [search, setSearch] = React.useState(null);
  const [news, setNews] = React.useState(null);
  const [catHeading, setCatHeading] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  
  // React.useEffect(() => {
    
  //   callProfile();

  //   // setRefresh(false)
  // }, []);

  React.useEffect(() => {
    axios.get('https://nf-backend.herokuapp.com/api/category/getall')
      .then((res) => {
        if (res.data.error) {
          Alert.alert(res.data.message);
        } else {
          setCategories(res.data.data);
        }
      })
      .catch((err) => {
        Alert.alert("ERROR!");
      });
  }, []);

 


  function listCat() {
    if (categories && categories.length > 1){
     return categories.map((category) => {
        // console.log("cat here", category.name);
        return<>
        <TouchableOpacity style = {style.categoryView} onPress = {() => catArticles(category.name)}>
        <Text style = {{color: "#045c5a", fontWeight: "600"}}>{category.name.toUpperCase()}</Text>
    </TouchableOpacity>
    </>

      })
      

    }

  }

  function catArticles(category){

  
    if (category){
      setCatHeading(category);
      axios.get("https://newsapi.org/v2/everything?q=" + category +  "&apiKey=" + API_KEY)
      .then((res) => {
        if (res.data.error){
          Alert.alert(res.data.message)
        }
        else {
           setNews(res.data.articles);
          // console.log(res.data)
        }
      })
      .catch((error) => {
        Alert.alert("ERROR");
      })

    }

  }



 
  function displayArticles(articles){
    
    if (articles && articles.length>1){
      console.log("SDFGHJK", profile)
      
      
     return articles.map((article, key) => {
       
       if (key!== 0){
      return <>
      
      <TouchableOpacity style = {style.box}   onPress={() => { navigation.push("ExternalArticle", { "article": article, "source": {id: article.id, name: article.title, url: article.url, description: article.description} , "navigation": navigation })}}  > 
                  <Image
                  source = {{
                    uri: article.urlToImage,
                  }}
                    
                    style = {style.imageContainer}
                  />
                    <View style = {style.overlay}></View>
                    <View style = {style.textView}>
                      <Text style = {style.textHeading}>{article.title.slice(0,50)}...</Text>
                    </View>

                  
                </TouchableOpacity>
                </>
       }
    })

  }

  }

        return (
          <ScrollView>
            <Carousel data = {dummyData}/>
            <View style={style.searchBar}>
              
              <TextInput
                style = {style.input}
                placeholder="Search"
                placeholderTextColor={'black'}
                onChangeText = {setSearch}
                
               
               
              />
              <TouchableOpacity style = {style.searchButton} onPress = {() => catArticles(search)}>
                <EvilIcons style={style.searchIcon} name="search" size={25} color="#000"/>
              </TouchableOpacity>
            </View>
           
              
              <ScrollView horizontal= {true} showsHorizontalScrollIndicator  =
              {false}>
                {
                  listCat()
                }
              </ScrollView>
           

            <View style = {style.heading}>
              <Text style = {{color: 'black',fontSize: 20}}>
                {catHeading}
              </Text>
              {/* <TouchableOpacity>
                <Icon name="arrowright" size={30} color = {'black'} />
              </TouchableOpacity> */}
            </View>
            <View  style = {style.posts}>
                

               { displayArticles(news)}

               
            </View>

            
            
            <View style = {{height : height/100 *10, width: width}}></View>

           
          </ScrollView>
        )
}

const style = StyleSheet.create({
  searchBar : {
    borderWidth : 1,
    opacity: 0.5,
    flexDirection : "row",
    borderRadius : 50,
    width : width/2 + 60,
    alignSelf : "center",
    height : height/20,
    alignItems: "center",
    marginTop : 12,
    overflow: "hidden" ,
    
    
  },
  searchIcon : {
 
  alignSelf : "center"
   
    
  },

  input : {
    marginBottom : -2,
    marginLeft : 7,
    width: width/2 + 10,
    
  },

  categoryView : {
   
  //  width : width/100 * 40,
  //  height : height/100 * 6,
  paddingVertical : width/100 * 3,
     padding : width/100 *4,
    borderWidth: 3,
    marginTop : height/100 *5,
    borderRadius : 100,
    justifyContent : "center",
    alignItems: "center",
    marginLeft : width/100 * 3,
    borderColor : "#045c5a",
    // backgroundColor: "#045C5A",
    // shadowColor: '#000',
    // shadowOffset: {width:0.7,height:1},
    // shadowOpacity : 0.9,
    // shadowRadius: 5,
    // elevation: 9,
  },

  heading : {
    flexDirection : "row",
    justifyContent: "space-between",
    marginTop : height/100 * 3,
    width: width /100 * 90,
    alignSelf : "center"
  },

  box : {
    height : height/100 * 22,
    width : width/100 * 43,
    borderWidth: 1,
    borderRadius : 15,
    // marginRight : width/100 * 4,
    backgroundColor : '000',
    shadowColor: '#000',
    shadowOffset: {width:4,height:4},
    shadowOpacity : 0.9,
    shadowRadius: 9,
    elevation: 9,
    marginBottom : height/100 * 4
    
   
  },

  imageContainer : {
    height : height/100 * 21.5,
    width : width/100 * 42.5,
    borderRadius : 15,
 
    
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor:'rgba(0,0,0,0.58)',
    borderRadius : 15,
    
},

  posts : {
    width : width/100 * 90,
    alignSelf : "center",
    marginTop : height/100 * 3,
    flexWrap : "wrap",
    flexDirection: "row",
    justifyContent:"space-between"
   
    
  },

  boxText : {
    position: 'absolute',
    bottom: (height/100 * 22)/2,
    margin: 10,
    left: (width/100 * 43)/2,
    color : 'white',
    
  }
  ,
  textView : {
    position: 'absolute',
        bottom: 20,
        margin: 10,
        left: 5,
        textAlign: "center",
        alignItems: "center"
  },
  textHeading : {
    color : 'white',
    fontSize: 15,
    shadowColor : '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity : 0.5,
    shadowRadius: 3,
    
    fontWeight : 'bold',
    elevation : 5,
    alignSelf : "center"
  },

  searchButton : {
    backgroundColor : '#045c5a',
    borderRadius : 30,
    width : width/100 * 13,
    alignItems: "center",
    justifyContent: 'center',
    marginLeft : width/100 * -2,
    height : height /20
  }

})

