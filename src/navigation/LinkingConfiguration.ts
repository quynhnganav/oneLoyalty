import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      VoucherDetail: 'voucherdetail',
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Contact: {
            screens: {
              Contact: 'contact',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
