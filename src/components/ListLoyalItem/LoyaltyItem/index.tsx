import { FunctionComponent, useState } from "react";
import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle, Pressable, Image, Text, View } from "react-native";
import CheckBox from 'expo-checkbox';
import { useDispatch } from 'react-redux';
import * as voucher from '../../../store/action/redeemVoucher';

type Props = {
    style?: StyleProp<ViewStyle>,
    name: string,
    logo: string,
    coin: number,
    oneCoin?: number,
    coefficient: number,
    id: number
}

const LoyaltyItem: FunctionComponent<Props> = (({
    name,
    logo,
    coin,
    coefficient, 
    id
}) => {
    const [isSelected, setIsSelected] = useState(false);
    const dispatch = useDispatch();
    return (
        <Pressable
            style={[styles.container, isSelected ? styles.checked : styles.unChecked]}
            onPress={() => {setIsSelected(!isSelected); dispatch(voucher.addToWallet({ walletId: id, coin: coin * coefficient}))}}
        >
            <View style={styles.info}>
                <Image
                    style={styles.image}
                    source={{
                        uri: logo,
                    }}
                />
                <View style={{ paddingLeft: 20}}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={{ paddingTop: 5}}>{coin} {name} coin ~ {coin * coefficient} oneCoins</Text>
                </View>
            </View>
            <View>
                <CheckBox
                    disabled={false}
                    value={isSelected}
                    onValueChange={() => setIsSelected(!isSelected)}
                />
            </View>
        </Pressable>
    )
})

export {
    LoyaltyItem
}
const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        padding: 20,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    unChecked: {
        borderColor: '#9B9B9B',
    },
    checked: {
        borderColor: '#EA8030',
        backgroundColor: '#F6D5BC'
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


