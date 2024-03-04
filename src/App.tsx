import "./App.css";
import { useState } from "react";
import { CryptoContext } from "./store/crypto-context.tsx";

import CryptoList from "./components/CryptoList";
import { CryptoView } from "./components/CryptoView";
import CryptoSearch from "./components/CryptoSearch";
import { data } from "./data.ts";

function App() {
  const [selectCrypto, setSelectCrypto] = useState(undefined || {});
  const [searchCrypto, setSearchCrypto] = useState<string>("");
  const [filterCrypto, setFilterCrypto] = useState(data);

  const handleSelectCrypto = (crypto: any) => {
    setSelectCrypto(crypto);
  };

  const handleSearchCrypto = (e: any) => {
    const crypto = e.target.value;
    setSearchCrypto(crypto);
  };

  const handleFilterCrypto = () => {
    setFilterCrypto((old: any) =>
      old.filter((c: any) => c.name.toLowerCase() === searchCrypto)
    );
    setSearchCrypto("");
    if (!searchCrypto) {
      setFilterCrypto(data);
    }
  };

  const ctxValue = {
    cryptoCurrencies: filterCrypto,
    selectCrypto: handleSelectCrypto,
    crypto: selectCrypto,
  };

  return (
    <CryptoContext.Provider value={ctxValue}>
      <div className="wrapper">
        <main>
          <section id="cryptoList">
            <h1>Crypto History</h1>
            <p>Learn the history of {data.length - 1} cryptocurrencies</p>

            <CryptoSearch
              searchCrypto={searchCrypto}
              handleSearch={handleSearchCrypto}
              handleFilter={handleFilterCrypto}
            />

            <CryptoList />
            <div className="bottom-list">
              <button className="add-btn">
                <a href="mailto:addcrypto@cryptoprofessor.com?subject=Add New Crypto">
                  Add New Crypto
                </a>
              </button>
              <p>Created by: will bowles</p>
            </div>
          </section>
          <section id="cryptoView">
            {selectCrypto ? (
              <CryptoView />
            ) : (
              <div className="no-crypto-selected">
                <h2>Select a crypto to learn more about it</h2>
              </div>
            )}
          </section>
        </main>
      </div>
    </CryptoContext.Provider>
  );
}

export default App;
