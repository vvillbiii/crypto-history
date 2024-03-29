import { useContext } from "react";
import { CryptoContext } from "../store/crypto-context";

export const CryptoListItem = ({ crypto }: any) => {
  const cryptoContext = useContext(CryptoContext);
  const selectCrypto = cryptoContext.selectCrypto;

  return (
    <div className="card" onClick={() => selectCrypto(crypto)}>
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
