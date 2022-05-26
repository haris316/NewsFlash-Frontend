import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Dimensions } from 'react-native';
import { JumpingTransition } from "react-native-reanimated";
const { width, height } = Dimensions.get('window');
function DynamicInputFields({ name, element, setElement }) {
  // const [element, setElement] = useState([""]);

  // handle input change
  function handleInputChange(e, index) {
    const list = [...element];
    list[index] = e;
    setElement(list);
  };

  // handle click event of the Remove TouchableOpacity
  function handleRemoveClick(index) {
    const list = [...element];
    list.splice(index, 1);
    setElement(list);
  };

  // handle click event of the Add TouchableOpacity
  function handleAddClick() {
    const list = [...element];
    list.push("");
    setElement(list);
  };

  return (
    <SafeAreaView>
      <Text
        style={{
          color: "#045c5a",
          fontSize: 18,
          fontWeight: "600",
          marginHorizontal: width / 100 * 5,
          marginTop: width / 100 * 5,
          marginBottom: width / 100 * 2,
        }}
      >{name}</Text>
      <View style={{
        marginHorizontal: width / 100 * 5,
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
      }} >
        {element.map((x, i) => {
          return (
            <View style={{ marginBottom: 5, marginTop: 5, backgroundColor: "#FFF" }}>
              <TextInput
                placeholder={`Enter ${name}`}
                value={x}
                onChangeText={(e) => { handleInputChange(e, i) }}
              />
              <View>
                {element.length !== 1 ?
                  <TouchableOpacity
                    onPress={() => handleRemoveClick(i)}>
                    <Text>Remove</Text>
                  </TouchableOpacity>
                  : null}
              </View>
            </View>
          );
        })}
        <TouchableOpacity onPress={() => { handleAddClick() }}><Text style={{ color: "#045c5a" }}>Add a {name}</Text></TouchableOpacity>
      </View>
    </SafeAreaView >
  );
}

export default DynamicInputFields;