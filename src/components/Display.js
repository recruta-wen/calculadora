import react from 'react';
import { StylesSheet, text, View } from "react-native";

const styles = StyleSheet.create ({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },

    displayValue : {
        fontSize: 60,
        color: 'fffff',
    }
})

export default props => {
    return (
        <View style = {styles.display}>
            <text style = {styles.displayValue} numberOfLines={1}>
                {props.value}
            </text>
        </View>
    )
}