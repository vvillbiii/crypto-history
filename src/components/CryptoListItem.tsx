import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export const CryptoListItem = ({ index, crypto }: any) => {
  const {selectCrypto} = useContext(CryptoContext)
  return (
    <div
      className="card"
      key={index}
      onClick={() => selectCrypto(crypto)}>
      <div className="logo-ticker">
        <img
          src={crypto.image}
          alt={crypto.name}
          style={{ width: `auto`, height: "25px" }}
        />
        <div>
          <h4>{crypto?.name}</h4>
          <p>{crypto.ticker}</p>
        </div>
      </div>
    </div>
  );
};
