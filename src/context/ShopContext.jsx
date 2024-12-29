import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const delivery_fee = 40;
  const [search, setSearch] = useState("");
  const [showsearch, setShowsearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartitems, setcartitems] = useState({});
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(cartitems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartitems(cartData);

    // ex:-  :{
    //   item1: { M: 2 }
    // }
  };

  //main logic for getcartcount
  const getcartCount = () => {
    let totalcount = 0;
    for (const items in cartitems) {
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalcount += cartitems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalcount;
  };

  //update cart quantity function
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartitems);
    cartData[itemId][size] = quantity;
    setcartitems(cartData);
  };

  //cartamount

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartitems) {
      let itemInfo = products.find((product) => product._id === items); // for help to find the price of product for calculate the total amount
      for (const item in cartitems[items]) {
        try {
          if (cartitems[items][item] > 0) {
            totalAmount += itemInfo.price * cartitems[items][item];
          }
        } catch (error) {
          console.log(error.message);
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showsearch,
    setShowsearch,
    addToCart,
    setcartitems,
    cartitems,
    getcartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
