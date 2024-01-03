export const CryptoView = ({ crypto }: any) => {
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
      {crypto.history.map((h: string) => (
        <p key={h} className="history">
          {h}
        </p>
      ))}
    </>
  );
};
