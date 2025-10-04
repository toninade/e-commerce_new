import { createContext, useContext, useEffect, useState } from "react";
import DataCart from "../Data2.json";
import Shoppingcart from "../Shoppingcart";
import Favorite from "../Favorit";

export const contextCart = createContext({});
const intialvalue = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const itialfavo = localStorage.getItem("favo")
  ? JSON.parse(localStorage.getItem("favo"))
  : [];

const Maincontext = ({ children }) => {
  const [favo, setFavo] = useState(itialfavo);
  const [cart, setCart] = useState(intialvalue);
  const [Cartstatus, setCartstatus] = useState(false);
  const [favstate, setFavstate] = useState(false);
  const [eleId, setEleid] = useState();
  const cartCount = cart.reduce((intial, ele) => {
    return intial + ele.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favo", JSON.stringify(favo));
  }, [cart, favo]);

  const addToCart = (id) => {
    if (cart.find((ele) => ele.id == id) == null) {
      DataCart.map((el) => {
        el.id == id ? setCart([...cart, { ...el, quantity: 1 }]) : el;
      });
    } else {
      cart.map((item) => {
        if (item.id == id) {
          let all = cart.filter((ele) => ele.id !== id);
          setCart([...all, { ...item, quantity: item.quantity + 1 }]);
        }
      });
    }
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((ele) => {
        return ele.id !== id;
      })
    );
  };

  const opencart = () => {
    setCartstatus(true);
  };
  const closecart = () => {
    setCartstatus(false);
  };

  const openfav = () => {
    setFavstate(true);
  };
  const closefav = () => {
    setFavstate(false);
  };

  const addTofavorite = (id) => {
    if (favo.find((ele) => ele.id == id) == null) {
      DataCart.map((el) => {
        return el.id == id ? setFavo([...favo, el]) : el;
      });
    }
  };

  const removeFromfavorite = (id) => {
    setFavo(favo.filter((ele) => ele.id !== id));
  };

  const addToCartFromefavo = (id) => {
    addToCart(id);
    removeFromfavorite(id);
  };

  return (
    <contextCart.Provider
      value={{
        favo,
        cart,
        Cartstatus,
        favstate,
        eleId,
        setEleid,
        cartCount,
        addToCart,
        removeFromCart,
        opencart,
        closecart,
        openfav,
        closefav,
        addTofavorite,
        removeFromfavorite,
        addToCartFromefavo,
      }}
    >
      {children}
      <Shoppingcart Cartstatus={Cartstatus} closecart={closecart} />
      <Favorite />
    </contextCart.Provider>
  );
};

export const useContextCart = () => {
  return useContext(contextCart);
};

export default Maincontext;
