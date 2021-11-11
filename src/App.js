import React , {useState} from "react";
import Header from "./components/Header/Header";
import ActionsBar from "./components/ActionsBar/ActionsBar";
import ProductsWidget from "./components/ProductsWidget/ProductsWidget";

const App = () => {
  const [vehiclesInPolygon, setVehiclesInPolygon] = useState([]);

  return (
    <div>
      <Header />
      <ProductsWidget />
    </div>
  );
}

export default App;
