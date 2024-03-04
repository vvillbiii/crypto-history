const CryptoSearch = ({ input, handleSearch }: any) => {
  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        placeholder="search crypto"
        className="crypto-search"
        ref={input}
      />
      <button className="btn">Search</button>
    </form>
  );
};

export default CryptoSearch;
