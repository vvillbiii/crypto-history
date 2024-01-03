import "../App.css";
import { CryptoListItem } from "./CryptoListItem";

const CryptoList = ({ cryptocurrency, handleSelectCrypto }: any) => {
  return (
    <div className="list">
      {cryptocurrency?.map((crypto: any, index: number) => {
        return (
          <CryptoListItem
            key={index}
            index={index}
            crypto={crypto}
            handleSelectCrypto={handleSelectCrypto}
          />
        );
      })}
    </div>
  );
};

export default CryptoList;
