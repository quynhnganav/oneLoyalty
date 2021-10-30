import React, { FunctionComponent, useState } from "react";
import { StyleSheet, StyleProp, ViewStyle, Pressable, Image } from "react-native";
import { View } from '../Themed';


type Props = {
    type: 'SUCCESS' | 'ERROR',
    content: string
}

const Seperator: FunctionComponent<Props> = (({
}) => {
    return (
        <View style={styles.container}></View>
    )
})
export {
    Seperator
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: 1,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#003560'
    }
});