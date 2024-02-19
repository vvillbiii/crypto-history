import { useContext } from "react";
import "../App.css";
import { CryptoListItem } from "./CryptoListItem";
import { CryptoContext } from "../store/crypto-context";

const CryptoList = () => {
  const { cryptoCurrencies } = useContext(CryptoContext);
  return (
    <div className="list">
      {cryptoCurrencies?.map((crypto: any, index: number) => {
        return <CryptoListItem key={index} index={index} crypto={crypto} />;
      })}
    </div>
  );
};

export default CryptoList;
