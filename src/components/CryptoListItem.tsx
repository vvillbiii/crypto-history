export const CryptoListItem = ({ index, crypto, handleSelectCrypto }: any) => {
  return (
    <div
      className="card"
      key={index}
      onClick={() => handleSelectCrypto(crypto)}>
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
