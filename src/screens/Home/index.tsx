import { useState, useEffect } from "react";
import * as React from "react";
import {
  StyleSheet,
  _View,
  Text,
  ScrollView,
} from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { Card } from '../../components/Card'
import {
  Ionicons,
} from "@expo/vector-icons";
import { useAuth } from "../../store";
import { Spinner, View } from "native-base";
import { } from "react";
import * as firebase from "firebase";
import { firebaseApp } from "../../../firebase";
import VoucherList from "../../components/VoucherList";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp);
} else {
  firebase.app(); // if already initialized, use that one
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAuth();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(false);
  };
  return (
    <ScrollView style={styles.screen}>
      {loading ? (
        <Spinner />
      ) : (
        <View>
        <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}>
          <View  style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
          <UserAvatar
            userName={user?.fullname}
            size={40}
            backgroundColor="#0be881"
            src={
              user && user.image
                ? user.image
                : "https://cdn4.vectorstock.com/i/1000x1000/86/88/woman-female-avatar-character-vector-11708688.jpg"
            }
          />
          <View  style={{ paddingLeft: 5}}>
            <Text style={{ fontWeight: 'bold', color: "#003560" }}>
              {user?.fullname}
            </Text>
            <Text style={{ paddingTop: 5, color: "#003560" }}>
              {user?.rank}
            </Text>
          </View>
          </View>
          <Ionicons name="settings" size={24} color= "#003560"  />
        </View>
        <View style={{ marginTop: 20}}>
        <Card name={user?.fullname} rank={user?.rank} oneCoins={100} id={1234568} />
        </View>
        <VoucherList title='Phần quà mới'/>
        <VoucherList title='PVoucher nổi bật'/>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    padding: 10,
  },
  container: {},
  shortCutItemCard: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
    width: "50%",
  },
  shortCutContent: {
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  setupSection: {
    paddingLeft: 15,
    paddingVertical: 15,
  },
  onAuto: {
    backgroundColor: "#1877f2",
    shadowColor: "#1877f2",
  },
  offAuto: {
    backgroundColor: "white",
    shadowColor: "#000",
  },
  setupContainer: {
    height: 130,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    width: 130,
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  homeText: {
    textAlign: "center",
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "700",
  },
  greetSection: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  userAvatar: {
    paddingLeft: 15,
  },
});

export default App;
