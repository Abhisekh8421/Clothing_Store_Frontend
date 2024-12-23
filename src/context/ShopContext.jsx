import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const delivery_fee = 40;
  const [search, setSearch] = useState("");
  const [showsearch, setShowsearch] = useState(false);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowsearch,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
