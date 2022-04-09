import React from 'react';
import { TextInput, View, Text, ImageBackground, Image, Alert, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2  from 'react-native-vector-icons/AntDesign'
import axios from "axios"

const { width, height } = Dimensions.get('window');

export default function Register({navigation}) {

  React.useLayoutEffect(() => {
    navigation.setOptions({headerShown: false});
  }, [navigation]);

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [password2, setpassword2] = React.useState("");
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [showPass, setShowPass] = React.useState(true);
  const [press,setPress] = React.useState(false);

  function registerAPI() {

    React.useLayoutEffect(() => {
      navigation.setOptions({headerShown: false});
    }, [navigation]);
    
    axios.post('https://nf-backend.herokuapp.com/api/users/register',
      {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        password2: password2,
      })
      .then((res) => {
        if (!res.data.success) {
          Alert.alert(res.data.message);
        } else {
          console.log(res.data.data);
          navigation.push("Login")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function callAlert() {
    Alert.alert(
      'Please enter all details required',
      '',
      [
        { text: 'Dismiss' },
      ]
    );
  }
  function callAlertPasswords() {
    Alert.alert(
      'The two passwords do not match',
      '',
      [
        { text: 'Dismiss' },
      ]
    );
  }

  function validate() {
    if ((email == "") || (password == "") || (password2 == "") || (firstname == "") || (lastname == "")) {
      callAlert();
    }
    else {
      if (password !== password2) {
        callAlertPasswords();
      }
      else {
        registerAPI();
      }
    }
  }

  return (
    <>
    

                
    <ImageBackground 
        source = {require('..//..//../assets/images/huda2.png')} 
        style = {{width: width,height: height, justifyContent: "center"}}>
   {/* <Text style = {style.appName}>
       NEWS
   </Text>
   <Text style = {style.appName}>
       FLASH
   </Text> */}
   <View>
     <Text style = {style.heading}>Create Account </Text>
     
   </View>
   <View  style = {style.creds}>
        
        <TextInput style = {style.input}
            placeholder= {'First Name'}
            value = {firstname}
            placeholderTextColor= {'#fff'}
            underlineColorAndroid= '#fff'
            onChangeText={setfirstname}
            />


    </View>
    <View  style = {style.creds}>
        
        <TextInput style = {style.input}
            placeholder= {'Last Name'}
            value = {lastname}
            placeholderTextColor= {'#fff'}
            underlineColorAndroid= '#fff'
            onChangeText={setlastname}
            />


    </View>
    <View  style = {style.creds}>
        
        <TextInput style = {style.input}
            placeholder= {'Email'}
            value = {email}
            placeholderTextColor= {'#fff'}
            underlineColorAndroid= '#fff'
            onChangeText={setemail}
            />


    </View>

    <View>
    
        <TextInput style = {style.input}
            placeholder= {'Password'}
            value = {password}
            secureTextEntry = {showPass}
            placeholderTextColor= {'#fff'}
            underlineColorAndroid= '#fff'
            onChangeText={setpassword}
            />

        <TouchableOpacity style = {style.btneye}
            onPress = {() => {setShowPass(!showPass)
                                setPress(!press)}}>
            <Icon name = { press == false ?'ios-eye-outline' : 'ios-eye-off-outline'} size = {26} color = {'#045c5a'} />
        </TouchableOpacity>
    </View>
    <View>
    
    <TextInput style = {style.input}
        placeholder= {'Confirm Password'}
        value = {password2}
        secureTextEntry = {showPass}
        placeholderTextColor= {'#fff'}
        underlineColorAndroid= '#fff'
        onChangeText={setpassword2}
        />

    <TouchableOpacity style = {style.btneye}
        onPress = {() => {setShowPass(!showPass)
                            setPress(!press)}}>
        <Icon name = { press == false ?'ios-eye-outline' : 'ios-eye-off-outline'} size = {26} color = {'#045c5a'} />
    </TouchableOpacity>
</View>
    <View style = {style.signLine}>
    <Text style = {style.signin}>
            Sign Up
    </Text>
    
    <TouchableOpacity style = {style.login} onPress = {() => {validate()}}>
            <Icon2 name = {'rightcircle'} size = {55}  />
        </TouchableOpacity>
    </View>
   
    <View style = {style.dontHave}>
        <Text style = {{fontWeight: '400', color: 'black'}}>
            Already have an account?
        </Text>
        <TouchableOpacity  onPress={() => { navigation.push("Login") }}>
            <Text style = {{color : '#045c5a', fontWeight: '600'}}>
                Sign in
            </Text>
        </TouchableOpacity>
    </View>
       
    
    </ImageBackground>
    
   
   

    

    {/* <Image source = {require('..//..//../assets/images/signup.jpg')} resizeMode = "contain"/> */}




</>
)
}

const style = StyleSheet.create({

heading : {
  color: '#fff',
  fontSize : 35,
  marginLeft: width/100 * 8,
  width : width/100 *50,
  marginBottom : width/100 * 10,
  marginTop: width/100 * -20
  

},

input : {
width: width - 55,
height: height/100 * 8,
borderRadius: 25,
fontSize: 16,
alignSelf: "center",
color: 'white'


},
// appName : {
//     color : 'white',
//     fontSize: 35,
//     fontWeight: '500'

// },
inputIcon : {
position: 'absolute',
top: height/100 *21.4,
left: 44,
color: 'white'
},


creds: {
height : height/100 *8,


},


signin : 
{
width : width - 55,
alignSelf: 'center',
paddingLeft: 10,
fontSize: 30,
marginTop: width /100 * 10,
fontWeight: "700",
color: 'white'
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
alignItems: "center",
marginBottom : height/100 * -2
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
bottom: height /100 * -18,

}

})