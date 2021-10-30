import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text } from '../../components'
import { Text as DefaultText,View ,Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../../components/Button'
import { Seperator } from '../../components/Seperator';

const VoucherInfo = (props: any) => {
    const {title, description, oneCoins, expired, userManual, image} = props.route.params.data;
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
     
      <View style={{ padding: 15, marginTop: 10, backgroundColor: 'white' }}><Text style={styles.title}>{title}</Text>
      <Seperator />
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <View><Text>OneCoins</Text><DefaultText style={styles.coinText}>{oneCoins}</DefaultText></View>
          <View><Text>Thời gian hiệu lực</Text><DefaultText style={styles.coinText}>{expired}</DefaultText></View>
        </View></View>
        <View  style={{padding: 15, marginTop: 10, backgroundColor: 'white'}}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>Voucher QR</Text>
            <Image style={styles.qr} source={require('../../assets/images/qr.jpeg')} />
        </View>
        <View style={{padding: 15, marginTop: 10, backgroundColor: 'white'}}>
            <Text style={{ fontSize: 17, fontWeight: 'bold'}}>Voucher Code</Text>
            <View style={styles.voucherCode}><DefaultText style={styles.textCode}>12345678</DefaultText></View>
        </View>
        <View style={{padding: 15, marginTop: 10, backgroundColor: 'white'}}>
        <Text style={{ fontSize: 17, fontWeight: 'bold'}}>Thông tin voucher</Text>
      <Text>{description}</Text>
    <Text style={styles.title}>Hướng dẫn sử dụng</Text>
      <Text>{userManual}</Text>
        {/* <Button text='REDEEM' buttonClick={() => navigation.navigate('RedeemVoucher', {
            oneCoins: oneCoins
        })} /> */}
        </View>
    </ScrollView>
    )
}
export default VoucherInfo;
const styles = StyleSheet.create({
    coinText: {
        color: '#FF6E00' , 
        fontSize:18, fontWeight: 'bold'
    },
    voucherCode: {
        marginTop: 10,
        backgroundColor: '#003560',
        padding: 10, 
        borderRadius: 10
    },
    textCode: {
        textAlign: 'center',
color: '#FF6E00',
fontSize: 20, fontWeight: 'bold', letterSpacing: 6
    },
    qr: {
        alignSelf: 'center',
        width: 100,
        height: 100
    },
    container: {
      flex: 1,
    },
    redeemButton: {
      backgroundColor: '#FF6E00'
    },
    image: {
      width: "100%",
      height: 200
    },
    title: {
      paddingVertical: 15,
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });