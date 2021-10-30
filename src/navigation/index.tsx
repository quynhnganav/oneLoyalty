import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import DrawNavigate from './DrawerNavigator';
import { VoucherDetail, VoucherInfo } from '../screens';
import { RedeemVoucher } from '../screens/RedeemVoucher';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
        <DrawNavigate />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ title: 'One Loyaty' }}/>
      <Stack.Screen name="VoucherInfo" component={VoucherInfo} />
      <Stack.Screen name="VoucherDetail" component={VoucherDetail} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="RedeemVoucher" component={RedeemVoucher}  options={{ title: 'Xin chọn nguồn điểm Loyalty' }}/>
      </Stack.Group>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
