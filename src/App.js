import "./App.css";
import CollectionCard from "./components/CollectionCard/CollectionCard";
import Header from "./components/Header/Header.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727F722196545Ec8799BeD9e&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Crypto Punk"}
        traits={[{ value: 1 }]}
        image={"temp"}
      />
    </div>
  );
}

export default App;
