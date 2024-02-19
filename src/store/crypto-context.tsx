import { createContext } from "react";

export const CryptoContext = createContext({
  cryptoCurrencies: [{}],
  selectCrypto: (crypto: any) => {
    crypto;
  },
});
