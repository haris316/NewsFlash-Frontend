import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

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
    <SafeAreaView style={{ margin: 10, padding: 5, borderStyle: "solid", borderWidth: 1, borderColor: "#000", borderRadius: 5 }}>
      <Text>{name}</Text>
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
      <TouchableOpacity onPress={() => { handleAddClick() }}><Text>Add a {name}</Text></TouchableOpacity>
    </SafeAreaView >
  );
}

export default DynamicInputFields;