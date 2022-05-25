import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from "../context";


export default function LandingScreen() {
    const [show, setShow] = React.useState(false);
    const { signOut } = React.useContext(AuthContext);

    React.useEffect(() => {
        const timeOutId = setTimeout(() => {
            setShow(true)
        }, 5000);
        return () => clearTimeout(timeOutId);
    }, [])

    return (
        <SafeAreaView>
            <Text>Landing Screen</Text>
            <Text>Loading...</Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            {(show) ? (<>
                <TouchableOpacity onPress={() => { signOut() }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </>) : null}
        </SafeAreaView>
    )
}