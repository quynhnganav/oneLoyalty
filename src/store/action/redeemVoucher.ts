export const ADD_WALLET = 'ADD_WALLET';
export const CUT_WALLET = 'REMOVE_FROM_CART';

export const addToWallet = (wallet: any) => {
    return { type: ADD_WALLET, wallet: wallet };
};
export const redeemVoucher = () => {
    return { type: CUT_WALLET };
};
