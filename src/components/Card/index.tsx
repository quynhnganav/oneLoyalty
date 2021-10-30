import { FunctionComponent } from "react";
import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text } from '../Themed';
import { View } from "native-base";

type Props = {
    name: string;
    oneCoins: number;
    rank: string;
    id: number
}

const Card: FunctionComponent<Props> = (({
    name, oneCoins, rank, id
}) => {
    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{oneCoins} OneCoinss</Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                <Image style={styles.qr} source={require('../../assets/images/qr.jpeg')} />
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex' }} ><Text style={styles.text}>{name}</Text><Text style={styles.text}>{id}</Text><Text style={styles.text}>{rank}</Text></View>
            </View>
        </View>
    )
})
export {
    Card
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF6E00',
        width: '100%',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        color: 'white', fontSize: 17, fontWeight: 'bold'
    },
    qr: {
        width: 60,
        height: 60
    },
    logo: {
        width: 81.66,
        height: 79
    }

});