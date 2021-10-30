import { FunctionComponent } from "react";
import * as React from 'react';
import { StyleSheet } from "react-native";
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { View , Text} from 'native-base'


type Props = {
    type: 'SUCCESS' | 'ERROR',
    content: string
}

const Notification: FunctionComponent<Props> = (({
    type,
    content
}) => {
    return (
        <View style={[ styles.container, type === 'SUCCESS' ? styles.success : styles.error]}>
           {type === 'SUCCESS' ? <FontAwesome name="check-circle" size={24} color="#27BB24" /> : <MaterialIcons name="error-outline" size={24} color="#E03434" />}
            <Text style={{ paddingLeft: 15}}>{content}</Text>
        </View>
    )
})
export {
    Notification
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    success: {
        backgroundColor: '#E5F9E0',
    },
    error: {
        backgroundColor: '#FAF3ED'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
    },
    image: {
        width: 52,
        height: 46,
    },
    checkbox: {

    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
    }
});