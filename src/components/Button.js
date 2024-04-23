import React from 'react';
import { Dimensions, StyleSheet, text, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20, 
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888'
    },

    operationButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },

    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={props.onClick}>
            <text style={stylesButton}>{props.label}</text>
        </TouchableHighlight>
    )
}