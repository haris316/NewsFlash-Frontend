import React from "react";
import { View, Dimensions } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width, height } = Dimensions.get('window');


export default function App() {
  return (
    <SkeletonPlaceholder style={{ height: height }}>
      <View style={{ margin: 10, width: width - 20, borderRadius: 5, borderColor: "#045C5A", borderWidth: 2, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5 }}>
        <View style={{ marginTop: 5, width: width / 100 * 40, height: 30, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 80, height: 60, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 90, height: 190, borderRadius: 5 }} />
      </View>
      <View style={{ margin: 10, width: width - 20, borderRadius: 5, borderColor: "#045C5A", borderWidth: 2, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5 }}>
        <View style={{ marginTop: 5, width: width / 100 * 40, height: 30, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 80, height: 60, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 90, height: 190, borderRadius: 5 }} />
      </View>
      <View style={{ margin: 10, width: width - 20, borderRadius: 5, borderColor: "#045C5A", borderWidth: 2, paddingTop: 10, paddingBottom: 10, paddingLeft: 5, paddingRight: 5 }}>
        <View style={{ marginTop: 5, width: width / 100 * 40, height: 30, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 80, height: 60, borderRadius: 5 }} />
        <View style={{ marginTop: 5, width: width / 100 * 90, height: 190, borderRadius: 5 }} />
      </View>
    </SkeletonPlaceholder>
  );
};