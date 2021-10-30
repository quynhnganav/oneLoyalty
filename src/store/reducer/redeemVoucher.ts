//@ts-ignore
import { ADD_WALLET, CUT_WALLET } from "../action/redeemVoucher";

const initialState = {
    wallet: [],
    totalAmount: 0
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_WALLET:
            const addWallet = action.wallet;
            const coin = addWallet.coin;
            const walletId = addWallet.walletId;
            //@ts-ignored
            if (state.wallet.includes(walletId)) {
                return {
                    ...state,
                    wallet: state.wallet.filter(item => item !== walletId),
                    totalAmount: state.totalAmount - coin
                };
            } else {
                return {
                    ...state,
                    //@ts-ignored
                    wallet: state.wallet.concat([walletId]),
                    totalAmount: state.totalAmount + coin
                };
            }
            case CUT_WALLET:
                return {
                    ...state,
                    totalAmount: 0
                }
    }
    return state;
}