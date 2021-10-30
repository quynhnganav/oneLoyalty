import { FunctionComponent } from "react";
import * as React from "react";
import { StyleSheet, StyleProp, ViewStyle, Pressable } from "react-native";
import { Text } from '../../components/Themed';

type Props = {
    style?: StyleProp<ViewStyle>,
    text: string,
    buttonClick: any,
    disabled?: boolean
}

const Button: FunctionComponent<Props> = (({
    disabled,
    text,
    buttonClick
}) => {
    return (
        <Pressable
            disabled={disabled}
            style={[disabled ? styles.disabled : styles.notDisabled , styles.button]}
            onPress={buttonClick}
        >
            <Text style={styles.text}>{text}</Text>
        </Pressable >
    )
})
export {
    Button
}
const styles = StyleSheet.create({
    disabled: {
        backgroundColor: '#EA8030'
    },
    notDisabled: {
        backgroundColor: '#FF6E00',
    },
    button: {
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginVertical: 15
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    }
});