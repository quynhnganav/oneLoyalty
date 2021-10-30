//@ts-ignore
import * as React from 'react';
import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import { Notification } from '../../components/Notification'
import ListLoyaltyItem from '../../components/ListLoyalItem';
import { Text, View } from '../../components/Themed';
import { Button } from '../../components/Button'
import { useAuth } from '../../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

export const RedeemVoucher = (props: any) =>  {
    const { user } = useAuth();
    const [loading, setLoading] = React.useState<boolean>(true)
    const data = props.route.params.data;
    const navigation = useNavigation();
    const totalCoin = useSelector(state => state.wallet.totalAmount);
    const getUser = async () => {
        const auth = JSON.parse(await AsyncStorage.getItem("auth"));
        if (!auth) {
            setLoading(false);
            return;
        }
        setLoading(false);
    }
    React.useEffect(() => {
        getUser();
    }, [])
 

  return (
    
    <View style={styles.container} >
        {
        loading ? <Spinner /> :
        <>
      { (totalCoin < data.oneCoins) && <Notification content={`Voucher này cần ${data.oneCoins} oneCoins`} type="ERROR" /> }
      {(totalCoin >= data.oneCoins) && <Notification content={`Số dư oneCoins đủ để đổi voucher này`} type="SUCCESS" /> }
       {(totalCoin < data.oneCoins && totalCoin !==0 ) && <Notification content={`Còn thiếu ${data.oneCoins - totalCoin} oneCoins để đổi voucher này`} type="ERROR" />}
        <ListLoyaltyItem id={user?.id} />
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <Button disabled={totalCoin < data.oneCoins} text='REDEEM' buttonClick={() => {navigation.replace('VoucherInfo', {
            data: data
        })}}/>
        </>
    }
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
