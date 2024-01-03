const CryptoSearch = ({ searchCrypto, handleFilter, handleSearch }: any) => {
  return (
    <>
      <input
        type="text"
        value={searchCrypto}
        placeholder="search crypto"
        className="crypto-search"
        onChange={(e) => handleSearch(e)}
      />
      <button className="btn" onClick={handleFilter}>
        Search
      </button>
    </>
  );
};

export default CryptoSearch;
