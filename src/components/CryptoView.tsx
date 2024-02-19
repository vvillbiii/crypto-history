import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export interface Crypto {
  name: string;
  image: string;
  ticker: string;
  history: [];
}

export const CryptoView = () => {
  const cryptoContext = useContext(CryptoContext)
  const crypto = cryptoContext.crypto as Crypto

  return (
    <>
      <h2>{crypto.name}</h2>
      <div className="logo-ticker">
        <img
          src={crypto.image}
          style={{ width: `auto`, height: "30px" }}
          alt={crypto.name}
        />
        {crypto.ticker}
      </div>
      {crypto.history?.map((h: string) => (
        <p key={h} className="history">
          {h}
        </p>
      ))}
    </>
  );
};
