import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const MultipleSelectList = ({ data, element, setElement, name }) => {
    const items = data
    // const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChange = (selectedItems) => {
        setElement(selectedItems);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <MultiSelect
                    searchIcon={false}
                    hideTags={false}
                    items={items}
                    uniqueKey="name"
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={element}
                    selectText={`Choose ${name}`}
                    searchInputPlaceholderText="Search"
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#48d22b"
                    submitButtonText="Done"
                />
            </View>
        </SafeAreaView>
    );
};

export default MultipleSelectList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});
