import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/Home';
import NotFoundScreen from '../screens/NotFoundScreen';
import Header from '../components/header';
import { TabUserParamList } from '../../types'
import { useAuth } from '../store';
import { login } from '../screens';

export const BottomTab = createBottomTabNavigator<any>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const { user } = useAuth()

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="User"
        component={TabDasboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Dashboard"
        component={TabDasboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="analytics-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={TabDasboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="call-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabHomeStack = createNativeStackNavigator<any>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator
    >
      <TabHomeStack.Screen
        name="Home"
        component={TabHomeScreen}
        options={{
          headerTitle: 'Home',
          //if you hidden header
          headerShown: false
        }}
      />
      <TabHomeStack.Screen
        name="Setting"
        component={NotFoundScreen}
        options={{
          headerTitle: 's',
          headerShown: false
        }}
      />
    </TabHomeStack.Navigator>
  );
}
const TabDashboardStack = createNativeStackNavigator<any>();
function TabDasboardNavigator() {
  return (
    <TabDashboardStack.Navigator
    >
      <TabDashboardStack.Screen
        name="Login"
        component={login}
        options={{
          headerTitle: 'Login',
          //if you hidden header
          headerShown: false
        }}
      />
    </TabDashboardStack.Navigator>
  );
}

const TabUserStack = createNativeStackNavigator<TabUserParamList>();

export function TabUserNavigator() {
  return (
    <TabUserStack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <TabUserStack.Screen
        name="User"
        component={login}
        options={{
          headerTitle: 'User',
          headerShown: false
        }}
      />
    </TabUserStack.Navigator>
  );
}

// const TabSalaryStack = createNativeStackNavigator()

// export const TabSalaryNavigator = () => {
//   return (
//     <TabSalaryStack.Navigator>
//       <TabSalaryStack.Screen
//         name="Salary"
//         component={Salary}
//         options={{
//           headerTitle: 'Salary',
//           headerShown: false
//         }}
//       />
//     </TabSalaryStack.Navigator>
//   )
// }

// const TabAttendanceStack = createNativeStackNavigator<AttendanceStackParamsList>()

// export const TabAttendanceNavigator = () => {
//   return (
//     <TabAttendanceStack.Navigator>
//       <TabAttendanceStack.Screen
//         name="ListClass"
//         component={ListClass}
//         options={{
//           headerTitle: 'ListClass',
//           headerShown: false
//         }}
//       />

//       <TabAttendanceStack.Screen
//         name="Attendance"
//         component={Attendance}
//         options={{
//           headerTitle: 'Attendance',
//           headerShown: false
//         }}
//       />
//     </TabAttendanceStack.Navigator>
//   )
// }


