import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from "axios"

export default function Login({navigation}) {

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
            <View>
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
            </TouchableOpacity>
        </>
    )
}