import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width, height } = Dimensions.get('window');


export default function App() {
  return (
    <SkeletonPlaceholder style={{ height: height }}>
      <View style={{ margin: 5, width: width - 10, height: 190, borderRadius: 5 }} />
      <View style={{ margin: 5, width: width - 10, height: 30, borderRadius: 5 }} />
      <View style={{ margin: 5, width: width - 10, height: 30, borderRadius: 5 }} />
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <View style={{ width: width / 100 * 30, height: 100, borderRadius: 5, marginLeft: 5 }} />
        <View style={{ paddingTop: 10, marginLeft: 10, flex: 1, flexDirection: "column", height: 100 }}>
          <View style={{ width: width / 100 * 60, height: 20, borderRadius: 5 }} />
          <View style={{ width: width / 100 * 40, height: 20, borderRadius: 5, marginTop: 20 }} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <View style={{ width: width / 100 * 30, height: 100, borderRadius: 5, marginLeft: 5 }} />
        <View style={{ paddingTop: 10, marginLeft: 10, flex: 1, flexDirection: "column", height: 100 }}>
          <View style={{ width: width / 100 * 60, height: 20, borderRadius: 5 }} />
          <View style={{ width: width / 100 * 40, height: 20, borderRadius: 5, marginTop: 20 }} />
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
        <View style={{ width: width / 100 * 30, height: 100, borderRadius: 5, marginLeft: 5 }} />
        <View style={{ paddingTop: 10, marginLeft: 10, flex: 1, flexDirection: "column", height: 100 }}>
          <View style={{ width: width / 100 * 60, height: 20, borderRadius: 5 }} />
          <View style={{ width: width / 100 * 40, height: 20, borderRadius: 5, marginTop: 20 }} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};