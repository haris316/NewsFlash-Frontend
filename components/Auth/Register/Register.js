import React from 'react';
import { TextInput, View, Text, ImageBackground, Image, Alert } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/Ionicons'
import axios from "axios"

export default function Register({navigation}) {

  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [password2, setpassword2] = React.useState("");
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");

  function registerAPI() {
    axios.post('http://192.168.10.16:7000/api/users/register',
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
      <View>
        <Text>LOGO</Text>
      </View>
      <View>
        <Icon name={'ios-mail-outline'} size={28} />
        <TextInput
          placeholder={'First Name'}
          placeholderTextColor={'grey'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => setfirstname(text)}
        />
      </View>
      <View>
        <Icon name={'ios-mail-outline'} size={28} />
        <TextInput
          placeholder={'Last Name'}
          placeholderTextColor={'grey'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => setlastname(text)}
        />
      </View>
      <View>
        <Icon name={'ios-mail-outline'} size={28} />
        <TextInput
          placeholder={'Enter Email'}
          placeholderTextColor={'grey'}
          underLineColorAndroid='transparent'
          onChangeText={(text) => setemail(text)}
        />
      </View>
      <View>
        <Icon name={'ios-key-outline'} size={28} />
        <TextInput
          placeholder={'Enter Password'}
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          underLineColorAndroid='transparent'
          onChangeText={(text) => setpassword(text)}
        />
      </View>
      <View>
        <Icon name={'ios-key-outline'} size={28} />
        <TextInput
          placeholder={'Re-enter Password'}
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          underLineColorAndroid='transparent'
          onChangeText={(text) => setpassword2(text)}
        />
      </View>

      <TouchableOpacity onPress={() => { validate(); }}>
        <Text>Register</Text>
      </TouchableOpacity>
    </>
  )
}