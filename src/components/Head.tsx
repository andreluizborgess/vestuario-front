import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Head(): React.JSX.Element {
    return (
        <View style={styles.header}>
            <Text style={styles.headertext}>Ame Fashion</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containr: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center'
    },
    headertext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },



});

export default Head;