import React from 'react';
import { View,  TouchableOpacity, Text, TextInput, Alert, Dimensions, ImageBackground, Image, StyleSheet } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign'
import axios from "axios";
import { Center } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';



const { width, height } = Dimensions.get('window');


export default function Login({navigation}) {

   

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(true);
const [press,setPress] = useState(false);

    function validate() {
        if ((email == "") || (password == "")) {
            callAlert();
        }
        else {
            LoginAPI();
        }
    }
    function callAlert() {
        Alert.alert(
            'Please enter an Email and Password',
            '',
            [
                { text: 'Dismiss' },
            ]
        );
    }

   const setThisToken = async (value) => {
        try {
          await AsyncStorage.setItem('token', value)
        } catch (e) {
          // saving error
        }
      }
    function LoginAPI() {
        axios.post('https://nf-backend.herokuapp.com/api/users/login',
            {
                email: email,
                password: password,
            })
            .then((res) => {
                console.log(res)
                if (!res.data.success) {
                    Alert.alert(res.data.message);
                } else {
                    console.log(res.data.token);
                    setThisToken(res.data.token);
                     
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
    

                
                <ImageBackground 
                    source = {require('..//..//../assets/images/huda.png')} 
                    style = {{width: width,height: height, justifyContent: "center"}}>
               {/* <Text style = {style.appName}>
                   NEWS
               </Text>
               <Text style = {style.appName}>
                   FLASH
               </Text> */}
                <View  style = {style.creds}>
                    <Icon name = {'ios-person-outline'} size = {23} color = {'#045c5a'} style= {style.inputIcon}/>
                    <TextInput style = {style.input}
                        placeholder= {'Email'}
                        placeholderTextColor= {'#045c5a'}
                        underlineColorAndroid= 'transparent'
                        />


                </View>
                <View>
                <Icon2 name = {'lock'} size = {25} color = {'#045c5a'} style= {style.inputIcon}/>
                    <TextInput style = {style.input}
                        placeholder= {'Password'}
                        secureTextEntry = {showPass}
                        placeholderTextColor= {'#045c5a'}
                        underlineColorAndroid= 'transparent'
                        />

                    <TouchableOpacity style = {style.btneye}
                        onPress = {() => {setShowPass(!showPass)
                                            setPress(!press)}}>
                        <Icon name = { press == false ?'ios-eye-outline' : 'ios-eye-off-outline'} size = {26} color = {'#045c5a'} />
                    </TouchableOpacity>
                </View>
                <View style = {style.signLine}>
                <Text style = {style.signin}>
                        Sign In
                </Text>
                
                <TouchableOpacity style = {style.login}>
                        <Icon2 name = {'rightcircle'} size = {55}  />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.forgot}>
                    <Text style = {{textDecorationLine: 'underline', color: 'black'}}>Forgot Password?</Text>
                </TouchableOpacity>
               
                <View style = {style.dontHave}>
                    <Text>
                        Dont have an account?
                    </Text>
                    <TouchableOpacity  onPress={() => { navigation.push("Register") }}>
                        <Text style = {{color : '#045c5a', fontWeight: '600'}}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                   
                
                </ImageBackground>
                
               
               

                

                {/* <Image source = {require('..//..//../assets/images/signup.jpg')} resizeMode = "contain"/> */}
         

            

        </>
    )
}

const style = StyleSheet.create({
    input : {
        width: width - 55,
        height: 40,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 55,
        borderBottomWidth: 1,
        marginTop: width/100 * 40,
        
        alignSelf: "center",
        

    },
    // appName : {
    //     color : 'white',
    //     fontSize: 35,
    //     fontWeight: '500'
        
    // },
    inputIcon : {
        position: 'absolute',
        top: height/100 *21.4,
        left: 44
    },


    creds: {
        height : height/100 *8,
        marginTop: height/100 * 17
       
    },

  
    signin : 
    {
        width : width - 55,
        alignSelf: 'center',
        paddingLeft: 20,
        fontSize: 30,
        marginTop: width /100 * 10,
        fontWeight: "700",
        color: 'black'
    },

    btneye : {
        position: 'absolute',
        top: height/100 *21.4,
        right: 44
    },

    signLine : {
        width: width /100 *70,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },

    login : {
        marginTop: width /100 * 10,
        right: 10,
        top: 1
   
    },

    forgot : {
        width : width - 55,
        alignSelf: 'center',
        paddingLeft: 20,
        marginTop: 20,
        
    },
     dontHave :{
         flexDirection: 'row',
         width: width / 100 * 50,
         alignSelf: 'center',
         bottom: height /100 * -12
     }

})