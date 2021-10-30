import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text } from '../../components'
import { Text as DefaultText,View ,Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from '../../components/Button'
import { Seperator } from '../../components/Seperator';

const VoucherDetail = (props: any) => {
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
      <Text style={styles.title}>{title}</Text>
      <Seperator />
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <View><Text>OneCoins</Text><DefaultText style={styles.coinText}>{oneCoins}</DefaultText></View>
          <View><Text>Thời gian hiệu lực</Text><DefaultText style={styles.coinText}>{expired}</DefaultText></View>
        </View>
      <Text>{description}</Text>
        <Text style={styles.title}>Hướng dẫn sử dụng</Text>
      <Text>{userManual}</Text>
        <Button text='REDEEM' buttonClick={() => navigation.navigate('RedeemVoucher', {
            data: props.route.params.data
        })} />
    </ScrollView>
    )
}
export default VoucherDetail;
const styles = StyleSheet.create({
    coinText: {
        color: '#FF6E00' , 
        fontSize:19, fontWeight: 'bold', marginVertical: 10
    },
    container: {
      flex: 1,
      padding: 25,
      backgroundColor: 'white'
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