import axios from "axios";
import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Dimensions,
    ScrollView,
    Button
} from "react-native";
import ProfileSkeleton from "../Preloaders/Skeleton/ProfileSkeleton"
import ProfileDataSkeleton from "../Preloaders/Skeleton/ProfileDataSkeleton"
import SmallPreloader from "../Preloaders/SmallPreloader"
import Ellipsis from 'react-native-vector-icons/Ionicons';
import { AuthContext } from "../context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');



export default function Profile({ email }) {
    const [profile, setProfile] = React.useState(null);
    const [listdata, setListdata] = React.useState(null);
    const [list, setList] = React.useState((email !== undefined) ? ["OPINIONS", "NEWSTAND"] : ["OPINIONS", "PINS", "NEWSTAND"]);
    const [view, setView] = React.useState(list[0]);
    const [picErr, setPicErr] = React.useState(false);
    const [error, setError] = React.useState(false);


    async function callProfile() {
        if (email) {
            axios.post('https://nf-backend.herokuapp.com/api/users/getprofilebyemail', {
                email: email
            }).then((res) => {
                if (res.error) {
                    Alert.alert(res.data.message)
                    setError(true)
                }
                else {
                    setProfile(res.data.data)
                }
            }).catch((e) => {
                setError(true)
                Alert.alert("ERROR!");
            })
        }
        else {
            const value = await AsyncStorage.getItem('token');
            axios.post('https://nf-backend.herokuapp.com/api/users/getprofile', {
                token: value
            }).then((res) => {
                if (res.error) {
                    Alert.alert(res.data.message)
                    setError(true)
                }
                else {
                    setProfile(res.data.data)
                }
            }).catch((e) => {
                setError(true)
                Alert.alert("ERROR!");
            })
        }
    }
    React.useEffect(() => {
        callProfile();
    }, [])

    React.useEffect(() => {
        setListdata(null);
        if (profile) {
            let value = null;
            if (email) value = email
            else value = profile.email;
            let thing = view.toLocaleLowerCase();
            console.log(thing)
            axios.post(`https://nf-backend.herokuapp.com/api/users/get${thing}`, {
                email: value
            }).then((res) => {
                if (res.error) {
                    Alert.alert(res.data.message)
                    setError(true)
                }
                else {
                    setListdata(res.data.data)
                }
            }).catch((e) => {
                setError(true)
                Alert.alert("ERROR!");
            })
        }
    }, [profile, view])


    function getItems() {
        if (listdata.length > 0) return listdata.map(() => {
            return <>
                <TouchableOpacity style={style.post}>
                    <Image style={style.postImage} source={require("..//../assets/images/storm.jpg")} />
                    <View style={style.postText}>
                        {(view === "PINS") ? <View style={{ flexDirection: "row", alignItems: "baseline", marginLeft: -6 }}>
                            <Image source={require('..//..//assets/icon-images/pin.png')}
                                resizeMode="contain" style={{ width: width / 100 * 5, height: height / 100 * 2.5 }}
                            />
                            <Text style={{ fontSize: 11.5, color: "#045C5A" }}>
                                Pinned Post
                            </Text>
                        </View> : null}
                        <Text style={{ fontSize: 12.5, color: "black", marginTop: -20 }}>
                            Here's something i wrote a long time ago. Still relevant :)
                        </Text>
                        <Text style={{ alignSelf: "flex-end", fontSize: 10 }}>
                            28/11/18
                        </Text>
                    </View>
                </TouchableOpacity>
            </>
        })
        else return <><View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}><Text>No Data Found</Text></View></>
    }

    function showData() {
        return (<>
            <View style={style.profileTabs}>
                {list.map((item) => {
                    return (<>
                        <TouchableOpacity
                            style={(view === item) ?
                                {
                                    width: (width / 100) * (99.5 / list.length),
                                    color: "#045C5A",
                                    borderBottomWidth: 2,
                                    borderBottomColor: "#045C5A",
                                    alignItems: "center",
                                    paddingBottom: 5,
                                } :
                                {
                                    width: (width / 100) * (99.5 / list.length),
                                    color: "#000",
                                    alignItems: "center",
                                    paddingBottom: 5,
                                    paddingTop: 5,
                                    backgroundColor: "#80808011"
                                }}
                            onPress={() => { setView(item) }}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </>)
                })}
            </View>
            {(listdata) ?
                <ScrollView>
                    {getItems()}
                </ScrollView>
                :
                <View>
                    <ProfileDataSkeleton />
                </View>
            }

        </>
        )
    }
    function showProfile() {
        if (profile) {
            // if (false) {
            return <>
                <View style={style.picwName}>
                    <View style={style.picLine}>
                        <TouchableOpacity style={style.numbers}>
                            <Text style={{ fontWeight: "500", color: "#045C5A" }}>{profile.followers.length}</Text>
                            <Text style={{ color: "black" }}>FOLLOWERS</Text>
                        </TouchableOpacity>
                        <View>
                            <Image
                                style={{
                                    width: width / 100 * 28,
                                    height: height / 100 * 15,
                                    borderRadius: width,
                                    margin: width / 100 * 5,
                                    borderWidth: 1,
                                    borderColor: "#045C5A"
                                }}
                                onError={() => { setPicErr(true) }}
                                source={(profile.avatar_url && !picErr) ? { uri: profile.avatar_url } : require("..//../assets/icon-images/profileFinal.png")}
                            />
                        </View>
                        <TouchableOpacity style={style.numbers}>
                            <Text style={{ fontWeight: "500", color: "#045C5A" }}>{profile.following.length}</Text>
                            <Text style={{ color: "black" }}>FOLLOWING</Text>
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontWeight: "500", color: "#045C5A", marginTop: 16, fontSize: 17 }}>
                        {profile.name.toUpperCase()}
                    </Text>
                </View>
                {(email !== undefined) ? <View style={style.profileButtons}>
                    <TouchableOpacity style={style.pButton}>
                        <Text>
                            + FOLLOW
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity style={style.pButton}>
                        <Text>
                            ABOUT USER
                        </Text>
                    </TouchableOpacity >
                </View> :
                    <View style={style.profileButtons}>
                        <TouchableOpacity style={style.pButton}>
                            <Text>
                                EDIT PROFILE
                            </Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={style.pButton}>
                            <Text>
                                SETTINGS
                            </Text>
                        </TouchableOpacity >
                    </View>


                }
            </>
        }
        else if (error) {
            return <>
                <Text>An unexpected error has occurred.</Text>
                <Text>Please check your internet connection.</Text>
                <Button title="reload" />
            </>
        }
        else {
            return <>
                <ProfileSkeleton />
            </>
        }
    }

    const { signOut } = React.useContext(AuthContext);
    return (
        <SafeAreaView style={style.container}>
            <View style={style.top}>
                <TouchableOpacity style={style.LogoutButton} onPress={() => signOut()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
            {showProfile()}
            {showData()}
        </SafeAreaView>

    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontFamily: 'Alegreya Sans',
        paddingBottom: height / 100 * 10
    },

    top: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: width / 100 * 2,
        top: 10
    },
    LogoutButton: {
        borderColor: 'black',
        borderRadius: 5,
        color: "black",
        backgroundColor: "#80808022",
        borderWidth: 1,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 10,
        paddingRight: 10,

    },
    picwName: {
        width: width / 100 * 80,
        alignItems: "center",
        alignSelf: "center",
        margin: width / 100 * 5

    },

    picLine: {
        flexDirection: "row",

        alignItems: "center"
    },

    display: {
        width: width / 100 * 28,
        height: height / 100 * 15,
        borderRadius: width,
        margin: width / 100 * 5,


    },

    numbers: {
        alignItems: "center",
    },

    profileButtons: {
        width: width / 100 * 80,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: width / 100 * 5
    },

    pButton: {
        borderWidth: 1,
        borderRadius: 15,
        paddingTop: width / 100 * 3,
        paddingBottom: width / 100 * 3,
        width: width / 100 * 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderColor:"#045C5A"
    },

    profileTabs: {
        width: width,
        flexDirection: "row",
        justifyContent: "space-around",
        alignSelf: "center",
        margin: width / 100 * 2
    },
    post: {
        width: width / 100 * 90,
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 20
    },
    postImage: {
        width: width / 100 * 40,
        height: 100
    },
    postText: {
        width: width / 100 * 50,
        justifyContent: "space-between",
        marginLeft: 10,
        marginTop: 5
    }
})

