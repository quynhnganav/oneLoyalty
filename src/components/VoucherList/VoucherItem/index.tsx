import { memo } from "react";
import * as React from 'react'
import { Text as DefaultText,StyleSheet, Image, Pressable } from "react-native";
import Text from '../../Text'
import { useNavigation } from "@react-navigation/native";
import { Voucher } from "../../../models/Voucher";
import { View } from "native-base";

interface VoucherItemProps {
    data: Voucher
}
const VoucherItem: React.FC<VoucherItemProps> = memo(({
    data
}) => {
    const navigation = useNavigation();
    const { category, brand, expired, oneCoins, image } = data
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("VoucherDetail", {
            data: data
        })}>
            <Image
                style={styles.image}
                source={{
                    uri: image,
                }}
            />
            <View style={{ padding: 10}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold'}}>Voucher {category}</Text>
            <Text >{brand}</Text>
            <Text>ex: {expired}</Text>
            <View style={{ backgroundColor: '#FF6E00', marginTop: 5, alignSelf: 'flex-end', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>
                <DefaultText style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{oneCoins} OneCoins</DefaultText>
            </View>
            </View>
        </Pressable>
    );
});
const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 230,
        width: 225,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
    },
    image: {
        borderRadius:10,
        width: '100%', height: 123
    },
    text: {
        color: "#1877f2",
        fontSize: 18,
        fontWeight: "500",
        paddingLeft: 10,
    },
});


export default VoucherItem;
