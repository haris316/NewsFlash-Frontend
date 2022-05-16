import React from "react";
import { View, Dimensions, Text } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const { width, height } = Dimensions.get('window');


export default function App() {
  return (
    <SkeletonPlaceholder style={{ height: height }}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 15 }}>
        <View style={{
          width: width / 100 * 25,
          height: height / 100 * 5,
          borderRadius: 5,
        }} />
        <View style={{
          width: width / 100 * 28,
          height: height / 100 * 15,
          borderRadius: width,
          margin: width / 100 * 5,
        }} />
        <View style={{
          width: width / 100 * 25,
          height: height / 100 * 5,
          borderRadius: 5,
        }} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 60 }}>
        <View style={{
          width: width / 100 * 35,
          height: height / 100 * 7,
          borderRadius: 15,
        }} />
        <View style={{
          width: width / 100 * 35,
          height: height / 100 * 7,
          borderRadius: 15,
        }} />
      </View>
    </SkeletonPlaceholder >
  );
};