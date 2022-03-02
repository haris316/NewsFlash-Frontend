import React from 'react';
import { View, Text, TextInput, Alert, Dimensions, ImageBackground, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from "axios";



const { width, height } = Dimensions.get('window');

export default function Login({navigation}) {

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

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
    function LoginAPI() {
        axios.post('http://192.168.10.16:7000/api/users/login',
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
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <>
            {/* <View>
                <Text>LOGO</Text>
            </View>
            <View>
                <Icon name={'ios-mail-outline'} size={28} />
                <TextInput
                    placeholder={'Enter Email'}
                    placeholderTextColor={'grey'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View>
                <Icon name={'ios-key-outline'} size={28} />
                <TextInput
                    placeholder={'Enter Password'}
                    placeholderTextColor={'grey'}
                    secureTextEntry={true}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={() => { validate(); }}>
                <Text>Login Button</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.push("Register") }}>
                <Text>Register instead</Text>
            </TouchableOpacity> */}

                
                <ImageBackground 
                    source = {require('..//..//../assets/images/huda.png')} 
                    style = {{width: width,height: height, justifyContent: "center"}}>
                
                <View>
                    <TextInput style = {style.input}
                        placeholder= {'Email'}
                        placeholderTextColor= {'#045c5a'}
                        underlineColorAndroid= 'transparent'
                        />


                </View>
                <View>
                    <TextInput style = {style.input}
                        placeholder= {'Password'}
                        placeholderTextColor= {'#045c5a'}
                        underlineColorAndroid= 'transparent'
                        />


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
        paddingLeft: 20,
        borderBottomWidth: 1,
        marginTop: 10,
        
        alignSelf: "center",
        

    }
})