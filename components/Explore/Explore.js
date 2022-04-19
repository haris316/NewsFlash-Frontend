import React from "react";
import { Text, View, Alert } from "react-native";
import Carousel from "./Carousel";
import { dummyData } from "./tempData";

export default function Explore() {
        return (
          <View>
            <Carousel data = {dummyData}/>
           
          </View>
        )
}

