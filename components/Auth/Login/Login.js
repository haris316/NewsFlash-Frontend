import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Login() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function validate() {
        if ((email == "") || (password == "")) {
            callAlert();
        }
        else {
            // LoginAPI();
            Alert.alert(
                'Good',
                '',
                [
                    { text: 'Dismiss' },
                ]
            );
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
        var url = 'http://localhost:7000/user/login';
        let collection = {}
        collection.email = email,
            collection.password = password,
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(collection)
                })
                .then(resp => {
                    return resp.json();
                })
                .then((responseJson) => {
                    if (responseJson.success == "true") {
                        signIn(responseJson.user.email)
                    }
                    else {
                        Alert.alert(responseJson.message);
                    }
                })
                .done()
    }
    return (
        <>
            <View>
                LOGO
            </View>
            <View>
                <Icon name={'ios-mail-outline'} size={28} />
                <TextInput
                    placeholder={'Email'}
                    placeholderTextColor={'grey'}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View>
                <Icon name={'ios-key-outline'} size={28} />
                <TextInput
                    placeholder={'Password'}
                    placeholderTextColor={'grey'}
                    secureTextEntry={true}
                    underLineColorAndroid='transparent'
                    onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={() => { validate() }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </>
    )
}