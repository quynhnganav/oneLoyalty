import { memo, useState, useEffect } from "react";
import * as React from 'react'
import { Text, StyleSheet, FlatList } from "react-native";
import * as firebase from "firebase";
import { firebaseApp } from "../../../firebase";
import VoucherItem from "./VoucherItem";
import { Voucher } from "../../models/Voucher";
import { View } from "native-base";


interface VoucherListProps {
    title: string;
}

const VoucherList: React.FC<VoucherListProps> = memo(({
    title,
}) => {
    const [vouchers, setVouchers] = useState<Voucher[]>([]);
    const getVoucher = () => {
        firebase
            .database()
            .ref('Voucher')
            .on("value", (snap) => {
                setVouchers(snap.val())

            });
    };

    useEffect(() => {
        getVoucher()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <View style={{ marginTop: 15}}>
            <FlatList
                horizontal
                keyExtractor={(item: any) => item.id}
                data={vouchers}
                renderItem={(itemData) =>
                    <VoucherItem data={itemData.item}/>
                }
                showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
            />
            </View>
        </View> 
    );
});
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        marginVertical: 20
    },
    text: {
        color: "#003560",
        fontSize: 18,
        fontWeight: "700",
        paddingLeft: 10,
    },
});


export default VoucherList;
