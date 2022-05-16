import React from "react";
import { View, Dimensions, Text } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width, height } = Dimensions.get('window');


export default function App() {
  return (
    <SkeletonPlaceholder style={{ height: height }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 15, marginLeft: 5 }}>
        <View style={{ width: width / 100 * 38, height: 100, borderRadius: 2, }} />
        <View>
          <View style={{width: width / 100 * 54,height: 30,marginLeft: 10,marginTop: 5}} />
          <View style={{width: width / 100 * 20,height: 15,position: "absolute",right: 0,marginTop: 50}} />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 15, marginLeft: 5 }}>
        <View style={{ width: width / 100 * 38, height: 100, borderRadius: 2, }} />
        <View>
          <View style={{width: width / 100 * 54,height: 30,marginLeft: 10,marginTop: 5}} />
          <View style={{width: width / 100 * 20,height: 15,position: "absolute",right: 0,marginTop: 50}} />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", marginTop: 15, marginLeft: 5 }}>
        <View style={{ width: width / 100 * 38, height: 100, borderRadius: 2, }} />
        <View>
          <View style={{width: width / 100 * 54,height: 30,marginLeft: 10,marginTop: 5}} />
          <View style={{width: width / 100 * 20,height: 15,position: "absolute",right: 0,marginTop: 50}} />
        </View>
      </View>
    </SkeletonPlaceholder >
  );
};