import * as React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import { LoyaltyItem } from './LoyaltyItem';
import { firebaseApp } from '../../../firebase'
import { View } from 'native-base'
import { FunctionComponent } from 'react';




type Props = {
  id: number,
}
const ListLoyaltyItem: FunctionComponent<Props> = (({
  id,
}) => {
  const [data, setData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const getData = () => {
    firebaseApp
    .database()
    .ref(`User/${id}/LoyaltyCash`)
    .on("value", (snap) => {
      setData(snap.val());
      setIsLoading(false)
    });
  }
  
  React.useEffect(() => getData(), [])
  return (
    <View style={{ height: Dimensions.get('window').height - 250}}>
      {!isLoading && <FlatList
        keyExtractor={(item: any) => item.id}
        data={data}
        renderItem={itemData =>
          <LoyaltyItem id={itemData.item.id} coefficient={itemData.item.coefficient} coin={itemData.item.coins} oneCoin={itemData.item.oneCoin} name={itemData.item.name} logo={itemData.item.logo} />}
      />}
    </View>
  );
}
)

export default ListLoyaltyItem;

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});


